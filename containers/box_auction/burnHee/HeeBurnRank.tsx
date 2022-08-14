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
import { StateBurnHEE } from '../../../const';

interface Column {
	id: 'rank' | 'walletAddress' | 'amount' | 'earned';
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
		label: 'HEE BURNED',
		minWidth: 103,
		align: 'left',
		format: (value: string) => value.toString(),
	},
	{
		id: 'earned',
		label: 'EARNED',
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
	// setStateContent: Function;
	// setIsLoading: Function;
	// handleClickError: Function;
	// setStateContentInit: Function;
	stateContent: StateBurnHEE | null;
	// numberBurned: string;
};
type row = {
	id: string;
	walletAddress: string;
	amount: string;
	rank: string;
};
export function HeeBurnRank(props: Props) {
	const { stateContent } = props;
	const { walletAccount } = useWalletContext();
	const [limit, setLimit] = useState<number>(10);
	const [page, setPage] = useState(0);
	const [dataLeaderBoard, setDataLeaderBoard] = useState<row[]>();
	const [dataMe, setDataMe] = useState<row>();
	const [rowsPerPage, setRowsPerPage] = useState(10);

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
	}, [limit]);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleEnable = () => {
		// setStateContent(BoxAuction.BurnAssets);
	};
	const isMobile = useMediaQuery('(max-width: 767px)');

	const getPize = (value: number) => {
		if (value < 11) {
			return (
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					10
					<img src="assets/icons/fitterpassBright.svg" alt="box" />
				</Box>
			);
		}
		if (value < 51) {
			return <img src="assets/icons/fitterpassBright.svg" alt="box" />;
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
				position: 'relative',
			}}
		>
			<Box
				sx={{
					width: isMobile ? 'auto' : '100%',
					padding: isMobile ? '16px' : '8px 16px',
					'@media (max-width: 767px)': {
						border: '1px solid #E9EAEF',
					},
				}}
			>
				{/* table */}
				<BoxPaper
					isBurnMore={
						stateContent === StateBurnHEE.HeeExchangeHistories ? true : false
					}
				>
					<TableContainer sx={{ maxHeight: '340px', border: 'none' }}>
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
												sx={{
													'&:nth-of-type(even)': {
														backgroundColor: '#F8F9FB',
													},
												}}
											>
												{columns.map((column) => {
													if (column.id === 'earned') {
														return (
															<TableCell
																key={column.id}
																align={column.align}
																sx={{
																	borderBottom: 'none',
																	padding: '6px 0',
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
					</TableContainer>
				</BoxPaper>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					bottom: '0',
					left: '-1px',
					right: '0',
					height: '62px',
					backgroundColor: '#D9CDF1',
					borderRadius: '0px 0px 8px 8px',
					textAlign: 'center',
					display:
						stateContent == StateBurnHEE.HeeExchangeHistories
							? 'block'
							: 'none',
				}}
			>
				<Item>
					<Box>
						<TitleItem>Your rank</TitleItem>
						<ValueItem>99</ValueItem>
					</Box>
					<Box>
						<TitleItem>HEE Burned</TitleItem>
						<ValueItem>25,000</ValueItem>
					</Box>
					<Box>
						<TitleItem>Earned</TitleItem>
						<ValueItem>5 FITTER PASS</ValueItem>
					</Box>
				</Item>
			</Box>
		</Box>
	);
}

const BoxPaper = styled(Paper)((props: { isBurnMore: boolean }) => ({
	height: !props.isBurnMore ? 'inherit' : '278px',
	overflow: !props.isBurnMore ? 'hidden' : 'auto',
	boxShadow: 'none',
	width: '100%',
	'&::-webkit-scrollbar': {
		width: '5px',
		borderRadius: '5px',
	},
	'@media (max-width: 767px)': {
		height: '358px',
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
	overflowY: 'auto',
}));

const Item = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
	height: '100%',
});

const TitleItem = styled(Typography)({
	fontSize: '12px',
	color: '#5A6178',
	fontWeight: '500',
	lineHeight: '18px',
	textTransform: 'uppercase',
	textAlign: 'left',
});
const ValueItem = styled(Typography)({
	fontSize: '16px',
	textAlign: 'left',
	color: '#7165E3',
	fontWeight: '500',
	lineHeight: '24px',
});
