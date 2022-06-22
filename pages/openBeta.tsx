import { NextPage } from "next";
import MainLayout from "../components/layouts/MainLayout";
import { BoxDownload } from "../components/pageComponent/openBeta/BoxDownload";
import { ImageCountdown } from "../components/pageComponent/openBeta/ImageCountdown";
import { TabBody } from "../components/pageComponent/openBeta/TabBody";
import StayInTouch from "../components/sections/StayInTouch";

const  OpenBeta: NextPage = () => {
  return (
    <MainLayout sxProps={{ background: '#fff' }}>
      <ImageCountdown/>
      <TabBody/>
      <BoxDownload/>
      <StayInTouch/>
    </MainLayout>
  )
}

export default OpenBeta;