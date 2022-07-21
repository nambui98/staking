import { Box, Stack, styled, Typography } from "@mui/material"
import { MarketplaceButton } from "../../../components/buttons/MarketplaceButton"
import { Popup } from "../../../components/popup"
import { MARKETPLACE_ICON } from "../../../constants/marketplace"

interface IProps {
  status: boolean
  handleToggleStatus: (status: boolean) => void
  handleCheckout: () => any
  sx?: any,
  data: {
    price: number,
    allowance: boolean,
    boxImage: string
  }
}

export const Checkout: React.FC<IProps> = ({ status, handleToggleStatus, handleCheckout, data, sx }) => {
  return (
    <Popup sx={sx} title="Checkout" status={status} handleToggle={() => handleToggleStatus(false)} 
      titleButton={data.allowance ? "BUY NOW" : 'INCREASE'} priceButton={data.allowance ? data.price : 0} handleClickButton={handleCheckout}
      >
      <Stack sx={wrap}>
        <Stack sx={info}>
          <BoxImage>
            <img src={data.boxImage} />
          </BoxImage>
          <Stack sx={boxItem}>
            <Stack sx={infoItem}>
              <Typography sx={infoTitleItem}>You will pay</Typography>
              <Typography sx={infoPriceItem}><img src={MARKETPLACE_ICON.busdIcon} />{data.price}</Typography>
              <Typography sx={convertDollar}>{data.price}$</Typography>
            </Stack>
            {!data.allowance && <ErrorMessage>You need to approve more token to complete this transaction</ErrorMessage>}
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
const BoxImage = styled(Box)({
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
})
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
  width: 'calc(100% - 130px - 16px)',
  '@media (min-width: 768px)': {
    width: 'calc(100% - 190px - 16px)',
  }
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