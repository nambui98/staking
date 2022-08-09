import styled from '@emotion/styled';
import { Box, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography, useMediaQuery } from '@mui/material';
import { borderRadius } from '@mui/system';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { convertWalletAddress } from '../../libs/utils/utils';

type Props = {}
interface Column {
	id: 'rank' | 'walletAddress' | 'amount' | 'prize';
	label: string;
	minWidth?: number;
	align?: 'right' | 'left' | 'center';
	format?: (value: string) => string;
}

const columns: readonly Column[] = [
	{ id: 'rank', label: 'RANK', minWidth: 50, align: 'center' },
	{
		id: 'walletAddress', label: 'WALLET ID', minWidth: 100, align: 'left',
		format: (value: string) => convertWalletAddress(value.toString(), 6, 3)
	},
	{
		id: 'amount',
		label: 'FITTER PASS(ES)',
		minWidth: 103,
		align: 'center',
		format: (value: string) => value.toString(),
	},
	{
		id: 'prize',
		label: 'PRIZE',
		minWidth: 35,
		align: 'center',
		format: (value: string) => value.toString(),
	},
];
type row = {
	id: string;
	walletAddress: string;
	amount: string;
	rank: string;
}

export default function RightContent({ }: Props) {
	const isMobile = useMediaQuery('(max-width: 767px)');
	const [limit, setLimit] = useState<number>(10);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [value, setValue] = useState(0);

	const [dataLeaderBoard, setDataLeaderBoard] = useState<row[]>();
	const getData = useCallback(
		() => {
			// setIsLoading(true);
			axios.get(
				`https://leaderboard.befitter.io/fitter/leaderboard?limit=${limit === 50 ? 40 : 10}&offset=${limit === 50 ? 10 : 0}`, {
				headers: {
					"Content-Type": "application/json"
				}
			}
			).then((res) => {
				// setIsLoading(false);
				if (res.status === 200) {
					setDataLeaderBoard(res.data.data);
				}
			})
		},
		[limit],
	)


	useEffect(() => {
		getData();
	}, [limit])
	const getPize = (value: number) => {
		if (value < 11) {
			return <img width={"22px"} src="assets/box-diamond-small.png" alt="box" />
		}
		if (value < 51) {
			return <img width={"22px"} src="assets/box-gold-small.png" alt="box" />
		}
		return '-'
	}

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setLimit(newValue);
	};
	return (
		<Wrap >
			<img style={{ width: 'calc(100% + 48px)', position: 'absolute', zIndex: 1, objectFit: 'cover', top: '-24px', left: '-24px' }} src="assets/borderAuction.png" alt="" />
			<Top sx={{ position: 'relative', zIndex: 3 }}>
				<Box>

					<img src="assets/leaderboardBoxauction.png" alt="" />
				</Box>
				<Box sx={{ padding: '4px 8px', height: '26px', color: "#fff", backgroundColor: '#FF6D24', mr: "8px", borderRadius: '8px', fontSize: '14px', fontWeight: '500', display: 'inline-block' }}>
					Leadeboard
				</Box>
			</Top>
			<BoxTabs sx={{ position: 'relative', zIndex: 3 }} variant="fullWidth" value={limit} onChange={handleChange} centered>
				<TabItem value={10} label={<Box sx={{ display: 'flex', alignItems: "flex-end", justifyContent: "center" }}><img width={"20px"} height="20px" src={limit === 10 ? "assets/icons/cup.svg" : "assets/icons/cupDisable.svg"} style={{ marginRight: "8px" }} alt="" />Top 10</Box>} />
				<TabItem value={50} label="Top 50" />
			</BoxTabs>
			{/* <TabPanel value={value} index={0}> */}
			{/* <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}> */}
			<TableContainerCus sx={{ position: 'relative', zIndex: 3, maxHeight: 400, border: 'none', width: 'calc(100% - 2px)' }}>
				<Table stickyHeader aria-label="sticky table" sx={{
					paddingLeft: "16px",
					paddingRight: "16px"
				}}>
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

						{dataLeaderBoard && dataLeaderBoard?.map((row) => {
							return (
								<TableRow
									hover
									role="checkbox"
									tabIndex={-1}

									key={row.rank}
								>
									{columns.map((column) => {
										if (column.id === "prize") {
											return <TableCell
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
			{/* </TabPanel> */}
			{/* </Paper> */}
			{/* </TabPanel>
			<TabPanel value={value} index={1}>
				Top 50
			</TabPanel> */}

		</Wrap>
	)
}
interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const TabItem = styled(Tab)({
	fontSize: '14px',
	fontWeight: '500',
	color: '#A7ACB8',
	'&:first-child': {
		paddingLeft: 0
	},
	// '& img': {
	// 	filter: 'invert(0%) sepia(35%) saturate(204%) hue-rotate(185deg) brightness(89%) contrast(85%)',
	// },
	'&.Mui-selected': {
		color: '#FF6D24',
	},

	// '@media (min-width: 768px)': {
	// 	padding: '0 37px',
	// 	fontSize: '32px',
	// }
})

const BoxTabs = styled(Tabs)({
	marginBottom: 16,
	borderBottom: '1px solid #E9EAEF',
	'& .MuiTabs-indicator': {
		backgroundColor: '#FF6D24'
	}
})
const TableContainerCus = styled(TableContainer)({
	'&::-webkit-scrollbar': {
		width: "5px",
		borderRadius: "5px"
	},

	/* Track */
	'&::-webkit-scrollbar-track': {
		background: '#f1f1f1'
	}
	,
	/* Handle */
	'&::-webkit-scrollbar-thumb': {
		background: '#888',
		borderRadius: "5px"
	},

	/* Handle on hover */
	'&::-webkit-scrollbar-thumb:hover': {
		background: '#555',

	}
})
const Wrap = styled(Box)({
	width: '100%',
	height: "100%",
	position: 'relative',
	overflow: 'hidden',
	// backgroundImage: 'url(assets/borderAuction.png)',
	// backgroundPosition: "center",
	paddingBottom: "16px",
	boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.1)',
	borderRadius: '8px'
})
const Top = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	paddingTop: "8px",
	'& img': {
		paddingTop: '8px',
		paddingLeft: '16px'
	}
})