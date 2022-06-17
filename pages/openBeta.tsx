import { NextPage } from "next";
import MainLayout from "../components/layouts/MainLayout";
import { ImageCountdown } from "../components/pageComponent/openBeta/ImageCountdown";
import { TabBody } from "../components/pageComponent/openBeta/TabBody";

const  OpenBeta: NextPage = () => {
  return (
    <MainLayout sxProps={{ background: '#fff' }}>
      <ImageCountdown/>
      <TabBody/>
    </MainLayout>
  )
}

export default OpenBeta;