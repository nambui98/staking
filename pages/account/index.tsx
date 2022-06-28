import { Stack, styled, Typography } from "@mui/material"
import MainLayout from "../../components/layouts/MainLayout"
import { Details } from "../../components/pageComponent/acount/Details"
import { useWalletContext } from "../../contexts/WalletContext"

const Account = () => {
  const {walletAccount} = useWalletContext();
  return (
    <MainLayout sxProps={{backgroundColor: "#FFFFFF"}}>
      <Wrap>
        {walletAccount?.length ? <Details /> : <Text404>Please connect wallet to continue</Text404>}
      </Wrap>
    </MainLayout>
  )
}

const Wrap = styled(Stack)({

})
const Text404 = styled(Typography)({
  color: '#31373E',
  textAlign: 'center',
  margin: 40
})

export default Account