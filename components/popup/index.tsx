import { Box, Stack } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import { PRODUCT_DETAIL_ICON } from "../../constants/marketplace"
import { MarketplaceButton } from "../buttons/MarketplaceButton"

interface IProps {
  status: boolean
  handleToggle: () => any
  title?: string
  children: any
  titleButton?: string
  priceButton?: number
  handleClickButton?: () => any
  customStyleButton?: any
}

export const Popup: React.FC<IProps> = ({status, handleToggle, title, children, titleButton, priceButton, handleClickButton, customStyleButton}) => {
  return (
    <Dialog sx={borderRadius} onClose={handleToggle} open={status}>
      <Stack sx={wrap}>
        <Box onClick={handleToggle} sx={closeIcon}><img src={PRODUCT_DETAIL_ICON.CLOSE} /></Box>
        {title && <DialogTitle sx={titlePopup}>{title}</DialogTitle>}
        {children}
        {titleButton && <MarketplaceButton title={titleButton} price={priceButton} handleOnClick={handleClickButton} customStyle={customStyleButton} />}
      </Stack>
    </Dialog>
  )
}

const wrap = {
  position: 'relative',
  padding: '0 24px 24px',
  minWidth: '544px'
}
const titlePopup = {
  fontSize: '24px !important',
  fontWeight: '500',
  color: '#31373E',
  marginBottom: '17px',
  textAlign: 'center',
}
const closeIcon = {
  position: 'absolute',
  top: '18px',
  right: '18px',
  cursor: 'pointer',
}
const borderRadius = {
  '& .MuiDialog-paper': {
    borderRadius: '16px'
  }
}