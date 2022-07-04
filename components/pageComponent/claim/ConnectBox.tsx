import { Button, Stack, styled, Typography } from "@mui/material"
import { useWalletContext } from "../../../contexts/WalletContext";
import { TEXT_STYLE } from "../../../styles/common/textStyles"

export const ConnectBox = () => {
  const { walletAccount, setWalletAccount, setToggleActivePopup} = useWalletContext();
  return (
    <Wrap>
      <Message>Please connect wallet to continue</Message>
      <ButtonConnect onClick={() => setToggleActivePopup(true)}>CONNECT WALLET</ButtonConnect>
    </Wrap>
  )
}

const Wrap = styled(Stack)({
  
})

const Message = styled(Typography)({
  ...TEXT_STYLE(14, 500),
  color: '#5A6178',
  marginBottom: 24
})
const ButtonConnect = styled(Button)({
  boxShadow: 'none !important',
  padding: '15px 0',
  background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
  borderRadius: 8,
  ...TEXT_STYLE(16, 500),
  color: '#ffffff'
})