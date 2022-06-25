import { Box, Stack, styled } from "@mui/material"
import { MARKETPLACE_IMAGE } from "../../../constants/marketplace"

export const ProductPrice = () => {
  return (
    <Wrap>
      <ProductImage><img src={MARKETPLACE_IMAGE.shoe} /></ProductImage>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  width: '100%',
})
const ProductImage = styled(Box)({
  margin: '70px 0',
  textAlign: 'center',
  '& img': {
    width: 218,
  }
})