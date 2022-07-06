import { Box, styled, Typography } from "@mui/material"
import { MARKETPLACE_ICON } from "../../../constants/marketplace"
import { TEXT_STYLE } from "../../../styles/common/textStyles"
import { Popup } from "../../popup"

interface IProps {
  title: string
  message?: any
  status: boolean
  handleToggleStatus: () => any
  handleClickButton?: () => any
  titleCustomColor?: any
  titleButton?: string
  popupType: 'success' | 'error'
  sx?: any
}

export const PopupMessage: React.FC<IProps> = ({title, message, status, handleToggleStatus, titleCustomColor, titleButton, popupType, handleClickButton, sx}) => {
  const checkIcon = <TitleSuccess>
      <img src={popupType === 'success' ? MARKETPLACE_ICON.TICK : MARKETPLACE_ICON.CLOSE_ICON} />
      {title}
    </TitleSuccess>
  
  return (
    <Popup status={status} handleToggle={handleToggleStatus} sx={sx}
      title={checkIcon} titleCustomStyle={titleCustomColor} titleButton={titleButton} handleClickButton={handleClickButton}
    >
      {message && <MessagePopup>{message}</MessagePopup>}
    </Popup>
  )
}

const MessagePopup = styled(Typography)({
  marginBottom: '24px',
  ...TEXT_STYLE(14, 500),
  color: '#5A6178',
  textAlign: 'center',
})
const TitleSuccess = styled(Typography)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#31373E',
  fontSize: '24px',
  fontWeight: '500',
  '& img': {
    marginBottom: 10,
  }
})
