import { Box, Container, Stack, styled, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { ProductDetail } from "../../components/pageComponent/marketplace/ProductDetail";
import { ProductPrice } from "../../components/pageComponent/marketplace/ProductPrice";
import { BOX_DETAIL } from "../../constants/marketplace";

interface boxDetail {
  price: number, 
  type: string,
  video: string, 
  videoIphone: string,
  image_small: string, 
  image_large: string, 
  title: string,
  properties: {
    title: string, titleBg: string, chance: string, icon: string
  }[],
  information: {
    introduction: string[],
    info: string[]
  }  
}
export interface MarketplaceProps {
  boxDetail: boxDetail
  setBoxDetail: (value: any) => void
}

const Marketplace: NextPage = () => {
  const [boxDetail, setBoxDetail] = useState<boxDetail>({ 
    price: 0, 
    type: BOX_DETAIL.box_gold.type,  
    video: BOX_DETAIL.box_gold.video, 
    videoIphone: BOX_DETAIL.box_gold.videoIphone,
    image_small: BOX_DETAIL.box_gold.image_small, image_large: BOX_DETAIL.box_gold.image_large,
    title: BOX_DETAIL.box_gold.title,
    properties: BOX_DETAIL.box_gold.properties,
    information: BOX_DETAIL.box_gold.information
  })
  return (
    <MainLayout sxProps={{backgroundColor: "#FFFFFF"}}>
      <Wrap>
        <Container disableGutters sx={container}>
          <Inner>
            <BoxLeft>
              <ProductPrice boxDetail={boxDetail} setBoxDetail={setBoxDetail} />
            </BoxLeft>
            <BoxRight>
              <ProductDetail boxDetail={boxDetail} setBoxDetail={setBoxDetail} />
            </BoxRight>
          </Inner>
        </Container>
      </Wrap>
      {/* <ApproveToken status={popupApproveToken} handleToggleStatus={setpopupApproveToken} />
      <PaymentSuccess status={popupPaymentSuccess} handleToggleStatus={setPopupPaymentSuccess} /> */}
    </MainLayout>
  )
}

export default Marketplace;

const Wrap = styled(Box)({
  width: '100%',
  color: '#31373E',
  marginBottom: 30,
  '@media (min-width: 768px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  }
})
const container = {
  maxWidth: { xl: 1120 },
  padding: '0 16px',
  '@media (min-width: 768px)': {
    padding: '0 24px'
  }
} 

const Inner = styled(Stack)({
  width: '100%',
  color: '#31373E',
  marginTop: 6,
  '@media (min-width: 768px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18
  }
})
const BoxLeft = styled(Stack)({
  '@media (min-width: 768px)': {
    marginRight: 35
  },
  '@media (min-width: 1280px)': {
    marginRight: 75
  }
})
const BoxRight = styled(Stack)({

})
const customWidthPopup = {
  '@media (min-width: 650px)': {
    width: '544px !important'
  }
}