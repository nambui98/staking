import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { MarketplaceButton } from '../../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../../const';
import { MARKETPLACE_ICON } from '../../../../constants/marketplace';
import { useWalletContext } from '../../../../contexts/WalletContext';
import { unStake } from '../../../../libs/staking';
import { formatMoney } from '../../../../libs/utils/utils';
import { TEXT_STYLE } from '../../../../styles/common/textStyles';

type Props = {
	setStateContent: Function;
	handleClickSuccess: Function;
	handleClickError: Function;
	setIsLoading: Function;
	// balanceFiu: string;
	// balanceSA: string;
	// balanceCP: string;
	// balanceUS: string;
	// setUnStakePrice: Function;
};
export const Unstake = (props: Props) => {
	const {
		setStateContent,
		handleClickSuccess,
		handleClickError,
		setIsLoading,
		// balanceFiu,
		// balanceSA,
		// balanceCP,
		// balanceUS,
		// setUnStakePrice,
	} = props;
	const [value, setValue] = useState('');
	const [messageError, setMessageError] = useState('');
	const { ethersSigner, ethersProvider, setRefresh, refresh } =
		useWalletContext();

	// useEffect(() => {
	// 	setUnStakePrice(0);
	// }, []);

	const handleUnStake = async () => {
		// setUnStakePrice(value);
		setStateContent(StateStaking.UnstakeAgain);
	};
	const handleValueWithPercent = (percent: number) => {
		// let valueCal = percent * parseFloat(balanceSA);
		// if (valueCal <= parseFloat(balanceSA) && valueCal != 0) {
		// 	setValue((percent * parseFloat(balanceSA)).toString());
		// 	setMessageError('');
		// } else {
		// 	setValue(valueCal.toString());
		// 	setMessageError('Insufficient balance');
		// }
	};
	return (
		<>
			<Box>
				<img src={MARKETPLACE_ICON.infocircle} alt="" />
			</Box>
			<Item>
				<TitleItem>Token</TitleItem>
				<ValueItem>70000 FIU</ValueItem>
			</Item>
			<Item>
				<TitleItem>Staking</TitleItem>
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

			{messageError && (
				<Item sx={{ mt: '8px !important' }}>
					<TitleItem></TitleItem>
					<ValueItem>
						{' '}
						<Typography sx={{ ...TEXT_STYLE(12, 500, '#FF6F61') }}>
							{messageError}
						</Typography>
					</ValueItem>
				</Item>
			)}

			<Box
				sx={{
					mt: '100px',
					background: '#E9EAEF',
					lineHeight: '36px',
					textAlign: 'center',
					fontSize: '14px',
					color: '#5A6178',
				}}
			>
				Available to withdraw at 08:23 11/7/2022
			</Box>

			<Box
				mt="auto"
				width={'100%'}
				sx={{ paddingTop: '16px', borderTop: '1px solid #E9EAEF' }}
			>
				<MarketplaceButton
					disabled={!value || messageError ? true : false}
					customStyle={{ width: '100%' }}
					title={'Withdraw'}
					handleOnClick={handleUnStake}
				/>
			</Box>
		</>
	);
};

const Search = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		padding: '8px 16px',
		background: '#F8F9FB',
		borderRadius: 4,
		width: '111px',
		height: 34,
		flex: 1,
		border: '1px solid #E9EAEF',
	},
	'& input': {
		padding: 0,
		textAlign: 'right',
		...TEXT_STYLE(12, 500, '#31373E'),
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
const ButtonPercent = styled(Button)({
	color: '#55C8FC',
	background: ' #D9F2FD',
	borderRadius: '4px',
	padding: '5px 5px',
	minWidth: '35px',
	height: '26px',
	textTransform: 'none',
	'&:hover': {
		background: ' #d0edfa !important',
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
