import { Box, styled, Typography } from "@mui/material"
import { INTRO } from "../../constants/business"
import { TEXT_STYLE } from "../../styles/common/textStyles"

export const Intro = () => {
  return (
    <Wrap><Content>{INTRO.content}</Content></Wrap>
  )
}

const Wrap = styled(Box)({
  padding: '24px 0',
  '@media (min-width: 768px)': {
    padding: '80px 0 120px'
  }
})
const Content = styled(Box)({
  '& p': {
    ...TEXT_STYLE(20, 600, '#ffffff'),
    lineHeight: '30px',
    '& span': {
      color: '#FF6D24'
    },
    '@media (min-width: 768px)': {
      ...TEXT_STYLE(48, 600, '#ffffff'),
      lineHeight: '72px',
    }
  }
})