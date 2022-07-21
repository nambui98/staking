import { Box, BoxProps, Button, Stack, styled, Typography, useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react";
import { ICON, IMAGE, TAB_ITEM, TAB_NAME } from "../../../constants/assetsWallet";
import { useWalletContext } from "../../../contexts/WalletContext"
import { getOwnedBox } from "../../../libs/claim";
import { MarketplaceService } from "../../../services/user.service";
import { TEXT_STYLE } from "../../../styles/common/textStyles";
import { FormInfomationPopup } from "../marketplace/FormInfomationPopup";
import { BoxEmpty } from "./BoxEmpty";
import { MysteryBoxTab } from "./MysteryBoxTab";
import { TokenTab } from "./TokenTab";
import addressBuyBox from '../../../abi/addressBuyBox.json';

export const Boxtabs = () => {
  const { walletAccount, bnbBalance, fiuBalance, heeBalance, ethersSigner, boxBalance } = useWalletContext();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [totalBox, setTotalBox] = useState<number>(0);
  const [currentTab, setCurrentTab] = useState<string>('');
  const [popupFormInfo, setPopupFormInfo] = useState<boolean>(false);
  const [statusBuyBox, setStatusBuyBox] = useState<boolean>(false);


  const handleSwitchTab = (tab: string) => {
    setCurrentTab(tab);
  }
  const statusFormGetBonus = MarketplaceService.getStatusPopupGetBonus();

  const renderBodyView = () => {
    switch (currentTab) {
      case TAB_NAME.token:
        return <TokenTab />
      case TAB_NAME.box:
        return <MysteryBoxTab />
      default:
        break;
    }
  }

  const getTotalBox = async () => {
    try {
      const res = await getOwnedBox(walletAccount, ethersSigner);
      if (res?.length) {
        setTotalBox(res.length)
      } else {
        setTotalBox(0)
      }
    } catch (error) {
      setTotalBox(0)
    }
  }

  const checkAddressBuyBox = async () => {
    const filterAddress = await (addressBuyBox as any)?.data?.filter((item: any, index: number) => {
      return item?.Wallet.toLowerCase() === walletAccount?.toLowerCase()
    })
    if(filterAddress.length){
      return setStatusBuyBox(true)
    } else {
      return setStatusBuyBox(false)
    }
  }

  useEffect(() => {
    getTotalBox();
    checkAddressBuyBox()
  }, [walletAccount])

  return (
    <Wrap>
      <TabLeft>
        <BoxBodyLeft>
          <Top>
            <Address>{walletAccount?.slice(0, 6) + '...' + walletAccount?.slice(-3)}</Address>
            <BnbBalance>{bnbBalance?.length && parseFloat(bnbBalance) > 0 ? parseFloat(bnbBalance).toFixed(4) : '0.00'} <img src={ICON.bnbSmall} /></BnbBalance>
          </Top>
          <TabBox>
            {TAB_ITEM?.map((item, index) => (
              <TabItem active={currentTab === item.title ? true : false} key={index} onClick={() => item.active && handleSwitchTab(item.title)}>
                <img style={!item.active ? iconGray : {}} src={item.icon} />{!isMobile ?
                  <Typography sx={!item.active ? { color: '#A7ACB8 !important' } : {}}>{item.title}</Typography> : currentTab === item.title && <Typography>{item.title}</Typography>}
                {!item.active && !isMobile && <span>Coming soon</span>}
                {!isMobile && item.active && index > 0 && <Typography>{totalBox}</Typography>}
              </TabItem>
            ))}
          </TabBox>
        </BoxBodyLeft>
        {statusBuyBox && !isMobile && !statusFormGetBonus && <BoxBonus>
          <img src={IMAGE.boxShoeToken} />
          <ButtonBonus startIcon={<img src={ICON.gift} />} onClick={() => setPopupFormInfo(true)}>GET YOUR BONUS</ButtonBonus>
        </BoxBonus>}
      </TabLeft>
      <TabBody>
        {currentTab.length ? renderBodyView() : <BoxEmpty icon={ICON.shoe} emptyText={'Select assets to continue'} />}
      </TabBody>
      <FormInfomationPopup status={popupFormInfo} handleToggleStatus={() => setPopupFormInfo(false)} />
      {statusBuyBox && isMobile && !statusFormGetBonus && <BoxBonus><ButtonBonus startIcon={<img src={ICON.gift} />} onClick={() => setPopupFormInfo(true)}>GET YOUR BONUS</ButtonBonus></BoxBonus>}
    </Wrap>
  )
}


const iconGray = {
  filter: 'invert(85%) sepia(61%) saturate(10%) hue-rotate(196deg) brightness(100%) contrast(115%)'
}
const BoxBonus = styled(Box)({
  textAlign: 'center',
  marginTop: 24,
  width: '100%',
  '& img': {
    width: '100%',
  },
  '& button': {
    width: '100%',
    marginTop: -4
  }
})
const BoxBodyLeft = styled(Box)({
  '@media (min-width: 768px)': {
    borderRadius: 16,
    background: '#F8F9FB',
    padding: 16
  }
})
const ButtonBonus = styled(Button)({
  borderRadius: 12,
  background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
  padding: '8px',
  ...TEXT_STYLE(16, 600, '#ffffff')
})
const Wrap = styled(Stack)({
  color: '#31373E',
  background: '#ffffff',
  flexDirection: 'row',
  alignItems: 'flex-start',
  '@media (max-width: 767px)': {
    padding: 16,
    borderRadius: 16,
    background: '#F8F9FB',
    flexDirection: 'column',
  }
})
const TabLeft = styled(Stack)({
  width: '100%',
  '@media (min-width: 768px)': {
    marginRight: 32,
    width: 266,
  }
})
const TabBody = styled(Stack)({
  width: '100%',
  '@media (min-width: 768px)': {
    background: '#F8F9FB',
    borderRadius: 16,
    width: 'calc(100% - 256px - 32px)',
    padding: 24,
    paddingRight: 9
  }
})
const Top = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 8,
  borderBottom: '1px solid #E9EAEF',
})
const Address = styled(Box)({
  padding: '6px 11px',
  ...TEXT_STYLE(12, 500, '#FFFFFF'),
  background: '#5A6178',
  borderRadius: 8,
  width: 96,
  textAlign: 'center',
})
const BnbBalance = styled(Box)({
  ...TEXT_STYLE(13, 600),
  display: 'flex',
  alignItems: 'center',
  '& img': {
    marginLeft: 4
  }
})
const TabBox = styled(Stack)({
  paddingBottom: 4,
  marginTop: 3,
  borderBottom: '1px solid #E9EAEF',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media (min-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 7,
    borderBottom: 0
  }
})
type tabItemProps = BoxProps & {
  active: boolean
}
const TabItem = styled(Box)((props: tabItemProps) => ({
  padding: '8px 13.5px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 8,
  cursor: 'pointer',
  background: props.active ? '#FFE2D3' : '#F8F9FB',
  '@media (min-width: 768px)': {
    padding: 8,
    width: '100%'
  },
  '& p:nth-of-type(1)': {
    ...TEXT_STYLE(12, 500, props.active ? '#FF6D24' : '#F8F9FB'),
    marginLeft: 4,
    '@media (min-width: 768px)': {
      ...TEXT_STYLE(16, 500, props.active ? '#FF6D24' : '#5A6178'),
      marginLeft: 8
    }
  },
  '& p:nth-of-type(2)': {
    ...TEXT_STYLE(18, 600, props.active ? '#FF6D24' : '#31373E'),
    marginLeft: 'auto',
  },
  '& img': {
    filter: props.active ? 'invert(48%) sepia(75%) saturate(1542%) hue-rotate(343deg) brightness(99%) contrast(103%)' : 'initial',
    '@media (min-width: 768px)': {
      width: 32
    }
  },
  '& span': {
    marginLeft: 'auto',
    ...TEXT_STYLE(12, 600, '#A7ACB8')
  }
}))
const BoxShoeEmpty = styled(Stack)({
  alignItems: 'center',
  margin: '93px 0 77px',
  '@media (min-width: 768px)': {
    minHeight: 465,
    justifyContent: 'center',
  },
  '& p': {
    marginTop: 8,
    ...TEXT_STYLE(16, 500, '#A7ACB8')
  },
  '& img': {
    filter: 'invert(85%) sepia(61%) saturate(10%) hue-rotate(196deg) brightness(130%) contrast(115%)'
  }
})