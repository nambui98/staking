import { Box, Stack, styled, Typography } from "@mui/material"
import { ICON } from "../../../constants/assetsWallet";
import { useWalletContext } from "../../../contexts/WalletContext"
import { TEXT_STYLE } from "../../../styles/common/textStyles";

export const Details = () => {
  const {walletAccount, bnbBalance, fiuBalance, heeBalance, shoeBalance, boxBalance, setWalletAccount} = useWalletContext();
  return (
    <Wrap>
      <Inner>
        <Top>
          <Address>{walletAccount?.slice(0, 6) + '...' + walletAccount?.slice(-3)}</Address>
          <BnbBalance>{bnbBalance?.length ? parseFloat(bnbBalance).toFixed(4) : '0.00'} <img src={ICON.bnbSmall} /></BnbBalance>
          <Disconnect onClick={() => setWalletAccount(null)}>Disconnect</Disconnect>
        </Top>
        <Body>
          <Item><img src={ICON.hee} /><TitleItem>HEE</TitleItem> <Value>{heeBalance} <Typography>$0.00</Typography></Value></Item>
          <Item><img src={ICON.fiu} /><TitleItem>FIU</TitleItem> <Value>{fiuBalance} <Typography>$0.00</Typography></Value></Item>
          <Item><img src={ICON.bnbBig} /><TitleItem>BNB</TitleItem> <Value>{parseFloat(bnbBalance)?.toFixed(4)} <Typography>$0.00</Typography></Value></Item>
          <Item sx={{background: '#FFE2D3'}}><img src={ICON.shoe}/><TitleItem>Shoe</TitleItem> <Value>{shoeBalance}</Value></Item>
          <Item><img src={ICON.box}/><TitleItem>Mystery Box</TitleItem> <Value>{boxBalance}</Value></Item>
          <Item><img src={ICON.pet}/><TitleItem>Pets </TitleItem> <Value>0</Value></Item>
        </Body>
      </Inner>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  margin: '40px 0 140px',
  color: '#31373E'
})
const Inner = styled(Stack)({
  backgroundColor: '#F8F9FB',
  borderRadius: 16,
  padding: '16px 16px 8px',
  width: 352,
  margin: 'auto'
})
const Top = styled(Box)({
  paddingBottom: 16,
  borderBottom: '1px solid #E9EAEF',
  alignItems: 'center',
  display: 'flex',
})
const Address = styled(Typography)({
  padding: '6px 11px',
  ...TEXT_STYLE(12, 500, '#FFFFFF'),
  background: '#5A6178',
  borderRadius: 8
})
const BnbBalance = styled(Box)({
  ...TEXT_STYLE(13, 600),
  marginLeft: 16,
  display: 'flex',
  alignItems: 'center',
  '& img': {
    marginLeft: 4
  }
})
const Disconnect = styled(Typography)({
  ...TEXT_STYLE(12, 500, '#55C8FC'),
  marginLeft: 'auto',
  cursor: 'pointer',
})
const Body = styled(Stack)({

})
const Item = styled(Box)({
  padding: 8,
  marginBottom: 8,
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  '& img': {
    marginRight: 8
  }
})
const TitleItem = styled(Typography)({
  ...TEXT_STYLE(16, 500, '#5A6178')
})
const Value = styled(Typography)({
  marginLeft: 'auto',
  textAlign: 'right',
  ...TEXT_STYLE(18, 600),
  '& p': {
    ...TEXT_STYLE(12, 500, '#5A6178'),
    marginTop: 4
  }
})