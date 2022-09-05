import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/styles'
import moment from 'moment';
import React, { useState } from 'react'
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../const';
import { useWalletContext } from '../../../contexts/WalletContext';
import { claimReward, claimRewardError, walletError } from '../../../libs/staking';
import { formatMoney } from '../../../libs/utils/utils';

type Props = {
	setStateContent: Function;
	handleClickSuccess: Function;
	handleClickError: Function;
	handleClickWarning: Function;
	balanceFiu: string
	balanceSA: string
	balanceCP: string
	balanceUS: string
	claimableTime: string
	setIsLoading: Function
	dataActive: any
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
		setIsLoading,
		handleClickWarning,
		dataActive
	} = props;
	const { ethersSigner, ethersProvider, setRefresh, refresh, walletAccount } = useWalletContext();
	const handleClaim = async () => {
		setIsLoading(true)
		try {
			const res = await dataActive.info.claimReward(ethersSigner);
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
			const message = error.reason || "Something went wrong, please try again";
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
		handleClickWarning({
			titleWarning: 'YOU ARE UNSTAKING.',
			titleButton: 'Continue Unstaking',
			haveCancel: false,
			contentWarning: `The number of TOKENs that you unstaked now will no longer be used to calculate your rewards. You can only withdraw after the withdrawal delay time. Finished Fitter Pass will remain but fractional staking rewards (${getTime()} hours of ${formatMoney(balanceSA)} tokens) will be cleared. If you only want to CLAIM the reward, please go back and click on the CLAIM button.`,
			functionWarning: () => {
				setStateContent(StateStaking.Unstake)
			},
			stateContentNew: StateStaking.UnstakeWarrning
		})
	}
	const handleWithDraw = () => {
		setStateContent(StateStaking.WithDraw)
	}
	const timeUTC = () => {
		let time = new Date(parseInt(claimableTime) * 1000);
		return moment(time).utc().format('HH:mm DD/MM/yyyy');
		// time.setSeconds(time.getSeconds() + parseInt(claimableTime));
		// return `${time.getUTCHours()}:${time.getUTCMinutes()} ${time.getUTCDate()}/${time.getUTCMonth() + 1}/${time.getUTCFullYear()}`

	}
	const getTime = () => {
		var x = (Date.now() / 1000 - parseInt(claimableTime)) % 86400 / 3600;
		if (x < 0) {
			return (24 + x).toFixed(1)
		} else {
			return x.toFixed(1)
		}
	}
	console.log(claimableTime);

	const handleStakeMore = () => {
		handleClickWarning({
			titleWarning: '',
			titleButton: 'I know and want to stake',
			haveCancel: true,
			contentWarning: `If you stake more now, factional staking rewards (${getTime()} hours of ${formatMoney(balanceSA)} tokens) will be cleared.24h period will be reset and continue to be calculated right at the moment you stake more. You should wait for that staking finishes in (${(24 - parseInt(getTime())).toFixed(1)} hours).`,
			functionWarning: () => {
				setStateContent(StateStaking.StakeProcess)
			},
			stateContentNew: StateStaking.UnstakeWarrning,
			functionCancel: () => {
				setStateContent(StateStaking.Staked)
			},
		})
	}
	console.log(parseFloat(balanceCP) <= 0 && parseFloat(balanceSA) > 0)
	return (
		<>
			<ButtonOutline disabled={(dataActive && dataActive.status == 3) || parseFloat(balanceSA) >= 40000} onClick={handleStakeMore} sx={{ marginTop: "25px" }} variant="text">
				Stake more
			</ButtonOutline>
			<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="24px" textTransform={"uppercase"}>STAKING</Typography>
			<Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={600} mt="8px" textTransform={"uppercase"}>{formatMoney(balanceSA)} FIU</Typography>
			<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="24px" textTransform={"uppercase"}>current  PROFIT</Typography>
			{/* {
				parseFloat(claimableTime) > 0 && <Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={500} mt="8px" textTransform={"uppercase"}>{balanceCP} FITTER PASS</Typography>} */}

			{
				// parseFloat(claimableTime) <= 0 &&
				parseFloat(balanceCP) > 0 ?
					<Typography fontSize={16} color="#1DB268" textAlign={"center"} fontWeight={500} mt="8px" textTransform={"uppercase"}>+{balanceCP} FITTER PASS</Typography>
					: <Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={500} mt="8px" textTransform={"uppercase"}>{balanceCP} FITTER PASS</Typography>
			}
			{parseFloat(balanceCP) <= 0 && parseFloat(balanceSA) > 0 && <Item sx={{
				background: "#E9EAEF", marginRight: '-24px', marginLeft: "-24px", padding: "5px", justifyContent: "center !important",
			}}>

				<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="8px">Available to claim at {timeUTC()} UTC</Typography>
			</Item>
			}

			{
				// parseFloat(claimableTime) <= 0 && 
				parseFloat(balanceCP) > 0 && <Item sx={{
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
	'&:disabled': {

	}
})
const Item = styled(Box)({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginTop: "25px",
	// '@media (max-width: 650px)': {
	// 	marginRight: '-16px !important',
	// 	marginLeft: "-16px !important",
	// }
})
