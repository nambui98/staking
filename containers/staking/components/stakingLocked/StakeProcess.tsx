import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { useState } from 'react';
import { MarketplaceButton } from '../../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../../const';
import { MARKETPLACE_ICON } from '../../../../constants/marketplace';
import { useWalletContext } from '../../../../contexts/WalletContext';
import { stake } from '../../../../libs/staking';
import { formatMoney } from '../../../../libs/utils/utils';
import { TEXT_STYLE } from '../../../../styles/common/textStyles';

type Props = {
	setStateContent: Function;
	setIsLoading: Function;
	setSuccess: Function;
	handleClickSuccess: Function;
	handleClickError: Function;
	balanceFiu: string;
	balanceSA: string;
	balanceCP: string;
};

const percents = [
	{
		name: '25%',
		value: 0.25,
	},
	{
		name: '50%',
		value: 0.5,
	},
	{
		name: '75%',
		value: 0.75,
	},
	{
		name: 'Max',
		value: 1,
	},
];

export const StakeProcess = ({
	balanceFiu,
	balanceSA,
	balanceCP,
	handleClickSuccess,
	setStateContent,
	setIsLoading,
	handleClickError,
}: Props) => {
	let [value, setValue] = useState(1);
	let [valueDay, setValueDay] = useState(12);
	const [messageError, setMessageError] = useState('');
	const { ethersSigner, ethersProvider, setRefresh, refresh } =
		useWalletContext();
	console.log(balanceFiu);
	const handleStake = async () => {
		// setIsLoading(true);
		// try {
		// 	const res = await stake(value, ethersSigner);
		// 	const checkStatus = setInterval(async () => {
		// 		const statusApprove = await ethersProvider.getTransactionReceipt(
		// 			res.hash
		// 		);
		// 		if (statusApprove?.status) {
		// 			setIsLoading(false);
		// 			setRefresh(!refresh);
		// 			handleClickSuccess({
		// 				titleSuccess: 'Staked successfully!',
		// 				functionSuccess: () => {
		// 					setStateContent(StateStaking.Staked);
		// 				},
		// 				stateContentNew: StateStaking.Success,
		// 			});
		// 			clearInterval(checkStatus);
		// 		}
		// 	}, 1000);
		// } catch (error: any) {
		// 	const message = error.reason || 'Something went wrong, please try again';
		// 	setIsLoading(false);
		// 	handleClickError({
		// 		titleError: message,
		// 		functionError: () => {
		// 			setStateContent(StateStaking.StakeProcess);
		// 		},
		// 		stateContentNew: StateStaking.Error,
		// 	});
		// }
	};
	const handleValueWithPercent = (percent: number) => {
		// let valueCal = percent * parseFloat(balanceFiu);
		// if (valueCal <= parseFloat(balanceFiu) && valueCal != 0) {
		// 	setValue((percent * parseFloat(balanceFiu)).toString());
		// 	setMessageError('');
		// } else {
		// 	setValue(valueCal.toString());
		// 	setMessageError('Insufficient balance');
		// }
	};

	const handleClickIncrement = () => {
		setValue((preV) => (preV = preV > 11 ? 12 : (preV += 1)));
	};

	const handleClickDecrement = () => {
		setValue((preV) => (preV = preV < 2 ? 1 : (preV -= 1)));
	};

	const handleClickIncrementDay = () => {
		setValueDay((preV) => (preV = preV > 29 ? 30 : (preV += 1)));
	};

	const handleClickDecrementDay = () => {
		setValueDay((preV) => (preV = preV < 4 ? 3 : (preV -= 1)));
	};

	return (
		<Box sx={{ height: '490px' }}>
			<Item sx={{ mt: '16px!important' }}>
				<TitleItem>your current balance</TitleItem>
				<ValueItem>{formatMoney(balanceFiu)} FIU</ValueItem>
			</Item>
			<Item sx={{ mt: '16px!important', display: 'flex' }}>
				<TitleItem>Choose your block(s)</TitleItem>
				<ValueItem>
					<Search value={value} placeholder="" />
				</ValueItem>
				<Box sx={{ marginLeft: '-20px' }}>
					<Box onClick={handleClickIncrement}>
						<img src="images/increment.png" alt="Increment"></img>
					</Box>
					<Box onClick={handleClickDecrement}>
						<img src="images/decrement.png" alt="Increment"></img>
					</Box>
				</Box>
			</Item>
			<Box sx={{ textAlign: 'end', marginRight: '40px', marginTop: '5px' }}>
				<img src="images/min1.png" alt="Increment"></img>
				<img
					src="images/max12.png"
					alt="Increment"
					style={{ marginLeft: '4px' }}
				></img>
			</Box>

			<Item sx={{ mt: '16px!important' }}>
				<TitleItem>Token required</TitleItem>
				<ValueItem>{formatMoney(balanceSA)} FIU</ValueItem>
			</Item>
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
			<Item sx={{ display: 'flex', mt: '0 !important' }}>
				<TitleItem>Lock duration (days)</TitleItem>
				<ValueItem>
					<Search value={valueDay} placeholder="" />
				</ValueItem>
				<Box sx={{ marginLeft: '-25px' }}>
					<Box onClick={handleClickIncrementDay}>
						<img src="images/increment.png" alt="Increment"></img>
					</Box>
					<Box onClick={handleClickDecrementDay}>
						<img src="images/decrement.png" alt="Increment"></img>
					</Box>
				</Box>
			</Item>
			<Box sx={{ textAlign: 'end', marginRight: '40px', marginTop: '5px' }}>
				<img src="images/min3.svg" alt="Increment"></img>
				<img
					src="images/max30.svg"
					alt="Increment"
					style={{ marginLeft: '4px' }}
				></img>
			</Box>
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

			<Item sx={{ mt: '18px !important' }}>
				<TitleItem>
					estimated receivable rewards
					<Box
						sx={{
							fontSize: '9px',
							lineHeight: '18px',
							fontWeight: '500',
							color: '#898E9E',
							textTransform: 'none',
						}}
					>
						Maximum: 31 Fitter Passses
					</Box>
				</TitleItem>
				<ValueItem
					sx={{ display: 'flex', alignItems: 'center', marginRight: '-20px' }}
				>
					<span>2</span>
					<img src="images/ffPase.svg" alt="" />
				</ValueItem>
			</Item>

			<Item sx={{ mt: '8px !important' }}>
				<TitleItem
					sx={{
						fontSize: '10px !important',
						textTransform: 'none !important',
						color: '#FF6D24 !important',
						height: '54px',
					}}
				>
					Due to exceeding the maximum receivable rewards, only 31 Fitter Passes
					will be sent to your account.Try to reduce your amount of block(s) or
					lock duration
				</TitleItem>
			</Item>
			<Box
				mt="auto"
				width={'100%'}
				sx={{ paddingTop: '16px', borderTop: '1px solid #E9EAEF' }}
			>
				<MarketplaceButton
					disabled={!value || messageError ? true : false}
					customStyle={{ width: '100%' }}
					title={'Approve'}
					handleOnClick={handleStake}
				/>
			</Box>
		</Box>
	);
};

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
