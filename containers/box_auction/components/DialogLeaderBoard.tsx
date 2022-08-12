import React, { useCallback, useEffect, useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import {
	Backdrop,
	Box,
	Button,
	ButtonProps,
	CircularProgress,
	InputAdornment,
	Paper,
	Stack,
	StackProps,
	styled,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
	Icon,
	useMediaQuery,
} from '@mui/material';
import axios from 'axios';
import { TEXT_STYLE } from '../../../styles/common/textStyles';
import { convertWalletAddress } from '../../../libs/utils/utils';
import { IconImage } from '../../../components/styled';
import { listShoe, listShoeM } from '../../dashboard/components/ShowInsideBox';

const ContentBox = function (props: { open: boolean }) {
	return (
		<WrapBox sx={{ display: props.open ? 'block' : 'none' }}>
			<Box
				sx={{
					color: '#31373E',
					fontSize: '16px',
					lineHeight: '22px',
					fontWeight: '600',
					textAlign: 'center',
					mt: '8px',
					fontFamily: 'BeVietnamPro',
					// display: open ? 'none' : 'block',
				}}
			>
				What&apos;s inside the box?
			</Box>
			<Box
				sx={{
					display: 'flex',
					mt: '24px',
					'@media (max-width: 767px)': {
						flexDirection: 'column',
					},
				}}
			>
				<BoxSwap sx={{ mr: '24px' }}>
					<TitleSwap>Gold Mystery Box</TitleSwap>
					<img src="assets/icons/asset 021.svg" alt="" />
					<BoxContainer>
						{listShoe.map((item, index) => (
							<BoxMystery key={index} linear={item.linear}>
								<Icon>
									<IconImage src={item.icon} />
								</Icon>
								<Box sx={{ textAlign: 'left', ml: '18px' }}>
									<TitleSwap
										sx={{
											marginBottom: 0,
										}}
									>
										{item.name}
									</TitleSwap>
									<Details>{item.des}</Details>
								</Box>
							</BoxMystery>
						))}
					</BoxContainer>
				</BoxSwap>
				<BoxSwap
					sx={{ mr: '24px', '@media (max-width: 767px)': { mt: '30px' } }}
				>
					<TitleSwap>Diamond Mystery Box</TitleSwap>
					<img height={"80px"} src="assets/icons/dimondBox.svg" alt="" />
					<BoxContainer>
						{listShoeM.map((item, index) => (
							<BoxMystery key={index} linear={item.linear}>
								<Icon>
									<IconImage src={item.icon} />
								</Icon>
								<Box sx={{ textAlign: 'left', ml: '18px' }}>
									<TitleSwap
										sx={{
											marginBottom: 0,
										}}
									>
										{item.name}
									</TitleSwap>
									<Details>{item.des}</Details>
								</Box>
							</BoxMystery>
						))}
					</BoxContainer>
				</BoxSwap>
			</Box>
		</WrapBox>
	);
};

interface Column {
	id: 'rank' | 'walletAddress' | 'amount' | 'prize';
	label: string;
	minWidth?: number;
	align?: 'right' | 'left';
	format?: (value: string) => string;
}

const columns: readonly Column[] = [
	{ id: 'rank', label: 'RANK', minWidth: 50, align: 'left' },
	{
		id: 'walletAddress',
		label: 'WALLET ID',
		minWidth: 100,
		align: 'left',
		format: (value: string) => convertWalletAddress(value.toString(), 6, 3),
	},
	{
		id: 'amount',
		label: 'FITTER PASS(es)',
		minWidth: 103,
		align: 'left',
		format: (value: string) => value.toString(),
	},
	{
		id: 'prize',
		label: 'PRIZE',
		minWidth: 35,
		align: 'left',
		format: (value: string) => value.toString(),
	},
];

interface IProps {
	status: boolean;
	handleToggle: (e: React.MouseEvent) => any;
	// setShowInsideBox: Function;
}
type row = {
	id: string;
	walletAddress: string;
	amount: string;
	rank: string;
};
export const DialogLeaderBoard: React.FC<IProps> = ({
	status,
	handleToggle,
	// setShowInsideBox,
}) => {
	const isMobile = useMediaQuery('(max-width: 767px)');
	const [limit, setLimit] = useState<number>(10);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [showBox, setShowInsideBox] = useState<boolean>(false);

	const [dataLeaderBoard, setDataLeaderBoard] = useState<row[]>();
	const getData = useCallback(() => {
		// setIsLoading(true);
		axios
			.get(
				`https://leaderboard.befitter.io/fitter/leaderboard?limit=${limit === 50 ? 40 : 10
				}&offset=${limit === 50 ? 10 : 0}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then((res) => {
				// setIsLoading(false);
				if (res.status === 200) {
					setDataLeaderBoard(res.data.data);
				}
			});
	}, [limit]);

	useEffect(() => {
		limit && getData();
	}, [limit]);
	const getPize = (value: number) => {
		if (value < 11) {
			return <img src="assets/box-diamond-small.png" alt="box" />;
		}
		if (value < 51) {
			return <img src="assets/box-gold-small.png" alt="box" />;
		}
		return '-';
	};
	return (
		<Dialog
			sx={borderRadius}
			onClose={(e: React.MouseEvent) => {
				handleToggle(e);
			}}
			open={status}
		>
			<Wrap>
				<Box
					onClick={(e: React.MouseEvent) => {
						handleToggle(e);
					}}
					sx={{
						position: 'absolute',
						right: '18px',
						cursor: 'pointer',
					}}
				>
					<img src={'assets/icons/close.svg'} />
				</Box>
				<TitlePopup></TitlePopup>
				<Box>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							mb: '10px',
							// alignItems: 'center',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								// ml: '8px',
							}}
						>
							<ButtonCustom
								isDisabled={limit !== 10}
								variant="text"
								sx={{
									width: '55px',
									height: '26px',
									mr: '8px',
								}}
								onClick={() => {
									setLimit(10);
									setShowInsideBox(false);
								}}
							>
								Top 10
							</ButtonCustom>
							<ButtonCustom
								isDisabled={limit !== 50}
								variant="text"
								// disabled
								sx={{
									width: '55px',
									height: '26px',
								}}
								onClick={() => {
									setLimit(50);
									setShowInsideBox(false);
								}}
							>
								Top 50
							</ButtonCustom>

							<ButtonCustom
								isDisabled={limit !== 0}
								variant="text"
								// disabled
								sx={{
									width: '140px',
									height: '26px',
									ml: '8px',
								}}
								onClick={(e: React.MouseEvent) => {
									setShowInsideBox(true);
									setLimit(0);
								}}
							>
								What&apos;s inside the box?
							</ButtonCustom>
						</Box>{' '}
					</Box>
					{/* table */}
					<Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
						<TableContainerCus sx={{ maxHeight: 308, border: 'none' }}>
							<Table stickyHeader aria-label="sticky table">
								<TableHead>
									<TableRow>
										{!showBox &&
											columns.map((column) => (
												<TableCell
													key={column.id}
													align={column.align}
													style={{ minWidth: column.minWidth }}
													sx={{
														fontSize: '12px',
														color: '#5A6178',
														padding: 0,
														border: 'none',
													}}
												>
													{column.label}
												</TableCell>
											))}
									</TableRow>
								</TableHead>
								<TableBody>
									{!showBox &&
										dataLeaderBoard &&
										dataLeaderBoard?.map((row) => {
											return (
												<TableRow
													hover
													role="checkbox"
													tabIndex={-1}
													key={row.rank}
												>
													{columns.map((column) => {
														if (column.id === 'prize') {
															return (
																<TableCell
																	key={column.id}
																	align={column.align}
																	sx={{
																		borderBottom: 'none',
																		padding: '4px 0',
																		fontSize: '12px',
																		color: '#31373E',
																		fontWeight: '500',
																		fontFamily: 'BeVietNamPro',
																	}}
																>
																	{row.rank ? getPize(parseInt(row.rank)) : '-'}
																	{/* <img src="images/box.svg" alt="box" /> */}
																</TableCell>
															);
														}
														const value = row[column.id];
														return (
															<TableCell
																key={column.id}
																align={column.align}
																sx={{
																	borderBottom: 'none',
																	padding: '4px 0',
																	fontSize: '12px',
																	color: '#31373E',
																	fontWeight: '500',
																	fontFamily: 'BeVietNamPro',
																}}
															>
																{column.format && typeof value === 'string'
																	? column.format(value)
																	: value}
															</TableCell>
														);
													})}
												</TableRow>
											);
										})}
								</TableBody>
							</Table>
						</TableContainerCus>
					</Paper>
					<ContentBox open={showBox} />
				</Box>
			</Wrap>
		</Dialog>
	);
};

const TableContainerCus = styled(TableContainer)({
	'&::-webkit-scrollbar': {
		width: '5px',
		borderRadius: '5px',
	},

	/* Track */
	'&::-webkit-scrollbar-track': {
		background: '#f1f1f1',
	},
	/* Handle */
	'&::-webkit-scrollbar-thumb': {
		background: '#888',
		borderRadius: '5px',
	},

	/* Handle on hover */
	'&::-webkit-scrollbar-thumb:hover': {
		background: '#555',
	},
});
type buttonNew = ButtonProps & {
	isDisabled: boolean | null;
};
const ButtonCustom = styled(Button)((props: buttonNew) => ({
	color: props.isDisabled ? '#A7ACB8' : '#55C8FC',
	background: props.isDisabled ? '#E9EAEF' : '#D9F2FD',
	borderRadius: '4px',
	padding: '0px !important',
	minWidth: '32px !important',
	height: '16px',
	border: 'none',
	textTransform: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '12px',
	'&>svg': {
		pointerEvents: 'none',
		stroke: props.isDisabled ? '#A7ACB8' : '#55C8FC',
	},
	'&:hover': {
		background: ' #d0edfa !important',
		color: '#55C8FC',
	},
	'&:disabled': {
		background: '#E9EAEF',
		'&>svg': {
			stroke: '#A7ACB8',
		},
	},
}));
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

const Wrap = styled(Stack)((props: StackProps) => ({
	position: 'relative',
	padding: '0px 16px 0px 16px',
	margin: '16px 0px 16px 0px',
	overflowY: 'auto',
	overflowX: 'hidden',
	width: 'calc(100vw - 32px)',
	height: 'auto',
	'@media (min-width: 650px)': {
		width: '560px',
	},
}));

const WrapBox = styled(Stack)({
	position: 'relative',
	padding: '16px',
	overflowY: 'auto',
	overflowX: 'hidden',
	width: '100%',
	height: '100%',
	'@media (min-width: 650px)': {
		width: '544px',
		height: '400px',
	},
});

const TitleSwap = styled(Typography)({
	fontSize: '14px',
	fontWeight: '600',
	lineHight: '22px',
	color: '#31373E',
	marginBottom: '24px',
});

const BoxSwap = styled(Box)({
	textAlign: 'center',
	margin: '0 0 0 8px',
	width: '232px',
	minWidth: '232px',
	height: '60px',
	'@media (max-width: 767px)': {
		width: '100%',
		height: '100%',
		margin: '0 8px 0 0',
	},
});

const BoxContainer = styled(Box)({
	marginTop: '16px',
});

const BoxMystery = styled(Box)((props: { linear: string }) => ({
	display: 'flex',
	height: '60px',
	alignItems: 'center',
	position: 'relative',
	'&:before': {
		position: 'absolute',
		background: props.linear,
		opacity: '0.3',
		inset: 0,
		content: '""',
	},
}));

const Details = styled(Typography)({
	background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
	'-webkit-background-clip': 'text',
	'-webkit-text-fill-color': 'transparent',
	'background-clip': 'text',
	'text-fill-color': 'transparent',
	fontSize: '12px',
	fontWeight: '600',
	lineHight: '18px',
	marginTop: '4px',
});
