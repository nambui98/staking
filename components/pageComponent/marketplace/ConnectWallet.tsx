import { Box, Button, Link, Stack, styled, Typography, useMediaQuery } from "@mui/material";
import { Popup } from "../../popup";
import { MARKETPLACE_ICON } from "../../../constants/marketplace";
import { ethers } from "ethers";
import { changeNetwork, useWalletContext } from "../../../contexts/WalletContext";
import { UserService } from "../../../services/user.service";
import { TEXT_STYLE } from "../../../styles/common/textStyles";

interface IProps {
  status: boolean;
  handleToggleStatus: (status: boolean) => void;
}

export const ConnectWallet: React.FC<IProps> = ({status, handleToggleStatus}) => {
  const isMobile = useMediaQuery('(max-width: 991px)');
  const {provider, setWalletAccount, setToggleActivePopup, walletAccount, metaMaskIsInstalled, activePopup, chainIdIsSupported, ethersProvider } = useWalletContext();

  const handleConnectWallet = async () => {
    if (!metaMaskIsInstalled) {
      let a = document.createElement('a');
      a.target = '_blank';
      a.href = 'https://metamask.io/download';
      a.click();
    } else if(!walletAccount) {
      const providerEthers = await new ethers.providers.Web3Provider(provider);
      const address = await providerEthers.send("eth_requestAccounts", []);
      const signer = providerEthers.getSigner();
      const signature = await signer.signMessage("Please sign this transaction");
      if(address && signature){
        setWalletAccount(ethers.utils.getAddress(address[0]));
        UserService.setCurrentUser(address[0]);
        setToggleActivePopup(false);
      }
      if(!chainIdIsSupported) {
        await changeNetwork(provider)
      }
    }
    
  }
  return (
    <Popup title={<TitlePopup>Connect wallet</TitlePopup>} status={activePopup} handleToggle={() => setToggleActivePopup(false)} sx={{'@media (min-width: 650px)': {
      width: '544px'
    }}} >
      <Stack sx={wrap}>
        <Item>
          <TitleConnect>Recommended wallet</TitleConnect>
          <Box sx={itemConnect}><Box sx={flex}><img src={MARKETPLACE_ICON.METAMASK} /><ItemTitle>MetaMask</ItemTitle></Box> 
            <ButtonConnect onClick={handleConnectWallet}>Connect</ButtonConnect>
          </Box>
        </Item>
        <Item>
          <TitleConnect>LIMITED SUPPORT WALLET</TitleConnect>
          <Typography sx={{...TEXT_STYLE(16, 500), color: '#A7ACB8', marginTop: '16px'}}>Coming soon</Typography>
        </Item>
        <LinkConnect href="https://metamask.io/faqs/" target={'_blank'}>How to connect wallet?</LinkConnect>
      </Stack>
    </Popup>
  )
}

const wrap = {

}
const Item = styled(Stack)({
  marginBottom: '32px'
})
const TitleConnect = styled(Typography)({
  ...TEXT_STYLE(14, 500),
  color: '#5A6178',
  textTransform: 'uppercase',
})
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
const TitlePopup = styled(Typography)({
  fontWeight: '500 !important',
  fontSize: '24px !important',
  color: '#31373E'
})