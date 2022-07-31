import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import React, { useState } from 'react';
import { MarketplaceButton } from '../../../../components/buttons/MarketplaceButton';
import { MARKETPLACE_ICON } from '../../../../constants/marketplace';
import { useWalletContext } from '../../../../contexts/WalletContext';

type Props = {
	success: {
		titleSuccess: string;
		functionSuccess: () => any;
	};
	// description: string;
	setStateContent: Function;
};

export const Success = (props: Props) => {
	const handleContinue = () => {};
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					height: '100%',
				}}
			>
				<Box sx={{ textAlign: 'center' }}>
					<Box>
						<img src={MARKETPLACE_ICON.TICK} alt="" />
					</Box>
					<Typography fontSize={14} color="#31373E" fontWeight={500} mt="28px">
						{props.success.titleSuccess}
					</Typography>
				</Box>
			</Box>
			<MarketplaceButton
				customStyle={{ width: '100%', mt: 'auto' }}
				title={'Continue'}
				handleOnClick={props.success.functionSuccess}
			/>
		</>
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
