import { Box, Button, InputBase, Stack, styled, Typography } from "@mui/material"
import { useState } from "react";
import { TAB_NAME } from "../../../constants/assetsWallet";
import { useCommonContext } from "../../../contexts/CommonContext";
import { useWalletContext } from "../../../contexts/WalletContext";
import { checkVerifyEmail } from "../../../libs/apis/marketplace";
import { getAllowance, handleApprove, handleDeposit } from "../../../libs/assets";
import { bftBox, bftFiuToken, bftHeetoken } from "../../../libs/contracts";
import { TEXT_STYLE } from "../../../styles/common/textStyles"
import { MarketplaceButton } from "../../buttons/MarketplaceButton";

interface IProps {
  currentTab: string
  tokenChoose: string
  boxChoose: string
}

export const SendToSpending: React.FC<IProps> = ({ currentTab, tokenChoose, boxChoose }) => {
  const { popupNoti, spinner } = useCommonContext();
  const { walletAccount, ethersSigner, ethersProvider, updateBnbBalance, fiuBalance, heeBalance } = useWalletContext();
  const [textEmail, setTextEmail] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const checkEmail = async () => {
    const res = await checkVerifyEmail(textEmail)
    if (res?.data?.data.exist) {
      return true
    }
    return false
  }

  const handleCheckEmail = async () => {
    if (await checkEmail()) {
      if (currentTab === TAB_NAME.token) {
        if (tokenChoose === 'hee' && parseFloat(heeBalance) >= parseFloat(amount)) {
          return true
        }
        if (tokenChoose === 'fiu' && parseFloat(fiuBalance) >= parseFloat(amount)) {
          return true
        }
      } else {
        return true
      }
    }
    return false
  }

  const depositToken = async (abiDetail: any, type: 'token' | 'box', boxId?: string) => {
    const resDeposit = await handleDeposit(ethersSigner, abiDetail.address, amount, textEmail, type, boxId)
    const checkStatus = setInterval(async () => {
      const statusApprove = await ethersProvider.getTransactionReceipt(resDeposit.hash);
      if (statusApprove?.status) {
        spinner.handleChangeStatus(false)
        updateBnbBalance()
        popupNoti.handleToggleStatus({
          status: true,
          popupType: 'success',
          title: 'Send succeeded!',
          titleButton: 'OK',
          message: currentTab === TAB_NAME.token ? null : 'Please check the item in your inventory on beFITTER app for unboxing.'
        })
        clearInterval(checkStatus)
      }
    }, 1000);
  }

  const handleSentToken = async () => {
    spinner.handleChangeStatus(true)
    const abiDetail = tokenChoose === 'fiu' ? bftFiuToken : bftHeetoken;
    try {
      if (currentTab === TAB_NAME.token) {
        const resAllowance = await getAllowance(walletAccount, ethersSigner, abiDetail);
        if (resAllowance < parseFloat(amount)) {
          const resApprove = await handleApprove(amount, ethersSigner, abiDetail);
          const checkStatus = setInterval(async () => {
            const statusApprove = await ethersProvider.getTransactionReceipt(resApprove.hash);
            if (statusApprove?.status) {
              updateBnbBalance()
              depositToken(abiDetail, 'token');
              clearInterval(checkStatus)
            }
          }, 1000);
        } else {
          depositToken(abiDetail, 'token')
        }
      } else {
        depositToken(bftBox, 'box')
      }
    } catch (error: any) {
      spinner.handleChangeStatus(false)
      popupNoti.handleToggleStatus({
        status: true,
        popupType: 'error',
        title: 'Error!',
        message: error.reason || 'Something went wrong. Please try again!',
        titleCustomColor: { '& p': { color: '#FF6F61' } },
        titleButton: 'Try again',
      })
    }

  }

  const handleClickButton = async () => {
    if (await handleCheckEmail()) {
      popupNoti.handleToggleStatus({
        status: true,
        title: 'Sending item',
        message: <Box>
          <TitleConfirm>Sending this item to <span>{textEmail}</span> on beFITTER?</TitleConfirm>
          <PopuBody>
            <Box>
              <Typography>Item</Typography>
              <Box>{currentTab === TAB_NAME.token ? amount : `#${boxChoose}`} <img src={`assets/icons/${currentTab === TAB_NAME.token ? (tokenChoose === 'fiu' ? 'fiu' : 'hee') : 'box-classic'}.svg`} /></Box>
            </Box>
            <MarketplaceButton title={'Confirm'} handleOnClick={handleSentToken} customStyle={{ width: '100%', margin: '24px 0' }} />
            <Cancel onClick={() => popupNoti.handleHidePopup(false)}>Cancel</Cancel>
          </PopuBody>
        </Box>
      })
    } else {
      spinner.handleChangeStatus(false)
      popupNoti.handleToggleStatus({
        status: true,
        popupType: 'error',
        title: 'Error!',
        message: await checkEmail() ? 'You balance is insufficient' : 'You should sign up on our app first to continue',
        titleCustomColor: { '& p': { color: '#FF6F61' } },
        titleButton: 'Try again',
      })
    }
  }
  const checkStatusSendButton = () => {
    if (currentTab === TAB_NAME.token) {
      if (tokenChoose && textEmail && amount) {
        return true
      }
    } else if (currentTab === TAB_NAME.box) {
      if (boxChoose && textEmail) {
        return true
      }
    }
    return false;
  }

  return (
    <SendSpending>
      <BoxInput>
        <InputBottom>
          <Label>beFITTER email</Label>
          <CustomInput
            fullWidth
            required
            value={textEmail}
            placeholder={'Email'}
            onChange={(e: any) => setTextEmail(e.target.value)}
          />
        </InputBottom>
        {currentTab === TAB_NAME.token && <InputBottom>
          <Label>Amount to send</Label>
          <CustomInput
            fullWidth
            required
            type="number"
            value={amount}
            placeholder={'Amount'}
            onChange={(e: any) => setAmount(e.target.value)}
          />
        </InputBottom>}
        <ButtonSendSpending sx={{ background: checkStatusSendButton() ? 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)' : '#E9EAEF' }} onClick={handleClickButton} disabled={!checkStatusSendButton()}>Send to Spending</ButtonSendSpending>
      </BoxInput>
    </SendSpending>
  )
}

const SendSpending = styled(Box)({
  marginTop: 16,
  padding: 16,
  background: '#F8F9FB',
  borderRadius: 16,
})
const BoxInput = styled(Box)({
  '@media (min-width: 992px)': {
    display: 'flex',
    alignItems: 'flex-end'
  }
})
const InputBottom = styled(Box)({
  marginBottom: 16,
  '@media (min-width: 992px)': {
    marginRight: 20,
    marginBottom: 0
  }
})
const Label = styled(Typography)({
  ...TEXT_STYLE(14, 500, '#5A6178'),
  marginBottom: 8,
})
const CustomInput = styled(InputBase)({
  '@media (min-width: 1280px)': {
    width: 275,
  },
  '& .MuiInputBase-input': {
    ...TEXT_STYLE(14, 500, '#31373E'),
    padding: '10px 16px',
    borderRadius: 8,
    background: '#E9EAEF',
  },
});
const ButtonSendSpending = styled(Button)({
  padding: 8,
  borderRadius: 12,
  background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
  color: '#ffffff',
  ...TEXT_STYLE(16, 600),
  marginLeft: 'auto',
  textTransform: 'unset',
  width: '100%',
  '@media (min-width: 992px)': {
    width: 188,
  }
})
const TitleConfirm = styled(Typography)({
  ...TEXT_STYLE(14, 500, '#5A6178'),
  '& span': {
    color: '#FF6D24'
  },
  marginBottom: 16
})
const PopuBody = styled(Box)({
  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& div': {
      display: 'flex',
      alignItems: 'center',
      ...TEXT_STYLE(16, 700, '#31373E'),
      '& img': {
        marginLeft: 8
      }
    }
  }
})
const Cancel = styled(Typography)({
  ...TEXT_STYLE(16, 600, '#31373E'),
  cursor: 'pointer',
})
