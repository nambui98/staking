import { Box, Container, Stack, styled } from "@mui/material"
import { NextPage } from "next"
import MainLayout from "../components/layouts/MainLayout"
import { LeaderboardTab } from "../components/pageComponent/leaderboard/leaderboardTab"
import StayInTouch from "../components/sections/StayInTouch"
import { TITLE } from "../constants/leaderboard"

const Leaderboard: NextPage = () => {
  return (
    <MainLayout sxProps={{ background: '#fff' }}>
      <Container>
        <Wrap>
          <Title><img src={TITLE} /></Title>
          <LeaderboardTab/>
        </Wrap>
      </Container>
      <StayInTouch/>
    </MainLayout>
  )
}

const Wrap  = styled(Stack)({
  margin: '24px auto 80px',
  maxWidth: 616
})
const Title = styled(Box)({
  marginBottom: 24,
  textAlign: 'center',
  '& img': {
    maxWidth: '100%',
  }
})

export default Leaderboard