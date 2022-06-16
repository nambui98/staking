import { Box, Button, Link, Stack, styled, Typography } from "@mui/material";
import { Popup } from "../../popup";
import { MARKETPLACE_ICON } from "../../../constants/marketplace";
import { ethers } from "ethers";
import { useWalletContext } from "../../../contexts/WalletContext.tsx";
import { UserService } from "../../../services/user.service";

interface IProps {
  status: boolean;
  handleToggleStatus: (status: boolean) => void;
}

export const ConnectWallet: React.FC<IProps> = ({status, handleToggleStatus}) => {
  const {provider, setWalletAccount, setToggleActivePopup, walletAccount, metaMaskIsInstalled, activePopup } = useWalletContext();

  const handleConnectWallet = async () => {
    if (!metaMaskIsInstalled) {
      let a = document.createElement('a');
      a.target = '_blank';
      a.href = 'https://metamask.io/download';
      a.click();
    } else if(!walletAccount){
      const address = await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const signature = await signer.signMessage("Hello World");
      if(address && signature){
        setWalletAccount(address[0]);
        UserService.setCurrentUser({walletAddress: address[0]});
        setToggleActivePopup(false);
      }
    }
    
  }
  return (
    <Popup title="Connect wallet" status={activePopup} handleToggle={() => setToggleActivePopup(false)} >
      <Stack sx={wrap}>
        <Item>
          <Typography sx={titleConnect}>Recommended wallet</Typography>
          <Box sx={itemConnect}><Box sx={flex}><img src={MARKETPLACE_ICON.METAMASK} /><ItemTitle>MetaMask</ItemTitle></Box> 
            <ButtonConnect onClick={handleConnectWallet}>Connect</ButtonConnect>
          </Box>
        </Item>
        <Item>
          <Typography sx={titleConnect}>Recommended wallet</Typography>
          <Box sx={itemConnect}><Box sx={flex}><img src={MARKETPLACE_ICON.METAMASK} /><ItemTitle>MetaMask</ItemTitle></Box> <ButtonConnect>Connect</ButtonConnect></Box>
        </Item>
        <LinkConnect href="#">How to connect wallet?</LinkConnect>
      </Stack>
    </Popup>
  )
}

const wrap = {

}
const Item = styled(Stack)({
  marginBottom: '32px'
})
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
const ItemTitle = styled(Typography)({
  marginLeft: '8px',
  fontSize: '14px',
  color: '#31373E',
  fontWeight: '500',
  '@media (min-width: 768px)': {
    fontSize: '16px',
  }
})
const ButtonConnect = styled(Button)({
  background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#ffffff',
  boxShadow: 'none',
  '@media (min-width: 768px)': {
    fontSize: '16px'
  }
})
const flex = {
  display: 'flex',
  alignItems: 'center',
}
const LinkConnect = styled(Link)({
  fontSize: '16px',
  fontWeight: '500',
  color: '#5A6178',
  textDecoration: 'underline',
  textAlign: 'center',
})