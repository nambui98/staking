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
	useMediaQuery,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { StateStaking } from '../../../const';
import { MARKETPLACE_ICON } from '../../../constants/marketplace';
import { STAKING_ICON } from '../../../constants/staking';
import { useWalletContext } from '../../../contexts/WalletContext';
import { TEXT_STYLE } from '../../../styles/common/textStyles';
import { EnablePool } from './EnablePool';
import { Error } from './Error';
import { Error2 } from './Error2';
import { Staked } from './Staked';
import { StakeProcess } from './StakeProcess';
import { Success } from './Success';
import { Success2 } from './Success2';
import { TransactionHistory } from './TransactionHistory';
import { Unstake } from './Unstake';
import { UnstakeAgain, UnstakedSuccess } from './UnstakedSuccess';
import { UnstakeWarrning } from './UnstakeWarrning';
import { WithDraw, WithDrawWarning } from './WithDraw';

interface IProps {
	status: boolean;
	handleToggle: () => any;
	title?: any;
	titleCustomStyle?: any;
	children?: any;
	content: any;
	titleButton?: string;
	priceButton?: number;
	handleClickButton?: () => any;
	customStyleButton?: any;
	sx?: any;
	dataActive: any;
	isEnable: Boolean;
	balanceFiu: string;
	balanceSA: string;
	balanceCP: string;
	balanceUS: string;
	totalStakingToken: string;
	stateContentInit: StateStaking;
	claimableTime: string;
	remainingDelayTime: string;
	setStateContentInit: Function;
}

export const DialogsItemStaking: React.FC<IProps> = ({
	status,
	handleToggle,
	dataActive,
	isEnable,
	balanceFiu,
	balanceSA,
	balanceCP,
	balanceUS,
	stateContentInit,
	claimableTime,
	remainingDelayTime,
	totalStakingToken,
	setStateContentInit,
}) => {
	console.log(dataActive);
	const [stateContent, setStateContent] = useState<StateStaking | null>(
		stateContentInit
	);
	const [success, setSuccess] = useState<any>({
		titleSuccess: '',
		functionSuccess: '',
	});
	const [error, setError] = useState<any>({
		titleError: '',
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
	const [isLoading, setIsLoading] = useState(false);
	const [unStakePrice, setUnStakePrice] = useState(0);

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
	const handleClickWarning = ({
		titleWarning = '',
		contentWarning = '',
		haveCancel = false,
		titleButton = '',
		functionCancel = null,
		functionWarning = null,
		stateContentNew = null,
	}: {
		titleWarning: String;
		contentWarning: String;
		haveCancel: boolean;
		titleButton: String;
		functionWarning: Function | null;
		functionCancel: Function | null;
		stateContentNew: StateStaking | null;
	}) => {
		setStateContent(stateContentNew);
		setWarning({
			titleWarning: titleWarning,
			titleButton: titleButton,
			haveCancel: haveCancel,
			contentWarning: contentWarning,
			functionWarning: functionWarning,
			functionCancel: functionCancel,
		});
	};
	const isMobile = useMediaQuery('(max-width: 767px)');

	return (
		<Dialog
			sx={borderRadius}
			onClose={() => {
				setStateContent(stateContentInit);
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
					sx={{
						position: 'absolute',
						right: '18px',
						cursor: 'pointer',
					}}
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
				{stateContent === StateStaking.EnablePool ? (
					<EnablePool
						setStateContentInit={setStateContentInit}
						setStateContent={setStateContent}
						setIsLoading={setIsLoading}
						handleClickError={handleClickError}
						dataActive={dataActive ? dataActive : null}
					/>
				) : stateContent === StateStaking.StakeProcess ? (
					<StakeProcess
						balanceFiu={balanceFiu}
						balanceSA={balanceSA}
						balanceCP={balanceCP}
						setIsLoading={setIsLoading}
						setSuccess={setSuccess}
						setStateContent={setStateContent}
						handleClickSuccess={handleClickSuccess}
						handleClickError={handleClickError}
						dataActive={dataActive ? dataActive : null}
					/>
				) : stateContent === StateStaking.Staked ? (
					<Staked
						balanceFiu={balanceFiu}
						balanceSA={balanceSA}
						balanceCP={balanceCP}
						balanceUS={balanceUS}
						claimableTime={claimableTime}
						setIsLoading={setIsLoading}
						setStateContent={setStateContent}
						handleClickSuccess={handleClickSuccess}
						handleClickError={handleClickError}
						handleClickWarning={handleClickWarning}
						dataActive={dataActive ? dataActive : null}
					/>
				) : stateContent === StateStaking.UnstakeWarrning ? (
					<UnstakeWarrning
						balanceFiu={balanceFiu}
						balanceSA={balanceSA}
						balanceCP={balanceCP}
						balanceUS={balanceUS}
						claimableTime={claimableTime}
						warning={warning}
						setIsLoading={setIsLoading}
						setStateContent={setStateContent}
						handleClickSuccess={handleClickSuccess}
						handleClickError={handleClickError}
						dataActive={dataActive ? dataActive : null}
					/>
				) : stateContent === StateStaking.UnstakedSuccess ? (
					<UnstakedSuccess
						balanceFiu={balanceFiu}
						balanceSA={balanceSA}
						balanceCP={balanceCP}
						balanceUS={balanceUS}
						claimableTime={claimableTime}
						unStakePrice={unStakePrice}
						setIsLoading={setIsLoading}
						setStateContent={setStateContent}
						handleClickSuccess={handleClickSuccess}
						handleClickError={handleClickError}
						handleClickWarning={handleClickWarning}
						dataActive={dataActive ? dataActive : null}
					/>
				) : stateContent === StateStaking.Unstake ? (
					<Unstake
						balanceFiu={balanceFiu}
						balanceSA={balanceSA}
						balanceCP={balanceCP}
						balanceUS={balanceUS}
						setIsLoading={setIsLoading}
						setUnStakePrice={setUnStakePrice}
						setStateContent={setStateContent}
						handleClickSuccess={handleClickSuccess}
						handleClickError={handleClickError}
						dataActive={dataActive ? dataActive : null}
					/>
				) : stateContent === StateStaking.WithDraw ? (
					<WithDraw
						balanceUS={balanceUS}
						remainingDelayTime={remainingDelayTime}
						setIsLoading={setIsLoading}
						setStateContent={setStateContent}
						handleClickSuccess={handleClickSuccess}
						handleClickError={handleClickError}
						dataActive={dataActive ? dataActive : null}
					/>
				) : stateContent === StateStaking.UnstakeAgain ? (
					<UnstakeAgain
						balanceFiu={balanceFiu}
						balanceSA={balanceSA}
						balanceCP={balanceCP}
						balanceUS={balanceUS}
						claimableTime={claimableTime}
						setIsLoading={setIsLoading}
						unStakePrice={unStakePrice}
						setStateContent={setStateContent}
						handleClickSuccess={handleClickSuccess}
						handleClickError={handleClickError}
						handleClickWarning={handleClickWarning}
						dataActive={dataActive ? dataActive : null}
					/>
				) : stateContent === StateStaking.WithDrawWarning ? (
					<WithDrawWarning
						balanceUS={balanceUS}
						remainingDelayTime={remainingDelayTime}
						setIsLoading={setIsLoading}
						setStateContent={setStateContent}
						handleClickSuccess={handleClickSuccess}
						handleClickError={handleClickError}
						dataActive={dataActive ? dataActive : null}
					/>
				) : stateContent === StateStaking.TransactionHistory ? (
					<TransactionHistory setStateContent={setStateContent} />
				) : stateContent === StateStaking.Success ? (
					<Success2 success={success} setStateContent={setStateContent} />
				) : stateContent === StateStaking.Error ? (
					<Error2 setStateContent={setStateContent} error={error} />
				) : (
					<Box></Box>
				)}
				{/* <Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
			 	{walletAccount ?
						<MarketplaceButton customStyle={{ width: "100%" }} title={"Enable"} handleOnClick={() => { setToggleActivePopup(true) }} /> : <MarketplaceButton customStyle={{ marginTop: "auto" }} title={"Connect Wallet"} handleOnClick={() => { setToggleActivePopup(true) }} />
					}
			 </Box> */}
			</Wrap>
			<Backdrop
				sx={{ color: '#FF6D24', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={isLoading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Dialog>
	);
};
const Search = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		padding: '8px 16px',
		background: '#F8F9FB',
		borderRadius: 4,
		width: '111px',
		height: '465px',
		flex: 1,
		border: '1px solid #E9EAEF',
	},
	'& input': {
		padding: 0,
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

const Wrap = styled(Stack)({
	position: 'relative',
	padding: '0px 16px 0px 16px',
	margin: '16px 0px 16px 0px',
	overflowY: 'auto',
	overflowX: 'hidden',
	width: 'calc(100vw - 32px)',
	height: 'calc(100vh - 32px)',
	'@media (min-width: 650px)': {
		width: '360px',
		height: '465px',
	},
});
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
const closeIcon = {
	position: 'absolute',
	top: '18px',
	right: '18px',
	cursor: 'pointer',
};
const borderRadius = {
	'& .MuiDialog-paper': {
		borderRadius: '16px',
		margin: '0 !important',
		overflow: 'visible',
	},
};
