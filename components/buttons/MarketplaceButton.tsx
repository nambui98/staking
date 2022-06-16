import { Box, Button, ButtonProps } from "@mui/material"
import { styled } from "@mui/system"
import { MARKETPLACE_ICON } from "../../constants/marketplace"

interface IProps {
  price?: number,
  title?: string,
  handleOnClick?: () => any,
  customStyle?: any
}

export const MarketplaceButton: React.FC<IProps> = ({price, title, handleOnClick, customStyle}) => {
  return (
    <ButtonMarketPlace variant="contained" onClick={handleOnClick} sx={customStyle} price={price} >
      {price &&  <Box sx={flex}><img style={{marginRight: 8}} src={MARKETPLACE_ICON.BNBCOIN} /> {price}</Box>}
      <Box sx={flex}>{title} {price && <img style={{marginLeft: 8}} src={MARKETPLACE_ICON.ARROWRIGHT} />}</Box>
    </ButtonMarketPlace>
  )
}

type ButtonMarketPlace = ButtonProps & {
  price: any
};

const ButtonMarketPlace = styled(Button)((props: ButtonMarketPlace) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: props.price ? 'space-between' : 'center',
  padding: '10px 16px',
  boxShadow: 'none',
  borderRadius: '12px',
  background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'none',
  '@media (min-width: 768px)': {
    fontSize: '16px',
    padding: '14px 24px'
  }
}))
const flex = {
  display: 'flex',
  alignItems: 'center',
}