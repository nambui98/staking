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
	StackProps,
	styled,
	TextField,
	Typography,
	useMediaQuery,
} from '@mui/material';

import { Success } from './Success';
import { Error } from './Error';
import { WithDraw } from './WithDraw';
import { StateStakingLocked } from '../../../../const';
import { STAKING_ICON } from '../../../../constants/staking';
import { Locked } from './Locked';
import { LockedStakeProcess } from './LockedStakeProcess';
import { LockedList } from './LockedList';
import { row } from '../../../../libs/hooks/useLockedHook';

interface IProps {
	status: boolean;
	balanceFiu: string;
	handleToggle: () => any;
	dataActive: any;
	setStateContentInit: Function;
	stateContentInit: StateStakingLocked;
	dataMyStakingLock: row[] | undefined
}

export const DialogItemStakingLocked: React.FC<IProps> = ({
	status,
	balanceFiu,
	handleToggle,
	dataActive,
	stateContentInit,
	setStateContentInit,
	dataMyStakingLock
}) => {
	const [stateContent, setStateContent] = useState<StateStakingLocked | null>(
		stateContentInit
	);

	const [success, setSuccess] = useState<any>({
		titleSuccess: 'Staked successfully!',
		functionSuccess: '',
	});

	const [isLoading, setIsLoading] = useState(false);
	const [row, setRow] = useState<row | null>();

	const [error, setError] = useState<any>({
		titleError: 'Something went wrong, please try again',
		functionError: '',
	});

	const isMobile = useMediaQuery('(max-width: 767px)');
	const [warning, setWarning] = useState<any>({
		titleWarning: '',
		titleButton: '',
		haveCancel: false,
		contentWarning: '',
		functionWarning: '',
		functionCancel: '',
	});

	useEffect(() => {
		if (stateContent !== StateStakingLocked.Success && stateContent !== StateStakingLocked.Error) {

			setStateContent(stateContentInit);
		}
	}, [stateContentInit]);

	const handleClickSuccess = ({
		titleSuccess = '',
		functionSuccess = null,
		stateContentNew = null,
	}: {
		titleSuccess: String;
		functionSuccess: Function | null;
		stateContentNew: StateStakingLocked | null;
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
		stateContentNew: StateStakingLocked | null;
	}) => {
		setStateContent(stateContentNew);
		setError({
			titleError: titleError,
			functionError: functionError,
		});
	};
	const propsPass = {
		balanceFiu,
		setIsLoading,
		setSuccess,
		setStateContent,
		handleClickSuccess,
		handleClickError,
		dataMyStakingLock,
		setRow,
		row
	};
	return (
		<Dialog
			sx={borderRadius}
			onClose={() => {
				setStateContent(stateContentInit);
				handleToggle();
			}}
			open={status}
		>
			<Wrap isBig={stateContent === StateStakingLocked.LockedList}>
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
					{stateContent === StateStakingLocked.WithDraw && (
						<img
							src={STAKING_ICON.arrowLeftGray}
							height="24px"
							style={{ marginRight: "8px", cursor: 'pointer', }}
							alt=""
							onClick={() => setStateContent(StateStakingLocked.LockedList)}
						/>
					)}
					<img src="assets/icons/fiu.svg" alt="" />
					{dataActive && dataActive.name}
				</TitlePopup>
				{
					stateContent == StateStakingLocked.Locked ?
						<Locked
							setStateContentInit={setStateContentInit}
							setStateContent={setStateContent}
							setIsLoading={setIsLoading}
							handleClickError={handleClickError}
						/> :
						stateContent == StateStakingLocked.LockedStakeProcess ?
							<LockedStakeProcess  {...propsPass} /> :
							stateContent == StateStakingLocked.LockedList ?
								<LockedList  {...propsPass} /> :
								stateContent === StateStakingLocked.WithDraw ? (
									<WithDraw {...propsPass} />
								) :
									stateContent === StateStakingLocked.Success ? (
										<Success success={success} setStateContent={setStateContent} />
									) : stateContent === StateStakingLocked.Error ? (
										<Error setStateContent={setStateContent} error={error} />
									) : <Box></Box>
				}
			</Wrap>
			<Backdrop
				sx={{ color: '#FF6D24', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={isLoading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Dialog >
	);
};

const borderRadius = {
	'& .MuiDialog-paper': {
		borderRadius: '16px',
		margin: '0 !important',
		overflow: 'visible',
	},
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
type stackPropsNew = StackProps & {
	isBig: boolean;
};
const Wrap = styled(Stack)((props: stackPropsNew) => ({
	position: 'relative',
	padding: '0px 16px 0px 16px',
	margin: '16px 0px 16px 0px',
	overflowY: 'auto',
	overflowX: 'hidden',
	width: 'calc(100vw - 32px)',
	height: "auto",
	'@media (min-width: 650px)': {
		width: props.isBig ? '464px' : '360px',
	},
}));
