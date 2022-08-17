import { Box, Typography, Paper } from '@mui/material';
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
		<ItemBox>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					height: '100%',
					width: '100%',
				}}
			>
				<Box
					sx={{
						textAlign: 'center',
					}}
				>
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
		</ItemBox>
	);
};

const ItemBox = styled(Box)({
	width: '360px',
	boxShadow: 'none',
	padding: '16px',
	display: 'flex',
	flexDirection: 'column',
	'@media (max-width: 768px)': {
		width: '100%',
		height: '350px',
		marginBottom: '40px',
	},
});
