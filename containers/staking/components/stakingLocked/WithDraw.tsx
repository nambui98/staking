import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import moment from 'moment';
import React, { useState } from 'react';
import { MarketplaceButton } from '../../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../../const';
import { MARKETPLACE_ICON } from '../../../../constants/marketplace';
import { useWalletContext } from '../../../../contexts/WalletContext';
import { withDraw } from '../../../../libs/staking';

type Props = {
	setStateContent: Function;
	handleClickSuccess: Function;
	handleClickError: Function;
	setIsLoading: Function;
	// balanceUS: string
	// remainingDelayTime: string
};
export const WithDraw = (props: Props) => {
	const {
		setStateContent,
		// balanceUS,
		handleClickSuccess,
		handleClickError,
		// remainingDelayTime,
		setIsLoading,
	} = props;
	const { ethersSigner, ethersProvider, setRefresh, refresh } =
		useWalletContext();
	const handleWithdraw = async () => {
		// if (parseFloat(remainingDelayTime) > 0) {
		// 	setStateContent(StateStaking.WithDrawWarning);
		// } else {
		// 	setIsLoading(true);
		// 	try {
		// 		const res = await withDraw(ethersSigner);
		// 		const checkStatus = setInterval(async () => {
		// 			const statusApprove = await ethersProvider.getTransactionReceipt(
		// 				res.hash
		// 			);
		// 			if (statusApprove?.status) {
		// 				setIsLoading(false);
		// 				setRefresh(!refresh);
		// 				handleClickSuccess({
		// 					titleSuccess: 'Withdraw successfully!',
		// 					functionSuccess: () => {
		// 						setStateContent(StateStaking.WithDraw);
		// 					},
		// 					stateContentNew: StateStaking.Success,
		// 				});
		// 				clearInterval(checkStatus);
		// 			}
		// 		}, 1000);
		// 	} catch (error: any) {
		// 		const message =
		// 			error.reason || 'Something went wrong, please try again';
		// 		setIsLoading(false);
		// 		handleClickError({
		// 			titleError: message,
		// 			functionError: () => {
		// 				setStateContent(StateStaking.WithDraw);
		// 			},
		// 			stateContentNew: StateStaking.Error,
		// 		});
		// 	}
		// }
	};

	const timeUTC = () => {
		// console.log(remainingDelayTime);
		// let time = new Date();
		// time.setSeconds(time.getSeconds() + parseInt(remainingDelayTime));
		// return moment(time).utc().format('HH:mm DD/MM/yyyy');
		// return `${time.getUTCHours()}:${time.getUTCMinutes()} ${time.getUTCDate()}/${time.getUTCMonth() + 1}/${time.getUTCFullYear()}`
	};
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'column',
				height: '100%',
			}}
		>
			<Box sx={{ flex: 1 }}>
				<Item>
					<TitleItem>Token</TitleItem>
					<ValueItem>70000 FIU</ValueItem>
				</Item>
				<Item>
					<TitleItem>available amount</TitleItem>
					<ValueItem>40000 FIU</ValueItem>
				</Item>
				<Item>
					<TitleItem>current profit</TitleItem>
					<ValueItem>40000 FITTER PASS</ValueItem>
				</Item>
				<Item>
					<TitleItem>WITHDRAWAL DELAY TIME</TitleItem>
					<ValueItem>7 DAYS</ValueItem>
				</Item>
			</Box>
			{true && (
				<Item
					sx={{
						background: '#E9EAEF',
						mt: 'auto !important',
						marginRight: '-24px',
						marginLeft: '-24px',
						padding: '5px',
						justifyContent: 'center !important',
						'@media (max-width: 650px)': {
							marginRight: '-16px',
							marginLeft: '-16px',
						},
					}}
				>
					<Typography
						fontSize={14}
						color="#5A6178"
						textAlign={'center'}
						fontWeight={500}
						mt="8px"
					>
						Available to withdraw at 08:23 11/7/2022
					</Typography>
				</Item>
			)}

			<Box
				width={'100%'}
				sx={{
					paddingTop: '16px',
					borderTop: '1px solid #E9EAEF',
					mt: '54px',
					flex: 'end',
				}}
			>
				<MarketplaceButton
					// disabled={parseFloat(balanceUS) <= 0}
					customStyle={{ width: '100%' }}
					title={'Withdraw'}
					handleOnClick={handleWithdraw}
				/>
			</Box>
		</Box>
	);
};
// export const WithDrawWarning = (props: Props) => {
// 	const {
// 		setStateContent,
// 		// balanceUS,
// 		handleClickSuccess,
// 		handleClickError,
// 		// remainingDelayTime,
// 		setIsLoading,
// 	} = props;

// 	const { ethersProvider, ethersSigner, setRefresh, refresh } =
// 		useWalletContext();

// 	const handleWithdraw = async () => {
// 		setIsLoading(true);
// 		try {
// 			const res = await withDraw(ethersSigner);
// 			const checkStatus = setInterval(async () => {
// 				const statusApprove = await ethersProvider.getTransactionReceipt(
// 					res.hash
// 				);
// 				if (statusApprove?.status) {
// 					setIsLoading(false);
// 					setRefresh(!refresh);
// 					handleClickSuccess({
// 						titleSuccess: 'Withdraw successfully!',
// 						functionSuccess: () => {
// 							setStateContent(StateStaking.WithDraw);
// 						},
// 						stateContentNew: StateStaking.Success,
// 					});
// 					clearInterval(checkStatus);
// 				}
// 			}, 1000);
// 		} catch (error: any) {
// 			const message = error.reason || 'Something went wrong, please try again';
// 			setIsLoading(false);
// 			handleClickError({
// 				titleError: message,
// 				functionError: () => {
// 					setStateContent(StateStaking.WithDraw);
// 				},
// 				stateContentNew: StateStaking.Error,
// 			});
// 		}
// 	};
// 	const handleCancel = () => {
// 		setStateContent(StateStaking.UnstakedSuccess);
// 	};
// 	return (
// 		<>
// 			<Box
// 				sx={{
// 					display: 'flex',
// 					justifyContent: 'center',
// 					flexDirection: 'column',
// 					alignItems: 'center',
// 					height: '100%',
// 				}}
// 			>
// 				<Box sx={{ textAlign: 'center' }}>
// 					<Box>
// 						<img src={MARKETPLACE_ICON.infocircle} alt="" />
// 					</Box>
// 					<Typography
// 						fontSize={14}
// 						color="#31373E"
// 						fontWeight={500}
// 						lineHeight="20px"
// 						mt="28px"
// 					>
// 						If you want to withdraw immediately, you have to pay a penalty that
// 						will <span style={{ color: '#FF6F61' }}>cost 16% </span> of your
// 						staked amount to skip the delay time. Are you sure want to continue?
// 					</Typography>
// 				</Box>
// 			</Box>
// 			<Box
// 				mt="auto"
// 				width={'100%'}
// 				sx={{ paddingTop: '16px', borderTop: '1px solid #E9EAEF' }}
// 			>
// 				<MarketplaceButton
// 					customStyle={{ width: '100%' }}
// 					title={'Continue'}
// 					handleOnClick={handleWithdraw}
// 				/>
// 				<ButtonOutline
// 					onClick={handleCancel}
// 					sx={{
// 						width: '100%',
// 						marginTop: '8px',
// 						color: '#31373E',
// 						height: '38px',
// 						flex: 1,
// 						borderColor: '#E9EAEF',
// 					}}
// 					variant="text"
// 				>
// 					Cancel
// 				</ButtonOutline>
// 			</Box>
// 		</>
// 	);
// };
const ButtonOutline = styled(Button)({
	color: '#5A6178',
	background: 'transparent',
	borderRadius: '12px',
	border: '1px solid #A7ACB8',
	// padding: "5px 5px",
	// minWidth: "35px",

	height: '56px',
	textTransform: 'none',
	transition: 'all .3s',
	':hover': {
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
