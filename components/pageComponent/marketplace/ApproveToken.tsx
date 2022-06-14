import { Box, ButtonProps, Checkbox, FormControlLabel, FormGroup, Stack, Typography, TypographyProps } from "@mui/material"
import { Popup } from "../../popup"
import { styled } from '@mui/system';
import { PRODUCT_DETAIL_ICON } from "../../../constants/marketplace";
import { CheckboxMarketplace } from "../../checkbox/CheckboxMarketplace";

interface IProps {
  status: boolean
  handleToggleStatus: (status: boolean) => void
}

export const ApproveToken: React.FC<IProps> = ({ status, handleToggleStatus }) => {
  return (
    <Popup title="Approve token" status={status} handleToggle={() => handleToggleStatus(false)} titleButton={'APPROVE'} handleClickButton={() => null}>
      <Wrap>
        <Stack>
          <InfoItem>
            <InfoTitleItem >Amount to buy</InfoTitleItem>
            <InfoPriceItem ><img src={PRODUCT_DETAIL_ICON.BNBCOINYELLOW} />400</InfoPriceItem>
            <ConvertDollar >0.00$</ConvertDollar>
          </InfoItem>
          <InfoItem>
            <InfoTitleItem >Current allowances</InfoTitleItem>
            <InfoPriceItem ><img src={PRODUCT_DETAIL_ICON.BNBCOINYELLOW} />0.01</InfoPriceItem>
            <ConvertDollar >0.00$</ConvertDollar>
          </InfoItem>
          <Increase>
            <InfoTitleItem>Increase</InfoTitleItem>
            <IncreaseBnb gray={false}><img src={PRODUCT_DETAIL_ICON.BNBCOINYELLOW} />200</IncreaseBnb>
          </Increase>
          <CheckboxMarketplace type="green" label="WithDraw all" />
        </Stack>
      </Wrap>
    </Popup>
  )
}

const Wrap = styled(Stack)({

})

const InfoItem = styled(Stack)({
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  flexDirection: 'unset',
  marginBottom: '17px'
})

const InfoTitleItem = styled(Typography)({
  color: '#5A6178',
  fontSize: '16px',
  fontWeight: '500',
  width: '60%'
})
const InfoPriceItem = styled(Typography)({
  color: '#31373E',
  fontWeight: '600',
  fontSize: '16px',
  width: '40%',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '9px',
  '& img': {
    marginRight: '4px'
  }
})
const ConvertDollar = styled(Typography)({
  fontSize: '12px',
  fontWeight: '500',
  width: '100%',
  textAlign: 'right'
})
const Increase = styled(Stack)({
  justifyContent: 'space-between',
  marginBottom: '21px',
  alignItems: 'center',
  flexDirection: 'row'
})
type IncreaseBnbType = TypographyProps & {
  gray: any
};
const IncreaseBnb = styled(Typography)((props: IncreaseBnbType) => ({
  padding: '16px',
  border: '1px solid #E9EAEF',
  background: props.gray ? '#E9EAEF' : '#F8F9FB',
  alignItems: 'center',
  display: 'flex',
  minWidth: '160px',
  justifyContent: 'space-between',
  borderRadius: '12px',
  color: props.gray ? '#A7ACB8' : '#31373E'
}))