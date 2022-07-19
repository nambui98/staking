import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/styles'
import { log } from 'console';
import { doubleclicksearch } from 'googleapis/build/src/apis/doubleclicksearch';
import { title } from 'process';
import React, { useState } from 'react'
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../const';
import { useWalletContext } from '../../../contexts/WalletContext';
import { stake } from '../../../libs/staking';
import { TEXT_STYLE } from '../../../styles/common/textStyles';

type Props = {
	setStateContent: Function;
	setIsLoading: Function;
	setSuccess: Function;
	handleClickSuccess: Function;
	handleClickError: Function;
	balanceFiu: string
	balanceSA: string
	balanceCP: string
}

const percents = [
	{
		name: "25%",
		value: 0.25
	},
	{
		name: "50%",
		value: 0.5
	},
	{
		name: "75%",
		value: 0.75
	},
	{
		name: "Max",
		value: 1
	},
]

export const StakeProcess = ({
	balanceFiu,
	balanceSA,
	balanceCP,
	handleClickSuccess,
	setStateContent,
	setIsLoading,
	handleClickError
}: Props) => {
	const [value, setValue] = useState('');
	const [messageError, setMessageError] = useState('');
	const { ethersSigner, ethersProvider, setRefresh, refresh } = useWalletContext();
	console.log(balanceFiu);
	const handleStake = async () => {
		setIsLoading(true)
		try {
			const res = await stake(value, ethersSigner);
			const checkStatus = setInterval(async () => {
				const statusApprove = await ethersProvider.getTransactionReceipt(res.hash);
				if (statusApprove?.status) {
					setIsLoading(false)
					setRefresh(!refresh)
					handleClickSuccess({
						titleSuccess: 'Staked successfully!',
						functionSuccess: () => {
							setStateContent(StateStaking.Staked)
						},
						stateContentNew: StateStaking.Success
					})
					clearInterval(checkStatus)
				}
			}, 1000);
		} catch (error: any) {
			let indexReason = error.message.search("reason=");
			console.log(error.message.substring(indexReason).split(',')[0].split(':')[1].split());

			setIsLoading(false);
			handleClickError({
				titleError: 'Something went wrong, please try again',
				functionError: () => {
					setStateContent(StateStaking.StakeProcess)
				},
				stateContentNew: StateStaking.Error
			})
		}

	}
	const handleValueWithPercent = (percent: number) => {
		let valueCal = percent * parseFloat(balanceFiu);
		if (valueCal < parseFloat(balanceFiu)) {
			setValue((percent * parseFloat(balanceFiu)).toString());
			setMessageError("")
		} else {
			setValue(valueCal.toString())
			setMessageError("Insufficient balance")
		}
	}
	return (
		<>
			<Item>
				<TitleItem>your current balance</TitleItem>
				<ValueItem>{balanceFiu} FIU</ValueItem>
			</Item>
			<Item>
				<TitleItem >your current amount staked</TitleItem>
				<ValueItem>{balanceSA} FIU</ValueItem>
			</Item>
			<Item>
				<TitleItem >you want to stake</TitleItem>
				<ValueItem>
					<Search
						value={value}
						placeholder=""
						onChange={(e) => {
							if (Number(e.target.value)) {
								if (parseFloat(e.target.value) > 0) {

									if (parseFloat(e.target.value) > parseFloat(balanceFiu)) {
										setValue(e.target.value)
										setMessageError("Insufficient balance")
									} else {
										setValue(e.target.value)
										setMessageError("")
									}
								} else {
									setValue(e.target.value)
									setMessageError("Please enter a positive number")
								}
							} else {
								setMessageError('Please enter valid number')
								setValue(e.target.value)

							}
						}}
					/>

				</ValueItem>
			</Item>
			{
				messageError &&
				<Item sx={{ mt: "8px !important" }}>
					<TitleItem ></TitleItem>
					<ValueItem>		<Typography sx={{ ...TEXT_STYLE(12, 500, "#FF6F61"), }}>{messageError}</Typography>
					</ValueItem>
				</Item>
			}
			<Item sx={{ mt: "8px !important" }}>
				<TitleItem ></TitleItem>
				<ValueItem sx={{ display: "flex", gap: "8px" }}>
					{
						percents.map((item, i) => <ButtonPercent onClick={() => handleValueWithPercent(item.value)} key={i} variant="text">
							{item.name}
						</ButtonPercent>)
					}

				</ValueItem>
			</Item>
			<Item sx={{ mt: "16px !important" }}>
				<TitleItem >TOTAL reward earned</TitleItem>
				<ValueItem>{balanceCP} FITTER Pass</ValueItem>
			</Item>
			<Item>
				<TitleItem >estimated daily rewards</TitleItem>
				<ValueItem>-</ValueItem>
			</Item>
			<Item>
				<TitleItem >estimated daily apr</TitleItem>
				<ValueItem>-</ValueItem>
			</Item>
			<Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
				<MarketplaceButton disabled={!value || messageError ? true : false} customStyle={{ width: "100%" }} title={"Stake"} handleOnClick={handleStake} />
			</Box></>
	)
}

const ButtonPercent = styled(Button)({
	color: "#55C8FC",
	background: " #D9F2FD",
	borderRadius: "4px",
	padding: "5px 5px",
	minWidth: "35px",
	height: "26px",
	textTransform: "none",
	"&:hover": {
		background: " #d0edfa !important",
	}
})
const Search = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		padding: '8px 16px',
		background: '#F8F9FB',
		borderRadius: 4,
		width: "111px",
		height: 34,
		flex: 1,
		border: "1px solid #E9EAEF",

	},
	'& input': {
		padding: 0,
		textAlign: "right",
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