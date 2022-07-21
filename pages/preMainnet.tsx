import { NextPage } from "next";
import HomeLayout from "../components/layouts/HomeLayout";
import { BoxDownload } from "../components/pageComponent/openBeta/BoxDownload";
import { ImageCountdown } from "../components/pageComponent/openBeta/ImageCountdown";
import { TabBody } from "../components/pageComponent/openBeta/TabBodyPreMainnet";
import StayInTouch from "../components/sections/StayInTouch";

const  PreMainnet: NextPage = () => {
  return (
		<HomeLayout sxProps={{ background: '#fff' }} headerLandingPage={true}>

      <ImageCountdown imageTitle="assets/preMainnetTitle.png" countDown="2022-07-06T14:00:00.000Z" title='Begins in' />
      <TabBody/>
      <BoxDownload/>
      <StayInTouch/>
    </HomeLayout>
  )
}

export default PreMainnet;