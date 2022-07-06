import { NextPage } from "next";
import MainLayout from "../components/layouts/MainLayout";
import { BoxDownload } from "../components/pageComponent/openBeta/BoxDownload";
import { ImageCountdown } from "../components/pageComponent/openBeta/ImageCountdown";
import { TabBody } from "../components/pageComponent/openBeta/TabBodyPreMainnet";
import StayInTouch from "../components/sections/StayInTouch";

const  PreMainnet: NextPage = () => {
  return (
    <MainLayout sxProps={{ background: '#fff' }}>
      <ImageCountdown imageTitle="assets/preMainnetTitle.png" countDown="2022-07-06T14:00" hideLinkPdf={true} title='Begins in' />
      <TabBody/>
      <BoxDownload/>
      <StayInTouch/>
    </MainLayout>
  )
}

export default PreMainnet;