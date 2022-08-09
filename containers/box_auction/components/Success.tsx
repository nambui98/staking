import { Box, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/styles'
import React, { useState } from 'react'
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { MARKETPLACE_ICON } from '../../../constants/marketplace';
import { useWalletContext } from '../../../contexts/WalletContext';

type Props = {
	success: {
		titleSuccess: string,
		functionSuccess: () => any
	};
	// description: string;
	setStateContent: Function;


}

export const Success = (props: Props) => {
	const handleContinue = () => {

	}
	const isMobile = useMediaQuery('(max-width: 767px)');

	return (
		<Box
			sx={{
				width: "100%",
				height: '418px',
				'@media (min-width: 650px)': {
					width: '422px',
					padding: isMobile ? '16px 0px' : '0 16px',
				},
				display: 'flex',
				flexDirection: 'column',
				borderLeft: isMobile ? 0 : '1px solid #E9EAEF',
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
				<Box sx={{ textAlign: "center", }}>
					<Box>

						<img src={MARKETPLACE_ICON.TICK} alt="" />
					</Box>
					<Typography fontSize={14} color="#31373E" fontWeight={500} mt="28px">{props.success.titleSuccess}</Typography>
				</Box>
			</Box>
			<MarketplaceButton customStyle={{ width: "100%", mt: "auto" }} title={"Continue"} handleOnClick={props.success.functionSuccess} />

		</Box>

	)
}


const Item = styled(Box)({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginTop: "25px"
})
const TitleItem = styled(Typography)({
	fontSize: "12px",
	color: "#898E9E",
	fontWeight: "500",
	lineHeight: "18px",
	textTransform: "uppercase"
})
const ValueItem = styled(Typography)({
	fontSize: "12px",
	color: "#31373E",
	fontWeight: "500",
	lineHeight: "18px"
})