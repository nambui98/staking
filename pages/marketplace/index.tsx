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
import { ProductDetail } from "../../components/pageComponent/marketplace/ProductDetail";
import { ProductPrice } from "../../components/pageComponent/marketplace/ProductPrice";

const Marketplace: NextPage = () => {
  const [productDetailActive, setProductDetailActive] = useState<boolean>(false);
  const [currentProductDetail, setCurrentProductDetail] = useState<any>();
  const [popupConnectWallet, setPopupConnectWallet] = useState<boolean>(true);
  const [popupCheckout, setpopupCheckout] = useState<boolean>(true);
  const [popupApproveToken, setpopupApproveToken] = useState<boolean>(true)
  const [popupPaymentSuccess, setPopupPaymentSuccess] = useState<boolean>(true)

  return (
    <MainLayout sxProps={{backgroundColor: "#FFFFFF"}}>
      <Wrap>
        <Container disableGutters sx={container}>
          <Inner>
            <BoxLeft>
              <ProductPrice/>
            </BoxLeft>
            <BoxRight></BoxRight>
          </Inner>
        </Container>
      </Wrap>
      {/* <Checkout status={popupCheckout} handleToggleStatus={setpopupCheckout} />
      <ApproveToken status={popupApproveToken} handleToggleStatus={setpopupApproveToken} />
      <PaymentSuccess status={popupPaymentSuccess} handleToggleStatus={setPopupPaymentSuccess} /> */}
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
  maxWidth: { xl: 1120 },
} 

const Inner = styled(Stack)({
  '@media (min-width: 768px)': {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})
const BoxLeft = styled(Stack)({
  '@media (min-width: 768px)': {
    width: 'calc(50% - 37)'
  }
})
const BoxRight = styled(Stack)({

})
