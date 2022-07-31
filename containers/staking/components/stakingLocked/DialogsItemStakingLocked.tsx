import React, { useEffect, useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { TEXT_STYLE } from '../../../../styles/common/textStyles';

import {
	Backdrop,
	Box,
	Button,
	CircularProgress,
	InputAdornment,
	Stack,
	styled,
	TextField,
	Typography,
} from '@mui/material';

import { EnablePool } from './EnablePool';
import { StakeProcess } from './StakeProcess';
import { Success } from './Success';
import { Staked } from './Staked';
import { Error } from './Error';
import { WithDraw } from './WithDraw';
import { StateStaking } from '../../../../const';

interface IProps {
	status: boolean;
	handleToggle: () => any;
	dataActive: any;
	setStateContentInit: Function;
	stateContentInit: StateStaking;
}

export const DialogItemStakingLocked: React.FC<IProps> = ({
	status,
	handleToggle,
	dataActive,
	stateContentInit,
	setStateContentInit,
}) => {
	const [stateContent, setStateContent] = useState<StateStaking | null>(
		stateContentInit
	);

	console.log('daksfiuewhf', stateContent);
	console.log('daksfiuewhffdfdfd', stateContentInit);

	const [success, setSuccess] = useState<any>({
		titleSuccess: 'Staked successfully!',
		functionSuccess: '',
	});

	const [isLoading, setIsLoading] = useState(false);

	const [error, setError] = useState<any>({
		titleError: 'Something went wrong, please try again',
		functionError: '',
	});
	const [warning, setWarning] = useState<any>({
		titleWarning: '',
		titleButton: '',
		haveCancel: false,
		contentWarning: '',
		functionWarning: '',
		functionCancel: '',
	});

	useEffect(() => {
		setStateContent(stateContentInit);
	}, [stateContentInit]);

	const handleClickSuccess = ({
		titleSuccess = '',
		functionSuccess = null,
		stateContentNew = null,
	}: {
		titleSuccess: String;
		functionSuccess: Function | null;
		stateContentNew: StateStaking | null;
	}) => {
		setStateContent(stateContentNew);
		setSuccess({
			titleSuccess: titleSuccess,
			functionSuccess: functionSuccess,
		});
	};
	const handleClickError = ({
		titleError = '',
		functionError = null,
		stateContentNew = null,
	}: {
		titleError: String;
		functionError: Function | null;
		stateContentNew: StateStaking | null;
	}) => {
		setStateContent(stateContentNew);
		setError({
			titleError: titleError,
			functionError: functionError,
		});
	};

	return (
		<Dialog
			sx={borderRadius}
			onClose={() => {
				// setStateContent(stateContentInit);
				handleToggle();
			}}
			open={status}
		>
			<Wrap>
				<Box
					onClick={() => {
						setStateContent(stateContentInit);
						handleToggle();
					}}
					sx={closeIcon}
				>
					<img src={'assets/icons/close.svg'} />
				</Box>
				<TitlePopup>
					{stateContent === StateStaking.WithDraw && (
						<img
							src={STAKING_ICON.arrowLeftGray}
							alt=""
							onClick={() => setStateContent(StateStaking.UnstakedSuccess)}
						/>
					)}
					<img src="assets/icons/fiu.svg" alt="" />
					{dataActive && dataActive.name}
				</TitlePopup>
				{/* <StakeProcess
					balanceFiu={'90000'}
					balanceSA={'90000'}
					balanceCP={'90000'}
					setIsLoading={setIsLoading}
					setSuccess={setSuccess}
					setStateContent={setStateContent}
					handleClickSuccess={handleClickSuccess}
					handleClickError={handleClickError}
				/> */}
				<WithDraw
					// balanceUS={balanceUS}
					// remainingDelayTime={remainingDelayTime}
					setIsLoading={setIsLoading}
					setStateContent={setStateContent}
					handleClickSuccess={handleClickSuccess}
					handleClickError={handleClickError}
				/>
				{
					// stateContent == StateStaking.StakeProcess ? (
					// 	// <EnablePool
					// 	// 	setStateContentInit={setStateContentInit}
					// 	// 	setStateContent={setStateContent}
					// 	// 	setIsLoading={setIsLoading}
					// 	// 	handleClickError={handleClickError}
					// 	// />
					// 	<StakeProcess
					// 		balanceFiu={'90000'}
					// 		balanceSA={'90000'}
					// 		balanceCP={'90000'}
					// 		setIsLoading={setIsLoading}
					// 		setSuccess={setSuccess}
					// 		setStateContent={setStateContent}
					// 		handleClickSuccess={handleClickSuccess}
					// 		handleClickError={handleClickError}
					// 	/>
					// ) : (
					// 	<h1>hello</h1>
					// )
					// stateContent === StateStaking.StakeProcess ? (
					// 	<StakeProcess
					// 		balanceFiu={balanceFiu}
					// 		balanceSA={balanceSA}
					// 		balanceCP={balanceCP}
					// 		setIsLoading={setIsLoading}
					// 		setSuccess={setSuccess}
					// 		setStateContent={setStateContent}
					// 		handleClickSuccess={handleClickSuccess}
					// 		handleClickError={handleClickError}
					// 	/>
					// ) : stateContent === StateStaking.Staked ? (
					// 	<Staked
					// 		balanceFiu={balanceFiu}
					// 		balanceSA={balanceSA}
					// 		balanceCP={balanceCP}
					// 		balanceUS={balanceUS}
					// 		claimableTime={claimableTime}
					// 		setIsLoading={setIsLoading}
					// 		setStateContent={setStateContent}
					// 		handleClickSuccess={handleClickSuccess}
					// 		handleClickError={handleClickError}
					// 		handleClickWarning={handleClickWarning}
					// 	/>
					// ) : stateContent === StateStaking.UnstakeWarrning ? (
					// 	<UnstakeWarrning
					// 		balanceFiu={balanceFiu}
					// 		balanceSA={balanceSA}
					// 		balanceCP={balanceCP}
					// 		balanceUS={balanceUS}
					// 		claimableTime={claimableTime}
					// 		warning={warning}
					// 		setIsLoading={setIsLoading}
					// 		setStateContent={setStateContent}
					// 		handleClickSuccess={handleClickSuccess}
					// 		handleClickError={handleClickError}
					// 	/>
					// ) : stateContent === StateStaking.UnstakedSuccess ? (
					// 	<UnstakedSuccess
					// 		balanceFiu={balanceFiu}
					// 		balanceSA={balanceSA}
					// 		balanceCP={balanceCP}
					// 		balanceUS={balanceUS}
					// 		claimableTime={claimableTime}
					// 		unStakePrice={unStakePrice}
					// 		setIsLoading={setIsLoading}
					// 		setStateContent={setStateContent}
					// 		handleClickSuccess={handleClickSuccess}
					// 		handleClickError={handleClickError}
					// 		handleClickWarning={handleClickWarning}
					// 	/>
					// ) : stateContent === StateStaking.Unstake ? (
					// 	<Unstake
					// 		balanceFiu={balanceFiu}
					// 		balanceSA={balanceSA}
					// 		balanceCP={balanceCP}
					// 		balanceUS={balanceUS}
					// 		setIsLoading={setIsLoading}
					// 		setUnStakePrice={setUnStakePrice}
					// 		setStateContent={setStateContent}
					// 		handleClickSuccess={handleClickSuccess}
					// 		handleClickError={handleClickError}
					// 	/>
					// ) : stateContent === StateStaking.WithDraw ? (
					// 	<WithDraw
					// 		balanceUS={balanceUS}
					// 		remainingDelayTime={remainingDelayTime}
					// 		setIsLoading={setIsLoading}
					// 		setStateContent={setStateContent}
					// 		handleClickSuccess={handleClickSuccess}
					// 		handleClickError={handleClickError}
					// 	/>
					// ) : stateContent === StateStaking.UnstakeAgain ? (
					// 	<UnstakeAgain
					// 		balanceFiu={balanceFiu}
					// 		balanceSA={balanceSA}
					// 		balanceCP={balanceCP}
					// 		balanceUS={balanceUS}
					// 		claimableTime={claimableTime}
					// 		setIsLoading={setIsLoading}
					// 		unStakePrice={unStakePrice}
					// 		setStateContent={setStateContent}
					// 		handleClickSuccess={handleClickSuccess}
					// 		handleClickError={handleClickError}
					// 		handleClickWarning={handleClickWarning}
					// 	/>
					// ) : stateContent === StateStaking.WithDrawWarning ? (
					// 	<WithDrawWarning
					// 		balanceUS={balanceUS}
					// 		remainingDelayTime={remainingDelayTime}
					// 		setIsLoading={setIsLoading}
					// 		setStateContent={setStateContent}
					// 		handleClickSuccess={handleClickSuccess}
					// 		handleClickError={handleClickError}
					// 	/>
					// ) : stateContent === StateStaking.TransactionHistory ? (
					// 	<TransactionHistory setStateContent={setStateContent} />
					// ) : stateContent === StateStaking.Success ? (
					// 	<Success success={success} setStateContent={setStateContent} />
					// ) : stateContent === StateStaking.Error ? (
					// 	<Error setStateContent={setStateContent} error={error} />
					// ) : (
					// 	<Box></Box>
					// )
				}
			</Wrap>
		</Dialog>
	);
};

const borderRadius = {
	'& .MuiDialog-paper': {
		borderRadius: '16px',
		margin: '0 !important',
		overflow: 'visible',
	},
};

const closeIcon = {
	position: 'absolute',
	top: '18px',
	right: '18px',
	cursor: 'pointer',
};

const TitlePopup = styled(DialogTitle)({
	fontSize: '16px !important',
	fontWeight: '600',
	color: '#31373E',
	lineHeight: '22px',
	padding: '0px',
	// marginBottom: '17px',
	// marginBottom: 10,
	textAlign: 'left',
	display: 'flex',
	alignItems: 'center',
	'& p': {
		...TEXT_STYLE(16, 600),
	},
});

const Wrap = styled(Stack)({
	position: 'relative',
	padding: '16px 16px 0px 16px',
	// margin: "16px 0px",
	overflowY: 'auto',
	overflowX: 'hidden',
	width: 'calc(100vw - 32px)',
	height: 'calc(100vh - 32px)',
	'@media (min-width: 650px)': {
		width: '360px',
		height: '490px',
		padding: '16px',
	},
	'@media (max-width: 650px)': {
		padding: '0px 16px 0px 16px',
		margin: '16px 0px 16px 0px',
	},
});
