import { Link, Stack, Typography, Box, useMediaQuery, Container } from "@mui/material";
import { styled } from "@mui/system";
import { STEPS_IMAGE, TITLE, TITLE_BOTTOM } from "../constants/howToJoinChain";
import { TAB_BODY } from "../constants/openBeta";
import { TEXT_STYLE } from "../styles/common/textStyles";

const HowToTransfer = () => {
  const isMobile = useMediaQuery('(max-width:767px)')
  return (
    <Wrap>
      <Container sx={{ maxWidth: { xl: 1278 } }}>
        <Title>
          <Box>
            <Typography>HOW TO</Typography>
            <Typography>TRANSFER YOUR ASSETS</Typography>
            <Typography>From Wallet to Spending</Typography>
          </Box>
          <Box><img src="assets/logo/logo-text-black.png" /></Box>
        </Title>
        <Steps>
          <StepItem>
            <BoxBody>
              <StepTitleItem>STEP 1</StepTitleItem>
              <GuideItem>
                After successfully register, go to <a href="https://hub.befitter.io/">hub.befitter.io</a> and connect your wallet
              </GuideItem>
            </BoxBody>
          </StepItem>
          <StepItem>
            <BoxBody>
              <StepTitleItem>STEP 2</StepTitleItem>
              <GuideItem>
                Connect your Wallet through MetaMask
              </GuideItem>
            </BoxBody>
            <GuideImageItem><img src={isMobile ? 'assets/transfer1-mobile.png' : 'assets/transfer1.png'} /></GuideImageItem>
          </StepItem>
          <StepItem>
            <BoxBody>
              <StepTitleItem>STEP 3</StepTitleItem>
              <GuideItem>
                Choose Assets you want to send, then enter <b>the email that connected to the account in</b> <b><span>beFITTER app</span></b>
              </GuideItem>
            </BoxBody>
            <GuideImageItem><img src={isMobile ? 'assets/transfer2-mobile.png' : 'assets/transfer2.png'} /></GuideImageItem>
          </StepItem>
          <StepItem>
            <BoxBody>
              <StepTitleItem>STEP 4</StepTitleItem>
              <GuideItem>
                Click <b>Approve</b>, allow access on MetaMask<br></br>
                Then click <b>Send to Spending</b> and <b>Confirm</b><br></br>
                When succeeded, go to your <b>Inventory in app</b> to view assets
              </GuideItem>
            </BoxBody>
            <GuideImageItem><img src={isMobile ? 'assets/transfer3-mobile.png' : 'assets/transfer3.png'} /></GuideImageItem>
          </StepItem>
        </Steps>
      </Container>
    </Wrap >
  )
}

const colorGradient = {
  WebkitBackgroundClip: 'text !important',
  WebkitTextFillColor: 'transparent',
  background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)'
}
const Wrap = styled(Stack)({
  backgroundColor: '#ffffff',
})
const Title = styled(Box)({
  margin: '40px 0 40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column-reverse',
  '@media (min-width: 768px)': {
    margin: '40px 0 80px',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  '& p': {
    ...TEXT_STYLE(16, 700, '#31373E'),
    fontFamily: 'Electrofied',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    textAlign: 'center',
    
    '@media (min-width: 768px)': {
      textAlign: 'left',
      ...TEXT_STYLE(24, 700, '#31373E'),
      marginBottom: 10,
    },
  },
  '& p:nth-child(2)': {
    ...TEXT_STYLE(24, 700, '#FF6D24'),
    '@media (min-width: 768px)': {
      textAlign: 'left',
      ...TEXT_STYLE(32, 700, '#FF6D24'),
    },
  },
  '& img': {
    '@media (max-width: 767px)': {
      marginBottom: 30
    }
  }
})
const BoxBottom = styled(Stack)({
  '@media (min-width: 768px)': {
    flexDirection: 'row',
  }
})
const TitleBottom = styled(Box)({
  marginRight: 25,
  '& img': {
    maxWidth: '100%'
  }
})
const TitleBottomItem = styled(Typography)({
  backgroundImage: 'radial-gradient(75% 75% at 21.87% 25%, #FFCC77 18.94%, #FF612F 89.59%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontFamily: 'Electrofied',
  fontSize: 32,
  marginBottom: 20,
  fontStyle: 'italic',
})
const SummaryTitleItem = styled(Typography)({
  color: '#31373E',
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '20px',
  display: 'flex',
  '& p': {
    fontWeight: '500',
    color: '#5A6178',
    minWidth: '206px',
    marginRight: '40px',
    display: 'inline-block',
    fontSize: 18
  },
  '@media (max-width: 767px)': {
    display: 'flex',
    fontSize: '16px',
    '& span': {
      margin: '0 0 0 16px',
      display: 'block'
    },
    '& p': {
      minWidth: 128,
      marginRight: 8,
      fontSize: 16,
      maxWidth: 128
    }
  }
})
const Steps = styled(Stack)({
  paddingBottom: 16,
  borderBottom: '2px solid #E9EAEF',
  marginBottom: 40
})
const StepItem = styled(Stack)({
  marginBottom: 24,
})
const BoxBody = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'flex-start',
})
const StepTitleItem = styled(Typography)({
  fontSize: 16,
  fontFamily: 'Electrofied',
  fontStyle: 'italic',
  color: '#31373E',
  padding: '0 0 4px 0',
  borderBottom: '2px solid #FF8A50',
  marginRight: 24,
  minWidth: 73
})
const GuideItem = styled(Typography)({
  '&, & p': {
    color: '#31373E',
    fontSize: 16,
    lineHeight: '23px',
    fontWeight: '500',
    '@media (min-width: 768px)': {
      fontSize: 18,
    }
  },
  '& span, & a': {
    color: '#FF8A50',
    fontWeight: '500'
  },
  '& a': {
    textDecoration: 'underline',
  }
})
const GuideImageItem = styled(Box)({
  margin: '10px 0 0 80px',
  '& img': {
    maxWidth: '100%'
  }
})
const TotalPrize = styled(Stack)({
  backgroundImage: 'url(assets/border5.png)',
  backgroundRepeat: 'no-repeat',
  padding: '13px 34px',
  marginBottom: 40,
  backgroundPosition: '100%',
  backgroundSize: 'cover',
  '@media (max-width: 1023px)': {
    backgroundPosition: '100%',
    backgroundSize: 'cover'
  },
  '@media (max-width: 479px)': {
    padding: '16px 35px',
    backgroundImage: 'url(assets/borderMobile.png)',
  }
})
const TotalPrizeTitle = styled(Typography)({
  fontSize: 21,
  fontStyle: 'italic',
  fontFamily: 'Electrofied',
  marginBottom: 10,
  color: '#31373E',
  '@media (min-width: 768px)': {
    fontSize: 24,
    marginBottom: 16,
  }
})
const TotalPrizeBody = styled(Typography)({
  fontSize: 16,
  fontWeight: 500,
  color: '#31373E',
  '& span': {
    ...colorGradient,
    fontWeight: 700,
  },
  '@media (min-width: 768px)': {
    fontSize: 24,
  }
})

export default HowToTransfer;