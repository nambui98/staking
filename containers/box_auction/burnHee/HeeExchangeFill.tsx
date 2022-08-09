import styled from '@emotion/styled'
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton'
import { formatMoney } from '../../../libs/utils/utils'
import { TEXT_STYLE } from '../../../styles/common/textStyles'

type Props = {
	isApproved: boolean;
	setStateContent: Function;
	setIsLoading: Function;
	setSuccess: Function;
	handleClickSuccess: Function;
	handleClickError: Function;
	balanceHee: string;
}

const HeeExchangeFill = ({
	isApproved,
	setStateContent,
	setIsLoading,
	setSuccess,
	handleClickSuccess,
	handleClickError,
	balanceHee, }: Props) => {
	const [numberFitterPass, setNumberFitterPass] = useState<number | null>(null);
	const handleApprove = () => {

	}
	const handleGetFitterPass = () => {

	}
	const tokenRequired = numberFitterPass ? numberFitterPass * 1500 : 0;
	return (
		<>
			<Item sx={{ mt: '16px!important' }}>
				<TitleItem>your current balance</TitleItem>
				<ValueItem>{formatMoney(balanceHee)} HEE</ValueItem>
			</Item>
			<Item sx={{ mt: '16px!important', flexDirection: 'column' }}>
				<TitleItem sx={{ mr: "auto" }}>AMOUNT OF FITTER PASS(ES) YOU WANT TO GET:</TitleItem>
				<ValueItem sx={{ flex: 1, width: "100%" }}>
					<Field value={numberFitterPass} InputProps={{
						endAdornment: (
							<InputAdornment position="start">
								<Typography sx={{ color: '#A7ACB8', fontSize: '12px' }}>
									FITTER PASS(ES)

								</Typography>
							</InputAdornment>
						),
					}} placeholder="" />
				</ValueItem>

			</Item >

			<Item sx={{ mt: '8px!important' }}>
				<TitleItem>Token required</TitleItem>
				<ValueItem>{formatMoney(tokenRequired.toString())} HEE</ValueItem>
			</Item>
			{
				tokenRequired > parseFloat(balanceHee) &&
				<Box
					sx={{
						textAlign: 'end',
						fontSize: '12px',
						color: '#FF6F61',
						fontWeight: '500',
						lineHight: '18px',
						height: '18px',
					}}
				>
					You don’t have enough token
				</Box>
			}

			<Item sx={{ mt: '18px !important' }}>
				<TitleItem>

				</TitleItem>
				<ValueItem
					sx={{ display: 'flex', alignItems: 'center' }}
				>
					1,500 HEE = 1 FITTER PASS
				</ValueItem>
			</Item>

			<Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
				{
					!isApproved ? <MarketplaceButton customStyle={{ width: "100%" }} disabled title={"Approve"} handleOnClick={handleApprove} />
						: <MarketplaceButton customStyle={{ width: "100%" }} disabled title={"GET FITTER PASS"} handleOnClick={handleGetFitterPass} />
				}

			</Box>
		</>
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
	fontSize: "12px",
	fontWeight: "500",
	"&:hover": {
		background: " #d0edfa !important",
	},
	'&:disabled': {
		background: '#E9EAEF',
		'&>svg': {
			stroke: "#A7ACB8"
		}
	}
})
const ButtonCustom = styled(Button)({
	color: '#55C8FC',
	background: ' #D9F2FD',
	borderRadius: '4px',
	padding: '0px !important',
	minWidth: '32px !important',
	height: '16px',
	border: 'none',
	textTransform: 'none',
	display: "flex",
	alignItems: 'center',
	justifyContent: 'center',
	'&>svg': {
		pointerEvents: "none",
		stroke: "#55C8FC",
	},
	'&:hover': {
		background: ' #d0edfa !important',
	},
	'&:disabled': {
		background: '#E9EAEF',
		'&>svg': {
			stroke: "#A7ACB8"
		}
	}
});
const Field = styled(TextField)({
	width: "100%",
	marginTop: '8px',
	'& .MuiOutlinedInput-root': {
		padding: '8px 16px',
		background: '#F8F9FB',
		borderRadius: 4,
		width: '100%',
		height: 34,
		flex: 1,
		border: '1px solid #E9EAEF',
	},
	'& input': {
		padding: 0,
		// textAlign: 'right',
		...TEXT_STYLE(12, 500, '#31373E'),
		'&::placeholder': {
			textAlign: 'right',
		}
	},
	'& fieldset': { display: 'none' },
	'@media (max-width: 767px)': {
		width: '100%',
		'& .MuiOutlinedInput-root': {
			width: '100%',
			height: 35,
		},
	},
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

export default HeeExchangeFill