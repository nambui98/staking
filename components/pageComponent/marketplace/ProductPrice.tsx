import { Box, Stack, styled, Typography } from "@mui/material"
import { MARKETPLACE_IMAGE } from "../../../constants/marketplace"
import { TEXT_STYLE } from "../../../styles/common/textStyles"

export const ProductPrice = () => {
  return (
    <Wrap>
      <ProductImage><img src={MARKETPLACE_IMAGE.shoe} /></ProductImage>
      <Title>beFITTER Mystery Shoe Box</Title>
      <BoxPrice>
        <BoxPriceItem><Typography>TotalSale</Typography><Typography>400</Typography></BoxPriceItem>
        <BoxPriceItem><Typography>SUPPORTED</Typography><Typography>BUSD</Typography></BoxPriceItem>
        <BoxPriceItem><Typography>CURRENCY</Typography><Typography>400</Typography></BoxPriceItem>
      </BoxPrice>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  width: '100%',
  color: '#31373E'
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
})
const BoxPriceItem = styled(Box)({
  marginBottom: 16,
  '& > p:first-child': {
    color: '#898E9E',
    ...TEXT_STYLE(14, 600),
    marginBottom: 8
  },
  '& > p:last-child': {
    ...TEXT_STYLE(16, 600),
  }
})