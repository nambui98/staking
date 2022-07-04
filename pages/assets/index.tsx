import { Box, Container, Stack, styled, Typography } from "@mui/material"
import MainLayout from "../../components/layouts/MainLayout"
import { Boxtabs } from "../../components/pageComponent/assetsWallet/BoxTabs"
import { ConnectBox } from "../../components/pageComponent/claim/ConnectBox"
import { useWalletContext } from "../../contexts/WalletContext"
import { TEXT_STYLE } from "../../styles/common/textStyles"

const Assets = () => {
  const { walletAccount } = useWalletContext();
  return (
    <MainLayout sxProps={{ backgroundColor: "#FFFFFF" }} titlePage='beFITTER - Assets'>
      <Wrap>
        <Container sx={{ maxWidth: { xl: 1168 } }}>
          {walletAccount?.length ? <Inner>
            <Boxtabs/>
          </Inner> : <BoxConnect>
            <TitleConnect>Assets</TitleConnect>
            <ConnectBox />
          </BoxConnect>}
        </Container>
      </Wrap>
    </MainLayout>
  )
}

const Wrap = styled(Stack)({
  margin: '6px 0 40px',
  '@media (min-width: 768px)': {
    margin: '34px 0 50px'
  }
})
const Inner = styled(Stack)({

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