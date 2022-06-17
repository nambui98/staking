import { Box, Button, ButtonProps, Container, Link, Stack, styled, Typography, useMediaQuery } from "@mui/material"
import { IMAGE_COUNTDOWN } from "../../../constants/openBeta"
import CountdownClock from "../../sections/CountdownClock"

export const ImageCountdown = () => {
  const isMobile = useMediaQuery('(max-width: 579px)');
  return (
    <Wrap>
      <Container sx={{ maxWidth: { xl: 1200 } }}>
        <Inner>
          <BoxImage><img src={isMobile ? IMAGE_COUNTDOWN.imageMobile : IMAGE_COUNTDOWN.image} /></BoxImage>
          <Stack>
            <CountdownTitle>{IMAGE_COUNTDOWN.countDown.title}</CountdownTitle>
            <Body>
              <BoxCountdown>
                <CountdownClock endDate={IMAGE_COUNTDOWN.countDown.time} sxTitle={40} sxSubTitle={16} />
                <Link href=''><CountdownButton active={IMAGE_COUNTDOWN.countDown.leadboard.active}><img src={IMAGE_COUNTDOWN.countDown.leadboard.imageGray} /> {IMAGE_COUNTDOWN.countDown.leadboard.title}</CountdownButton></Link>
              </BoxCountdown>
              <BoxQuestion>
                {IMAGE_COUNTDOWN.countDown.Questions?.map((item, index) => (
                  <QuestionsItem><img src={item.imageIcon} /><Link href={item.link}>{item.title}</Link></QuestionsItem>
                ))}
              </BoxQuestion>
            </Body>
          </Stack>
        </Inner>
      </Container>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  marginBottom: '5px',
  '@media (min-width: 768px)': {
    marginBottom: '80px',
  }
})
const Inner = styled(Stack)({

})
const BoxImage = styled(Box)({
  margin: '16px 0 24px',
  '@media (min-width: 768px)': {
    margin: '57px 0 34px',
  },
  '& img': {
    width: '100%',
  }
})
const BoxCountdown = styled(Stack)({
  maxWidth: '359px',
})
const Body = styled(Stack)({
  '@media (min-width: 768px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
const CountdownTitle = styled(Typography)({
  fontSize: '20px',
  fontWeight: '500',
  fontStyle: 'italic',
  color: '#5A6178',
  marginBottom: '4px',
  textAlign: 'center',
  '@media (min-width: 768px)': {
    fontSize: '24px',
    textAlign: 'left',
  }
})
type CountdownButton = ButtonProps & {
  active: boolean
}
const CountdownButton = styled(Button)((props: CountdownButton) => ({
  padding: '14px 24px',
  borderRadius: '12px',
  background: props.active ? '#FFE2D3' : '#E9EAEF' + '!important',
  fontSize: '16px',
  fontWeight: '500',
  color: props.active ? '#FF8A50' : '#A7ACB8',
  boxShadow: 'none',
  margin: '24px 0 0',
  maxWidth: '176px',
  textTransform: 'initial',
  '& img': {
    marginRight: 8,
  },
  '@media (max-width: 767px)': {
    marginBottom: '28px',
    maxWidth: '100%',
    width: '100%',
    margin: '16px 0 24px'
  }
}))
const BoxQuestion = styled(Stack)({
  '@media (min-width: 768px)': {
    marginLeft: '30px',
  },
  '@media (min-width: 992px)': {
    marginRight: '110px',
  }
})
const QuestionsItem = styled(Typography)({
  marginBottom: '16px',
  alignItems: 'center',
  display: 'flex',
  '@media (min-width: 768px)': {
    marginBottom: '24px',
  },
  '& a': {
    color: '#31373E',
    fontSize: '16px',
    fontWeight: '500',
    '@media (min-width: 768px)': {
      fontSize: '18px',
    }
  },
  '& img': {
    marginRight: '8px'
  }
})