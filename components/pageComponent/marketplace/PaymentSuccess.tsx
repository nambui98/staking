import { Box, styled, Typography } from "@mui/material"
import { BACKGROUND, PRODUCT_DETAIL_ICON } from "../../../constants/marketplace"
import { Popup } from "../../popup"

interface IProps {
  status: boolean
  handleToggleStatus: (status: boolean) => void
}

export const PaymentSuccess: React.FC<IProps> = ({status, handleToggleStatus}) => {
  return (
    <Popup title="Success!!" status={status} handleToggle={() => handleToggleStatus(false)}>
      <Message>Your items have successfully purchased!</Message>
      <Message>Total price: <img src={PRODUCT_DETAIL_ICON.BNBCOINYELLOW} /><span>400</span></Message>
      <ImageShoe><img src={'assets/shoes/imageSuccess.png'} /></ImageShoe>
    </Popup>
  )
}

const Message = styled(Typography)({
  marginBottom: '17px',
  fontSize: '16px',
  fontWeight: '500',
  color: '#5A6178',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  '& span': {
    color: '#31373E',
    fontSize: '16px',
    fontWeight: '600'
  },
  '& img': {
    margin: '0 4px 0 8px'
  }
})
const ImageShoe = styled(Box)({
  backgroundImage: `url(${BACKGROUND.SUCCESS})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  textAlign: 'center'
})