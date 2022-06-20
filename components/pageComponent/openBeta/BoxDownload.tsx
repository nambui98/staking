import { Container, Stack, styled, Box, Typography, Link, useMediaQuery } from "@mui/material"
import { BOX_DOWNLOAD } from "../../../constants/openBeta"

export const BoxDownload = () => {
  const isMobile = useMediaQuery('(max-width:1023px)');
  return (
    <Wrap>
      {!isMobile && <BgOrange><img src={BOX_DOWNLOAD.backgroundImage} /></BgOrange>}
      <Container sx={{ maxWidth: { xl: 1200 } }}>
        <Inner>
          <BoxImage><img src={BOX_DOWNLOAD.image} /></BoxImage>
          <BoxRight>
            <Title><img src={BOX_DOWNLOAD.titleImage} /></Title>
            <BoxDownloadRight>
              <DownloadItem href={BOX_DOWNLOAD.linkIos}><img src={BOX_DOWNLOAD.appleIcon} /> <Typography>Download on <span>App Store</span></Typography></DownloadItem>
              <DownloadItem href={BOX_DOWNLOAD.linkAndroid}><img src={BOX_DOWNLOAD.googleIcon} /> <Typography>Download on <span>Google Play</span></Typography></DownloadItem>
            </BoxDownloadRight>
          </BoxRight>
        </Inner>
      </Container>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  marginBottom: 80,
  position: 'relative',
})
const BgOrange = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
})
const Inner = styled(Stack)({
  justifyContent: 'center',
  '@media (min-width: 1024px)': {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
})
const BoxImage = styled(Box)({
  marginRight: 36,
  marginBottom: 17,
  textAlign: 'center',
  '& img': {
    maxWidth: '100%'
  },
  '@media (min-width: 1024px)': {
    marginBottom: 0,
    textAlign: 'left'
  }
})
const BoxRight = styled(Stack)({

})
const Title = styled(Box)({
  marginBottom: 17,
  textAlign: 'center',
  '& img': {
    maxWidth: '100%'
  },
  '@media (min-width: 768px)': {
    marginBottom: 44
  },
  '@media (min-width: 1024px)': {
    textAlign: 'left'
  }
})
const BoxDownloadRight = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'center',
  '@media (min-width: 1024px)': {
    justifyContent: 'flex-start',
  }
})
const DownloadItem = styled(Link)({
  border: '2px solid #E9EAEF',
  borderRadius: 16,
  padding: '14px 13px',
  width: 193,
  display: 'flex',
  alignItems: 'center',
  '&:first-child': {
    marginRight: 8,
    '@media (min-width: 768px)': {
      marginRight: 24,
    }
  },
  '& p': {
    fontSize: 12,
    fontWeight: '500',
    color: '#5A6178',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      fontSize: 14,
    },
    '& span': {
      fontSize: 16,
      fontWeight: '600',
      display: 'block',
      '@media (min-width: 768px)': {
        fontSize: 20,
      },
    }
  },
  '& img': {
    width: 32,
    marginRight: 8,
  }
})