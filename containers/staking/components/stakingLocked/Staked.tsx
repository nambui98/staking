import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import moment from 'moment';
import React, { useState } from 'react';
import { MarketplaceButton } from '../../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../../const';
import { useWalletContext } from '../../../../contexts/WalletContext';
import { claimReward } from '../../../../libs/staking';
import { formatMoney } from '../../../../libs/utils/utils';

type Props = {
	setStateContent: Function;
	handleClickSuccess: Function;
	handleClickError: Function;
	// handleClickWarning: Function;
	// balanceFiu: string;
	// balanceSA: string;
	// balanceCP: string;
	// balanceUS: string;
	// claimableTime: string;
	setIsLoading: Function;
};

const arrJuly = ['2nd July 2022', '3rd July 2022'];

const arrTitleStakingLocked = ['STAKING', 'Lock Duration', 'Rewards'];

const listStaking = {
	[arrJuly[0]]: [
		{
			[arrTitleStakingLocked[0]]: 400000,
			[arrTitleStakingLocked[1]]: '3 days',
			[arrTitleStakingLocked[2]]: '+31 FITTER PASSes',
			withDraw: 'true',
		},
		{
			[arrTitleStakingLocked[0]]: 400000,
			[arrTitleStakingLocked[1]]: '1 day',
			[arrTitleStakingLocked[2]]: '+1 FITTER PASSes',
			withDraw: 'true',
		},
	],
	[arrJuly[1]]: [
		{
			[arrTitleStakingLocked[0]]: 400000,
			[arrTitleStakingLocked[1]]: '3 days',
			[arrTitleStakingLocked[2]]: '+31 FITTER PASSes',
			withDraw: 'true',
		},
	],
};

export const Staked = (props: Props) => {
	const {
		setStateContent,
		handleClickSuccess,
		handleClickError,
		setIsLoading,
	} = props;
	const { ethersSigner, ethersProvider, setRefresh, refresh } =
		useWalletContext();
	const handleClaim = async () => {
		setIsLoading(true);
		try {
			const res = await claimReward(ethersSigner);
			const checkStatus = setInterval(async () => {
				const statusApprove = await ethersProvider.getTransactionReceipt(
					res.hash
				);
				if (statusApprove?.status) {
					setIsLoading(false);
					setRefresh(!refresh);
					handleClickSuccess({
						titleSuccess: 'Claim successfully!',
						functionSuccess: () => {
							setStateContent(StateStaking.Staked);
						},
						stateContentNew: StateStaking.Success,
					});
					clearInterval(checkStatus);
				}
			}, 1000);
		} catch (error: any) {
			const message = error.reason || 'Something went wrong, please try again';
			setIsLoading(false);
			handleClickError({
				titleError: message,
				functionError: () => {
					setStateContent(StateStaking.Staked);
				},
				stateContentNew: StateStaking.Error,
			});
		}
	};

	const renderItem = () => {
		return Object.keys(listStaking).map((item, i) => {
			return (
				<Box key={i} sx={{ mt: '25px' }}>
					<Box
						sx={{
							fontSize: '10px',
							fontWeight: '600',
							color: '#31373E',
							textTransform: 'uppercase',
							background: '#FFE2D3',
							lineHight: '22px',
							display: 'inline-block',
							padding: '4px',
							borderRadius: '12px',
						}}
					>
						{item}
					</Box>
					<Box sx={{ minWidth: '82px' }}>
						{arrTitleStakingLocked.map((v) => (
							<span
								key={v}
								style={{
									fontSize: '10px',
									textTransform: 'uppercase',
									fontWeight: '500',
									color: '#5A6178',
									marginRight: '28px',
								}}
							>
								{v}
							</span>
						))}
					</Box>
					<Box sx={{ minWidth: '82px' }}>
						{listStaking[item].map((value, index) => {
							return (
								<Box
									key={index}
									sx={{
										textTransform: 'uppercase',
										margin: '8px 0',
										fontWeight: '600',
										fontSize: '10px',
									}}
								>
									<span style={{ marginRight: '45px', color: '#31373E' }}>
										{value.STAKING}
									</span>
									<span style={{ marginRight: '45px', color: '#31373E' }}>
										{value['Lock Duration']}
									</span>
									<span style={{ color: '#1DB268', marginRight: '25px' }}>
										{value.Rewards}
									</span>
									<span
										style={{
											float: 'right',
											fontSize: '9px',
											padding: '0 3px',
											borderRadius: '12px',
											border: '1px solid #E9EAEF',
										}}
									>
										Withdraw
									</span>
								</Box>
							);
						})}
					</Box>
				</Box>
			);
		});
	};

	const handleUnStake = () => {
		// handleClickWarning({
		// 	titleWarning: 'YOU ARE UNSTAKING.',
		// 	titleButton: 'Continue Unstaking',
		// 	haveCancel: false,
		// 	contentWarning: `The number of TOKENs that you unstaked now will no longer be used to calculate your rewards. You can only withdraw after the withdrawal delay time. Finished Fitter Pass will remain but fractional staking rewards (${getTime()} hours of ${formatMoney(
		// 		balanceSA
		// 	)} tokens) will be cleared. If you only want to CLAIM the reward, please go back and click on the CLAIM button.`,
		// 	functionWarning: () => {
		// 		setStateContent(StateStaking.Unstake);
		// 	},
		// 	stateContentNew: StateStaking.UnstakeWarrning,
		// });
	};
	const handleWithDraw = () => {
		setStateContent(StateStaking.WithDraw);
	};
	const timeUTC = () => {
		// let time = new Date(parseInt(claimableTime) * 1000);
		// return moment(time).utc().format('HH:mm DD/MM/yyyy');
		// time.setSeconds(time.getSeconds() + parseInt(claimableTime));
		// return `${time.getUTCHours()}:${time.getUTCMinutes()} ${time.getUTCDate()}/${time.getUTCMonth() + 1}/${time.getUTCFullYear()}`
	};
	const getTime = () => {
		// var x = ((Date.now() / 1000 - parseInt(claimableTime)) % 86400) / 3600;
		// if (x < 0) {
		// 	return (24 + x).toFixed(1);
		// } else {
		// 	return x.toFixed(1);
		// }
	};

	const handleStakeMore = () => {
		// handleClickWarning({
		// 	titleWarning: '',
		// 	titleButton: 'I know and want to stake',
		// 	haveCancel: true,
		// 	contentWarning: `If you stake more now, factional staking rewards (${getTime()} hours of ${formatMoney(
		// 		balanceSA
		// 	)} tokens) will be cleared.24h period will be reset and continue to be calculated right at the moment you stake more. You should wait for that staking finishes in (${(
		// 		24 - parseInt(getTime())
		// 	).toFixed(1)} hours).`,
		// 	functionWarning: () => {
		// 		setStateContent(StateStaking.StakeProcess);
		// 	},
		// 	stateContentNew: StateStaking.UnstakeWarrning,
		// 	functionCancel: () => {
		// 		setStateContent(StateStaking.Staked);
		// 	},
		// });
	};
	return (
		<>
			<ButtonOutline
				onClick={handleStakeMore}
				sx={{ marginTop: '25px' }}
				variant="text"
			>
				Stake more
			</ButtonOutline>
			{/* <Typography
				fontSize={14}
				color="#5A6178"
				textAlign={'center'}
				fontWeight={500}
				mt="24px"
				textTransform={'uppercase'}
			>
				STAKING
			</Typography>
			<Typography
				fontSize={14}
				color="#31373E"
				textAlign={'center'}
				fontWeight={600}
				mt="8px"
				textTransform={'uppercase'}
			>
				{'90000'} FIU
			</Typography>
			<Typography
				fontSize={14}
				color="#5A6178"
				textAlign={'center'}
				fontWeight={500}
				mt="24px"
				textTransform={'uppercase'}
			>
				current PROFIT
			</Typography> */}

			{renderItem()}
		</>
	);
};

const ButtonOutline = styled(Button)({
	color: '#5A6178',
	background: 'transparent',
	borderRadius: '12px',
	border: '1px solid #A7ACB8',
	// padding: "5px 5px",
	// minWidth: "35px",

	minHeight: '56px',
	textTransform: 'none',
	transition: 'all .3s',
	'&:hover': {
		background: '#FF8A50',
		border: '0px',
		color: '#fff',
	},
	':disabled': {},
});
const Item = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginTop: '25px',
	'@media (max-width: 650px)': {
		marginRight: '-16px !important',
		marginLeft: '-16px !important',
	},
});
