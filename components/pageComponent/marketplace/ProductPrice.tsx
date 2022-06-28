import { Box, BoxProps, Button, Stack, styled, Tab, Tabs, Typography, useMediaQuery } from "@mui/material"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { MARKETPLACE_ICON, MARKETPLACE_IMAGE } from "../../../constants/marketplace"
import { useWalletContext } from "../../../contexts/WalletContext"
import { getAllowance, getBoxPrice, PurchaseBox } from "../../../libs/marketplace"
import { TEXT_STYLE } from "../../../styles/common/textStyles"
import { Checkout } from "./Checkout"

export const ProductPrice = () => {
  const {ethersSigner, claimBoxContract, walletAccount, busdBalance} = useWalletContext();
  const [boxPrice, setBoxPrice] = useState<number>(0);
  const [currentBoxType, setCurrentBoxType] = useState<string>('gold');
  const [currentAllowance, setAllowance] = useState<number>(0);
  const handlePurchaseBox = async () => {
    // const shopContract = await new ethers.Contract(beFitterShop.address, beFitterShop.abi, ethersSigner);
    // const busdContract = await new ethers.Contract(beFitterBusd.address, beFitterBusd.abi, ethersSigner);


    // const approve = await busdContract.approve(beFitterShop.address, '0x0aa87bee538000')
    // const price = await getBoxPrice(shopContract, 'gold', beFitterBusd.address);
    // const allowance = await busdContract.allowance(walletAccount, beFitterShop.address);
    // console.log(ethers.utils.formatUnits(price), ethers.utils.formatUnits(allowance, 'wei'), approve)
    // const res = await PurchaseBox(shopContract, 'gold', beFitterBusd.address);
    console.log(ethers.utils.parseEther('0.03'));
  }

  const getPriceCurrentBox = async () => {
    const price = await getBoxPrice(currentBoxType, ethersSigner)
    const allowance = await getAllowance(walletAccount, ethersSigner);
    allowance && setAllowance(allowance)
    price && setBoxPrice(price)
  }

  useEffect(() => {
    ethersSigner && getPriceCurrentBox()
  }, [currentBoxType, ethersSigner])
  return (
    <Wrap>
      <ProductImage><img src={MARKETPLACE_IMAGE.shoe} /></ProductImage>
      <Title>beFITTER Mystery Shoe Box</Title>
      <BoxPrice>
        <BoxPriceItem><Typography>TotalSale</Typography><Typography>400</Typography></BoxPriceItem>
        <BoxPriceItem><Typography>SUPPORTED</Typography><Typography>BUSD</Typography></BoxPriceItem>
        <BoxPriceItem><Typography>CURRENCY</Typography><Typography sx={{display: 'flex', alignItems: 'center'}}><img style={{marginRight: '4px'}} src={MARKETPLACE_ICON.busdIcon} /> BUSD</Typography></BoxPriceItem>
      </BoxPrice>
      <Price>
        <Busd><img src={MARKETPLACE_ICON.busdIcon} /> {boxPrice} BUSD</Busd>
        <ButtonBuyNow onClick={handlePurchaseBox}><Box>Buy now <img src={MARKETPLACE_ICON.arrowRightIcon} /></Box></ButtonBuyNow>
      </Price>
      <Checkout status={true} handleToggleStatus={() => null} sx={customWidthPopup} data={{price: boxPrice, allowance: parseFloat(busdBalance) > currentAllowance}} />
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  '@media (min-width: 768px)': {
    minWidth: 370
  }
})
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

      }
    }
  }
})
const Busd = styled(Box)({
  ...TEXT_STYLE(20, 600),
  marginRight: 10,
  display: 'flex',
  alignItems: 'center',
  '& img': {
    marginRight: 8
  }
})
const Price = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 24
})
const ProductImage = styled(Box)({
  margin: '70px 0',
  textAlign: 'center',
  '& img': {
    width: 218,
  }
})
const Title = styled(Typography)({
  color: '#31373E',
  ...TEXT_STYLE(20, 600),
  marginBottom: 16
})
const BoxPrice = styled(Stack)({
  flexWrap: 'wrap',
  flexDirection: 'row',
  marginBottom: 8,
  '@media (min-width: 768px)': {
    marginBottom: 40
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
    marginBottom: 8,
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