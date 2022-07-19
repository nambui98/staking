import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/styles'
import moment from 'moment';
import React, { useState } from 'react'
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../const';
import { useWalletContext } from '../../../contexts/WalletContext';
import { claimReward } from '../../../libs/staking';

type Props = {
	setStateContent: Function;
	handleClickSuccess: Function;
	handleClickError: Function;
	balanceFiu: string
	balanceSA: string
	balanceCP: string
	balanceUS: string
	claimableTime: string
	setIsLoading: Function
}

export const Staked = (props: Props) => {
	const {
		balanceFiu,
		balanceSA,
		balanceCP,
		balanceUS,
		claimableTime,
		setStateContent,
		handleClickSuccess,
		handleClickError,
		setIsLoading
	} = props;
	const { ethersSigner, ethersProvider, setRefresh, refresh } = useWalletContext();
	const handleClaim = async () => {
		setIsLoading(true)
		try {
			const res = await claimReward(ethersSigner);
			const checkStatus = setInterval(async () => {
				const statusApprove = await ethersProvider.getTransactionReceipt(res.hash);
				if (statusApprove?.status) {
					setIsLoading(false)
					setRefresh(!refresh)
					handleClickSuccess({
						titleSuccess: 'Claim successfully!',
						functionSuccess: () => {
							setStateContent(StateStaking.Staked)
						},
						stateContentNew: StateStaking.Success
					})
					clearInterval(checkStatus)
				}
			}, 1000);
		} catch (error: any) {
			const message = error.reason;
			setIsLoading(false);
			handleClickError({
				titleError: message,
				functionError: () => {
					setStateContent(StateStaking.Staked)
				},
				stateContentNew: StateStaking.Error
			})
		}
	}

	const handleUnStake = () => {
		setStateContent(StateStaking.UnstakeWarrning)
	}
	const handleWithDraw = () => {
		setStateContent(StateStaking.WithDraw)
	}
	const timeUTC = () => {
		let time = new Date(claimableTime);
		return moment(time).format('hh:mm DD/MM/yyyy');
		// time.setSeconds(time.getSeconds() + parseInt(claimableTime));
		// return `${time.getUTCHours()}:${time.getUTCMinutes()} ${time.getUTCDate()}/${time.getUTCMonth() + 1}/${time.getUTCFullYear()}`

	}
	return (
		<>
			<ButtonOutline onClick={() => setStateContent(StateStaking.StakeProcess)} sx={{ marginTop: "25px" }} variant="text">
				Stake more
			</ButtonOutline>
			<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="24px" textTransform={"uppercase"}>STAKING</Typography>
			<Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={600} mt="8px" textTransform={"uppercase"}>{balanceSA} FIU</Typography>
			<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="24px" textTransform={"uppercase"}>current  PROFIT</Typography>
			{/* {
				parseFloat(claimableTime) > 0 && <Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={500} mt="8px" textTransform={"uppercase"}>{balanceCP} FITTER PASS</Typography>} */}

			{
				parseFloat(claimableTime) <= 0 && parseFloat(balanceCP) > 0 ?
					<Typography fontSize={16} color="#1DB268" textAlign={"center"} fontWeight={500} mt="8px" textTransform={"uppercase"}>+{balanceCP} FITTER PASS</Typography>
					: <Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={500} mt="8px" textTransform={"uppercase"}>{balanceCP} FITTER PASS</Typography>
			}
			{parseFloat(claimableTime) > 0 && <Item sx={{
				background: "#E9EAEF", marginRight: '-24px', marginLeft: "-24px", padding: "5px", justifyContent: "center !important",
				// '@media (max-width: 650px)': {
				// 	marginRight: '-16px !important',
				// 	marginLeft: "-16px !important",
				// }
			}}>
				<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="8px">Available to claim at {timeUTC()} UTC</Typography>
			</Item>}

			{
				parseFloat(claimableTime) <= 0 && parseFloat(balanceCP) > 0 && <Item sx={{
					justifyContent: "center !important",
				}}>
					<MarketplaceButton customStyle={{ width: "160px" }} title={"Claim"} handleOnClick={handleClaim} />
				</Item>
			}
			<Item sx={{ gap: "8px", mt: "auto !important" }}>
				<ButtonOutline disabled={parseFloat(balanceSA) <= 0} onClick={handleUnStake} sx={{ marginTop: "25px", color: "#31373E", minHeight: "38px !important", flex: 1, borderColor: "#E9EAEF" }} variant="text">
					Unstake
				</ButtonOutline>
				<ButtonOutline disabled={parseFloat(balanceUS) <= 0} onClick={handleWithDraw} sx={{ marginTop: "25px", color: "#31373E", minHeight: "38px !important", flex: 1, borderColor: "#E9EAEF" }} variant="text">
					Withdraw
				</ButtonOutline>
			</Item>
			{/* <Item sx={{
				justifyContent: "center !important",
				mt: "8px !important",
				cursor: 'pointer'
			}} onClick={() => {
				setStateContent(StateStaking.TransactionHistory);
			}}>
				<Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={600} mt="8px" sx={{
					textDecoration: "underline"
				}}>Transaction history</Typography>
			</Item> */}


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
