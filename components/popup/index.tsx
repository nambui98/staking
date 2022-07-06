import { Box, Stack, styled } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import { MARKETPLACE_ICON } from "../../constants/marketplace"
import { TEXT_STYLE } from "../../styles/common/textStyles"
import { MarketplaceButton } from "../buttons/MarketplaceButton"

interface IProps {
  status: boolean
  handleToggle: () => any
  title?: any
  titleCustomStyle?: any
  children: any
  titleButton?: string
  priceButton?: number
  handleClickButton?: () => any
  customStyleButton?: any
  sx?: any
}

export const Popup: React.FC<IProps> = ({status, handleToggle, title, children, titleButton, priceButton, handleClickButton, customStyleButton, titleCustomStyle, sx}) => {
  return (
    <Dialog sx={borderRadius} onClose={handleToggle} open={status}>
      <Wrap sx={sx}>
        <Box onClick={handleToggle} sx={closeIcon}><img src={MARKETPLACE_ICON.CLOSE} /></Box>
        {title && <TitlePopup sx={titleCustomStyle}>{title}</TitlePopup>}
        {children}
        {titleButton && <MarketplaceButton title={titleButton} price={priceButton} handleOnClick={handleClickButton} customStyle={customStyleButton} />}
      </Wrap>
    </Dialog>
  )
}

const Wrap = styled(Stack)({
  position: 'relative',
  padding: '0 16px 16px',
  width: 'calc(100vw - 32px)',
  '@media (min-width: 650px)': {
    width: '352px',
    padding: '0 24px 24px',
  }
})
const TitlePopup = styled(DialogTitle)({
  fontSize: '24px !important',
  fontWeight: '500',
  color: '#31373E',
  // marginBottom: '17px',
  marginBottom: 10,
  textAlign: 'center',
  '& p': {
    ...TEXT_STYLE(16, 600)
  }
})
const closeIcon = {
  position: 'absolute',
  top: '18px',
  right: '18px',
  cursor: 'pointer',
}
const borderRadius = { 
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    margin: '0 !important',
    overflow: 'visible',
  }
}