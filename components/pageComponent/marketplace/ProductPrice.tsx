import { Backdrop, Box, BoxProps, Button, CircularProgress, fabClasses, Stack, styled, Tab, Tabs, Typography, useMediaQuery } from "@mui/material"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { BOX_DETAIL, MARKETPLACE_ICON, MARKETPLACE_IMAGE } from "../../../constants/marketplace"
import { changeNetwork, useWalletContext } from "../../../contexts/WalletContext"
import { getAllowance, getBoxPrice, purchaseBox, approvePurchase } from "../../../libs/marketplace"
import { TEXT_STYLE } from "../../../styles/common/textStyles"
import { PopupMessage } from "../claim/PopupMessage"
import { ApproveToken } from "./ApproveToken"
import { Checkout } from "./Checkout"
import { PaymentSuccess } from "./PaymentSuccess"

export const ProductPrice = () => {
  const { ethersSigner, provider, walletAccount, chainIdIsSupported, ethersProvider } = useWalletContext();
  const [boxDetail, setBoxDetail] = useState<{ price: number, type: string, video: string, image_small: string, image_large: string}>({ 
    price: 0, type: 'gold',  video: BOX_DETAIL.box_gold.video, image_small: BOX_DETAIL.box_gold.image_small, image_large: BOX_DETAIL.box_gold.image_large
  })
  const [checkoutPopup, setCheckoutPopup] = useState<{
    status: boolean, currentAllowance: number, allowanceStatus: boolean, onClickButton: () => any
  }>({
    status: false,
    currentAllowance: 0,
    allowanceStatus: false,
    onClickButton: () => null
  })
  const [approvePopup, setApprovePopup] = useState<boolean>(false)
  const [PaymentSuccessPopup, setPaymentSuccessPopup] = useState<boolean>(false)
  const [approveToken, setApproveToken] = useState<string>('');
  const [statusLoading, setStatusLoading] = useState<boolean>(false);
  const [popupError, setPopupError] = useState<boolean>(false);

  const handlePurchaseBox = async () => {
    setStatusLoading(true)
    try {
      const res = await purchaseBox(boxDetail.type, ethersSigner);
      const checkStatus = setInterval(async () => {
        const statusPurchase = await ethersProvider.getTransactionReceipt(res.hash);
        if (statusPurchase?.status) {
          setStatusLoading(false)
          clearInterval(checkStatus)
          setPaymentSuccessPopup(true)
          setApprovePopup(false)
          setCheckoutPopup({ ...checkoutPopup, status: false })
        }
      }, 1000);
    } catch (error) {
      setStatusLoading(false)
      setPopupError(true)
      setApprovePopup(false)
    }
  }

  const handleApprovePurchase = async () => {
    setStatusLoading(true)
    try {
      const res = await approvePurchase(approveToken, ethersSigner);
      const checkStatus = setInterval(async () => {
        const statusApprove = await ethersProvider.getTransactionReceipt(res.hash);
        if (statusApprove?.status) {
          handlePurchaseBox()
          clearInterval(checkStatus)
        }
      }, 1000);
    } catch (error) {
      setStatusLoading(false);
      setApprovePopup(false)
      setPopupError(true)
    }
  }

  const handleTogglePopup = () => setCheckoutPopup({ ...checkoutPopup, status: !checkoutPopup.status })

  const getPriceCurrentBox = async () => {
    if (!chainIdIsSupported) {
      await changeNetwork(provider)
    }
    const price = await getBoxPrice(boxDetail.type, ethersSigner);
    const allowance = await getAllowance(walletAccount, ethersSigner);
    const setDataCheckoutPopup = {
      ...checkoutPopup,
      currentAllowance: allowance,
      allowanceStatus: allowance >= price,
    }
    setBoxDetail({ ...boxDetail, price: price })
    setCheckoutPopup({
      ...setDataCheckoutPopup,
      onClickButton: allowance >= price ? handlePurchaseBox : () => { setApprovePopup(!approvePopup); setCheckoutPopup({ ...setDataCheckoutPopup, status: false }) }
    })
    allowance < price && setApproveToken(`${price - allowance}`)
  }

  const handleSwitchBoxType = (boxType:  string) => {
    const handleSetBoxDetail = (boxData: any) => setBoxDetail({
      ...boxDetail,
      type: boxType,
      video: boxData.video,
      image_small: boxData.image_small,
      image_large: boxData.image_large,
    })
    if(boxType === BOX_DETAIL.box_gold.type) {
      handleSetBoxDetail(BOX_DETAIL.box_gold)
    } else if(boxType === BOX_DETAIL.box_diamond.type){
      handleSetBoxDetail(BOX_DETAIL.box_diamond)
    }
  }

  useEffect(() => {
    walletAccount?.length && getPriceCurrentBox()
  }, [boxDetail.type, ethersSigner, walletAccount, PaymentSuccessPopup, approvePopup])
  return (
    <Wrap>
      <ProductVideo>
        <video
          autoPlay={true}
          loop
          muted
          playsInline
        >
          <source
            src={boxDetail.video}
            type='video/mp4; codecs="hvc1"'
          />
          <source
            src={boxDetail.video}
            type="video/webm"
          />
        </video>
      </ProductVideo>
      <Title>beFITTER Mystery Shoe Box</Title>
      <BoxPrice>
        <BoxPriceItem><Typography>TotalSale</Typography><Typography>400</Typography></BoxPriceItem>
        <BoxPriceItem><Typography>SUPPORTED</Typography><Typography>BUSD</Typography></BoxPriceItem>
        <BoxPriceItem><Typography>CURRENCY</Typography><Typography sx={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ marginRight: '4px' }} src={MARKETPLACE_ICON.busdIcon} /> BUSD</Typography></BoxPriceItem>
      </BoxPrice>
      <BoxType>
        <Typography>BOX TYPE</Typography>
        <ListBoxType>
          <BoxTypeItem onClick={() => handleSwitchBoxType(BOX_DETAIL.box_gold.type)} active={boxDetail.type === BOX_DETAIL.box_gold.type}><img src={BOX_DETAIL.box_gold.image_small} /></BoxTypeItem>
          <BoxTypeItem onClick={() => handleSwitchBoxType(BOX_DETAIL.box_diamond.type)} active={boxDetail.type === BOX_DETAIL.box_diamond.type}><img src={BOX_DETAIL.box_diamond.image_small} /></BoxTypeItem>
        </ListBoxType>
      </BoxType>
      <Price>
        <Busd><img src={MARKETPLACE_ICON.busdIcon} /> {boxDetail.price} BUSD</Busd>
        <ButtonBuyNow onClick={handleTogglePopup}><Box>Buy now <img src={MARKETPLACE_ICON.arrowRightIcon} /></Box></ButtonBuyNow>
      </Price>
      <Checkout status={checkoutPopup.status} handleToggleStatus={handleTogglePopup} sx={customWidthPopup}
        data={{ price: boxDetail.price, allowance: checkoutPopup.allowanceStatus, boxImage: boxDetail.image_large }} handleCheckout={checkoutPopup.onClickButton}
      />
      <ApproveToken data={{
        boxPrice: boxDetail.price, currentAllowances: checkoutPopup.currentAllowance
      }} status={approvePopup} handleToggleStatus={() => setApprovePopup(!approvePopup)} sx={customWidthPopup} onChangeApproveToken={setApproveToken} handleClickButton={handleApprovePurchase} />
      <PaymentSuccess data={{
        boxPrice: boxDetail.price, boxImage: boxDetail.image_large
      }} status={PaymentSuccessPopup} handleToggleStatus={() => setPaymentSuccessPopup(false)} sx={customWidthPopup} />
      <PopupMessage title="Error!" status={popupError} titleButton="Try again" popupType="error" handleToggleStatus={() => setPopupError(false)} sx={customWidthPopup}
        handleClickButton={() => setPopupError(false)} titleCustomColor={{ '& p': { color: '#FF6F61' } }} message="Something went wrong. Please try again!" />

      <Backdrop
        sx={{ color: '#FF6D24', zIndex: 2000 }}
        className="backdrop-loading"
        open={statusLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  '@media (min-width: 768px)': {
    minWidth: 448
  }
})
const BoxType = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 20,
  '& p': {
    marginRight: 24,
    ...TEXT_STYLE(14, 600),
    color: '#898E9E'
  }
})
const ListBoxType = styled(Box)({
  display: 'flex',
  alignItems: 'center'
})
type boxTypeProps = BoxProps & {
  active: boolean
}
const BoxTypeItem = styled(Box)((props: boxTypeProps) => ({
  padding: 8,
  height: 56,
  borderRadius: 8,
  marginRight: 16,
  cursor: 'pointer',
  background: props.active ? '#FFE2D3' : ''
}))
const ButtonBuyNow = styled(Button)({
  background: 'radial-gradient(75% 75% at 21.87% 25%, #FFCC77 18.94%, #FF612F 89.59%)',
  padding: '10.5px 16px 10.5px 24px',
  fontFamily: 'Electrofied',
  ...TEXT_STYLE(20, 600),
  fontStyle: 'italic',
  textTransform: 'uppercase',
  color: '#ffffff',
  borderRadius: 16,
  boxShadow: 'none!important',
  width: 208,
  '@media (min-width: 768px)': {
    padding: 3,
    ...TEXT_STYLE(24, 600),
    color: '#FF6D24',
    width: 240,
    '& img': {
      transition: '0.3s',
      filter: 'invert(55%) sepia(46%) saturate(3957%) hue-rotate(344deg) brightness(101%) contrast(101%)'
    }
  },
  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    transition: '0.3s',
    '@media (min-width: 768px)': {
      background: '#ffffff',
      borderRadius: 14,
      padding: '5px 15px 5px 22px',
      '&:hover': {
        background: 'radial-gradient(75% 75% at 21.87% 25%, #FFCC77 18.94%, #FF612F 89.59%)',
        color: '#ffffff',
        '& img': {
          filter: 'unset'
        }
      }
    }
  }
})
const Busd = styled(Box)({
  ...TEXT_STYLE(24, 600),
  marginRight: 10,
  display: 'flex',
  alignItems: 'center',
  '& img': {
    marginRight: 8
  },
  '@media (min-width: 768px)': {
    marginRight: 20,
    minWidth: 135
  }
})
const Price = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 24
})
const ProductVideo = styled(Box)({
  margin: '70px 0',
  textAlign: 'center',
  '& video': {
    width: '100%',
  }
})
const Title = styled(Typography)({
  color: '#31373E',
  ...TEXT_STYLE(32, 600),
  marginBottom: 24
})
const BoxPrice = styled(Stack)({
  flexWrap: 'wrap',
  flexDirection: 'row',
  marginBottom: 8,
  '@media (min-width: 768px)': {
    marginBottom: 4
  },
  '@media (min-width: 1280px)': {
    flexWrap: 'nowrap',
  }
})
const BoxPriceItem = styled(Box)({
  marginBottom: 16,
  '& > p:first-of-type': {
    color: '#898E9E',
    ...TEXT_STYLE(14, 600),
    marginBottom: 17,
  },
  '& > p:last-of-type': {
    ...TEXT_STYLE(16, 600),
  },
  '&:nth-child(2)': {
    margin: '0 40px'
  }
})
const customWidthPopup = {
  '@media (min-width: 650px)': {
    width: '544px !important'
  }
}