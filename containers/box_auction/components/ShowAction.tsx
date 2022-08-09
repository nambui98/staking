import {
	Backdrop,
	Box,
	Button,
	CircularProgress,
	InputAdornment,
	Stack,
	StackProps,
	styled,
	TextField,
	Typography,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { BoxAuction, StateStaking } from '../../../const';
import { MARKETPLACE_ICON } from '../../../constants/marketplace';
import { STAKING_ICON } from '../../../constants/staking';
import { useWalletContext } from '../../../contexts/WalletContext';
import { TEXT_STYLE } from '../../../styles/common/textStyles';
import { EnablePool } from './EnablePool';
import { AssetsEvent } from './AssetsEvent';
import { BurnAssets } from './BurnAssets';
import { Burned } from './Burned';
import { Success } from './Success';
import { Error } from './Error';

interface IProps {
	isApproved: boolean;
	isRegister: boolean;
	balanceFT: string;
	numberBurned: string;
}

export const ShowAction: React.FC<IProps> = ({
	isApproved,
	isRegister,
	balanceFT,
	numberBurned }) => {
	const [stateContent, setStateContent] = useState<BoxAuction | null>(null);
	// stateContentInit
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
		if (isApproved) {
			if (isRegister) {
				// debugger
				if (parseInt(numberBurned) > 0) {
					setStateContent(BoxAuction.Burned);
				} else {

					setStateContent(BoxAuction.BurnAssets);
				}
			} else {
				setStateContent(BoxAuction.AssetsEvent);
			}
		} else {
			setStateContent(null);
		}
	}, [isApproved, isRegister, numberBurned]);

	const handleClickSuccess = ({
		titleSuccess = '',
		functionSuccess = null,
		stateContentNew = null,
	}: {
		titleSuccess: String;
		functionSuccess: Function | null;
		stateContentNew: BoxAuction | null;
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
		stateContentNew: BoxAuction | null;
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
		stateContentNew: BoxAuction | null;
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
	const propsPass = {
		setIsLoading,
		setSuccess,
		stateContent,
		setStateContent,
		handleClickSuccess,
		handleClickError,
	};

	return (
		<Box>
			<Box
				sx={{
					backgroundColor: '#FFFFFF',
					display: 'flex',
					'@media (max-width: 767px)': {
						flexDirection: "column"

					},
				}}
			>
				<Wrap isborder={stateContent === null}>
					<EnablePool
						{...propsPass}
						isApproved={isApproved}
					/>
				</Wrap>
				<Wrap isborder={false} sx={{ flex: 1 }}>

					{stateContent === BoxAuction.AssetsEvent ? (
						<AssetsEvent
							{...propsPass}
							balanceFT={balanceFT}
						/>
					) : stateContent === BoxAuction.BurnAssets ? (
						<BurnAssets
							{...propsPass}
							balanceFT={balanceFT}
						/>
					) : stateContent === BoxAuction.Burned ? (
						<Burned
							setStateContent={setStateContent}
							stateContent={stateContent}
							numberBurned={numberBurned}
						/>
					) : stateContent === BoxAuction.Success ? (
						<Success success={success} setStateContent={setStateContent} />
					) : stateContent === BoxAuction.Error ? (
						<Error setStateContent={setStateContent} error={error} />
					) : (
						<Box></Box>
					)}
				</Wrap>
			</Box>
			<Backdrop
				sx={{ color: '#FF6D24', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={isLoading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Box>
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
const ButtonPercent = styled(Button)({
	color: '#55C8FC',
	background: ' #D9F2FD',
	borderRadius: '4px',
	padding: '5px 5px',
	minWidth: '35px',
	textTransform: 'none',
	':hover': {
		background: ' #d0edfa',
	},
});
const ButtonStakeMore = styled(Button)({
	color: '#5A6178',
	background: 'transparent',
	borderRadius: '12px',
	border: '1px solid #A7ACB8',
	// padding: "5px 5px",
	// minWidth: "35px",

	height: '56px',
	textTransform: 'none',
	transition: 'all .3s',
	':hover': {
		background: '#FF8A50',
		border: '0px',
		color: '#fff',
	},
	':disabled': {},
});
type stackPropsNew = StackProps & {
	isborder: boolean;
};
const Wrap = styled(Stack)(({ isborder }: stackPropsNew) => ({
	position: 'relative',
	padding: '16px 16px 0px 16px',

	// margin: "16px 0px",
	overflowY: 'auto',
	overflowX: 'hidden',
	// width: 'calc(100vw - 32px)',
	// height: 'calc(100vh - 32px)',
	width: "100%",
	'@media (min-width: 650px)': {
		width: '422px',
		height: '450px',
		padding: '16px',
	},
	'@media (max-width: 650px)': {
		padding: '0px 16px 0px 16px',
		margin: '16px 0px 16px 0px',
	},
	borderRight: isborder ? '0.5px solid #E9EAEF' : '0',
}));

// const borderRadius = {
// 	display: { status ? 'block' : 'none'},
// 	'& .MuiDialog-paper': {
// 		borderRadius: '16px',
// 		margin: '0 !important',
// 		overflow: 'visible',
// 	},
// };
