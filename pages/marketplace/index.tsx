import { Box, Container, Stack, styled, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import MainLayout from '../../components/layouts/MainLayout';
import { ApproveToken } from "../../components/pageComponent/marketplace/ApproveToken";
import { Banner } from "../../components/pageComponent/marketplace/Banner";
import { Checkout } from "../../components/pageComponent/marketplace/Checkout";
import { ConnectWallet } from "../../components/pageComponent/marketplace/ConnectWallet";
import {Filter} from "../../components/pageComponent/marketplace/Filter";
import ListProduct from "../../components/pageComponent/marketplace/ListProduct";
import { PaymentSuccess } from "../../components/pageComponent/marketplace/PaymentSuccess";
import { PopupMessage } from "../../components/pageComponent/marketplace/PopupMessage";
import { ProductDetail } from "../../components/pageComponent/marketplace/ProductDetail";

const Marketplace: NextPage = () => {
  const [productDetailActive, setProductDetailActive] = useState<boolean>(false);
  const [currentProductDetail, setCurrentProductDetail] = useState<any>();
  const [popupConnectWallet, setPopupConnectWallet] = useState<boolean>(true);
  const [popupCheckout, setpopupCheckout] = useState<boolean>(false);
  const [popupApproveToken, setpopupApproveToken] = useState<boolean>(false)
  const [popupPaymentSuccess, setPopupPaymentSuccess] = useState<boolean>(false)

  return (
    <MainLayout sxProps={{backgroundColor: "#FFFFFF"}}>
      <Banner />
      <Wrap>
        <Container disableGutters sx={container}>
          <Body>
            <Filter/>
            <ListProduct handleSetProductDetail={setCurrentProductDetail} handleToggleDrawer={setProductDetailActive} />
            <ProductDetail dataProduct={{}} drawerStatus={productDetailActive} handleToggleDrawer={setProductDetailActive} />
          </Body>
        </Container>
      </Wrap>
      <ConnectWallet status={popupConnectWallet} handleToggleStatus={setPopupConnectWallet} />
      <Checkout status={popupCheckout} handleToggleStatus={setpopupCheckout} />
      <ApproveToken status={popupApproveToken} handleToggleStatus={setpopupApproveToken} />
      <PaymentSuccess status={popupPaymentSuccess} handleToggleStatus={setPopupPaymentSuccess} />
    </MainLayout>
  )
}

export default Marketplace;

const Wrap = styled(Box)({
  margin: '0 16px',
  '@media (min-width: 768px)': {
    margin: '0 24px'
  }
})
const container = {
  maxWidth: { xl: 1920 - 240 },
} 

const Body = styled(Stack)({
  justifyContent: 'space-between',
  color: '#31373E',
  '@media (min-width: 768px)': {
    flexDirection: 'row',
  }
})