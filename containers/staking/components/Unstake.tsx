import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/styles'
import React, { useState } from 'react'
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../const';
import { MARKETPLACE_ICON } from '../../../constants/marketplace';
import { useWalletContext } from '../../../contexts/WalletContext';
import { unStake } from '../../../libs/staking';
import { TEXT_STYLE } from '../../../styles/common/textStyles';

type Props = {
	setStateContent: Function,
	handleClickSuccess: Function;
	handleClickError: Function;
	setIsLoading: Function;
	balanceFiu: string
	balanceSA: string
	balanceCP: string
	balanceUS: string
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
export const Unstake = (props: Props) => {
	const {
		setStateContent,
		handleClickSuccess,
		handleClickError,
		setIsLoading,
		balanceFiu,
		balanceSA,
		balanceCP,
		balanceUS } = props;
	const [value, setValue] = useState('');
	const [messageError, setMessageError] = useState('');
	const { ethersSigner, ethersProvider, setRefresh, refresh } = useWalletContext();
	const handleUnStake = async () => {
		setIsLoading(true)
		try {
			const res = await unStake(value, ethersSigner);
			const checkStatus = setInterval(async () => {
				const statusApprove = await ethersProvider.getTransactionReceipt(res.hash);
				if (statusApprove?.status) {
					setIsLoading(false)
					setRefresh(!refresh)
					handleClickSuccess({
						titleSuccess: 'Unstake successfully!',
						functionSuccess: () => {
							setStateContent(StateStaking.UnstakedSuccess)
						},
						stateContentNew: StateStaking.Success
					})
					clearInterval(checkStatus)
				}
			}, 1000);
		} catch (error: any) {
			console.log(error.message);
			setIsLoading(false);
			handleClickError({
				titleError: 'Something went wrong, please try again',
				functionError: () => {
					setStateContent(StateStaking.Unstake)
				},
				stateContentNew: StateStaking.Error
			})
		}

	}
	const handleValueWithPercent = (percent: number) => {
		setValue((percent * parseFloat(balanceSA)).toString());
		setMessageError("")
	}
	return (
		<>
			<Item>
				<TitleItem>Token</TitleItem>
				<ValueItem>{balanceFiu} FIU</ValueItem>
			</Item>
			<Item>
				<TitleItem>Staking</TitleItem>
				<ValueItem>{balanceSA} FIU</ValueItem>
			</Item>
			<Item>
				<TitleItem>current profit</TitleItem>
				<ValueItem>{balanceCP} FITTER PASS</ValueItem>
			</Item>
			<Item>
				<TitleItem>WITHDRAWAL DELAY TIME</TitleItem>
				<ValueItem>14 DAYS</ValueItem>
			</Item>
			<Item>
				<TitleItem>unstake amount</TitleItem>
				<ValueItem>	<Search
					value={value}
					placeholder=""
					onChange={(e) => {
						if (Number(e.target.value)) {
							if (parseFloat(e.target.value) > parseFloat(balanceSA)) {
								setValue(e.target.value)
								setMessageError("Insufficient balance")
							} else {
								setValue(e.target.value)
								setMessageError("")
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
					<ValueItem>		<Typography sx={{ ...TEXT_STYLE(12, 500, "#FF6F61"), }}>Please enter valid number</Typography>
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

			<Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
				<MarketplaceButton disabled={!value || messageError ? true : false} customStyle={{ width: "100%" }} title={"Unstake"} handleOnClick={handleUnStake} />
			</Box></>
	)
}

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