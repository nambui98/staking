import { Box, Button, ButtonProps, FormControl, InputLabel, MenuItem, Select, Stack, styled, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { CLAIM_IMAGE } from "../../../constants/claim";
import { useWalletContext } from "../../../contexts/WalletContext"
import { convertWalletAddress } from "../../../libs/utils/utils";
import { TEXT_STYLE } from "../../../styles/common/textStyles"

export const TabClaim = () => {
  const { walletAccount } = useWalletContext();
  const [currentTab, setCUrrentTab] = useState<'box' | 'token'>('box');
  const [selecItem, setSelectItem] = useState<{title: string, value: string}[]>([]);
  const [dataSelected, setDataSelected] = useState<string>('');
  const [statusClaim, setStatusClaim] = useState<boolean>(false);

  useEffect(() => {
    if(currentTab === 'token') {
      setSelectItem([
        {title: 'Seed', value: 'Seed'},
        {title: 'Private', value: 'Private'},
        {title: 'Airdrop', value: 'Airdrop'},
      ])
    } else {
      setSelectItem([
        {title: 'Alpha Test Reward', value: 'Alpha Test Reward'},
        {title: 'Beta Test Reward', value: 'Beta Test Reward'},
        {title: 'GameFi', value: 'GameFi'},
        {title: 'Enjinstarter', value: 'Enjinstarter'}
      ])
    }
  }, [currentTab])

  return (
    <Wrap>
      <Title>BeFitter Claim Portal</Title>
      {walletAccount && <Account>
        <Address>{convertWalletAddress(walletAccount, 8, 6)}</Address>
        <Disconnect>Disconnect</Disconnect>
      </Account>}
      <Typography sx={{ ...TEXT_STYLE(14, 500), marginBottom: '12px', color: '#5A6178' }}>I want to claim</Typography>
      <BoxTab>
        <Box>
          <TabItem sx={{ marginRight: '4px' }} onClick={() => setCUrrentTab('token')} active={currentTab === 'token' ? true : false}>Token</TabItem>
          <TabItem onClick={() => setCUrrentTab('box')} active={currentTab === 'box' ? true : false}>Box</TabItem>
        </Box>
      </BoxTab>
      <LabelSelect>Select your Vesting Round</LabelSelect>
      <FormControl fullWidth>
        <BoxSelect
          value={dataSelected}
          label="Select round"
          onChange={e => setDataSelected(e.target.value as string)}
        >
          {selecItem?.length && selecItem?.map((item: any, index: number) => <SelectItem key={index} value={item.value}>{item.title}</SelectItem>)}
        </BoxSelect>
      </FormControl>
      <BoxBg><img src={CLAIM_IMAGE.bgClaim} /></BoxBg>
      <ButtonClaim active={statusClaim}>Claim</ButtonClaim>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
  borderRadius: 16,
  padding: 24,
  margin: '40px auto 81px',
  width: 352,
  backgroundColor: '#ffffff',
  justifyContent: 'center',
  textAlign: 'center'
})
const Title = styled(Typography)({
  ...TEXT_STYLE(16, 600),
  color: '#31373E',
  marginBottom: 16,
  textAlign: 'center',
})
const Account = styled(Box)({
  marginBottom: 24
})
const Address = styled(Typography)({
  background: '#5A6178',
  borderRadius: 8,
  padding: '6px 8px',
  ...TEXT_STYLE(14, 500),
  display: 'inline-block',
  marginBottom: 14
})
const Disconnect = styled(Typography)({
  ...TEXT_STYLE(12, 500),
  color: '#55C8FC',
  cursor: 'pointer',
})
const BoxTab = styled(Stack)({

})
type tabItemProps = ButtonProps & {
  active: boolean
}
const TabItem = styled(Button)((props: tabItemProps) => ({
  background: props.active ? 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)' : '#F8F9FB',
  borderRadius: 8,
  padding: '4px 0',
  ...TEXT_STYLE(16, 600),
  marginBottom: 24,
  color: props.active ? '#ffffff' : '#A7ACB8',
  width: 147,
  textAlign: 'center',
  boxShadow: 'none !important',
  '&:hover': {
    background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
    color: '#ffffff',
  }
}))
const LabelSelect = styled(Typography)({
  ...TEXT_STYLE(14, 500),
  color: '#31373E',
  marginBottom: 16
})
const BoxSelect = styled(Select)({
  '& .MuiSelect-select': {
    borderRadius: 8,
    background: '#F8F9FB',
    textAlign: 'left',
    border: '1px solid #E9EAEF',
    padding: '10px 16px'
  },
  '& fieldset': {
    border: 0
  }
})
const SelectItem = styled(MenuItem)({
  ...TEXT_STYLE(14, 500),
  color: '#31373E',
  padding: '12px 16px'
})
const BoxBg = styled(Box)({
  margin: '24px 0'
})
const ButtonClaim = styled(Button)((props: tabItemProps) => ({
  padding: '16px',
  borderRadius: 8,
  boxShadow: 'none !important',
  '&:hover, &': {
    background: props.active ? 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)' : '#E9EAEF',
    color: props.active ? '#ffffff' : '#A7ACB8',
  }
}))
