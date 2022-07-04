import { Backdrop, Box, Button, ButtonProps, CircularProgress, FormControl, InputLabel, MenuItem, Select, Stack, styled, Typography } from "@mui/material"
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_SITE_KEY } from "../../../const";
import { CLAIM_IMAGE } from "../../../constants/claim";
import { PAGE } from "../../../constants/header";
import { changeNetwork, useWalletContext } from "../../../contexts/WalletContext"
import { getClaimedBox, handleClaimBox } from "../../../libs/claim";
import { bftClaimGamefi, bftClaimEnjin } from "../../../libs/contracts";
import { convertWalletAddress } from "../../../libs/utils/utils";
import { ClaimService } from "../../../services/claim.service";
import { TEXT_STYLE } from "../../../styles/common/textStyles";
import { MarketplaceButton } from "../../buttons/MarketplaceButton";
import { ConnectBox } from "./ConnectBox";
import { PopupMessage } from "./PopupMessage";

// const RECAPTCHA_SITE_KEY = "6Lc275cgAAAAAAHHwNMoAh448YXBi-jz3AeS-4A9"

export const TabClaim = () => {
  const router = useRouter();
  const {walletAccount, setWalletAccount, ethersSigner, ethersProvider, updateBnbBalance, chainIdIsSupported, provider } = useWalletContext();
  const [currentTab, setCUrrentTab] = useState<'box' | 'token'>('box');
  const [selecItem, setSelectItem] = useState<{ title: string, value: string }[]>([]);
  const [roundSelected, setRoundSelected] = useState<string>('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [dataClaim, setDataClaim] = useState<{ totalBox: number, claimed: number }>({
    totalBox: 0, claimed: 0
  })
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [popupError, setPopupError] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(false);
  const [statusLoading, setStatusLoading] = useState<boolean>(false);

  const onReCAPTCHAChange = async (captchaCode: any) => {
    if (!captchaCode) {
      return;
    }
    setCaptchaToken(captchaCode);
  }

  const checkStatusButton = () => {
    if (dataClaim.totalBox > dataClaim.claimed && captchaToken.length && roundSelected.length) {
      return true
    }
    return false;
  }

  const getClaimedBoxNumber = async () => {
    if(!chainIdIsSupported) {
      await changeNetwork(provider)
    }
    try {
      const res: any = await ClaimService.getAmount((walletAccount.toLowerCase()), captchaToken, roundSelected, false);
      if (res?.data?.status) {
        const claimContractGamefi = await new ethers.Contract(bftClaimGamefi.address, bftClaimGamefi.abi, ethersSigner);
        const claimContractEnjinstarter = await new ethers.Contract(bftClaimEnjin.address, bftClaimEnjin.abi, ethersSigner);
        const dataClaimed = await getClaimedBox((walletAccount.toLowerCase()), roundSelected === "3" ? claimContractGamefi : claimContractEnjinstarter);
        setDataClaim({ claimed: parseInt(ethers.utils.formatUnits(dataClaimed, 'wei')), totalBox: res.data.amount }) 
      } else {
        setDataClaim({claimed: 0, totalBox: 0})
      }
    } catch (error) {
      setDataClaim({claimed: 0, totalBox: 0})
      console.log(error)
    }
  }

  const handleClaimButton = async () => {
    setStatusLoading(true)
    const res: any = await ClaimService.getAmount(walletAccount, captchaToken, roundSelected, true);
    if (res?.data?.status) {
      const claimContractGamefi = await new ethers.Contract(bftClaimGamefi.address, bftClaimGamefi.abi, ethersSigner);
      const claimContractEnjinstarter = await new ethers.Contract(bftClaimEnjin.address, bftClaimEnjin.abi, ethersSigner);
      try {
        const resultClaim: any = await handleClaimBox(walletAccount, roundSelected === '3' ? claimContractGamefi : claimContractEnjinstarter, res.data);       
        const checkStatus = setInterval( async () => {
          const statusClaim = await ethersProvider.getTransactionReceipt(resultClaim.hash);
          if(statusClaim?.status){
            setPopupSuccess(true);
            setStatusLoading(false);
            getClaimedBoxNumber();
            setRoundSelected('');
            updateBnbBalance();
            clearInterval(checkStatus);
          }
        }, 1000);

      } catch (error) {
        setStatusLoading(false)
        setPopupError(true)
      }
    } else {
      if(res?.data?.captchaValidation === false){
        setTimeout(() => {
          window.location.reload()
        }, 2000);
      }
      setPopupError(true)
      setStatusLoading(false)
    }

  }

  useEffect(() => {
    getClaimedBoxNumber();
  }, [walletAccount, roundSelected])

  useEffect(() => {
    if (currentTab === 'token') {
      setSelectItem([
        { title: 'Seed', value: 'Seed' },
        { title: 'Private', value: 'Private' },
        { title: 'Airdrop', value: 'Airdrop' },
      ])
    } else {
      setSelectItem([
        { title: 'GameFi.org', value: '3' },
        { title: 'Enjinstarter', value: '4' },
        { title: 'Alpha Test Reward', value: '1' },
        { title: 'Beta Test Reward', value: '2' },
      ])
    }
  }, [currentTab])

  return (
    <Wrap>
      <Title>beFITTER - Claim Portal</Title>
      {!walletAccount ? <ConnectBox /> : <Stack>
        {walletAccount && <Account>
          <Address>{convertWalletAddress(walletAccount, 8, 6)}</Address>
          <Disconnect onClick={() => setWalletAccount(null)}>Disconnect</Disconnect>
        </Account>}
        <Typography sx={{ ...TEXT_STYLE(14, 500), marginBottom: '12px', color: '#5A6178' }}>I want to claim</Typography>
        <BoxTab>
          <Box>
            <TabItem sx={{ marginRight: '4px' }} active={currentTab === 'box' ? true : false}>Box</TabItem>
            <TabItem sx={{opacity: '0.4'}} active={currentTab === 'token' ? true : false}>Token</TabItem>
          </Box>
        </BoxTab>
        <Stack>
          <LabelSelect>Select your source</LabelSelect>
          <FormControl>
            {!roundSelected && <InputLabel sx={label}>Select round</InputLabel>}
            <BoxSelect
              labelId="test-select-label"
              value={roundSelected}
              label="Select round"
              onChange={e => (e.target.value === '3' || e.target.value === '4') && setRoundSelected(e.target.value as string)}
            >
              {selecItem?.length && selecItem?.map((item: any, index: number) => <SelectItem sx={(item.value === '3' || item.value === '4') ? activeItem : {}} key={index} value={item.value}>{item.title}</SelectItem>)}
            </BoxSelect>
          </FormControl>
          {roundSelected && dataClaim ? <DataClaimBox>
            <Typography>Total {currentTab === 'token' ? 'Token' : 'Box'} <span>{dataClaim.totalBox} <img src={currentTab === 'token' ? CLAIM_IMAGE.fiu : CLAIM_IMAGE.box} /></span></Typography>
            <Typography sx={{ margin: '20px 0' }}>Claimed {currentTab === 'token' ? 'Token' : 'Box'} <span>{dataClaim.claimed} <img src={currentTab === 'token' ? CLAIM_IMAGE.fiu : CLAIM_IMAGE.box} /></span></Typography>
          </DataClaimBox> : <BoxBg><img src={CLAIM_IMAGE.bgClaim} /></BoxBg>}
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
          />
        </Stack>
        <ButtonClaim active={checkStatusButton()} disabled={checkStatusButton() ? false : true} onClick={handleClaimButton}>Claim</ButtonClaim>
      </Stack>}
      <PopupMessage title="You have successfully claimed your item!" message={
        <BodyPopupSuccess>
          <MarketplaceButton customStyle={{width: '100%'}} title={'View in wallet'} handleOnClick={() => router.push(PAGE.ASSETS.link)} />
          {dataClaim.totalBox > dataClaim.claimed && <Typography sx={{cursor: 'pointer'}} onClick={() => window.location.reload()}>Claim more items</Typography>}
      </BodyPopupSuccess>
      } status={popupSuccess} popupType="success" handleToggleStatus={() => window.location.reload()} />
      <PopupMessage title="Error!" status={popupError} titleButton="Try again" popupType="error" handleToggleStatus={() => setPopupError(false)}
        handleClickButton={() => setPopupError(false)} titleCustomColor={{ '& p': { color: '#FF6F61' } }} message="Something went wrong. Please try again!" />
      <Backdrop
        sx={{ color: '#FF6D24', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={statusLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
  borderRadius: 16,
  padding: 24,
  margin: '40px auto 81px',
  width: 352,
  backgroundColor: '#ffffff',
  justifyContent: 'center',
  textAlign: 'center'
})
const BodyPopupSuccess = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& img': {
    width: '100%'
  },
  '& p': {
    marginTop: 32,
    ...TEXT_STYLE(16, 500, '#FF6D24')
  }
})
const label = {
  overflow: 'visible',
  top: '-2px',
  ...TEXT_STYLE(14, 500),
  color: '#A7ACB8'
}
const Title = styled(Typography)({
  ...TEXT_STYLE(16, 600),
  color: '#31373E',
  marginBottom: 16,
  textAlign: 'center',
})
const Account = styled(Box)({
  marginBottom: 24
})
const Address = styled(Typography)({
  background: '#5A6178',
  color: '#ffffff',
  borderRadius: 8,
  padding: '6px 8px',
  ...TEXT_STYLE(14, 500),
  display: 'inline-block',
  marginBottom: 14
})
const Disconnect = styled(Typography)({
  ...TEXT_STYLE(12, 500),
  color: '#55C8FC',
  cursor: 'pointer',
})
const BoxTab = styled(Stack)({

})
type tabItemProps = ButtonProps & {
  active: boolean
}
const TabItem = styled(Button)((props: tabItemProps) => ({
  textTransform: 'capitalize',
  background: props.active ? 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)' : '#F8F9FB',
  borderRadius: 8,
  padding: '4px 0',
  ...TEXT_STYLE(16, 600),
  marginBottom: 24,
  color: props.active ? '#ffffff' : '#A7ACB8',
  width: 147,
  textAlign: 'center',
  boxShadow: 'none !important',
  '&:hover': {
    background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
    color: '#ffffff',
  }
}))
const LabelSelect = styled(Typography)({
  ...TEXT_STYLE(14, 500),
  color: '#31373E',
  marginBottom: 16
})
const BoxSelect = styled(Select)({
  '& .MuiSelect-select': {
    borderRadius: 8,
    background: '#F8F9FB',
    textAlign: 'left',
    border: '1px solid #E9EAEF',
    padding: '10px 16px',
    ...TEXT_STYLE(14, 500),
    color: '#31373E'
  },
  '& fieldset': {
    border: 0
  }
})
const SelectItem = styled(MenuItem)({
  ...TEXT_STYLE(14, 500),
  color: '#31373E',
  padding: '12px 16px',
  opacity: '0.4'
})
const activeItem = {
  opacity: '1'
}
const BoxBg = styled(Box)({
  margin: '24px 0'
})
const ButtonClaim = styled(Button)((props: tabItemProps) => ({
  textTransform: 'capitalize',
  padding: '16px',
  marginTop: '16px',
  borderRadius: 8,
  boxShadow: 'none !important',
  '&:hover, &': {
    background: props.active ? 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)' : '#E9EAEF',
    color: props.active ? '#ffffff' : '#A7ACB8',
  }
}))
const DataClaimBox = styled(Box)({
  margin: '16px 0 24px',
  '& p': {
    color: '#5A6178',
    ...TEXT_STYLE(14, 500),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '& span': {
    ...TEXT_STYLE(16, 600),
    color: '#31373E',
    display: 'flex',
    alignItems: 'center'
  },
  '& img': {
    marginLeft: '8px'
  }
})
