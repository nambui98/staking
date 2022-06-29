import { Box, Stack, styled, Typography } from "@mui/material"
import { BACKGROUND, MARKETPLACE_ICON } from "../../../constants/marketplace"
import { Popup } from "../../popup"

interface IProps {
  status: boolean
  handleToggleStatus: (status: boolean) => void
  data: {
    boxPrice: number,
    boxImage: string
  }
  sx?: any
}

export const PaymentSuccess: React.FC<IProps> = ({status, handleToggleStatus, data, sx}) => {
  return (
    <Popup title="Success!!" status={status} handleToggle={() => handleToggleStatus(false)} sx={sx}>
      <Message>Your items have successfully purchased!</Message>
      <Message>Total price: <img src={MARKETPLACE_ICON.busdIcon} /><span>{data.boxPrice}</span></Message>
      <ImageShoe><img src={data.boxImage} /></ImageShoe>
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
    margin: '0 4px 0 8px',
  }
})
const ImageShoe = styled(Box)({
  backgroundImage: `url(${BACKGROUND.SUCCESS})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  textAlign: 'center',
  width: 260,
  margin: 'auto',
  '& img': {
    maxWidth: 198
  }
})