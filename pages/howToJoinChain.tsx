import { Link, Stack, Typography, Box, useMediaQuery, Container } from "@mui/material";
import { styled } from "@mui/system";
import { STEPS_IMAGE, TITLE, TITLE_BOTTOM } from "../constants/howToJoinChain";
import { TAB_BODY } from "../constants/openBeta";

const JoinChain = () => {
  const isMobile = useMediaQuery('(max-width:767px)')
  return (
    <Wrap>
      <Container sx={{ maxWidth: { xl: 1278 } }}>
        <Title><img src={isMobile ? TITLE.mobile : TITLE.desktop} /></Title>
        <Steps>
          <StepItem>
            <BoxBody>
              <StepTitleItem>STEP 1</StepTitleItem>
              <GuideItem>
                Download <span>beFITTER</span> App
                <Typography sx={{ margin: '10px 0' }}><Link href='#' target="_blank">For Android</Link></Typography>
                <Typography><Link href='#' target="_blank">For iOS</Link></Typography>
              </GuideItem>
            </BoxBody>
          </StepItem>
          <StepItem>
            <BoxBody>
              <StepTitleItem>STEP 2</StepTitleItem>
              <GuideItem>
                Open <span>beFITTER</span> app, go to your <b>Profile</b>, choose <b>Wallet</b>. You’ll automatically be landed on the <b>Spending</b> tab, switch it to <b>Wallet</b> tab and choose <b>Import a wallet</b>.
              </GuideItem>
            </BoxBody>
            <GuideImageItem><img src={isMobile ? STEPS_IMAGE.step2Mobile : STEPS_IMAGE.step2} /></GuideImageItem>
          </StepItem>
          <StepItem>
            <BoxBody>
              <StepTitleItem>STEP 3</StepTitleItem>
              <GuideItem>
                Claim shoes in Wallet
              </GuideItem>
            </BoxBody>
            <GuideImageItem><img src={STEPS_IMAGE.step3} /></GuideImageItem>
          </StepItem>
          <StepItem>
            <BoxBody>
              <StepTitleItem>STEP 4</StepTitleItem>
              <GuideItem>
                <Typography sx={{ marginBottom: '10px' }}>You need BNB Testnet to claim shoes. Go to <Link href='https://testnet.binance.org/faucet-smart'>this website</Link> to claim BNB testnet</Typography>
                Paste/input your wallet address in and click <b>Give me BNB</b>, choose the amount allowed by the website. Your Testnet wallet should receive that amount within seconds.
              </GuideItem>
            </BoxBody>
            <GuideImageItem><img src={isMobile ? STEPS_IMAGE.step4Mobile : STEPS_IMAGE.step4} /></GuideImageItem>
          </StepItem>
          <StepItem>
            <BoxBody>
              <StepTitleItem>STEP 5</StepTitleItem>
              <GuideItem>
                After finishing setting up your wallet, you’ll see the number of Shoes available in your Testnet wallet. Choose <b>Shoes</b>  and you’ll see a list of those assets that you own. Choose the item that you have been rewarded and send it <b>To Inventory</b>.
              </GuideItem>
            </BoxBody>
            <GuideImageItem><img src={isMobile ? STEPS_IMAGE.step5Mobile : STEPS_IMAGE.step5} /></GuideImageItem>
          </StepItem>
          <StepItem>
            <BoxBody>
              <StepTitleItem>STEP 6</StepTitleItem>
              <GuideItem>
                in <b>Transaction</b> page, transaction fee will be shown to you. Make sure your BSC Testnet balance is sufficient for this transaction!
              </GuideItem>
            </BoxBody>
            <GuideImageItem><img src={STEPS_IMAGE.step6} /></GuideImageItem>
          </StepItem>
          <StepItem>
            <BoxBody>
              <StepTitleItem>STEP 7</StepTitleItem>
              <GuideItem>
                Your genesis shoe NFT will be successfully transferred to your Spending Wallet as long as you follow this exact instruction. Now take it wherever you go and be ready to conquer the challenge!
              </GuideItem>
            </BoxBody>
          </StepItem>
        </Steps>
        <BoxBottom>
          <TitleBottom><img src={TITLE_BOTTOM} /></TitleBottom>
          <Stack>
            <TitleBottomItem>SUMMARY</TitleBottomItem>
            <Stack>
              {TAB_BODY.summary.list?.map((item, index) => (
                <SummaryTitleItem key={index}><Typography>{item.title}</Typography> <span>{item.data}</span></SummaryTitleItem>
              ))}
            </Stack>
            <TitleBottomItem sx={{ fontSize: '24px' }}>REWARD</TitleBottomItem>
            <TotalPrize>
              <TotalPrizeTitle>{TAB_BODY.reward.total.title}</TotalPrizeTitle>
              <TotalPrizeBody><span>10,000 $FIU</span> and <span>370 shoe NFTs</span>, each NFT could worth up to 1,000 USD</TotalPrizeBody>
            </TotalPrize>
          </Stack>
        </BoxBottom>
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
  marginBottom: 24,
  '& img': {
    width: '100%'
  },
  '@media (min-width: 768px)': {
    marginBottom: 72
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

export default JoinChain;