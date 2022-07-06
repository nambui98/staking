import { Box, Stack, styled, Typography } from "@mui/material"
import { BACKGROUND, MARKETPLACE_ICON } from "../../../constants/marketplace"
import { TEXT_STYLE } from "../../../styles/common/textStyles"
import { Popup } from "../../popup"

interface IProps {
  status: boolean
  handleToggleStatus: (status: boolean) => void
  handleClickButton?: () => any
  titleButton?: string
  data: {
    boxPrice: number,
    boxImage: string
  }
  sx?: any
}

export const PaymentSuccess: React.FC<IProps> = ({status, handleToggleStatus, data, sx, titleButton, handleClickButton}) => {
  return (
    <Popup title="Success!!" status={status} handleToggle={() => handleToggleStatus(false)} sx={sx} titleButton={titleButton} handleClickButton={handleClickButton}>
      <Message sx={{...TEXT_STYLE(14, 500), justifyContent: 'center'}}>Your items have successfully purchased!</Message>
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
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  '& span': {
    color: '#31373E',
    fontSize: '16px',
    fontWeight: '600'
  },
  '& img': {
    margin: '0 4px 0 8px',
    marginLeft: 'auto'
  }
})
const ImageShoe = styled(Box)({
  textAlign: 'center',
  marginTop: 7,
  margin: 'auto',
  marginBottom: 24,
  '& img': {
    maxWidth: 146
  }
})