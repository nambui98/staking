import { Box, BoxProps, ButtonProps, Checkbox, FormControlLabel, FormGroup, Input, Stack, Typography, TypographyProps } from "@mui/material"
import { Popup } from "../../popup"
import { styled } from '@mui/system';
import { MARKETPLACE_ICON } from "../../../constants/marketplace";
import { CheckboxMarketplace } from "../../checkbox/CheckboxMarketplace";
import { useState } from "react";

interface IProps {
  status: boolean
  handleToggleStatus: (status: boolean) => void
  data: {
    boxPrice: number, currentAllowances: number
  }
  onChangeApproveToken: (amount: string) => void
  handleClickButton: () => any
  sx?: any
}

export const ApproveToken: React.FC<IProps> = ({ status, handleToggleStatus, data, onChangeApproveToken, handleClickButton, sx }) => {
  let checkApproveToken = data.boxPrice;
  return (
    <Popup title="Approve token" status={status} handleToggle={() => handleToggleStatus(false)} titleButton={'APPROVE'} handleClickButton={handleClickButton} sx={sx}>
      <Wrap>
        <Stack>
          <InfoItem>
            <InfoTitleItem >Amount to buy</InfoTitleItem>
            <InfoPriceItem ><img src={MARKETPLACE_ICON.busdIcon} />{data.boxPrice}</InfoPriceItem>
            <ConvertDollar >{data.boxPrice}$</ConvertDollar>
          </InfoItem>
          <InfoItem>
            <InfoTitleItem >Current allowances</InfoTitleItem>
            <InfoPriceItem ><img src={MARKETPLACE_ICON.busdIcon} />{data.currentAllowances}</InfoPriceItem>
            <ConvertDollar >{data.currentAllowances}$</ConvertDollar>
          </InfoItem>
          <Increase>
            <InfoTitleItem>Increase</InfoTitleItem>
            <IncreaseBnb><img src={MARKETPLACE_ICON.busdIcon} />            
              <InputToken inputProps={{ min: checkApproveToken }} defaultValue={checkApproveToken} 
              type='number' disableUnderline={true} onChange={(e: any) => onChangeApproveToken(parseFloat(e.target.value) < checkApproveToken ? `${checkApproveToken}` : e.target.value)} />
            </IncreaseBnb>
          </Increase>
          {/* <CheckboxMarketplace type="green" label="WithDraw all" sx={{marginBottom: '10px'}} /> */}
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
type IncreaseBnbType = BoxProps & {
  gray?: any
};
const IncreaseBnb = styled(Box)((props: IncreaseBnbType) => ({
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
const InputToken = styled(Input)({
  '& .MuiInput-input': {
    width: 100,
    textAlign: 'right',
  }
})