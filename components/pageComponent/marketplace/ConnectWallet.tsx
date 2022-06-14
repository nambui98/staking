import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { Popup } from "../../popup";
import { PRODUCT_DETAIL_ICON } from "../../../constants/marketplace";

interface IProps {
  status: boolean;
  handleToggleStatus: (status: boolean) => void;
}

export const ConnectWallet: React.FC<IProps> = ({status, handleToggleStatus}) => {
  return (
    <Popup title="Connect wallet" status={status} handleToggle={() => handleToggleStatus(false)} >
      <Stack sx={wrap}>
        <Stack sx={item}>
          <Typography sx={titleConnect}>Recommended wallet</Typography>
          <Box sx={itemConnect}><Box sx={flex}><img src={PRODUCT_DETAIL_ICON.METAMASK} /><Typography sx={itemTitle}>MetaMask</Typography></Box> <Button sx={button}>Connect</Button></Box>
        </Stack>
        <Stack sx={item}>
          <Typography sx={titleConnect}>Recommended wallet</Typography>
          <Box sx={itemConnect}><Box sx={flex}><img src={PRODUCT_DETAIL_ICON.METAMASK} /><Typography sx={itemTitle}>MetaMask</Typography></Box> <Button sx={button}>Connect</Button></Box>
        </Stack>
        <Link href="#">How to connect wallet?</Link>
      </Stack>
    </Popup>
  )
}

const wrap = {

}
const item = {
  marginBottom: '32px'
}
const titleConnect = {
  fontSize: '14px',
  color: '#5A6178',
  fontWeight: '500',
  textTransform: 'uppercase',
}
const itemConnect = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '24px',
}
const itemTitle = {
  marginLeft: '8px',
  fontSize: '16px',
  color: '#31373E',
  fontWeight: '500'
}
const button = {
  background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: '600',
  color: '#ffffff',
  boxShadow: 'none',
}
const flex = {
  display: 'flex',
  alignItems: 'center',
}