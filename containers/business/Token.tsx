import { Box, styled, Typography, useMediaQuery } from "@mui/material"
import { BUSINESS_IMAGE, BUSINESS_TOKEN } from "../../constants/business"
import { TEXT_STYLE } from "../../styles/common/textStyles"

export const Token = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <Wrap>
      <BoxTop sx={flex}>
        <Title>
          <Typography sx={{ 
            background: 'linear-gradient(180deg, #8AFFC5 6.58%, #1DB167 80.6%)',
            fontStyle: 'italic',
            '@media (max-width: 767px)': {
              textAlign: 'left',
              marginBottom: '10px',
              background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)'
            },
            '@media (min-width: 1440px)': {
              width: '715px'
            }
         }}>{isMobile ? 'SOCIAL TOKEN' : 'Health Token'}</Typography>
          {!isMobile && <Typography>&</Typography>}
          {!isMobile && <Typography sx={{ background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)', fontStyle: 'italic' }}>SOCIAL TOKEN</Typography>}
          {isMobile && <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}>
            <Box sx={{
              ...TEXT_STYLE(16, 600, '#ffffff'),
              marginRight: '8px'
            }}>&</Box>
            <Typography sx={{ 
              background: 'linear-gradient(180deg, #8AFFC5 6.58%, #1DB167 80.6%)', 
              fontSize: '24px !important', 
              fontStyle: 'italic',
              
             }}>Health Token</Typography>
          </Box>}
        </Title>
        <ImageTop><img src={BUSINESS_IMAGE.tokenDouble} /></ImageTop>
      </BoxTop>
      <SubTitle>Two utility tokens incentivise users to use the app.</SubTitle>
      <Box sx={{
        ...flex,
        '@media (max-width: 767px)': {
          flexDirection: 'column'
        }
      }}>
        <Details>{BUSINESS_TOKEN.hee} <BorderGreen></BorderGreen></Details>
        <Details sx={{'& span': {color: '#FF6D24'}}}>{BUSINESS_TOKEN.fiu} <BorderOrange></BorderOrange></Details>
      </Box>
      <Body>{BUSINESS_TOKEN.body?.map((item, index) => (
        <Box key={index}>{item}</Box>
      ))}</Body>
    </Wrap>
  )
}

const BoxTop = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column-reverse',
  '@media (min-width: 768px)': {
    flexDirection: 'row',
  }
})
const ImageTop = styled(Box)({
  '& img': {
    width: '100%',
  },
  '@media (min-width: 768px)': {
    maxWidth: 500
  }
})
const flex = {
  display: 'flex', align: 'center', justifyContent: 'space-between'
}
const BorderGreen = styled(Box)({
  height: 3,
  background: 'radial-gradient(100% 6987211.78% at 100% 99.95%, rgba(29, 178, 104, 0) 0%, #1DB268 51.04%, rgba(29, 178, 104, 0) 100%)',
  width: '100%', 
  marginBottom: 17,
  '@media (min-width: 768px)': {
    marginLeft: 30,
    marginBottom: 0
  }
})
const BorderOrange = styled(Box)({
  height: 3,
  background: 'radial-gradient(100% 6987211.78% at 100% 99.95%, rgba(255, 109, 36, 0) 0%, #FF6D24 51.04%, rgba(255, 109, 36, 0) 100%)',
  width: '100%',
  '@media (min-width: 768px)': {
    marginLeft: 30
  },
})
const Wrap = styled(Box)({
  marginBottom: 40,
  '@media (min-width: 768px)': {
    marginBottom: 120
  }
})
const Title = styled(Box)({
  paddingRight: 0,
  marginBottom: 13,
  '@media (min-width: 768px)': {
    paddingRight: 20,
    marginBottom: 0
  },
  '@media (max-width: 767px)': {
    width: '100%',
    textAlign: 'center',
  },
  '& p': {
    ...TEXT_STYLE(24, 700),
    textTransform: 'uppercase',
    '@media (min-width: 768px)': {
      ...TEXT_STYLE(80, 700),
    }
  },
  '& p:first-of-type, & p:last-of-type': {
    'WebkitBackgroundClip': 'text',
    'WebkitTextFillColor': 'transparent',
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
  ...TEXT_STYLE(20, 600, '#ffffff'),
  marginBottom: 24,
  '@media (min-width: 768px)': {
    ...TEXT_STYLE(48, 600, '#ffffff'),
    marginBottom: 80
  }
})
const Details = styled(Box)({
  width: '100%',
  '@media (min-width: 768px)': {
    width: 'calc(50% - 20px)',
  },
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