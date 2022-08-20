import styled from '@emotion/styled';
import {
	Box,
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { ethers } from 'ethers';
import moment from 'moment';
import React from 'react';
import { StateBurnHEE } from '../../../const';
import { convertBigNumber, row } from '../../../libs/hooks/useBurnHeeHook';
import { formatMoney } from '../../../libs/utils/utils';
import Paper from '@mui/material/Paper';
interface Column {
	id: 'tokenAmount' | 'numberOfPass' | 'id';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}
const columns: readonly Column[] = [
	{
		id: 'tokenAmount',
		label: 'BURNED',
		minWidth: 80,
		format: (value: number) =>
			formatMoney(ethers.utils.formatEther(convertBigNumber(value))) + ' HEE',
	},
	{
		id: 'numberOfPass',
		label: 'REWARDS',
		minWidth: 120,
		format: (value: number) =>
			value.toString() + (value <= 1 ? ' FITTER PASS' : ' FITTER PASSES'),
	},
];
interface Data {
	tokenAmount: string;
	lockedTime: string;
	rewards: string;
	widthdraw: string | null;
}
type Props = {
	dataMyBurned: row[] | undefined;
	setStateContent: Function;
};

const HeeExchangeFillHistories = ({ dataMyBurned, setStateContent }: Props) => {
	let isCloseEvent = moment('2022-08-19T10:00:00.000Z') < moment(Date.now());
	const timeUTC = (timeStamp: number) => {
		let time = new Date(timeStamp * 1000);
		return moment(time).utc().format('DD MMMM YYYY');
	};
	const arrayDays = dataMyBurned?.map((item: row) => {
		return timeUTC(parseInt(item.timestamp.toString()));
	});
	var arrayDaysUq = arrayDays?.filter((v, i: number, a) => a.indexOf(v) === i);
	const newArrayDaysUq = arrayDaysUq?.map((time: string) => {
		const items: row[] | undefined = dataMyBurned
			?.map((e) => {
				return {
					...e,
					// stakingTime: timeUTC(parseInt(e.stakingTime.toString())),
					// lockedTime: e.lockedTime
				};
			})
			.filter((e) => timeUTC(parseInt(e.timestamp.toString())) === time);
		return {
			time,
			rows: items,
		};
	});
	const handleBurnMore = () => {
		setStateContent(StateBurnHEE.HeeExchangeFill);
	};
	const renderItem = () => {
		return newArrayDaysUq?.map((item, i) => {
			// createData()
			return (
				<Box key={i} sx={{ '&:not(:last-child)': { mb: '10px' } }}>
					<Box
						sx={{
							fontSize: '12px',
							fontWeight: '500',
							lineHeight: '18px',
							textTransform: 'uppercase',
							background: '#FFE2D3',
							display: 'inline-block',
							padding: '4px 16px',
							marginLeft: '-16px',
							color: '#FF6D24',
							zIndex: '1',
						}}
					>
						{item.time}
					</Box>
					<TableContainer>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									{columns.map((column) => (
										<TableCell
											sx={{
												fontSize: '12px',
												padding: '8px 8px',
												fontWeight: '500',
												color: '#898E9E',
											}}
											key={column.id}
											align={column.align}
											style={{ minWidth: column.minWidth }}
										>
											{column.label}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{item.rows &&
									item.rows.map((row, index) => {
										return (
											<TableRow hover role="checkbox" tabIndex={-1} key={index}>
												{columns.map((column) => {
													const value = row[column.id];
													return (
														<TableCell
															sx={{
																fontSize: '12px',
																padding: '8px 8px',
																color: '#31373E',
																fontWeight: '500',
																borderBottom: 'none',
															}}
															key={column.id}
															align={column.align}
														>
															{column.format && typeof value === 'number'
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
				</Box>
			);
		});
	};
	return (
		<Item sx={{ display: 'flex', flexDirection: 'column' }}>
			<Box
				sx={{
					height: '250px',
					ml: '-24px',
					pl: '24px',
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
					overflowY: 'auto',
				}}
			>
				{renderItem()}
			</Box>
			<Box
				sx={{
					marginTop: 'auto',
					borderTop: '1px solid #E9EAEF',
					pt: '16px',
					position: 'absolute',
					bottom: '16px',
					left: '16px',
					right: '16px',
					background: '#ffff',
				}}
			>
				<ButtonOutline
					onClick={handleBurnMore}
					disabled={isCloseEvent}
					sx={{ width: '100%' }}
					variant="text"
				>
					Burn more
				</ButtonOutline>
			</Box>
		</Item>
	);
};
const ButtonOutline = styled(Button)({
	color: '#5A6178',
	background: 'transparent',
	borderRadius: '12px',
	border: '1px solid #A7ACB8',
	// padding: "5px 5px",
	// minWidth: "35px",

	minHeight: '56px',
	textTransform: 'none',
	transition: 'all .3s',
	'&:hover': {
		background: '#FF8A50',
		border: '0px',
		color: '#fff',
	},
	':disabled': {},
});

const Item = styled(Paper)(({ theme }) => ({
	width: '360px',
	height: '350px',
	boxShadow: 'none',
	padding: '10px 16px 16px 16px',
	position: 'relative',
	'@media (max-width: 768px)': {
		width: '100%',
		marginBottom: '40px',
		borderTop: '1px solid #E9EAEF',
		height: '350px',
	},
}));

export default HeeExchangeFillHistories;
