import { Box, BoxProps, Stack, styled, Typography, TypographyProps } from "@mui/material"
import { useWalletContext } from "../../../contexts/WalletContext"
import { ICON } from "../../../constants/assetsWallet";
import { TEXT_STYLE } from "../../../styles/common/textStyles";
import { formatMoney } from "../../../libs/utils/utils";

interface IProps {
  tokenChoose: string
  setTokenChoose: (value: string) => void
}

export const TokenTab: React.FC<IProps> = ({tokenChoose, setTokenChoose}) => {
  const {fiuBalance, heeBalance, bnbBalance} = useWalletContext();
  return (
    <Wrap>
      <Item tokenName={tokenChoose === 'fiu' ? 'fiu' : ''} sx={ItemFiu} onClick={() => setTokenChoose('fiu')}>
        <ItemLeft>
          <Title>Your balance</Title>
          <Amount typeBnb={false}>{fiuBalance?.length && parseFloat(fiuBalance) > 0 ? formatMoney(fiuBalance) : '0.00'}<span>FIU</span></Amount>
        </ItemLeft>
        <ImageToken><img src={ICON.fiu} /></ImageToken>
      </Item>
      <Item tokenName={tokenChoose === 'hee' ? 'hee' : ''} sx={ItemHee} onClick={() => setTokenChoose('hee')}>
        <ItemLeft>
          <Title>Your balance</Title>
          <Amount typeBnb={false}>{heeBalance?.length && parseFloat(heeBalance) > 0 ? formatMoney(heeBalance) : '0.00'}<span>HEE</span></Amount>
        </ItemLeft>
        <ImageToken><img src={ICON.hee} /></ImageToken>
      </Item>
      <Item tokenName={tokenChoose === 'bnb' ? 'bnb' : ''} sx={ItemBnb} onClick={() => setTokenChoose('bnb')}>
        <ItemLeft>
          <Title sx={{color: '#31373E'}}>Your balance</Title>
          <Amount typeBnb={true}>{bnbBalance?.length && parseFloat(bnbBalance) > 0 ? formatMoney(bnbBalance) : '0.00'} <span>BNB</span></Amount>
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
type itemProps = BoxProps & {
  tokenName: string
}
const Item = styled(Box)((props: itemProps) => ({
  marginBottom: 8,
  borderRadius: 12,
  cursor: 'pointer',
  padding: '16px 18px 16px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `2px solid ${props.tokenName ? (props.tokenName === 'fiu' ? '#FF612F' : props.tokenName === 'hee' ? '#1DB268' : '#FFC83A') : '#F8F9FB'}`,
  borderWidth: 2,
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
}))
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