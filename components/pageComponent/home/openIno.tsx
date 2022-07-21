import { Box, Link, Stack, styled, Typography } from "@mui/material";
import { NextPage } from "next";
import MainLayout from "../../layouts/MainLayout";
import StayInTouch from "../../sections/StayInTouch";
import { BOX_IMAGE, BOX_LIST_ITEM } from "../../../constants/openIno";

const OpenIno: NextPage = () => {
  return (
    <Wrap>
      <BoxOpenImage><img src={BOX_IMAGE} /></BoxOpenImage>
      <ListBox>
        {BOX_LIST_ITEM?.map((item, index) => (
          <BoxItem key={index}><img src={item.image} />
            <BoxItemBody>
              {index === 2 ? 
                <span>When your NFT item is shown on your wallet {'>'} transfer it from <b>Wallet</b> to your <b>Spending</b> in beFITTER app for unboxing process</span> : 
                index === 1 ? 
                <span>When you successfully buy a box {'->'} go to our website to <Link target='_blank' underline='always' href="assets/Claim-box-instruction.pdf">claim</Link> your beFITTER Mystery Shoe Box NFT(s)</span> : 
                item.body
              }
            </BoxItemBody> 
          </BoxItem>
        ))}
      </ListBox>
    </Wrap>
  )
}

export default OpenIno;

const Wrap = styled(Stack)({
  padding: '0 16px',
  maxWidth: '1120px',
  margin: '29px auto 50px',
  '@media (min-width: 560px)': {
    margin: '29px auto 80px',
  }
})

const BoxOpenImage = styled(Box)({
  margin: '0 auto 56px',
  '@media (min-width: 560px)': {
    margin: '0 auto 86px',
  },
  '& img': {
    width: '100%',
  }
})
const ListBox = styled(Stack)({
  justifyContent: 'space-between',
  flexDirection: 'row',
  flexWrap: 'wrap',
})
const BoxItem = styled(Box)({
  textAlign: 'center',
  width: '100%',
  marginBottom: '30px',
  '@media (min-width: 560px)': {
    width: 'calc(50% - 30px)',
  },
  '@media (min-width: 992px)': {
    width: 'calc(25% - 16px)',
    marginBottom: '0'
  },
  '& img': {
    width: '68%',
    '@media (min-width: 560px)': {
      width: '60%',
      marginBottom: '23px',
    },
    '@media (min-width: 992px)': {
      width: '100%',
    },
  }
})
const BoxItemBody = styled(Typography)({
  '&, & a': {
    fontSize: '16px',
    fontWeight: '500',
    color: '#31373E',
    textAlign: 'center',
    lineHeight: '1.4'
  },
  '& a': {
    textDecoration: 'underline',
  }
})