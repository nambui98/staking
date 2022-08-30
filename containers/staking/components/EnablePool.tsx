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
	setStateContentInit: Function
	dataActive: any
}

export const EnablePool = (props: Props) => {
	const { setIsLoading, handleClickError, setStateContentInit, dataActive } = props;
	const { setToggleActivePopup, walletAccount, ethersSigner, ethersProvider } = useWalletContext();

	const [continueToStake, setContinueToStake] = useState<Boolean>(false);

	const handleContinueToStake = () => {
		setStateContentInit(StateStaking.StakeProcess);
		props.setStateContent(StateStaking.StakeProcess)
	}
	const handleEnable = async () => {
		setIsLoading(true)
		try {
			const res = await dataActive.info.approveFiu(ethersSigner);
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
				<ValueItem>{dataActive && dataActive.info.startTime}</ValueItem>

			</Item>
			<Item>
				<TitleItem >End time JOIN</TitleItem>
				<ValueItem>{dataActive && dataActive.info.endTime}</ValueItem>
			</Item>
			<Item>
				<TitleItem >stake amount (min)</TitleItem>
				<ValueItem>{dataActive && dataActive.info.stakeMinAmount} FIU/1 person</ValueItem>
			</Item>
			<Item>
				<TitleItem >stake amount (mAX)</TitleItem>
				<ValueItem>{dataActive && dataActive.info.stakeMaxAmount}</ValueItem>
			</Item>
			<Item>
				<TitleItem >REWARD</TitleItem>
				<ValueItem>
					{dataActive && dataActive.info.reward}
				</ValueItem>
			</Item>
			<Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
				{walletAccount ?
					continueToStake ? <MarketplaceButton customStyle={{ width: "100%" }} disabled={dataActive && dataActive.status == 3} title={"Continue to stake"} handleOnClick={handleContinueToStake} /> :
						<MarketplaceButton customStyle={{ width: "100%" }} disabled={dataActive && dataActive.status == 3} title={"Enable"} handleOnClick={handleEnable} /> : <MarketplaceButton disabled={dataActive && dataActive.status == 3} customStyle={{ width: "100%" }} title={"Connect Wallet"} handleOnClick={() => { setToggleActivePopup(true) }} />
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