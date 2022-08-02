import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { useState } from 'react';
import { MarketplaceButton } from '../../../../components/buttons/MarketplaceButton';
import { StateStaking, StateStakingLocked } from '../../../../const';
import { MARKETPLACE_ICON } from '../../../../constants/marketplace';
import { useWalletContext } from '../../../../contexts/WalletContext';
import { stake } from '../../../../libs/staking';
import { formatMoney } from '../../../../libs/utils/utils';
import { TEXT_STYLE } from '../../../../styles/common/textStyles';
import ArrowUp from './icons/arrow_up.svg';
import ArrowDown from './icons/arrow_down.svg';
import { approveStakingLocked, configStakingLocked, getMinimalStakingTime, stakeLocked } from '../../../../libs/stakingLocked';

type Props = {
	setStateContent: Function;
	setIsLoading: Function;
	setSuccess: Function;
	handleClickSuccess: Function;
	handleClickError: Function;
	balanceFiu: string;
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

export const LockedStakeProcess = ({
	balanceFiu,
	handleClickSuccess,
	setStateContent,
	setIsLoading,
	handleClickError,
}: Props) => {
	let [value, setValue] = useState(0);
	let [valueDay, setValueDay] = useState(3);
	let [lockDurationSuggest, setLockDurationSuggest] = useState(0);
	let [lockDurationError, setLockDurationError] = useState(false);
	const [status, setStatus] = useState(0);
	const [messageError, setMessageError] = useState('');
	const { ethersSigner, ethersProvider, walletAccount, setRefresh, refresh } =
		useWalletContext();
	const handleApprove = async () => {
		setIsLoading(true);
		try {
			const day = await getMinimalStakingTime(value.toString(), valueDay.toString(), ethersSigner);
			setLockDurationSuggest(0)
			setLockDurationError(false);
			if (day === valueDay.toString()) {
				const res = await approveStakingLocked(tokenRequired.toString(), ethersSigner);
				setIsLoading(false)
				setStatus(res.status);
				if (res?.status) {
					setRefresh(!refresh)
				}
			} else {
				setIsLoading(false)
				setLockDurationError(true);
				setValueDay(parseInt(day));
				// setValueDay(parseInt(day))
				setLockDurationSuggest(parseInt(day));
			}

		} catch (error: any) {
			setStatus(0);
			const message = error.reason || 'Something went wrong, please try again';
			setIsLoading(false);
			handleClickError({
				titleError: message,
				functionError: () => {
					setStateContent(StateStakingLocked.LockedStakeProcess);
				},
				stateContentNew: StateStakingLocked.Error,
			});
		}
	};
	const handleStake = async () => {
		setIsLoading(true);
		try {
			const res = await stakeLocked(value.toString(), valueDay.toString(), ethersSigner);
			debugger
			setIsLoading(false)
			if (res?.status) {
				setRefresh(!refresh)
				handleClickSuccess({
					titleSuccess: 'Staked successfully!',
					functionSuccess: () => {
						setStateContent(StateStakingLocked.LockedList);
					},
					stateContentNew: StateStakingLocked.Success,
				});
			}
		} catch (error: any) {
			// setStatus(0);
			const message = error.reason || 'Something went wrong, please try again';
			debugger
			setIsLoading(false);
			handleClickError({
				titleError: message,
				functionError: () => {
					setStateContent(StateStakingLocked.LockedStakeProcess);
				},
				stateContentNew: StateStakingLocked.Error,
			});
		}
	};

	const handleClickIncrement = () => {
		setValue((preV) => (preV = preV > 11 ? 12 : (preV += 1)));
	};

	const handleClickDecrement = () => {
		setValue((preV) => (preV = preV < 1 ? 0 : (preV -= 1)));
	};

	const handleClickIncrementDay = () => {
		setValueDay((preV) => (preV = preV > 29 ? 30 : (preV += 1)));
	};

	const handleClickDecrementDay = () => {
		setValueDay((preV) => (preV = preV < 1 ? 0 : (preV -= 1)));
	};
	const tokenRequired = value * configStakingLocked.valueTokenBlock;
	const estimatedReceivableRewards = valueDay > 2 ? Math.floor(value * valueDay * configStakingLocked.valueEstimated) : 0;
	return (
		<Box >
			<Item sx={{ mt: '16px!important' }}>
				<TitleItem>your current balance</TitleItem>
				<ValueItem>{formatMoney(balanceFiu)} FIU</ValueItem>
			</Item>
			<Item sx={{ mt: '16px!important' }}>
				<TitleItem sx={{ mr: "auto" }}>Choose your block(s)</TitleItem>
				<ValueItem>
					<Search value={value} placeholder="" />
				</ValueItem>
				<Box sx={{ marginLeft: '8px' }}>
					<ButtonCustom variant="text" disabled={value === 12 || status === 1} onClick={handleClickIncrement}>
						<ArrowUp />
					</ButtonCustom>
					<ButtonCustom variant="text" disabled={value === 0 || status === 1} sx={{ mt: "2px" }} onClick={handleClickDecrement}>
						<ArrowDown />
					</ButtonCustom>

				</Box>
			</Item >
			<Item sx={{ mt: "8px !important" }}>
				<TitleItem ></TitleItem>
				<ValueItem sx={{ display: "flex", gap: "8px" }}>
					<ButtonPercent disabled={status === 1} onClick={() => { setValue(1) }} variant="text">
						Min (1)
					</ButtonPercent>
					<ButtonPercent disabled={status === 1} onClick={() => { setValue(12) }} variant="text">
						Max (12)
					</ButtonPercent>

				</ValueItem>
			</Item>
			<Item sx={{ mt: '16px!important' }}>
				<TitleItem>Token required</TitleItem>
				<ValueItem>{formatMoney(tokenRequired.toString())} FIU</ValueItem>
			</Item>
			{
				tokenRequired > parseFloat(balanceFiu) &&
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
			<Item sx={{ display: 'flex', mt: '16px !important' }}>
				<TitleItem sx={{ mr: "auto" }}>Lock duration (days)</TitleItem>
				<ValueItem>
					<Search value={valueDay} placeholder="" />
				</ValueItem>

				<Box sx={{ marginLeft: '8px' }}>
					<ButtonCustom variant="text" disabled={valueDay === 30 || status === 1} onClick={handleClickIncrementDay}>
						<ArrowUp />
					</ButtonCustom>
					<ButtonCustom variant="text" disabled={valueDay < 4 || status === 1} sx={{ mt: "2px" }} onClick={handleClickDecrementDay}>
						<ArrowDown />
					</ButtonCustom>
				</Box>
			</Item>
			<Item sx={{ mt: "8px !important" }}>
				<TitleItem ></TitleItem>
				<ValueItem sx={{ display: "flex", gap: "8px" }}>
					<ButtonPercent onClick={() => { setValueDay(3) }} disabled={status === 1} variant="text">
						Min (3)
					</ButtonPercent>
					<ButtonPercent onClick={() => { setValueDay(30) }} disabled={status === 1} variant="text">
						Max (30)
					</ButtonPercent>

				</ValueItem>
			</Item>
			{
				messageError && (
					<Item sx={{ mt: '8px !important' }}>
						<TitleItem></TitleItem>
						<ValueItem>
							{' '}
							<Typography sx={{ ...TEXT_STYLE(12, 500, '#FF6F61') }}>
								{messageError}
							</Typography>
						</ValueItem>
					</Item>
				)
			}

			<Item sx={{ mt: '18px !important' }}>
				<TitleItem>
					estimated receivable rewards
					<Box
						sx={{
							fontSize: '12px',
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
					<span>{estimatedReceivableRewards}</span>
					<img src="images/ffPase.svg" alt="" />
				</ValueItem>
			</Item>
			{
				lockDurationError === true &&
				<Item sx={{ mt: '8px !important' }}>
					<TitleItem
						sx={{
							fontSize: '10px !important',
							textTransform: 'none !important',
							color: '#FF6D24 !important',
							height: '54px',
						}}
					>
						MAXIMUM RECEIVABLE REWARDS EXCEEDED!
						Suggest: With {lockDurationSuggest.toString()} day(s) of lock duration, you can optimize your rewards without locking your token for too long.
					</TitleItem>
				</Item>
			}
			<Box
				mt="auto !important"
				width={'100%'}
				sx={{ paddingTop: '16px', borderTop: '1px solid #E9EAEF' }}
			>
				{
					status === 1 ?
						<MarketplaceButton
							disabled={!value || messageError || tokenRequired > parseFloat(balanceFiu) ? true : false}
							customStyle={{ width: '100%' }}
							title={'Stake'}
							handleOnClick={handleStake}
						/>
						: <MarketplaceButton
							disabled={!value || messageError || tokenRequired > parseFloat(balanceFiu) || valueDay < 3 ? true : false}
							customStyle={{ width: '100%' }}
							title={'Approve'}
							handleOnClick={handleApprove}
						/>
				}

			</Box>
		</Box >
	);
};
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
