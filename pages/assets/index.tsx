import { Box, Stack, styled, Typography } from "@mui/material"
import MainLayout from "../../components/layouts/MainLayout"
import { Details } from "../../components/pageComponent/acount/Details"
import { ConnectBox } from "../../components/pageComponent/claim/ConnectBox"
import { useWalletContext } from "../../contexts/WalletContext"
import { TEXT_STYLE } from "../../styles/common/textStyles"

const Assets = () => {
  const {walletAccount} = useWalletContext();
  return (
    <MainLayout sxProps={{backgroundColor: "#FFFFFF"}}>
      <Wrap>
        {walletAccount?.length ? <Details /> : <BoxConnect>
          <TitleConnect>Assets</TitleConnect>
          <ConnectBox/>
        </BoxConnect>}
      </Wrap>
    </MainLayout>
  )
}

const Wrap = styled(Stack)({

})
const BoxConnect = styled(Box)({
  boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
  borderRadius: 16,
  padding: 24,
  margin: '40px auto 81px',
  width: 352,
  backgroundColor: '#ffffff',
  justifyContent: 'center',
  textAlign: 'center'
})
const TitleConnect = styled(Typography)({
  ...TEXT_STYLE(16, 600),
  color: '#31373E',
  marginBottom: 16,
  textAlign: 'center',
})

export default Assets