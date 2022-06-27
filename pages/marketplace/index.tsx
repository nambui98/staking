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

  return (
    <MainLayout sxProps={{backgroundColor: "#FFFFFF"}}>
      <Wrap>
        <Container disableGutters sx={container}>
          <Inner>
            <BoxLeft>
              <ProductPrice/>
            </BoxLeft>
            <BoxRight>
              <ProductDetail/>
            </BoxRight>
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
  width: '100%',
  color: '#31373E',
  marginTop: 6,
  '@media (min-width: 768px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18
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
