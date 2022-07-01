import { Box, Stack, styled, Typography } from "@mui/material"
import { MarketplaceButton } from "../../../components/buttons/MarketplaceButton"
import { Popup } from "../../../components/popup"
import { MARKETPLACE_ICON } from "../../../constants/marketplace"

interface IProps {
  status: boolean
  handleToggleStatus: (status: boolean) => void
}

export const Checkout: React.FC<IProps> = ({ status, handleToggleStatus }) => {
  return (
    <Popup title="Checkout" status={status} handleToggle={() => handleToggleStatus(false)} titleButton="BUY NOW" priceButton={400} handleClickButton={() => null} >
      <Stack sx={wrap}>
        <Stack sx={info}>
          <Box sx={boxImage}>
            <img src={'assets/shoes/shoesItem.png'} />
            <Typography sx={type}>Daily</Typography>
          </Box>
          <Stack sx={boxItem}>
            <Stack sx={infoItem}>
              <Typography sx={infoTitleItem}>You will pay</Typography>
              <Typography sx={infoPriceItem}><img src={MARKETPLACE_ICON.BNBCOINYELLOW} />400</Typography>
              <Typography sx={convertDollar}>0.00$</Typography>
            </Stack>
            <Stack sx={infoItem}>
              <Typography sx={infoTitleItem}>Estimated gas free</Typography>
              <Typography sx={infoPriceItem}><img src={MARKETPLACE_ICON.BNBCOINYELLOW} />0.01</Typography>
              <Typography sx={convertDollar}>0.00$</Typography>
            </Stack>
            <ErrorMessage>You need to approve more token to complete this transaction</ErrorMessage>
          </Stack>
        </Stack>
      </Stack>
    </Popup>
  )
}

const wrap = {

}
const info = {
  marginBottom: '16px',
  flexDirection: 'row',
  justifyContent: 'space-between',
}
const boxImage = {
  width: '130px',
  height: '130px',
  backgroundColor: '#F8F9FB',
  borderRadius: '12px',
  position: 'relative',
  padding: '35px 20px',
  '& img': {
    width: '100%',
  },
  '@media (min-width: 768px)': {
    width: '190px',
    height: '190px',
  }
}
const type = {
  position: 'absolute',
  left: 0,
  bottom: 0,
  borderRadius: '0px 12px 0px 11px',
  backgroundColor: '#55C8FC',
  fontSize: '14px',
  fontWeight: '600',
  color: '#ffffff',
  padding: '4px 12px'
}
const boxItem = {
  width: 'calc(100% - 130px - 16px)'
}
const infoItem = {
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  flexDirection: 'unset',
  marginBottom: '17px'
}
const infoTitleItem = {
  color: '#5A6178',
  fontSize: '14px',
  fontWeight: '500',
  width: '60%',
  '@media (min-width: 768px)': {
    fontSize: '16px'
  }
}
const infoPriceItem = {
  color: '#31373E',
  fontWeight: '600',
  fontSize: '14px',
  width: '40%',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '9px',
  '& img': {
    marginRight: '4px'
  },
  '@media (min-width: 768px)': {
    fontSize: '16px'
  }
}
const convertDollar = {
  fontSize: '12px',
  fontWeight: '500',
  width: '100%',
  textAlign: 'right'
}
const ErrorMessage = styled(Typography)({
  color: '#FB2F2F',
  fontSize: '12px',
  fontWeight: '400',
  marginTop: 'auto',
  '@media (min-width: 768px)': {
    fontSize: '14px'
  }
})