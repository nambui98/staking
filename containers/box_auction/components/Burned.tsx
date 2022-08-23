import {
	Box,
	Button,
	ButtonProps,
	styled,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { useState, ChangeEvent, useEffect, useCallback } from 'react';
import { BoxAuction } from '../../../const';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import axios from 'axios';
import { convertWalletAddress } from '../../../libs/utils/utils';
import { useWalletContext } from '../../../contexts/WalletContext';
import { useRouter } from 'next/router';

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

interface Data {
	rank: number;
	wallet: string;
	filterPass: number;
}

function createData(rank: number, wallet: string, filterPass: number): Data {
	return { rank, wallet, filterPass };
}

type Props = {
	setStateContent: Function;
	// setIsLoading: Function;
	// handleClickError: Function;
	// setStateContentInit: Function;
	stateContent: BoxAuction | null;
	numberBurned: string;
};
type row = {
	id: string;
	walletAddress: string;
	amount: string;
	rank: string;
};
export function Burned(props: Props) {
	const { setStateContent, stateContent, numberBurned } = props;
	var { walletAccount } = useWalletContext();
	const [limit, setLimit] = useState<number>(10);
	const [page, setPage] = useState(0);
	const [dataLeaderBoard, setDataLeaderBoard] = useState<row[]>();
	const [dataMe, setDataMe] = useState<row>();
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [enableClaimBox, setEnableClaimBox] = useState<boolean>(false);
	const router = useRouter();

	const getDataMe = useCallback(() => {
		axios
			.get(
				`https://leaderboard.befitter.io/fitter/leaderboard/me?walletAddress=${walletAccount}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then((res) => {
				if (res.status === 200) {
					setDataMe(res.data.data);

					if (res.data.data?.rank < 50) {
						setEnableClaimBox(true);
					} else {
						setEnableClaimBox(false);
					}
				}
			});
	}, [walletAccount]);
	const getData = useCallback(() => {
		axios
			.get(
				`https://leaderboard.befitter.io/fitter/leaderboard?limit=${
					limit === 50 ? 40 : 10
				}&offset=${limit === 50 ? 10 : 0}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then((res) => {
				if (res.status === 200) {
					setDataLeaderBoard(res.data.data);
				}
			});
	}, [limit]);

	useEffect(() => {
		getData();
		getDataMe();
		let interval = setInterval(() => {
			getData();
			getDataMe();
		}, 30000);
		return () => clearInterval(interval);
	}, [limit]);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleEnable = () => {
		setStateContent(BoxAuction.BurnAssets);
	};
	const isMobile = useMediaQuery('(max-width: 767px)');

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
		<Box
			sx={{
				display: 'flex',
				flexDirection: isMobile ? 'column' : 'row',
				flex: 1,
				borderLeft: isMobile ? 0 : '1px solid #E9EAEF',
			}}
		>
			<Box
				sx={{
					width: isMobile ? 'auto' : '372px',
					padding: isMobile ? '16px 0' : '0px 16px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						mb: '10px',
						// alignItems: 'center',
					}}
				>
					<h3
						style={{
							color: '#FF6F61',
							fontSize: '12px',
							fontWeight: '500',
							lineHeight: '18px',
						}}
					>
						{/* END IN 14 DAYS 20 HOURS */}
					</h3>
					<Box
						sx={{
							display: 'flex',
							ml: '8px',
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
							onClick={() => setLimit(10)}
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
							onClick={() => setLimit(50)}
						>
							Top 50
						</ButtonCustom>
					</Box>{' '}
				</Box>
				{/* table */}
				<Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
					<TableContainer
						sx={{
							maxHeight: '380px',
							border: 'none',
							'&::-webkit-scrollbar': {
								width: '5px',
								height: '5px',
								borderRadius: '5px',
							},

							/* Track */
							'&::-webkit-scrollbar-track': {
								background: '#f1f1f1',
								borderRadius: '5px',
							},
							/* Handle */
							'&::-webkit-scrollbar-thumb': {
								background: '#888',
								borderRadius: '5px',
							},

							/* Handle on hover */
							'&::-webkit-scrollbar-thumb:hover': {
								background: '#555',
								borderRadius: '5px',
							},
						}}
					>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									{columns.map((column) => (
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
								{dataLeaderBoard &&
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
																{row?.rank ? getPize(parseInt(row?.rank)) : '-'}
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
					</TableContainer>
				</Paper>
			</Box>
			<Box
				sx={{
					borderLeft: isMobile ? '0px' : '1px solid #E9EAEF',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Box
					sx={{
						'@media (min-width: 650px)': {
							width: '306px',
							height: '160px',
							padding: isMobile ? '16px 0' : '0px 16px',
						},
						display: 'flex',
						flexDirection: 'column',
						borderBottom: isMobile ? 0 : '1px solid #E9EAEF',
					}}
				>
					<Item sx={{ mt: '0 !important' }}>
						<TitleItem>BURNED</TitleItem>
						<ValueItem>{dataMe?.amount ?? 0} Fitter Passes</ValueItem>
					</Item>
					<Item sx={{ mt: '0 !important' }}>
						<TitleItem>YOUR RANK</TitleItem>
						<ValueItem>{dataMe?.rank ?? '-'}</ValueItem>
					</Item>
					<Item sx={{ mt: '0 !important', mb: '8px' }}>
						<TitleItem>PRIZE</TitleItem>
						<ValueItem>
							{dataMe?.rank ? getPize(parseInt(dataMe?.rank)) : '-'}
						</ValueItem>
					</Item>
					<ButtonCustom
						isDisabled={enableClaimBox ? false : true}
						disabled={enableClaimBox ? false : true}
						variant="text"
						sx={{
							width: '72px',
							height: '34px',

							alignSelf: 'end',
						}}
						onClick={() => router.push('/claim?tabClaim=box&round=9')}
					>
						CLAIM
					</ButtonCustom>
				</Box>
				<Box
					sx={{
						'@media (min-width: 650px)': {
							width: '306px',
							height: '190px',
							padding: '16px 16px 0 16px',
						},
						display: 'flex',
						flexDirection: 'column',
						paddingBottom: '16px',
						// marginTop: '8px',
						borderBottom: '1px solid #E9EAEF',
					}}
				>
					<Item sx={{ mt: '0 !important' }}>
						<TitleItem>REFUND</TitleItem>
					</Item>
					<Item sx={{ mt: '0 !important' }}>
						<TitleItem>DATE</TitleItem>
						<TitleItem>ASSETS</TitleItem>
						<TitleItem>AMOUNT</TitleItem>
					</Item>
					<Item sx={{ mt: '0 !important', mb: '8px' }}>
						{/* <TitleItem>PRIZE</TitleItem> */}
						<ValueItem>
							09:00 UTC <br></br> 22/08/2022
						</ValueItem>
						<ValueItem sx={{ flex: 1, ml: '27px' }}>Fitter Pass</ValueItem>
						<ValueItem>
							{Number(dataMe?.rank) <= 50 ? '-' : dataMe?.amount}
						</ValueItem>
					</Item>
					<ButtonCustom
						isDisabled={enableClaimBox ? true : false}
						disabled={enableClaimBox ? true : false}
						variant="text"
						sx={{
							width: '72px',
							height: '34px',
							alignSelf: 'end',
						}}
						onClick={() => router.push('/claim?tabClaim=fitterPass&round=10')}
					>
						CLAIM
					</ButtonCustom>
				</Box>
				<Box
					sx={{
						padding: isMobile ? '16px 0px 0 0px' : '0 16px 0 16px',
						mt: 'auto',
					}}
				>
					<MarketplaceButton
						customStyle={{ width: '100%' }}
						title={'BURN MORE'}
						handleOnClick={handleEnable}
						disabled
						// disabled={stateContent ? true : false}
					/>
				</Box>
			</Box>
		</Box>
	);
}

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

const Item = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginBottom: '16px',
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
