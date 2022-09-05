import { Stack, styled, useMediaQuery } from "@mui/material"
import { ClockUtc } from "../components/clockUtc"
import MainLayout from "../components/layouts/MainLayout"
import { RoadMap } from "../containers/staking/RoadMap"
import { TabPools2 } from "../containers/staking/TabPools2"
import { TabPools } from "../containers/staking/TabPools"

const Staking = () => {
	const isMobile = useMediaQuery('(max-width: 767px)');
	return (
		<MainLayout titlePage='beFITTER - Staking pools' sxProps={{ background: '#fff' }}>
			<Wrap>
				<TabPools2 />
				<RoadMap />
			</Wrap>
			{!isMobile && <ClockUtc />}
		</MainLayout>
	)
}

export default Staking

const Wrap = styled(Stack)({
	'@media (min-width: 768px)': {
		marginTop: 40
	}
})