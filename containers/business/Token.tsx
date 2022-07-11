import { Box, styled, Typography } from "@mui/material"
import { BUSINESS_IMAGE, BUSINESS_TOKEN } from "../../constants/business"
import { TEXT_STYLE } from "../../styles/common/textStyles"

export const Token = () => {
  return (
    <Wrap>
      <Box sx={flex}>
        <Title>
          <Typography sx={{ background: 'linear-gradient(180deg, #8AFFC5 6.58%, #1DB167 80.6%)' }}>Health Token</Typography>
          <Typography>&</Typography>
          <Typography sx={{ background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)' }}>SOCIAL TOKEN</Typography>
        </Title>
        <img src={BUSINESS_IMAGE.tokenDouble} />
      </Box>
      <SubTitle>Two utility tokens incentivise users to use the app.</SubTitle>
      <Box sx={flex}>
        <Details>{BUSINESS_TOKEN.hee} <BorderGreen></BorderGreen></Details>
        <Details sx={{'& span': {color: '#FF6D24'}}}>{BUSINESS_TOKEN.fiu} <BorderOrange></BorderOrange></Details>
      </Box>
      <Body>{BUSINESS_TOKEN.body?.map((item, index) => (
        <Typography key={index}>{item}</Typography>
      ))}</Body>
    </Wrap>
  )
}

const flex = {
  display: 'flex', align: 'center', justifyContent: 'space-between'
}
const BorderGreen = styled(Box)({
  height: 3,
  background: 'radial-gradient(100% 6987211.78% at 100% 99.95%, rgba(29, 178, 104, 0) 0%, #1DB268 51.04%, rgba(29, 178, 104, 0) 100%)',
  width: '100%',
  marginLeft: 30
})
const BorderOrange = styled(Box)({
  height: 3,
  background: 'radial-gradient(100% 6987211.78% at 100% 99.95%, rgba(255, 109, 36, 0) 0%, #FF6D24 51.04%, rgba(255, 109, 36, 0) 100%)',
  width: '100%',
  marginLeft: 30
})
const Wrap = styled(Box)({
  marginBottom: 40,
  '@media (min-width: 768px)': {
    marginBottom: 120
  }
})
const Title = styled(Box)({
  '& p': {
    ...TEXT_STYLE(24, 700),
    '@media (min-width: 768px)': {
      ...TEXT_STYLE(80, 700),
    }
  },
  '& p:first-of-type, & p:last-of-type': {
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    fontFamily: 'Electrofied',
  },
  '& p:nth-child(2)': {
    ...TEXT_STYLE(16, 600, '#ffffff'),
    '@media (min-width: 768px)': {
      ...TEXT_STYLE(48, 600, '#ffffff'),
    }
  }
})
const SubTitle = styled(Typography)({
  ...TEXT_STYLE(20, 600),
  marginBottom: 24,
  '@media (min-width: 768px)': {
    ...TEXT_STYLE(48, 600),
    marginBottom: 80
  }
})
const Details = styled(Box)({
  width: 'calc(50% - 20px)',
  '& p': {
    ...TEXT_STYLE(16, 500, '#ffffff'),
    marginBottom: 4,
    '@media (min-width: 768px)': {
      ...TEXT_STYLE(32, 500, '#ffffff'),
    }
  },
  '& span': {
    ...TEXT_STYLE(16, 700, '#1DB268'),
    '@media (min-width: 768px)': {
      ...TEXT_STYLE(32, 700, '#1DB268'),
    }
  }
})
const Body = styled(Box)({
  marginTop: 24,
  '@media (min-width: 768px)': {
    marginTop: 80
  },
  '& p': {
    ...TEXT_STYLE(16, 500, '#ffffff'),
    '@media (min-width: 768px)': {
      ...TEXT_STYLE(32, 500, '#ffffff'),
      marginBottom: 25,
    }
  }
})