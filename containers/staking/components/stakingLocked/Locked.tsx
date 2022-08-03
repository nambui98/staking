import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import React, { useState } from 'react';
import { MarketplaceButton } from '../../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../../const';
import { useWalletContext } from '../../../../contexts/WalletContext';
import { approveStakingFiu } from '../../../../libs/staking';
import { formatMoney } from '../../../../libs/utils/utils';

type Props = {
	setStateContent: Function;
	setIsLoading: Function;
	handleClickError: Function;
	setStateContentInit: Function;
};

export const Locked = (props: Props) => {
	const { setIsLoading, handleClickError, setStateContentInit } = props;
	const { setToggleActivePopup, walletAccount, ethersSigner, ethersProvider } =
		useWalletContext();

	const [continueToStake, setContinueToStake] = useState<Boolean>(false);

	const handleContinueToStake = () => {
		setStateContentInit(StateStaking.StakeProcess);
		props.setStateContent(StateStaking.StakeProcess);
	};
	// const handleEnable = async () => {
	// 	setIsLoading(true)
	// 	try {
	// 		const res = await approveStakingFiu(ethersSigner);
	// 		const checkStatus = setInterval(async () => {
	// 			const statusApprove = await ethersProvider.getTransactionReceipt(res.hash);
	// 			if (statusApprove?.status) {
	// 				// handlePurchaseBox()
	// 				setIsLoading(false);
	// 				setContinueToStake(true)
	// 				clearInterval(checkStatus)
	// 			}
	// 		}, 1000);

	// 	} catch (error: any) {
	// 		const message = error.reason || "Something went wrong, please try again";
	// 		setIsLoading(false);
	// 		handleClickError({
	// 			titleError: message,
	// 			functionError: () => {
	// 				props.setStateContent(StateStaking.EnablePool)
	// 			},
	// 			stateContentNew: StateStaking.Error
	// 		})
	// 	}
	// }
	return (
		<>
			<Item>
				<TitleItem>TOTAL AMOUNT</TitleItem>
				<ValueItem>Unlimited</ValueItem>
			</Item>
			<Item>
				<TitleItem>START TIME JOIN</TitleItem>
				<ValueItem>09:00 UTC 03/08/2022</ValueItem>
			</Item>
			<Item>
				<TitleItem>End time JOIN</TitleItem>
				<ValueItem>09:00 UTC 10/08/2022</ValueItem>
			</Item>
			<Item>
				<TitleItem>stake amount (min)</TitleItem>
				<ValueItem>{formatMoney('40000')} FIU/1 person</ValueItem>
			</Item>
			<Item>
				<TitleItem>stake amount (mAX)</TitleItem>
				<ValueItem>-</ValueItem>
			</Item>
			<Item>
				<TitleItem>REWARD</TitleItem>
				<ValueItem>Fitter Pass</ValueItem>
			</Item>
			<Item mb={"8px"} mt="38px !important">
				<img
					src="assets/icons/info-circle2.svg"
					alt=""
				/>
				<Typography
					sx={{
						fontWeight: 500,
						fontSize: '10px',
						lineHeight: '16px',
						color: '#FF6D24',
						marginLeft: '10px',
					}}
				>
					Fitter Pass(es) will be immediately sent to your account right after
					you successfully stake.
				</Typography>
			</Item>
			<Box
				mt="auto"
				width={'100%'}
				sx={{ paddingTop: '16px', borderTop: '1px solid #E9EAEF' }}
			>

				<MarketplaceButton
					customStyle={{ width: '100%' }}
					title={'Connect Wallet'}
					handleOnClick={() => {
						setToggleActivePopup(true);
					}}
				/>

			</Box>
		</>
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
