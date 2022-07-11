import { Box, styled, Typography } from "@mui/material"
import { BUSINESS_MODEL } from "../../constants/business"
import { TEXT_STYLE } from "../../styles/common/textStyles"

export const BusinessModel = () => {
  return (
    <Wrap>
      <Box>
        <Typography>BEFITTER</Typography>
        <Typography>{BUSINESS_MODEL.title}</Typography>
        <Typography>{BUSINESS_MODEL.subTitle}</Typography>
      </Box>
    </Wrap>
  )
}

const Wrap = styled(Box)({

})

const Title = styled(Typography)({
  ...TEXT_STYLE(16, 700, '#FF6D24'),
  fontFamily: 'Electrofied',
  '@media (min-width: 768px)': {
    ...TEXT_STYLE(48, 700, '#FF6D24'),
  }
})