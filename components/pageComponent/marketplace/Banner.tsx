import { Box, Container, Stack, Typography, styled } from "@mui/material"
import { BANNER } from "../../../constants/marketplace"

export const Banner = () => {
  return (
    <Wrap>
      <Container disableGutters sx={container} >
        <BannerInner>
          <Title variant="h1"><span>{BANNER.titleTop}</span><br/><span>{BANNER.titleBot}</span></Title>
        </BannerInner>
      </Container>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  margin: '0 16px'
})

const container = {
  maxWidth: { xl: 1920 - 240 },
} 
const BannerInner = styled(Stack)({
  margin: '24px 0', 
  backgroundImage: `url(${BANNER.imageMobile})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: '16px',
  backgroundPosition: 'center',
  '@media (min-width: 768px)': {
    margin: '24px 0 52px',    
    backgroundImage: `url(${BANNER.imageDesktop})`,
  },
})
const Title = styled(Typography)({
  padding: '56px 0',
  fontSize: '23px !important',
  fontStyle: 'italic',
  fontFamily: 'Electrofied',
  textAlign: 'center',
  '@media (min-width: 768px)': {
    marginLeft: '40px',
    padding: '62px 0',
    textAlign: 'left',    
    fontSize: '40px !important',
  }
})