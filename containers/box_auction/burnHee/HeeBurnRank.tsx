import {
	Box,
	Button,
	ButtonProps,
	styled,
	Typography,
	useMediaQuery,
	Link,
} from '@mui/material';
import { ReactNode } from 'react';
import { useState, ChangeEvent, useEffect, useCallback } from 'react';
import { BoxAuction } from '../../../const';
import { ethers } from 'ethers';

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
import { convertWalletAddress, formatMoney } from '../../../libs/utils/utils';
import { useWalletContext } from '../../../contexts/WalletContext';
import { StateBurnHEE } from '../../../const';
import { convertBigNumber } from '../../../libs/hooks/useBurnHeeHook';
import moment from 'moment';

const timeUTC = (timeStamp: string) => {
	let nowTime: number = Date.now(); //todays date
	let endTime: number = parseInt(timeStamp) * 1000; // another date
	let duration = Math.floor((nowTime - endTime) / 1000);
	var d = Math.floor(duration / (3600 * 24));
	var h = Math.floor((duration % (3600 * 24)) / 3600);
	var m = Math.floor((duration % 3600) / 60);
	var s = Math.floor(duration % 60);

	var dDisplay = d > 0 ? d + (d == 1 ? ' day ' : ' ds ') : '';
	var hDisplay = h > 0 ? h + (h == 1 ? ' hr ' : ' hrs ') : '';
	var mDisplay = m > 0 ? m + (m == 1 ? ' min ' : ' mins ') : '';
	var sDisplay = s > 0 ? s + (s == 1 ? ' sec' : ' secs') : '';

	const timeDisplay = dDisplay + hDisplay + mDisplay + sDisplay;

	const splitTime = timeDisplay.split(' ');

	if (splitTime.length <= 4) return timeDisplay + ' ago';
	splitTime.length = 4;

	return splitTime.join(' ') + ' ago';
};

interface Column {
	id: 'blockTimestamp' | 'heeBurned' | 'transactionHash';
	label: string;
	minWidth?: number;
	align?: 'right' | 'left';
	format: (value: string) => string | ReactNode | number;
}

const columns: readonly Column[] = [
	{
		id: 'blockTimestamp',
		label: 'TIME',
		minWidth: 130,
		align: 'left',
		format: timeUTC,
	},
	{
		id: 'heeBurned',
		label: 'HEE BURNED',
		minWidth: 90,
		align: 'left',
		format: (value: string) =>
			formatMoney(ethers.utils.formatEther(convertBigNumber(Number(value)))),
	},
	{
		id: 'transactionHash',
		label: 'TXN HASH',
		minWidth: 100,
		align: 'left',
		format: (value) => (
			<Link
				sx={{
					color: '#55C8FC',
					'&:hover': {
						textDecorationColor: '#55C8FC',
					},
				}}
				href={`https://bscscan.com/tx/${value.toString()}`}
				target="_blank"
				underline="hover"
			>
				{convertWalletAddress(value.toString(), 6, 3, '***')}
			</Link>
		),
	},
];

interface Data {
	rank: number;
	wallet: string;
	filterPass: number;
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
	heeBurned: number;
	transactionHash: string;
	blockTimestamp: number;
};
export function HeeBurnRank(props: Props) {
	const { stateContent } = props;
	const { walletAccount } = useWalletContext();
	const [limit, setLimit] = useState<number>(50);
	const [page, setPage] = useState(0);
	const [dataLeaderBoard, setDataLeaderBoard] = useState<row[]>();
	const [dataMe, setDataMe] = useState<row>();
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const getData = useCallback(() => {
		axios
			.get(
				`https://leaderboard.befitter.io/fitter/burning-hee-history?limit=100&offset=0`,
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
	}, []);

	useEffect(() => {
		getData();
	}, [getData]);

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
			}}
		>
			<Box
				sx={{
					width: isMobile ? 'auto' : '100%',
					padding: isMobile ? '16px' : '8px 16px 16px 16px',
					'@media (max-width: 767px)': {
						borderTop: '1px solid #E9EAEF',
					},
				}}
			>
				{/* table */}
				<BoxPaper
					isBurnMore={
						stateContent === StateBurnHEE.HeeExchangeHistories ? true : false
					}
				>
					<TableContainer
						sx={{
							maxHeight: '326px',
							border: 'none',
							overflowX: 'visible',
							'@media (max-width: 768px)': { overflowX: 'auto' },
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
												key={row.id}
												sx={{
													'&:nth-of-type(even)': {
														backgroundColor: '#F8F9FB',
													},
												}}
											>
												{columns.map((column) => {
													const value = row[column.id].toString();
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
																lineHeight: '22px',
															}}
														>
															{column.format(value)}
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
		</Box>
	);
}

const BoxPaper = styled(Paper)((props: { isBurnMore: boolean }) => ({
	// height: !props.isBurnMore ? 'inherit' : '278px',
	overflowY: 'auto',
	boxShadow: 'none',
	width: '100%',

	'&::-webkit-scrollbar': {
		width: '5px',
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
}));
