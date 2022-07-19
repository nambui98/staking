import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/styles'
import moment from 'moment';
import React, { useState } from 'react'
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../const';
import { MARKETPLACE_ICON } from '../../../constants/marketplace';
import { useWalletContext } from '../../../contexts/WalletContext';

type Props = {
	setStateContent: Function,
	handleClickSuccess: Function;
	handleClickError: Function;
	handleClickWarning: Function;
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
		handleClickWarning,
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
		let time = new Date(parseInt(claimableTime) * 1000);
		return moment(time).utc().format('HH:mm DD/MM/yyyy');
		// time.setSeconds(time.getSeconds() + parseInt(claimableTime));

		// debugger
		// return `${time.getUTCHours()}:${time.getUTCMinutes()} ${time.getUTCDate()}/${time.getUTCMonth() + 1}/${time.getUTCFullYear()}`

	}
	// const handleStakeMore = () => {
	// 	handleClickWarning({
	// 		titleWarning: '',
	// 		titleButton: 'I know and want to stake',
	// 		haveCancel: true,
	// 		contentWarning: `If you stake more now, factional staking rewards (xx hours of ${balanceSA} tokens) will be cleared.24h period will be reset and continue to be calculated right at the moment you stake more. You should wait for that staking finishes in (xx hours).`,
	// 		functionWarning: () => {
	// 			setStateContent(StateStaking.StakeProcess)
	// 		},
	// 		stateContentNew: StateStaking.UnstakeWarrning
	// 	})
	// }
	const getTime = () => {
		var x = (Date.now() / 1000 - parseInt(claimableTime)) % 86400 / 3600;
		if (x < 0) {
			return (24 + x).toFixed(1)
		} else {
			return x.toFixed(1)
		}
	}
	const handleStakeMore = () => {
		handleClickWarning({
			titleWarning: '',
			titleButton: 'I know and want to stake',
			haveCancel: true,
			contentWarning: `The number of TOKENs that you unstaked now will no longer be used to calculate your rewards. You can only withdraw after the withdrawal delay time. Finished Fitter Pass will remain but fractional staking rewards (${getTime()} hours of ${balanceSA} tokens) will be cleared. If you only want to CLAIM the reward, please go back and click on the CLAIM button.`,
			functionWarning: () => {
				setStateContent(StateStaking.StakeProcess)
			},
			stateContentNew: StateStaking.UnstakeWarrning,
			functionCancel: () => {
				setStateContent(StateStaking.UnstakedSuccess)
			},
		})
	}
	return (
		<>
			<ButtonOutline onClick={handleStakeMore} sx={{ marginTop: "25px" }} variant="text">
				Stake more
			</ButtonOutline>
			<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="24px" textTransform={"uppercase"}>STAKING</Typography>
			<Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={600} mt="8px" textTransform={"uppercase"}>{balanceSA} FIU</Typography>
			<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="24px" textTransform={"uppercase"}>current  PROFIT</Typography>
			<Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={500} mt="8px" textTransform={"uppercase"}>{balanceCP} FITTER PASS</Typography>
			<Item sx={{
				background: "#E9EAEF", marginRight: '-24px', marginLeft: "-24px", padding: "5px", justifyContent: "center !important",
			}}>
				<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="8px">Available to claim at {timeUTC()} UTC</Typography>
			</Item>



			<Item sx={{ gap: "8px", mt: "0px" }}>
				<ButtonOutline disabled={parseFloat(balanceSA) <= 0} onClick={handleUnStake} sx={{ marginTop: "25px", color: "#31373E", minHeight: "38px !important", flex: 1, borderColor: "#E9EAEF" }} variant="text">
					Unstake
				</ButtonOutline>
				<ButtonOutline disabled={parseFloat(balanceUS) <= 0} onClick={handleWithDraw} sx={{ marginTop: "25px", color: "#31373E", minHeight: "38px !important", flex: 1, borderColor: "#E9EAEF" }} variant="text">
					Withdraw
				</ButtonOutline>
			</Item>
			{/* <Item onClick={() => {
				setStateContent(StateStaking.TransactionHistory);
			}} sx={{
				justifyContent: "center !important",
				mt: "8px !important",
				cursor: 'pointer'
			}}>
				<Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={600} mt="8px" sx={{
					textDecoration: "underline"
				}}>Transaction history</Typography>
			</Item> */}



		</>
	)
}
export const UnstakeAgain = (props: Props) => {
	const handleContinueUnStaking = () => {
		props.setStateContent(StateStaking.Unstake);
	}
	const handleCancel = () => {
		props.setStateContent(StateStaking.UnstakedSuccess);
	}
	const time = () => {
		let time = new Date();
		return moment(time.setDate(7)).utc().format('HH:mm DD/MM/yyyy');
	}
	console.log(time());

	return (
		<>
			<Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100%" }}>
				<Box sx={{ textAlign: "center", }}>
					<Box>

						<img src={MARKETPLACE_ICON.infocircle} alt="" />
					</Box>
					<Typography fontSize={14} color="#31373E" fontWeight={500} lineHeight="20px" mt={{ xs: '10px', sm: "28px" }}>You have to wait until <span style={{ color: '#FF6F61' }}>${time()}</span> UTC to withdraw your token(s). Do you want to continue?</Typography>
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
	marginTop: "25px",
	'@media (max-width: 650px)': {
		marginRight: '-16px !important',
		marginLeft: "-16px !important",
	}
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