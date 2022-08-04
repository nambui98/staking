import { Box, Stack, styled, useMediaQuery } from '@mui/material';
import { ClockUtc } from '../components/clockUtc';
import MainLayout from '../components/layouts/MainLayout';
import { RoadMapAuction } from '../containers/box_auction/RoadMapAuction';
import { TabPoolAuction } from '../containers/box_auction/TabPoolAuction';

const BoxAuction = () => {
	// const isMobile = useMediaQuery('(max-width: 767px)');
	return (
		<MainLayout
			titlePage="beFITTER - Staking pools"
			sxProps={{ background: '#fff' }}
		>
			<Wrap>
				<TabPoolAuction />

				<RoadMapAuction />
			</Wrap>
			{/* {!isMobile && <ClockUtc/>} */}
		</MainLayout>
	);
};

export default BoxAuction;

const Wrap = styled(Stack)({
	'@media (min-width: 768px)': {
		marginTop: 40,
	},
});
