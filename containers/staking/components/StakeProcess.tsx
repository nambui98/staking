import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { useState } from 'react';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../const';
import { MARKETPLACE_ICON } from '../../../constants/marketplace';
import { useWalletContext } from '../../../contexts/WalletContext';
import { stake } from '../../../libs/staking';
import { formatMoney } from '../../../libs/utils/utils';
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
	dataActive: any
}



export const StakeProcess = ({
	balanceFiu,
	balanceSA,
	balanceCP,
	handleClickSuccess,
	setStateContent,
	setIsLoading,
	handleClickError,
	dataActive
}: Props) => {
	const [value, setValue] = useState('');
	const [messageError, setMessageError] = useState('');
	const { ethersSigner, ethersProvider, setRefresh, refresh } = useWalletContext();
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
	const handleStake = async () => {
		setIsLoading(true)
		try {
			const res = await dataActive.info.stake(value, ethersSigner);
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
			const message = error.reason || "Something went wrong, please try again";
			setIsLoading(false);
			handleClickError({
				titleError: message,
				functionError: () => {
					setStateContent(StateStaking.StakeProcess)
				},
				stateContentNew: StateStaking.Error
			})
		}

	}
	const handleValueWithPercent = (percent: number) => {
		let valueCal = percent * parseFloat(balanceFiu);
		if (valueCal <= parseFloat(balanceFiu) && valueCal != 0) {

			if ((percent * parseFloat(balanceFiu)) > (40000 - parseFloat(balanceSA))) {
				setValue((percent * parseFloat(balanceFiu)).toString());
				setMessageError("Your maximum stake amount is 40.000")
			} else {
				setValue((percent * parseFloat(balanceFiu)).toString());
				setMessageError("")
			}
		} else {
			setValue(valueCal.toString())
			setMessageError("Insufficient balance")
		}
	}
	return (
		<>
			<Item sx={{ mt: '16px!important' }}>
				<TitleItem>your current balance</TitleItem>
				<ValueItem>{formatMoney(balanceFiu)} FIU</ValueItem>
			</Item>
			<Item sx={{ mt: '16px!important' }}>
				<TitleItem >your current amount staked</TitleItem>
				<ValueItem>{formatMoney(balanceSA)} FIU</ValueItem>
			</Item>
			<Item sx={{ mt: '16px!important' }}>
				<TitleItem >you want to stake</TitleItem>
				<ValueItem>
					<Search
						value={value}
						placeholder=""
						onChange={(e) => {
							let valueParse = e.target.value.replace(/,/g, "")
							if (Number(valueParse)) {
								if (parseFloat(valueParse) > 0) {
									if (parseFloat(balanceSA) >= 4000) {
										if (parseFloat(valueParse) > parseFloat(balanceFiu)) {
											setValue(valueParse)
											setMessageError("Insufficient balance")
										} else {
											if (parseFloat(valueParse) > (40000 - parseFloat(balanceSA))) {
												setValue(valueParse)
												setMessageError("Your maximum stake amount is 40.000")
											} else {
												setValue(valueParse)
												setMessageError("")
											}
										}
									} else {
										if ((parseFloat(valueParse) + parseFloat(balanceSA)) < 4000) {
											setValue(valueParse)
											setMessageError("You need to stake minimum 4000")
										} else {
											if (parseFloat(valueParse) > parseFloat(balanceFiu)) {
												setValue(valueParse)
												setMessageError("Insufficient balance")
											} else {
												setValue(valueParse)
												setMessageError("")
											}
										}
									}
									// if (parseFloat(balanceSA) >= 4000) {
									// 	if (parseFloat(valueParse) > parseFloat(balanceFiu)) {
									// 		setValue(valueParse)
									// 		setMessageError("Insufficient balance")
									// 	} else {
									// 		setValue(valueParse)
									// 		setMessageError("")
									// 	}
									// } else {

									// 	if (parseFloat(valueParse) < 4000) {
									// 		setValue(valueParse)
									// 		setMessageError("You need to stake minimum 4000")
									// 	} else {

									// 		if (parseFloat(valueParse) > parseFloat(balanceFiu)) {
									// 			setValue(valueParse)
									// 			setMessageError("Insufficient balance")
									// 		} else {
									// 			setValue(valueParse)
									// 			setMessageError("")
									// 		}
									// 	}
									// }
								} else {
									setValue(valueParse)
									setMessageError("Please enter a positive number")
								}
							} else {
								setMessageError('Please enter valid number')
								setValue(valueParse)

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
			<Item sx={{ mt: "18px !important" }}>
				<TitleItem >TOTAL reward earned</TitleItem>
				<ValueItem>{balanceCP} Fitter Pass</ValueItem>
			</Item>
			<Item sx={{ mt: "18px !important" }}>
				<TitleItem >estimated daily rewards</TitleItem>
				<ValueItem>-</ValueItem>
			</Item>
			<Item sx={{ mt: "18px !important" }}>
				<TitleItem >estimated daily apr</TitleItem>
				<ValueItem>-</ValueItem>
			</Item>
			<Item sx={{ mt: '8px !important' }}>
				<ValueItem sx={{ mr: '8px !important' }}>	<img src={"assets/icons/info-circle2.svg"} alt="" /></ValueItem>

				<TitleItem sx={{ fontSize: '10px !important', textTransform: 'none !important', color: "#FF6D24 !important" }}>Please make sure that the total amount of tokens you stake is enough to earn at least a Fitter Pass before this pool is closed</TitleItem>
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
		width: '150px',
		// paddingLeft: '10px',
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