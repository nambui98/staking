import { Stack, styled } from "@mui/material"
import MainLayout from "../components/layouts/MainLayout"
import { RoadMap } from "../containers/staking/RoadMap"
import { TabPools } from "../containers/staking/TabPools"

const Staking = () => {
  return (
    <MainLayout titlePage='beFITTER - Staking pools' sxProps={{ background: '#fff' }}>
      <Wrap>
        <TabPools/>
        {/* <RoadMap/> */}
      </Wrap>
    </MainLayout>
  )
}

export default Staking

const Wrap = styled(Stack)({
  '@media (min-width: 768px)': {
    marginTop: 40
  }
})