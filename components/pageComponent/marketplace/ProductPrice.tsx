import { Backdrop, Box, BoxProps, Button, CircularProgress, fabClasses, Stack, styled, Tab, Tabs, Tooltip, Typography, useMediaQuery, withStyles } from "@mui/material"
import { ethers } from "ethers"
import { useEffect, useRef, useState } from "react"
import { BOX_DETAIL, MARKETPLACE_ICON, MARKETPLACE_IMAGE } from "../../../constants/marketplace"
import { changeNetwork, useWalletContext } from "../../../contexts/WalletContext"
import { getAvailableBox } from "../../../libs/claim"
import { getAllowance, getBoxPrice, purchaseBox, approvePurchase } from "../../../libs/marketplace"
import { MarketplaceProps } from "../../../pages/shopDisable"
import { MarketplaceService } from "../../../services/user.service"
import { TEXT_STYLE } from "../../../styles/common/textStyles"
import { PopupMessage } from "../claim/PopupMessage"
import { ApproveToken } from "./ApproveToken"
import { Checkout } from "./Checkout"
import { FormInfomationPopup } from "./FormInfomationPopup"
import { PaymentSuccess } from "./PaymentSuccess"

export const ProductPrice: React.FC<MarketplaceProps> = ({boxDetail, setBoxDetail}) => {
  const videoRef = useRef(null);
  const { ethersSigner, provider, walletAccount, chainIdIsSupported, ethersProvider, setToggleActivePopup, updateBnbBalance } = useWalletContext();
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
  const [popupError, setPopupError] = useState<{status: boolean, message: string}>({status: false, message: ''});
  const [availableBox, setAvailableBox] = useState<any>();
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
          updateBnbBalance()
          setCheckoutPopup({ ...checkoutPopup, status: false })
        }
      }, 1000);
    } catch (error: any) {
      setStatusLoading(false)
      setPopupError({status: true, message: error.reason || 'Something went wrong. Please try again!'})
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
    } catch (error: any) {
      setStatusLoading(false);
      setApprovePopup(false)
      setPopupError({status: true, message: error.reason || 'Something went wrong. Please try again!'})
    }
  }

  const handleTogglePopup = () => {
    walletAccount ? setCheckoutPopup({ ...checkoutPopup, status: !checkoutPopup.status }) : setToggleActivePopup(true)
  }

  const getPriceCurrentBox = async () => {
    if (!chainIdIsSupported) {
      await changeNetwork(provider)
    }
    const price = await getBoxPrice(boxDetail.type, ethersSigner);
    const allowance = await getAllowance(walletAccount, ethersSigner);
    const remaining = await getAvailableBox(boxDetail.type, ethersSigner)
    setAvailableBox(ethers.utils.formatUnits(remaining, 'wei'))
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
    allowance < price && setApproveToken(`${price}`)
  }

  const handleSwitchBoxType = (boxType:  string) => {
    (videoRef.current as any)?.load()
    const handleSetBoxDetail = (boxData: any) => setBoxDetail({
      ...boxDetail,
      type: boxType,
      oldPrice: boxData.oldPrice,
      price: boxData.price,
      video: boxData.video,
      maxBox: boxData.maxBox,
      quantity: boxData.quantity,
      videoIphone: boxData.videoIphone,
      image_small: boxData.image_small,
      image_large: boxData.image_large,
      title: boxData.title,
      properties: boxData.properties,
      information:  boxData.information
    })
    if(boxType === BOX_DETAIL.box_gold.type) {
      handleSetBoxDetail(BOX_DETAIL.box_gold)
    } else if(boxType === BOX_DETAIL.box_diamond.type){
      handleSetBoxDetail(BOX_DETAIL.box_diamond)
    }
  }

  const handleGetBonus = () => {
    setPaymentSuccessPopup(false)
  }

  useEffect(() => {
    walletAccount?.length && getPriceCurrentBox()
  }, [boxDetail.type, ethersSigner, walletAccount, PaymentSuccessPopup, approvePopup])
  return (
    <Wrap>
      <ProductVideo>
        <video
          ref={videoRef}
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
          <source
            src={boxDetail.videoIphone}
            type="video/mov"
          />
        </video>
      </ProductVideo>
      <Title>{boxDetail.title}</Title>
      <BoxPrice>
        <BoxPriceItem><Typography>TOTAL SALE</Typography><Typography>{boxDetail.quantity}</Typography></BoxPriceItem>
        <BoxPriceItem><Typography>REMAINING</Typography><Typography>{availableBox}</Typography></BoxPriceItem>
        <BoxPriceItem><Typography>CURRENCY</Typography><Typography sx={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ marginRight: '4px' }} src={MARKETPLACE_ICON.busdIcon} /> BUSD</Typography></BoxPriceItem>
      </BoxPrice>
      <BoxType>
        <Typography>BOX TYPE</Typography>
        <ListBoxType>
          <BoxTypeItem active={false}>
            <Tooltip classes={{popper: 'tooltip--marketplace'}} title="Coming soon" arrow placement="top">
              <img src="assets/box-comming-soon.png" />
            </Tooltip>
          </BoxTypeItem>
          <BoxTypeItem onClick={() => handleSwitchBoxType(BOX_DETAIL.box_gold.type)} active={boxDetail.type === BOX_DETAIL.box_gold.type}><img src={BOX_DETAIL.box_gold.image_small} /></BoxTypeItem>
          <BoxTypeItem onClick={() => handleSwitchBoxType(BOX_DETAIL.box_diamond.type)} active={boxDetail.type === BOX_DETAIL.box_diamond.type}><img src={BOX_DETAIL.box_diamond.image_small} /></BoxTypeItem>
        </ListBoxType>
      </BoxType>
      <Price>
        <Box>
          <Busd><img src={MARKETPLACE_ICON.busdIcon} /> {boxDetail.price} BUSD</Busd>
          {/* <Busd sx={busdLine}><img src={MARKETPLACE_ICON.busdIcon} /> {boxDetail.oldPrice} BUSD</Busd> */}
        </Box>
        <Box>
          <ButtonBuyNow>
            <Box>SOLD OUT!!!
              {/* <img className="animationArrow" src={MARKETPLACE_ICON.arrowRightIcon} /> */}
            </Box>
          </ButtonBuyNow>
          <MaxBox>Max {boxDetail.maxBox} boxes/wallet</MaxBox>
        </Box>
      </Price>

      <Checkout status={checkoutPopup.status} handleToggleStatus={handleTogglePopup} sx={customWidthPopup}
        data={{ price: boxDetail.price, allowance: checkoutPopup.allowanceStatus, boxImage: boxDetail.image_large }} handleCheckout={checkoutPopup.onClickButton}
      />
      <ApproveToken data={{
        boxPrice: boxDetail.price, currentAllowances: checkoutPopup.currentAllowance
      }} status={approvePopup} handleToggleStatus={() => setApprovePopup(!approvePopup)} sx={customWidthPopup} onChangeApproveToken={setApproveToken} handleClickButton={handleApprovePurchase} />
      <PaymentSuccess data={{
        boxPrice: boxDetail.price, boxImage: boxDetail.image_large
      }} status={PaymentSuccessPopup} handleToggleStatus={() => setPaymentSuccessPopup(false)} handleClickButton={handleGetBonus} />
      <PopupMessage title="Error!" status={popupError.status} titleButton="Try again" popupType="error" handleToggleStatus={() => setPopupError({status: false, message: ''})} sx={customWidthPopup}
        handleClickButton={() => setPopupError({status: false, message: ''})} titleCustomColor={{ '& p': { color: '#FF6F61' } }} message={popupError.message === 'execution reverted: Cannot buy more' ? 'You have reached the maximum number of slots for buying box.' : popupError.message} />
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
    minWidth: 420
  },
  '@media (min-width: 1200px)': {
    minWidth: 470
  }
})
const MaxBox = styled(Typography)({
  ...TEXT_STYLE(14, 500, '#5A6178'),
  marginTop: 10,
  '@media (min-width: 768px)': {
    marginTop: 16,
    ...TEXT_STYLE(16, 500, '#5A6178'),
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
  // background: 'radial-gradient(75% 75% at 21.87% 25%, #FFCC77 18.94%, #FF612F 89.59%)',
  background: '#FF6F61 !important',
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
    // color: '#FF6D24',
    color: '#FF6F61',
    // width: 240,
    width: 215,
    '& img': {
      filter: 'invert(55%) sepia(46%) saturate(3957%) hue-rotate(344deg) brightness(101%) contrast(101%)'
    }
  },
  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    '@media (min-width: 768px)': {
      background: '#ffffff',
      borderRadius: 14,
      padding: '5px 15px 5px 22px',
      '&:hover': {
        // background: 'radial-gradient(75% 75% at 21.87% 25%, #FFCC77 18.94%, #FF612F 89.59%)',
        // background: '#ffffff',
        // color: '#ffffff',
        '& img': {
          filter: 'unset'
        }
      }
    }
  }
})
const Busd = styled(Box)({
  ...TEXT_STYLE(20, 600),
  marginRight: 30,
  display: 'flex',
  alignItems: 'center',
  marginTop: 19,
  '& img': {
    marginRight: 8
  },
  '@media (min-width: 768px)': {
    ...TEXT_STYLE(24, 600),
    marginRight: 49,
    minWidth: 135,
    marginTop: 17
  }
})
const busdLine = {
  fontSize: '16px !important',
  fontWeight: '400 !important',
  opacity: '0.8',
  textDecoration: 'line-through',
  marginTop: '2px'
}
const Price = styled(Stack)({
  flexDirection: 'row',
  // justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: 24
})
const ProductVideo = styled(Box)({
  margin: '10px 0 16px',
  textAlign: 'center',
  minHeight: 395,
  overflow: 'hidden',
  '@media (min-width: 768px)': {
    margin: '0 0 -20px',
    minHeight: 480
  },
  '& video': {
    width: '100%',
    transform: 'scale(1.5)'
  }
})
const Title = styled(Typography)({
  color: '#31373E',
  ...TEXT_STYLE(20, 600),
  marginBottom: 16,
  '@media (min-width: 768px)': {
    ...TEXT_STYLE(32, 600),
    marginBottom: 24,
  }
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
  marginBottom: 12,
  '& > p:first-of-type': {
    color: '#898E9E',
    ...TEXT_STYLE(14, 600),
    marginBottom: 8,
  },
  '& > p:last-of-type': {
    ...TEXT_STYLE(16, 600),
  },
  '&:nth-child(2)': {
    margin: '0 40px'
  },
  '@media (min-width: 768px)': {
    marginBottom: 16,
    '& > p:first-of-type': {
      color: '#898E9E',
      marginBottom: 17,
    },
  }
})
const customWidthPopup = {
  '@media (min-width: 650px)': {
    width: '544px !important'
  }
}