import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { ethers } from 'ethers';
import moment from 'moment';
import React, { useState } from 'react';
import { MarketplaceButton } from '../../../../components/buttons/MarketplaceButton';
import { StateStaking, StateStakingLocked } from '../../../../const';
import { useWalletContext } from '../../../../contexts/WalletContext';
import { convertBigNumber, row } from '../../../../libs/hooks/lockedHook';
import { claimReward } from '../../../../libs/staking';
import { formatMoney } from '../../../../libs/utils/utils';

type Props = {
	setStateContent: Function;
	handleClickSuccess: Function;
	handleClickError: Function;
	// handleClickWarning: Function;
	balanceFiu: string;
	// balanceSA: string;
	// balanceCP: string;
	// balanceUS: string;
	// claimableTime: string;
	setIsLoading: Function;
	setRow: Function;
	dataMyStakingLock: row[] | undefined
};

const arrJuly = ['2nd July 2022', '3rd July 2022'];

const arrTitleStakingLocked = ['STAKING', 'Lock Duration', 'Rewards'];


interface Column {
	id: 'tokenAmount' | 'lockedTime' | 'fpNum' | 'sId' | 'stakingTime' | 'widthdraw';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}
const columns: readonly Column[] = [
	{
		id: 'tokenAmount',
		label: 'STAKING',
		minWidth: 70,
		format: (value: number) => formatMoney(ethers.utils.formatEther(convertBigNumber(value))) + ' FIU',
	},
	{
		id: 'lockedTime',
		label: 'LOCK DURATION',
		minWidth: 120,
		format: (value: number) => {
			let lockDuration = value / 60 / 60 / 24;
			return lockDuration.toString().length < 3 ? lockDuration.toString() : lockDuration.toFixed(4) + ' DAYS';
		}
	},
	{
		id: 'fpNum',
		label: 'REWARDS',
		minWidth: 120,
		format: (value: number) => value.toString() + (value <= 1 ? ' FITTER PASS' : ' FITTER PASSES')
	},
	{ id: 'widthdraw', label: '' },
];
interface Data {
	tokenAmount: string;
	lockedTime: string;
	rewards: string;
	widthdraw: string | null
}

function createData(
	tokenAmount: string,
	lockedTime: string,
	rewards: string,
	widthdraw: string | null,

): Data {
	return {
		tokenAmount,
		lockedTime,
		rewards,
		widthdraw
	};
}

export const LockedList = (props: Props) => {
	const {
		setStateContent,
		handleClickSuccess,
		handleClickError,
		setIsLoading,
		dataMyStakingLock,
		setRow
	} = props;
	const { ethersSigner, ethersProvider, setRefresh, refresh } =
		useWalletContext();

	const timeUTC = (timeStamp: number) => {
		let time = new Date(timeStamp * 1000);
		return moment(time).utc().format('DD MMMM YYYY');
	}
	const arrayDays = dataMyStakingLock?.map((item: row) => {
		return timeUTC(parseInt(item.stakingTime.toString()))
	})
	var arrayDaysUq = arrayDays?.filter((v, i: number, a) => a.indexOf(v) === i);
	const newArrayDaysUq = arrayDaysUq?.map((time: string) => {
		const items: row[] | undefined = dataMyStakingLock?.map((e) => {
			return {
				...e,
				// stakingTime: timeUTC(parseInt(e.stakingTime.toString())),
				// lockedTime: e.lockedTime 
			}
		}).filter(e => timeUTC(parseInt(e.stakingTime.toString())) === time);
		return {
			time,
			rows: items
		}
	})

	const handleWithDraw = (row: row) => {
		setRow(row);
		setStateContent(StateStakingLocked.WithDraw);
	};


	const handleStakeMore = () => {
		setStateContent(StateStakingLocked.LockedStakeProcess);
	};
	const renderItem = () => {
		return newArrayDaysUq?.map((item, i) => {
			// createData()
			return (
				<Box key={i} sx={{ mt: '24px' }}>
					<Box
						sx={{
							fontSize: '12px',
							fontWeight: '500',
							lineHeight: '18px',
							textTransform: 'uppercase',
							background: '#FFE2D3',
							display: 'inline-block',
							padding: '4px 16px',
							marginLeft: '-24px',
							color: "#FF6D24"
						}}
					>
						{item.time}
					</Box>
					<TableContainer >
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									{columns.map((column) => (
										<TableCell
											sx={{ fontSize: '12px', padding: '8px 8px', fontWeight: '500', color: '#898E9E' }}
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
								{item.rows && item.rows
									.map((row, index) => {
										return (
											<TableRow hover role="checkbox" tabIndex={-1} key={index}>
												{columns.map((column) => {
													if (column.id == 'widthdraw') {
														if (!row.withdrawn) {

															return <TableCell onClick={() => handleWithDraw(row)} sx={{ fontSize: '12px', color: "#55C8FC", padding: '8px 8px', borderBottom: 'none', cursor: 'pointer' }} key={column.id} align={column.align}>
																Withdraw
															</TableCell>
														} else {
															return <TableCell sx={{ fontSize: '12px', color: '#898E9E', padding: '8px 8px', borderBottom: 'none' }} key={column.id} align={column.align}>
																Withdrawn
															</TableCell>
														}
													} else {

														const value = row[column.id];
														return (
															<TableCell sx={{ fontSize: '12px', padding: '8px 8px', color: '#31373E', fontWeight: '500', borderBottom: 'none' }} key={column.id} align={column.align}>
																{column.format && typeof value === 'number'
																	? column.format(value)
																	: value}
															</TableCell>
														);
													}
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
		<Box sx={{ height: "465px" }}>
			<ButtonOutline
				onClick={handleStakeMore}
				sx={{ marginTop: '25px', width: "100%" }}
				variant="text"
			>
				Stake more
			</ButtonOutline>
			{renderItem()}
		</Box>
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
const Item = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginTop: '25px',
	'@media (max-width: 650px)': {
		marginRight: '-16px !important',
		marginLeft: '-16px !important',
	},
});
