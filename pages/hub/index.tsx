import { Stack, styled } from "@mui/material";
import MainLayout from "../../components/layouts/MainLayout";
import { TabClaim } from "../../components/pageComponent/claim/TabClaim";

const Hub = () => {
  return (
    <MainLayout titlePage='beFITTER - Claim Portal'>
      <Wrap>
        <TabClaim/>
      </Wrap>
    </MainLayout>
  )
}

export default Hub;

const Wrap = styled(Stack)({
  
})