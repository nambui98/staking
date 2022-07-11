import { Container } from "@mui/material";
import HomeLayoutNew from "../components/layouts/HomeLayoutNew";
import { Banner } from "../containers/business/Banner";
import { Intro } from "../containers/business/Intro";
import { Token } from "../containers/business/Token";

const Business = () => {
  return (
    <HomeLayoutNew sxProps={{ background: '#111021' }} headerLandingPage={true}>
      <Banner />
      <Container sx={{ maxWidth: { xl: 1680 + 48 } }}>
        <Intro />
        <Token/>
      </Container>
    </HomeLayoutNew>
  )
}

export default Business;
