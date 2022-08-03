import { Box, styled, Typography } from '@mui/material';
import { BoxAuction } from '../../../const';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';

type Props = {
	setStateContent: Function;
	// setIsLoading: Function;
	// handleClickError: Function;
	// setStateContentInit: Function;
	stateContent: BoxAuction | null;
};

export function AssetsEvent(props: Props) {
	const { setStateContent, stateContent } = props;

	const handleConfirm = async () => {
		setStateContent(BoxAuction.BurnAssets);
	};

	return (
		<Box
			sx={{
				'@media (min-width: 650px)': {
					width: '422px',
					height: '375px',
					padding: '16px',
				},
				display: 'flex',
				flexDirection: 'column',
				borderLeft: '1px solid #E9EAEF',
			}}
		>
			<Item sx={{ mt: '0 !important' }}>
				<TitleItem>YOU CURRENT ASSETS</TitleItem>
				<ValueItem>23 Fitter Passes</ValueItem>
			</Item>
			<Box sx={{ textAlign: 'center', margin: '24px 0' }}>
				<img src="images/Group-icon.svg" alt="" />
			</Box>
			<Typography
				sx={{
					fontWeight: '500',
					lineHight: '18px',
					fontSize: '12px',
					color: '#5A6178',
				}}
			>
				You need to burn{' '}
				<span style={{ color: '#FF6D24' }}>2 Fitter Passes</span> to participate
				in this event
			</Typography>
			<Box
				sx={{
					color: '#4FD190',
					display: 'flex',
					justifyContent: 'center',
					mt: '19px',
					alignItems: 'center',
				}}
			>
				<img src="images/tick-circle.svg" alt="" />
				<span style={{ marginRight: '10px' }}>Eligible amount</span>
			</Box>

			<Box
				mt="auto"
				width={'100%'}
				sx={{
					paddingTop: '16px',
					borderTop: '1px solid #E9EAEF',
				}}
			>
				<MarketplaceButton
					customStyle={{ width: '100%' }}
					title={'Confirm'}
					handleOnClick={handleConfirm}
				/>
			</Box>
		</Box>
	);
}

const Item = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
});

const TitleItem = styled(Typography)({
	fontSize: '12px',
	color: '#898E9E',
	fontWeight: '500',
	lineHeight: '18px',
	textTransform: 'uppercase',
});
const ValueItem = styled(Typography)({
	fontSize: '12px',
	color: '#31373E',
	fontWeight: '500',
	lineHeight: '18px',
});
