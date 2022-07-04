import { Box, Stack, styled, Typography, TypographyProps } from "@mui/material"
import { useWalletContext } from "../../../contexts/WalletContext"
import { ICON } from "../../../constants/assetsWallet";
import { TEXT_STYLE } from "../../../styles/common/textStyles";

export const TokenTab = () => {
  const {fiuBalance, heeBalance, bnbBalance} = useWalletContext();
  return (
    <Wrap>
      <Item sx={ItemFiu}>
        <ItemLeft>
          <Title>Your balance</Title>
          <Amount typeBnb={false}>{fiuBalance} {fiuBalance?.length && parseFloat(fiuBalance) > 0 ? parseFloat(fiuBalance).toFixed(4) : '0.00'}<span>FIU</span></Amount>
        </ItemLeft>
        <ImageToken><img src={ICON.fiu} /></ImageToken>
      </Item>
      <Item sx={ItemHee}>
        <ItemLeft>
          <Title>Your balance</Title>
          <Amount typeBnb={false}>{heeBalance} {heeBalance?.length && parseFloat(heeBalance) > 0 ? parseFloat(heeBalance).toFixed(4) : '0.00'}<span>HEE</span></Amount>
        </ItemLeft>
        <ImageToken><img src={ICON.hee} /></ImageToken>
      </Item>
      <Item sx={ItemBnb}>
        <ItemLeft>
          <Title sx={{color: '#31373E'}}>Your balance</Title>
          <Amount typeBnb={true}>{bnbBalance?.length && parseFloat(bnbBalance) > 0 ? parseFloat(bnbBalance).toFixed(4) : '0.00'} <span>BNB</span></Amount>
        </ItemLeft>
        <ImageToken><img src={ICON.bnbBig} /></ImageToken>
      </Item>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  marginTop: 16,
  width: '100%',
  '@media (min-width: 768px)': {
    marginTop: 0
  }
})
const Title = styled(Typography)({
  ...TEXT_STYLE(12, 600, '#ffffff'),
  marginBottom: 8
})
type amountProps = TypographyProps & {
  typeBnb: boolean
}
const Amount = styled(Typography)((props: amountProps) => ({
  ...TEXT_STYLE(32, 600, props.typeBnb ? '#31373E' : '#ffffff'),
  display: 'flex',
  '@media (min-width: 768px)': {
    ...TEXT_STYLE(40, 600, props.typeBnb ? '#31373E' : '#ffffff'),
  },
  '& span': {
    ...TEXT_STYLE(16, 500, props.typeBnb ? '#31373E' : '#F8F9FB'),
    marginLeft: 8
  }
}))
const Item = styled(Box)({
  marginBottom: 8,
  borderRadius: 12,
  padding: '16px 18px 16px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media (min-width: 768px)': {
    marginBottom: 24,
    padding: '19px 18px 19px 24px',
  },
  '&:last-of-type': {
    marginBottom: 0
  },
  '& img': {
    width: 52,
    height: 52,
    '@media (min-width: 768px)': {
      width: 85,
      height: 85
    }
  }
})
const ItemLeft = styled(Box)({

})
const ImageToken = styled(Box)({
  lineHeight: 0
})
const ItemFiu = {
  background: 'linear-gradient(84.49deg, #FF612F 2.08%, rgba(255, 109, 36, 0) 70.33%)'
}
const ItemHee = {
  background: 'linear-gradient(84.49deg, #1DB268 2.08%, rgba(29, 178, 104, 0) 67.71%)'
}
const ItemBnb = {
  background: 'linear-gradient(84.49deg, #FFC83A 2.08%, rgba(255, 200, 58, 0) 67.19%)'
}