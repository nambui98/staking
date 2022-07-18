import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/styles'
import React, { useState } from 'react'
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../const';
import { MARKETPLACE_ICON } from '../../../constants/marketplace';
import { useWalletContext } from '../../../contexts/WalletContext';
import { withDraw } from '../../../libs/staking';
import { TEXT_STYLE } from '../../../styles/common/textStyles';

type Props = {
	setStateContent: Function,
	handleClickSuccess: Function;
	handleClickError: Function;
	setIsLoading: Function;
	balanceFiu: string
	balanceSA: string
	balanceCP: string
	balanceUS: string
	claimableTime: string
}
export const UnstakeWarrning = (props: Props) => {
	const { setStateContent,
		handleClickSuccess,
		handleClickError,
		setIsLoading,
		balanceFiu,
		balanceSA,
		balanceCP,
		balanceUS,
		claimableTime } = props;
	const { ethersSigner, ethersProvider, setRefresh, refresh } = useWalletContext();
	const handleContinueUnStaking = () => {
		setStateContent(StateStaking.Unstake)
	}

	return (
		<>
			<Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100%" }}>
				<Box sx={{ textAlign: "center", }}>
					<Box>

						<img src={MARKETPLACE_ICON.infocircle} alt="" />
					</Box>
					<Typography fontSize={14} color="#FF6F61" fontWeight={500} lineHeight="20px" mt="28px">YOU ARE UNSTAKING.</Typography>
					<Typography fontSize={14} color="#31373E" fontWeight={500} lineHeight="20px" mt="4px">The amount of TOKEN that you unstaked will not be continuously calculated. You can withdraw after the withdrawal delay time. If you only want to CLAIM the reward, please go back and click on the CLAIM button.</Typography>
				</Box>
			</Box>
			<Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
				<MarketplaceButton customStyle={{ width: "100%" }} title={"Continue Unstaking"} handleOnClick={handleContinueUnStaking} />
			</Box>
		</>
	)
}

const Search = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		padding: '8px 16px',
		background: '#F8F9FB',
		borderRadius: 4,
		width: "111px",
		height: 34,
		flex: 1,
		border: "1px solid #E9EAEF"
	},
	'& input': {
		padding: 0,
		...TEXT_STYLE(12, 500, '#31373E')
	},
	'& fieldset': { display: 'none' },
	'@media (max-width: 767px)': {
		width: '100%',
		'& .MuiOutlinedInput-root': {
			width: '100%',
			height: 35
		},
	}
})
const ButtonPercent = styled(Button)({
	color: "#55C8FC",
	background: " #D9F2FD",
	borderRadius: "4px",
	padding: "5px 5px",
	minWidth: "35px",
	textTransform: "none",
	":hover": {
		background: " #d0edfa",
	}
})
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