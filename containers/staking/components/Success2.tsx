import { Box, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { MARKETPLACE_ICON } from '../../../constants/marketplace';
import { useWalletContext } from '../../../contexts/WalletContext';
import Paper from '@mui/material/Paper';
type Props = {
	success: {
		titleSuccess: string;
		functionSuccess: () => any;
	};
	// description: string;
	setStateContent: Function;
	isBorderTop?: boolean;
};

export const Success2 = (props: Props) => {
	const handleContinue = () => { };
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
				<Box sx={{ textAlign: 'center' }}>
					<Box>
						<img src={MARKETPLACE_ICON.TICK} alt="" />
					</Box>
					<Typography fontSize={14} color="#31373E" fontWeight={500} mt="28px">
						{props.success.titleSuccess}
					</Typography>
				</Box>
			</Box>
			{props.isBorderTop ? (
				<Box
					sx={{
						height: '72px',
						mt: 'auto',
						paddingTop: '16px',
						borderTop: '1px solid #E9EAEF',
					}}
				>
					<MarketplaceButton
						customStyle={{ width: '100%' }}
						title={'Continue'}
						handleOnClick={props.success.functionSuccess}
					/>
				</Box>
			) : (
				<MarketplaceButton
					customStyle={{ width: '100%', mt: 'auto' }}
					title={'Continue'}
					handleOnClick={props.success.functionSuccess}
				/>
			)}
		</ItemBox>
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

const ItemBox = styled(Paper)(({ theme }) => ({
	// width: '360px',
	height: '100%',
	boxShadow: 'none',
	// padding: '16px',
	display: 'flex',
	flexDirection: 'column',
	'@media (max-width: 768px)': {
		width: '100%',
		// height: '350px',
		// marginBottom: '40px',
	},
}));
