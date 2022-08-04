import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import React, { useState } from 'react';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { MARKETPLACE_ICON } from '../../../constants/marketplace';
import { useWalletContext } from '../../../contexts/WalletContext';

type Props = {
	setStateContent: Function;
	error: {
		titleError: string;
		functionError: () => any;
	};
};

export const Error = (props: Props) => {
	const { error } = props;
	const handleTryAgain = () => {
		error.functionError();
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

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					height: 'calc(100vh - 56px)'
				}}
			>
				<Box sx={{ textAlign: 'center' }}>
					<Box>
						<img src={MARKETPLACE_ICON.CLOSE_ICON} alt="" />
					</Box>
					<Typography fontSize={14} color="#31373E" fontWeight={500} mt="28px">
						{error.titleError}
					</Typography>
				</Box>
			</Box>
			<MarketplaceButton
				customStyle={{ width: '100%', mt: 'auto' }}
				title={'Try again'}
				handleOnClick={handleTryAgain}
			/>

		</Box>

	);
};

const Item = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginTop: '25px',
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