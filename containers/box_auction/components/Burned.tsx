import { Box, Button, ButtonProps, styled, Typography } from '@mui/material';
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
	numberBurned: string
};

export function Burned(props: Props) {
	const { setStateContent, stateContent, numberBurned } = props;

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
			<Box sx={{ width: '372px', padding: '16px', position: 'relative' }}>
				<Box sx={{ position: 'absolute', inset: 0, backgroundColor: '#cacaca50', zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Typography variant="h3" color="#4d4b4b">Coming soon</Typography>
				</Box>
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
						<ButtonCustom
							isDisabled={active !== 'top10'}
							variant="text"
							sx={{
								width: '55px',
								height: '26px',
								mr: "8px"
							}}
							onClick={() => setActive('top10')}
						>
							Top 10
						</ButtonCustom>
						<ButtonCustom
							isDisabled={active !== 'top50'}
							variant="text"
							// disabled
							sx={{
								width: '55px',
								height: '26px'
							}}
							onClick={() => setActive('top50')}
						>
							Top 50
						</ButtonCustom>
					</Box>{' '}
				</Box>
				{/* table */}
				{/* <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
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
				</Paper> */}
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
						<ValueItem>{numberBurned} Fitter Passes</ValueItem>
					</Item>
					<Item sx={{ mt: '0 !important' }}>
						<TitleItem>YOUR RANK</TitleItem>
						<ValueItem>-</ValueItem>
					</Item>
					<Item sx={{ mt: '0 !important', mb: '8px' }}>
						<TitleItem>PRIZE</TitleItem>
						<ValueItem>-</ValueItem>
					</Item>
					<ButtonCustom
						isDisabled={true}
						disabled
						variant="text"
						sx={{
							width: '72px',
							height: '34px',

							alignSelf: 'end',
						}}
					>
						CLAIM
					</ButtonCustom>
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
						<ValueItem>-</ValueItem>
						<ValueItem>-</ValueItem>
						<ValueItem>-</ValueItem>
					</Item>
					<ButtonCustom
						isDisabled={true}
						disabled
						variant="text"
						sx={{
							width: '72px',
							height: '34px',
							alignSelf: 'end',
						}}
					>
						CLAIM
					</ButtonCustom>
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

type buttonNew = ButtonProps & {
	isDisabled: boolean | null;
};
const ButtonCustom = styled(Button)
	((props: buttonNew) => ({
		color: props.isDisabled ? "#A7ACB8" : "#55C8FC",
		background: props.isDisabled ? "#E9EAEF" : "#D9F2FD",
		borderRadius: '4px',
		padding: '0px !important',
		minWidth: '32px !important',
		height: '16px',
		border: 'none',
		textTransform: 'none',
		display: "flex",
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '12px',
		'&>svg': {
			pointerEvents: "none",
			stroke: props.isDisabled ? "#A7ACB8" : "#55C8FC",
		},
		'&:hover': {
			background: ' #d0edfa !important',
			color: "#55C8FC",
		},
		'&:disabled': {
			background: '#E9EAEF',
			'&>svg': {
				stroke: "#A7ACB8"
			}
		}
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
