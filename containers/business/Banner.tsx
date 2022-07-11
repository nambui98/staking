import { Box, styled } from "@mui/material"
import { BANNER } from "../../constants/business"

export const Banner = () => {
  return (
    <Wrap><img src={BANNER.image} /></Wrap>
  )
}

const Wrap = styled(Box)({
  '& img': {
    width: '100%',
  }
})