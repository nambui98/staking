import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles'
import React, { useState } from 'react'
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { useWalletContext } from '../../../contexts/WalletContext';

type Props = {
	setStateContent: Function
}

export const TransactionHistory = (props: Props) => {
	const { setToggleActivePopup, walletAccount } = useWalletContext();

	const [continueToStake, setContinueToStake] = useState<Boolean>(false);

	const handleContinueToStake = () => {

	}
	return (
		<>
			<Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Typography fontSize={20} color="#31373E" textAlign={"center"} fontWeight={600} >Comming soon!</Typography>
			</Box>
		</>
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