import { Box, Container, Stack, styled, useMediaQuery } from "@mui/material"
import { ClockUtc } from "../components/clockUtc"
import MainLayout from "../components/layouts/MainLayout"
import LeftContent from "../containers/dashboard/LeftContent"
import RightContent from "../containers/dashboard/RightContent"

const Dashboard = () => {
	const isMobile = useMediaQuery('(max-width: 767px)');
	return (
		<MainLayout titlePage='beFITTER - Staking pools' sxProps={{ background: '#fff' }}>
			<Wrap>
				<Container sx={{ maxWidth: 1120 }}>
					<Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>

						<LeftContent />
						<Box sx={{ minWidth: isMobile ? "342px" : '352px', height: isMobile ? '527px' : '537px', marginLeft: isMobile ? '0px' : "32px", marginBottom: "32px" }}>

							<RightContent />
						</Box>
					</Box>
				</Container>
			</Wrap>
		</MainLayout >
	)
}

export default Dashboard

const Wrap = styled(Stack)({
	marginTop: 20,
	'@media (min-width: 768px)': {
		marginTop: 40
	}
})