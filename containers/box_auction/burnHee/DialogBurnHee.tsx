import styled from '@emotion/styled';
import { Backdrop, Box, CircularProgress, Dialog, DialogTitle, Stack, StackProps } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { StateBurnHEE } from '../../../const';
import { STAKING_ICON, STAKING_IMAGE } from '../../../constants/staking';
import userBurnHeeHook, { row } from '../../../libs/hooks/useBurnHeeHook';
import { TEXT_STYLE } from '../../../styles/common/textStyles';
import { Error } from '../../staking/components/Error';
import { Success } from '../../staking/components/Success';
import HeeExchange from './HeeExchange';
import HeeExchangeFill from './HeeExchangeFill';
import HeeExchangeFillHistories from './HeeExchangeFillHistories';

type Props = {
	status: boolean;
	handleToggle: () => any;
	stateContentBurnInit: StateBurnHEE | null,
	dataMyBurned: row[] | undefined;
	totalInPool: string;
	balanceHee: string;
	isApproved: boolean;
	allowance: number;
	earned: string;
}

const DialogBurnHee = ({
	status,
	handleToggle,
	stateContentBurnInit,
	dataMyBurned,
	totalInPool,
	balanceHee,
	isApproved,
	allowance
}: Props) => {

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [stateContent, setStateContent] = useState<StateBurnHEE | null>(
		StateBurnHEE.HeeExchange
	);
	const [success, setSuccess] = useState<any>({
		titleSuccess: 'Staked successfully!',
		functionSuccess: '',
	});

	const [error, setError] = useState<any>({
		titleError: 'Something went wrong, please try again',
		functionError: '',
	});
	useEffect(() => {
		if (stateContent !== StateBurnHEE.Success && stateContent !== StateBurnHEE.Error) {

			setStateContent(stateContentBurnInit);
		}
	}, [stateContentBurnInit]);
	const handleClickSuccess = ({
		titleSuccess = '',
		functionSuccess = null,
		stateContentNew = null,
	}: {
		titleSuccess: String;
		functionSuccess: Function | null;
		stateContentNew: StateBurnHEE | null;
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
		stateContentNew: StateBurnHEE | null;
	}) => {
		setStateContent(stateContentNew);
		setError({
			titleError: titleError,
			functionError: functionError,
		});
	};
	const propsCommon = {
		setStateContent,
		setIsLoading,
		setSuccess,
		handleClickSuccess,
		handleClickError,
	}
	return (
		<Dialog
			sx={borderRadius}
			onClose={() => {
				// setStateContent(stateContentInit);
				handleToggle();
			}}
			open={status}
		>
			<Wrap isBig={stateContent === StateBurnHEE.HeeExchangeHistories}>
				<Box
					onClick={() => {
						// setStateContent(stateContentInit);
						handleToggle();
					}}
					sx={closeIcon}
				>
					<img src={'assets/icons/close.svg'} />
				</Box>
				<TitlePopup>
					{stateContent === StateBurnHEE.HeeExchangeHistories && (
						<img
							src={STAKING_ICON.arrowLeftGray}
							height="24px"
							style={{ marginRight: "8px", cursor: 'pointer', }}
							alt=""
							onClick={() => setStateContent(StateBurnHEE.HeeExchangeFill)}
						/>
					)}
					<img src={STAKING_ICON.hee} style={{ marginRight: "8px" }} alt="" />
					Fitter Pass- Hee Exchange
				</TitlePopup>
				{
					stateContent == StateBurnHEE.HeeExchange ?
						<HeeExchange />
						:
						stateContent == StateBurnHEE.HeeExchangeFill ?
							<HeeExchangeFill {...propsCommon} balanceHee={balanceHee} isApproved={isApproved} allowance={allowance} /> :
							stateContent == StateBurnHEE.HeeExchangeHistories ?
								<HeeExchangeFillHistories {...propsCommon} dataMyBurned={dataMyBurned} /> :

								stateContent === StateBurnHEE.Success ? (
									<Success success={success} setStateContent={setStateContent} />
								) : stateContent === StateBurnHEE.Error ? (
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
	)
}
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
type stackPropsNew = StackProps & {
	isBig: boolean;
};
const Wrap = styled(Stack)((props: stackPropsNew) => ({
	position: 'relative',
	padding: '16px 16px 0px 16px',
	overflowY: 'auto',
	overflowX: 'hidden',
	width: 'calc(100vw - 32px)',
	height: 'calc(100vh - 32px)',
	'@media (min-width: 650px)': {
		width: props.isBig ? '464px' : '360px',
		height: '490px',
		padding: '16px',
	},
	'@media (max-width: 650px)': {
		padding: '0px 16px 0px 16px',
		margin: '16px 0px 16px 0px',
	},
}));

export default DialogBurnHee