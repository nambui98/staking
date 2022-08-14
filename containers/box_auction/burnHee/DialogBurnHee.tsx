import styled from '@emotion/styled';
import {
	Backdrop,
	Box,
	CircularProgress,
	Dialog,
	DialogTitle,
	Stack,
	StackProps,
	useMediaQuery,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { StateBurnHEE } from '../../../const';
import { STAKING_ICON, STAKING_IMAGE } from '../../../constants/staking';
import userBurnHeeHook, { row } from '../../../libs/hooks/useBurnHeeHook';
import { TEXT_STYLE } from '../../../styles/common/textStyles';
import { Error } from '../../staking/components/Error';
import { Success } from '../../staking/components/Success';
import HeeExchange from './HeeExchange';
import HeeExchangeFill from './HeeExchangeFill';
import HeeExchangeFillHistories from './HeeExchangeFillHistories';
import { HeeBurnRank } from './HeeBurnRank';
import { useWalletContext } from '../../../contexts/WalletContext';

type Props = {
	status: boolean;
	handleToggle: () => any;
	stateContentBurnInit: StateBurnHEE | null;
	dataMyBurned: row[] | undefined;
	totalInPool: string;
	balanceHee: string;
	isApproved: boolean;
	allowance: number;
	earned: string;
};

const DialogBurnHee = ({
	status,
	handleToggle,
	stateContentBurnInit,
	dataMyBurned,
	totalInPool,
	balanceHee,
	isApproved,
	allowance,
}: Props) => {
	const isMobile = useMediaQuery('(max-width: 767px)');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [stateContent, setStateContent] = useState<StateBurnHEE | null>(
		StateBurnHEE.HeeExchange
	);

	const { walletAccount } = useWalletContext();
	console.log('dhfiusdafas', walletAccount);

	const [success, setSuccess] = useState<any>({
		titleSuccess: 'Staked successfully!',
		functionSuccess: '',
	});

	const [error, setError] = useState<any>({
		titleError: 'Something went wrong, please try again',
		functionError: '',
	});
	useEffect(() => {
		if (
			stateContent !== StateBurnHEE.Success &&
			stateContent !== StateBurnHEE.Error
		) {
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
	};
	return (
		<Box
			sx={borderRadius}
			// onClose={() => {
			// 	handleToggle();
			// 	setStateContent(stateContentBurnInit);
			// }}
			// open={status}
		>
			<Wrap
				isBig={stateContent === StateBurnHEE.HeeExchangeHistories}
				direction={isMobile ? 'column' : 'row'}
			>
				<HeeExchange />
				{walletAccount && stateContent == StateBurnHEE.HeeExchangeFill ? (
					<HeeExchangeFill
						{...propsCommon}
						balanceHee={balanceHee}
						isApproved={isApproved}
						allowance={allowance}
					/>
				) : stateContent == StateBurnHEE.HeeExchangeHistories ? (
					<HeeExchangeFillHistories
						{...propsCommon}
						dataMyBurned={dataMyBurned}
					/>
				) : stateContent === StateBurnHEE.Success ? (
					<Success
						success={success}
						setStateContent={setStateContent}
						isBorderTop
					/>
				) : stateContent === StateBurnHEE.Error ? (
					<Error setStateContent={setStateContent} error={error} />
				) : (
					<Box></Box>
				)}
				{walletAccount && <HeeBurnRank stateContent={stateContent} />}
			</Wrap>
			<Backdrop
				sx={{ color: '#FF6D24', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={isLoading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Box>
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
	// overflowY: 'auto',
	// overflowX: 'hidden',

	// width: 'calc(100vw - 32px)',
	// height: '100%',
	'@media (min-width: 650px)': {
		// width: props.isBig ? '464px' : '360px',
		width: '100%',
		height: '350px',
	},
	// '&::-webkit-scrollbar': {
	// 	width: '5px',
	// 	borderRadius: '5px',
	// },

	// /* Track */
	// '&::-webkit-scrollbar-track': {
	// 	background: '#f1f1f1',
	// 	borderRadius: '5px',
	// },
	// /* Handle */
	// '&::-webkit-scrollbar-thumb': {
	// 	background: '#888',
	// 	borderRadius: '5px',
	// },

	// /* Handle on hover */
	// '&::-webkit-scrollbar-thumb:hover': {
	// 	background: '#555',
	// 	borderRadius: '5px',
	// },
}));

export default DialogBurnHee;
