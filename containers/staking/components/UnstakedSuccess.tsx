import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/styles'
import React, { useState } from 'react'
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../const';
import { MARKETPLACE_ICON } from '../../../constants/marketplace';
import { useWalletContext } from '../../../contexts/WalletContext';

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
export const UnstakedSuccess = (props: Props) => {
	const { setStateContent,
		handleClickSuccess,
		handleClickError,
		setIsLoading,
		balanceFiu,
		balanceSA,
		balanceCP,
		balanceUS,
		claimableTime } = props;

	const handleUnStake = () => {
		setStateContent(StateStaking.Unstake)
	}
	const handleWithDraw = () => {
		setStateContent(StateStaking.WithDraw)
	}
	const timeUTC = () => {
		let time = new Date();
		time.setSeconds(time.getSeconds() + parseInt(claimableTime));
		debugger
		return `${time.getUTCHours()}:${time.getUTCMinutes()} ${time.getUTCDate()}/${time.getUTCMonth() + 1}/${time.getUTCFullYear()}`

	}
	return (
		<>
			<ButtonOutline onClick={() => setStateContent(StateStaking.StakeProcess)} sx={{ marginTop: "25px" }} variant="text">
				Stake more
			</ButtonOutline>
			<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="24px" textTransform={"uppercase"}>STAKING</Typography>
			<Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={600} mt="8px" textTransform={"uppercase"}>{balanceSA} FIU</Typography>
			<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="24px" textTransform={"uppercase"}>current  PROFIT</Typography>
			<Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={500} mt="8px" textTransform={"uppercase"}>{balanceCP} FITTER PASS</Typography>
			<Item sx={{ background: "#E9EAEF", marginRight: '-24px', marginLeft: "-24px", padding: "5px", justifyContent: "center !important" }}>
				<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="8px">Available to claim at {timeUTC()}</Typography>
			</Item>



			<Item sx={{ gap: "8px", mt: "0px" }}>
				<ButtonOutline disabled={parseFloat(balanceSA) <= 0} onClick={handleUnStake} sx={{ marginTop: "25px", color: "#31373E", minHeight: "38px !important", flex: 1, borderColor: "#E9EAEF" }} variant="text">
					Unstake
				</ButtonOutline>
				<ButtonOutline disabled={parseFloat(balanceUS) <= 0} onClick={handleWithDraw} sx={{ marginTop: "25px", color: "#31373E", minHeight: "38px !important", flex: 1, borderColor: "#E9EAEF" }} variant="text">
					Withdraw
				</ButtonOutline>
			</Item>
			<Item onClick={() => {
				setStateContent(StateStaking.TransactionHistory);
			}} sx={{
				justifyContent: "center !important",
				mt: "8px !important",
				cursor: 'pointer'
			}}>
				<Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={600} mt="8px" sx={{
					textDecoration: "underline"
				}}>Transaction history</Typography>
			</Item>



		</>
	)
}
export const UnstakeAgain = (props: Props) => {
	const handleContinueUnStaking = () => {

	}
	const handleCancel = () => {

	}
	return (
		<>
			<Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100%" }}>
				<Box sx={{ textAlign: "center", }}>
					<Box>

						<img src={MARKETPLACE_ICON.infocircle} alt="" />
					</Box>
					<Typography fontSize={14} color="#31373E" fontWeight={500} lineHeight="20px" mt="28px">You have unstaked an amount of token before and currently have reward waiting to be withdrawn. If you still continue unstaking, the delay time will be extended until <span style={{ color: '#FF6F61' }}>00:00 30/7/2022 GMT +7</span>. Do you want to continue?</Typography>
					{/* <Typography fontSize={14} color="#FF6F61" fontWeight={500} lineHeight="20px" mt="28px">YOU ARE UNSTAKING.</Typography> */}
				</Box>
			</Box>
			<Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
				<MarketplaceButton customStyle={{ width: "100%" }} title={"Continue Unstaking"} handleOnClick={handleContinueUnStaking} />
				<ButtonOutline onClick={handleCancel} sx={{ marginTop: "25px", color: "#31373E", height: "38px", flex: 1, borderColor: "#E9EAEF" }} variant="text">
					Cancel
				</ButtonOutline>
			</Box>
		</>
	)
}
const ButtonOutline = styled(Button)({
	color: "#5A6178",
	background: "transparent",
	borderRadius: "12px",
	border: "1px solid #A7ACB8",
	// padding: "5px 5px",
	// minWidth: "35px",

	minHeight: "56px",
	textTransform: "none",
	transition: 'all .3s',
	"&:hover": {
		background: "#FF8A50",
		border: "0px",
		color: '#fff'
	},
	':disabled': {

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