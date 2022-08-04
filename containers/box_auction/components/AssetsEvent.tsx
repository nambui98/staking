import { Box, styled, Typography } from '@mui/material';
import { BoxAuction } from '../../../const';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { useWalletContext } from '../../../contexts/WalletContext';
import { register } from '../../../libs/burn';
import { useState } from 'react';
import { Error } from './Error';
import { MARKETPLACE_ICON } from '../../../constants/marketplace';

type Props = {
	setStateContent: Function;
	setIsLoading: Function;
	handleClickError: Function;
	handleClickSuccess: Function;
	// setStateContentInit: Function;
	stateContent: BoxAuction | null;
	balanceFT: string
};

export function AssetsEvent(props: Props) {
	const { setStateContent, handleClickError, setIsLoading, handleClickSuccess, balanceFT } = props;
	const { ethersSigner, ethersProvider, setRefresh, refresh } = useWalletContext();
	const handleConfirm = async () => {
		// setStateContent(BoxAuction.BurnAssets);
		setIsLoading(true);
		try {
			const res = await register(ethersSigner);
			setIsLoading(false)

			if (res?.status) {
				setRefresh(!refresh)
				setStateContent(BoxAuction.BurnAssets);
			}
		} catch (error: any) {
			const message = error.reason || 'Something went wrong, please try again';
			setIsLoading(false);
			handleClickError({
				titleError: message,
				functionError: () => {
					setStateContent(BoxAuction.AssetsEvent);
				},
				stateContentNew: BoxAuction.Error,
			});
		}

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
				<ValueItem>{balanceFT} Fitter Passes</ValueItem>
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
			{
				parseInt(balanceFT) > 1 ?
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
						<span style={{ marginLeft: '10px' }}>Eligible amount</span>
					</Box> :
					<Box
						sx={{
							color: '#FF6F61',
							display: 'flex',
							justifyContent: 'center',
							mt: '19px',
							alignItems: 'center',
						}}
					>
						<img src={MARKETPLACE_ICON.CLOSE_ICON} width="30px" alt="" />
						<span style={{ marginLeft: '10px' }}>Not adequate</span>
					</Box>
			}

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
					disabled={parseInt(balanceFT) < 2}
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
