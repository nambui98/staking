import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles'
import React, { useState } from 'react'
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../const';
import { useWalletContext } from '../../../contexts/WalletContext';
import { approveStakingFiu } from '../../../libs/staking';

type Props = {
	setStateContent: Function
	setIsLoading: Function
	handleClickError: Function
}

export const EnablePool = (props: Props) => {
	const { setIsLoading, handleClickError } = props;
	const { setToggleActivePopup, walletAccount, ethersSigner, ethersProvider } = useWalletContext();

	const [continueToStake, setContinueToStake] = useState<Boolean>(false);

	const handleContinueToStake = () => {
		props.setStateContent(StateStaking.StakeProcess)
	}
	const handleEnable = async () => {
		setIsLoading(true)
		try {
			const res = await approveStakingFiu(ethersSigner);
			const checkStatus = setInterval(async () => {
				const statusApprove = await ethersProvider.getTransactionReceipt(res.hash);
				if (statusApprove?.status) {
					// handlePurchaseBox()
					setIsLoading(false);
					setContinueToStake(true)
					clearInterval(checkStatus)
				}
			}, 1000);


		} catch (error: any) {
			const message = error.reason || "Something went wrong, please try again";
			setIsLoading(false);
			handleClickError({
				titleError: message,
				functionError: () => {
					props.setStateContent(StateStaking.EnablePool)
				},
				stateContentNew: StateStaking.Error
			})
		}
	}
	return (
		<>
			<Item>
				<TitleItem>TOTAL AMOUNT</TitleItem>
				<ValueItem>Unlimited</ValueItem>
			</Item>
			<Item>
				<TitleItem >START TIME JOIN</TitleItem>
				<ValueItem>00:00 24/12/2022</ValueItem>
			</Item>
			<Item>
				<TitleItem >End time JOIN</TitleItem>
				<ValueItem>0:00 24/12/2022</ValueItem>
			</Item>
			<Item>
				<TitleItem >stake amount (min)</TitleItem>
				<ValueItem>1000 FIU/1 person</ValueItem>
			</Item>
			<Item>
				<TitleItem >stake amount (mAX)</TitleItem>
				<ValueItem>-</ValueItem>
			</Item>
			<Item>
				<TitleItem >REWARD</TitleItem>
				<ValueItem>
					Fitter Pass
				</ValueItem>
			</Item>
			<Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
				{walletAccount ?
					continueToStake ? <MarketplaceButton customStyle={{ width: "100%" }} title={"Continue to stake"} handleOnClick={handleContinueToStake} /> :
						<MarketplaceButton customStyle={{ width: "100%" }} title={"Enable"} handleOnClick={handleEnable} /> : <MarketplaceButton customStyle={{ width: "100%" }} title={"Connect Wallet"} handleOnClick={() => { setToggleActivePopup(true) }} />
				}
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