import { Box, Button, styled, Typography } from '@mui/material';
import { useState, ChangeEvent } from 'react';
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

interface Column {
	id: 'rank' | 'wallet' | 'filterPass' | 'prize';
	label: string;
	minWidth?: number;
	align?: 'right' | 'left';
	format?: (value: number) => string;
}

const columns: readonly Column[] = [
	{ id: 'rank', label: 'RANK', minWidth: 50, align: 'left' },
	{ id: 'wallet', label: 'WALLET ID', minWidth: 100, align: 'left' },
	{
		id: 'filterPass',
		label: 'FITTER PASS(es)',
		minWidth: 103,
		align: 'left',
		format: (value: number) => value.toLocaleString('en-US'),
	},
	{
		id: 'prize',
		label: 'PRIZE',
		minWidth: 35,
		align: 'left',
		format: (value: number) => value.toLocaleString('en-US'),
	},
];

interface Data {
	rank: number;
	wallet: string;
	filterPass: number;
	prize: Function;
}

function createData(
	rank: number,
	wallet: string,
	filterPass: number,
	prize: Function
): Data {
	return { rank, wallet, filterPass, prize };
}

const rows = [
	createData(1, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(2, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(3, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(4, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(5, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(6, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(7, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(8, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(9, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(10, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
];

const row50 = [
	createData(1, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(2, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(3, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(4, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(5, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(6, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(7, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(8, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(9, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(10, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(1, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(2, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(3, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(4, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(5, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(6, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(7, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(8, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(9, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(10, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(1, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(2, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(3, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(4, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(5, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(6, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(7, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(8, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(9, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(10, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(1, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(2, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(3, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(4, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(5, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(6, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(7, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(8, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(9, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(10, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(1, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(2, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(3, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(4, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(5, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(6, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(7, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(8, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(9, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
	createData(10, '0xDec...94c2', 24, () => (
		<img src="images/box.svg" alt="box" />
	)),
];

type Props = {
	setStateContent: Function;
	// setIsLoading: Function;
	// handleClickError: Function;
	// setStateContentInit: Function;
	stateContent: BoxAuction | null;
};

export function Burned(props: Props) {
	const { setStateContent, stateContent } = props;

	const [active, setActive] = useState<string>('top10');
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

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

	return (
		<Box sx={{ display: 'flex', borderLeft: '1px solid #E9EAEF' }}>
			<Box sx={{ width: '372px', padding: '16px' }}>
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
						END IN 14 DAYS 20 HOURS
					</h3>
					<Box
						sx={{
							display: 'flex',
							ml: '8px',
						}}
					>
						<Button
							sx={{
								backgroundColor: active === 'top10' ? '#D9F2FD' : '#E9EAEF',
								borderRadius: '4px',
								width: '55px',
								padding: '4px 8px',
								fontSize: '12px',
								boxShadow: 'none',
								color: active === 'top10' ? '#55C8FC' : '#A7ACB8',
								'&:hover': {
									backgroundColor: active === 'top10' ? '#D9F2FD' : '#E9EAEF',
									// boxShadow: 'none',
								},
							}}
							onClick={() => setActive('top10')}
						>
							Top 10
						</Button>
						<Button
							sx={{
								backgroundColor: active === 'top50' ? '#D9F2FD' : '#E9EAEF',
								borderRadius: '4px',
								width: '55px',
								padding: '4px 8px',
								boxShadow: 'none',
								fontSize: '12px',
								ml: '8px',
								color: active === 'top50' ? '#55C8FC' : '#A7ACB8',
								'&:hover': {
									backgroundColor: active === 'top50' ? '#D9F2FD' : '#E9EAEF',
								},
							}}
							onClick={() => setActive('top50')}
						>
							Top 50
						</Button>
					</Box>{' '}
				</Box>
				{/* table */}
				<Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
					<TableContainer sx={{ maxHeight: 308, border: 'none' }}>
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
								{(active === 'top10' ? rows : row50).map((row) => {
									return (
										<TableRow
											hover
											role="checkbox"
											tabIndex={-1}
											key={row.rank}
										>
											{columns.map((column) => {
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
														{column.format && typeof value === 'number'
															? column.format(value)
															: typeof value === 'function'
															? value()
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
			<Box sx={{ borderLeft: '1px solid #E9EAEF' }}>
				<Box
					sx={{
						'@media (min-width: 650px)': {
							width: '306px',
							height: '160px',
							padding: '16px',
						},
						display: 'flex',
						flexDirection: 'column',
						borderBottom: '1px solid #E9EAEF',
					}}
				>
					<Item sx={{ mt: '0 !important' }}>
						<TitleItem>BURNED</TitleItem>
						<ValueItem>23 Fitter Passes</ValueItem>
					</Item>
					<Item sx={{ mt: '0 !important' }}>
						<TitleItem>YOUR RANK</TitleItem>
						<ValueItem>999</ValueItem>
					</Item>
					<Item sx={{ mt: '0 !important', mb: '8px' }}>
						<TitleItem>PRIZE</TitleItem>
						<ValueItem>-</ValueItem>
					</Item>
					<Button
						sx={{
							width: '72px',
							height: '34px',
							borderRadius: '8px',
							backgroundColor: '#E9EAEF',
							color: '#A7ACB8',
							fontSize: '12px',
							'&:hover': {
								background: '#E9EAEF',
							},
							alignSelf: 'end',
						}}
					>
						CLAIM
					</Button>
				</Box>
				<Box
					sx={{
						'@media (min-width: 650px)': {
							width: '306px',
							height: '160px',
							padding: '16px',
						},
						display: 'flex',
						flexDirection: 'column',
						borderBottom: '1px solid #E9EAEF',
					}}
				>
					<Item sx={{ mt: '0 !important' }}>
						<TitleItem>MY REFUND</TitleItem>
					</Item>
					<Item sx={{ mt: '0 !important' }}>
						<TitleItem>DATE</TitleItem>
						<TitleItem>ASSETS</TitleItem>
						<TitleItem>AMOUNT</TitleItem>
					</Item>
					<Item sx={{ mt: '0 !important', mb: '8px' }}>
						{/* <TitleItem>PRIZE</TitleItem> */}
						<ValueItem>04:20 24 Jul 2022</ValueItem>
						<ValueItem>Fitter Pass</ValueItem>
						<ValueItem>1</ValueItem>
					</Item>
					<Button
						sx={{
							width: '72px',
							height: '34px',
							borderRadius: '8px',
							backgroundColor: '#E9EAEF',
							color: '#A7ACB8',
							fontSize: '12px',
							'&:hover': {
								background: '#E9EAEF',
							},
							alignSelf: 'end',
						}}
					>
						CLAIM
					</Button>
				</Box>
				<Box sx={{ padding: '16px' }}>
					<MarketplaceButton
						customStyle={{ width: '100%' }}
						title={'BURN MORE'}
						handleOnClick={handleEnable}
						// disabled={stateContent ? true : false}
					/>
				</Box>
			</Box>
		</Box>
	);
}

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
