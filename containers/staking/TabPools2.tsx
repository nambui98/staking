import {
	Backdrop,
	Box,
	CircularProgress,
	Container,
	InputAdornment,
	Stack,
	styled,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Tabs,
	TextField,
	Typography,
	TableContainer,
	TableHead,
	useMediaQuery,
	TableContainerProps
} from '@mui/material';
import { BoxProps } from '@mui/system';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { PopupMessage } from '../../components/pageComponent/claim/PopupMessage';
import { Events, StateStaking, StateStakingLocked } from '../../const';
import { STAKING_ICON } from '../../constants/staking';
import useLockedHook from '../../libs/hooks/useLockedHook';
import { row } from '../../libs/hooks/useLockedHook';
import useStakingHook from '../../libs/hooks/useStakingHook';
import { formatMoney } from '../../libs/utils/utils';
import { TEXT_STYLE } from '../../styles/common/textStyles';
import { DialogsItemStaking } from './components/DialogsItemStaking';
import { DialogItemStakingLocked } from './components/stakingLocked/DialogsItemStakingLocked';
import useStakeFlexibleHook from '../../libs/hooks/useStakeFlexibleHook ';
import { approveStakingFiu, claimReward, stake, unStake, withDraw } from '../../libs/staking';
import { approveFlexible2, claimRewardFlexible2, stakeFlexible2, unStakeFlexible2, withDrawFlexible2 } from '../../libs/flexible2';

function createData(
	status: string,
	reward: string,
	earned: string,
	tokenRemaining: string,
	lockUpTime: string,
	delayTime: string,
	total: string
) {
	return {
		status,
		reward,
		earned,
		tokenRemaining,
		lockUpTime,
		delayTime,
		total,
	};
}

export const TabPools2 = () => {
	const [tabCurrent, setTabCurrent] = useState<number>(0);
	const [statusPopup, setStatusPopup] = useState<any>({
		status: false,
		content: <Box></Box>,
	});
	const isMobile = useMediaQuery('(max-width: 767px)');
	const [stateContentInit, setStateContentInit] = useState<StateStaking>(
		StateStaking.StakeProcess
	);
	const [stateContentInitFlexible2, setStateContentInitFlexible2] = useState<StateStaking>(
		StateStaking.StakeProcess
	);
	const [stateContentInitLocked, setStateContentInitLocked] =
		useState<StateStakingLocked>(StateStakingLocked.LockedStakeProcess);
	const [isLoading, setIsLoading] = useState(false);
	const {
		balanceFiu,
		balanceSA,
		balanceCP,
		balanceUS,
		isEnable,
		totalStakingToken,
		claimableTime,
		remainingDelayTime,
		statusRow,
	} = useStakingHook({
		setIsLoading,
		setStateContentInit,
	});
	const {
		balanceFiuFlexible2,
		balanceSAFlexible2,
		balanceCPFlexible2,
		balanceUSFlexible2,
		isEnableFlexible2,
		totalStakingTokenFlexible2,
		claimableTimeFlexible2,
		remainingDelayTimeFlexible2,
		statusRowFlexible2,
	} = useStakeFlexibleHook({
		setIsLoading,
		setStateContentInitFlexible2,
	});
	console.log(statusRowFlexible2);
	const { dataMyStakingLock, totalInPool } = useLockedHook({
		setIsLoading,
		setStateContentInitLocked,
	});
	const [showDialogItem, setShowDialogItem] = useState<any>({
		status: false,
		title: '',
		content: <Box></Box>,
	});
	const [eventActive, setEventActive] = useState<Events | null>(null);
	// const [activeItemLocked, setActiveItemLocked] = useState<any>(null);
	const totalFitterPassLocked =
		dataMyStakingLock && dataMyStakingLock?.length > 0
			? dataMyStakingLock?.reduce(
				(previousValue, currentValue: row) =>
					previousValue + currentValue.fpNum,
				0
			)
			: 0;
	//status = 1: coming soon, 2: active, 3: closed
	const rows = [
		{
			name: 'Fitter Pass',
			title: 'Fitter Pass Drops  - Flexible Season II',
			status: 2,
			statusAction: 1,
			token: 'FIU',
			howItWork: (e: React.MouseEvent) => handleShowFlexible2(e),
			onClick: () => setEventActive(Events.Flexible2),
			typeEvent: Events.Flexible2,
			info: {
				startTime: '16:00 UTC 29/08/2022',
				endTime: '16:00 UTC 19/09/2022',
				reward: 'Fitter Pass',
				stakeMinAmount: 4000,
				stakeMaxAmount: '-',
				approveFiu: approveFlexible2,
				stake: stakeFlexible2,
				unStake: unStakeFlexible2,
				withDraw: withDrawFlexible2,
				claimReward: claimRewardFlexible2,
				cost: '25%'
			},
			data: createData(
				statusRowFlexible2,
				'Fitter Pass',
				balanceCPFlexible2,
				'-',
				'None',
				'7 days',
				`${formatMoney(totalStakingTokenFlexible2)} FIU`
			),
		},
		{
			name: 'Fitter Pass',
			title: 'Fitter Pass Drops - Flexible',
			status: 3,
			statusAction: 1,
			token: 'FIU',
			howItWork: (e: React.MouseEvent) => handleShowPopupPass(e),
			onClick: () => setEventActive(Events.Flexible),
			typeEvent: Events.Flexible,
			info: {
				startTime: '16:00 UTC 19/07/2022',
				endTime: '16:00 UTC 03/08/2022',
				reward: 'Fitter Pass',
				stakeMinAmount: 4000,
				stakeMaxAmount: '-',
				approveFiu: approveStakingFiu,
				stake: stake,
				unStake: unStake,
				withDraw: withDraw,
				claimReward: claimReward,
				cost: '16%'
			},
			data: createData(
				statusRow,
				'Fitter Pass',
				balanceCP,
				'-',
				'None',
				'7 days',
				`${formatMoney(totalStakingToken)} FIU`
			),
		},
		{
			name: 'Fitter Pass - Locked',
			title: 'Fitter Pass Drops - Locked',
			status: 3,
			statusAction: 1,
			token: 'FIU',
			howItWork: (e: React.MouseEvent) => handleShowPopupLocked(e),
			onClick: () => setEventActive(Events.Locked),
			typeEvent: Events.Locked,
			data: createData(
				`${dataMyStakingLock && dataMyStakingLock?.length > 0 ? 'Staking' : '-'
				}`,
				'Fitter Pass',
				`${totalFitterPassLocked}`,
				'-',
				'3 - 30 days',
				'7 days',
				`${formatMoney(totalInPool)} FIU`
			),
		},
		{
			name: 'FIU - Shared Pool',
			title: 'FIU - Shared Pool',
			token: 'FIU',
			status: 1,
			statusAction: 2,
			howItWork: (e: React.MouseEvent) => handleShowPopupShared(e),
			onClick: null,
			data: createData('-', '-', '-', '-', '-', '-', ''),
		},
	];

	const handleShowPopupPass = (e: React.MouseEvent) => {
		e.stopPropagation();
		setStatusPopup({
			status: true,
			content: (
				<Box>
					<Typography mb={1}>
						<b>Fitter Pass:</b>
					</Typography>

					<Typography mb={1}>1.Stake FIU, minimum 4000 FIU.</Typography>

					<Typography mb={1}>2.Earn Fitter Pass.</Typography>

					<Typography mb={1}>
						3.You have to stake at least 24h to receive Pass.
					</Typography>

					<Typography mb={1}>
						4.Fitter Pass will be given to your account in every block of 24h
						from the last moment you stake/unstake
					</Typography>

					<Typography mb={1}>
						5.For every 4000 FIU staked per 240h, you earn one Fitter Pass.
					</Typography>

					<Typography mb={1}>
						For every 40.000 FIU staked per 24h, you earn one Fitter Pass.
					</Typography>

					<Typography mb={1}>
						For every 80.000 FIU staked per 24h, you earn 2 Fitter Passes,....
					</Typography>

					<Typography mb={1}>
						The more token you stake, the more reward you will receive.
					</Typography>

					<Typography mb={1}>
						6.Specially, in the first 72 hours from this campaign begin, the
						reward will be doubled.
					</Typography>

					<Typography mb={1}>
						Ex: With 20.000 FIU staked per 24h, you earn 1 Fitter Passes.
					</Typography>

					<Typography mb={1}>
						7.Staking does have a short cooldown period of 7days, meaning once
						you want to exit, you have to wait 7days.
					</Typography>

					<Typography mb={1}>
						<b>Important note:</b> If you change your stake amount (stake more
						or partical unstake ), system will recalculate 24h period from that
						time and amount. Finished rewards will remain but fractional staking
						rewards will be cleared.
					</Typography>
				</Box>
			),
		});
	};
	const handleShowFlexible2 = (e: React.MouseEvent) => {
		e.stopPropagation();
		setStatusPopup({
			status: true,
			content: (
				<Box>
					<Typography mb={1}>
						<b>Stake FIU - Earn Fitter Pass: </b>
					</Typography>
					<ItemHowItWord>
						<Typography mb={1}>1.</Typography>
						<Typography mb={1} ml={1}>
							Stake FIU, minimum 4000 FIU - maximum 40.000 FIU
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>2.</Typography>
						<Typography mb={1} ml={1}>
							Earn Fitter Pass.
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>3.</Typography>
						<Typography mb={1} ml={1}>
							You have to stake at least 24h to receive Fitter Pass.
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>4.</Typography>
						<Typography mb={1} ml={1}>
							Fitter Pass will be sent to your account in every block of 24h from the last moment you stake/unstake
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>5.</Typography>
						<Typography mb={1} ml={1}>
							For every 4.000 FIU staked per 240h, you earn one Fitter Pass.
							<br />
							For every 40.000 FIU staked per 24h, you earn one Fitter Pass.
							<br />
							For every 80.000 FIU staked per 24h, you earn 2 Fitter Passes,....
							<br />
							The more token you stake, the more reward you will receiv
							<br />
							Please make sure that the total amount of tokens you stake is enough to earn at least a Fitter Pass before this pool is closed.
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>6.</Typography>
						<Typography mb={1} ml={1}>
							Staking does have a short cooldown period of 7days, meaning once you want to exit, you have to wait 7days.
						</Typography>
					</ItemHowItWord>
					<Typography mb={1}>
						<b>Important note: </b> If you change your stake amount (stake more or partial unstake ), system will recalculate 24h period from that time and amount. Finished rewards will remain but fractional staking rewards will be cleared.
					</Typography>
				</Box>
			),
		});

	};

	const handleShowPopupShared = (e: React.MouseEvent) => {
		e.stopPropagation();
		setStatusPopup({
			status: true,
			content: (
				<Box>
					<Typography mb={1}>
						<b>Shared Pool: </b>
					</Typography>
					<Typography mb={1}>1.Stake FIU, minimum 1000 FIU.</Typography>
					<Typography mb={1}>2.Earn FIU</Typography>
					<Typography mb={1}>
						3.High-yield in return, take place in 1 month
					</Typography>
					<Typography mb={1}>
						4.Unlimited number of stakers and token
					</Typography>
					<Typography mb={1}>
						5.In the first 3 days from this campaign begin, you have chance to
						get double the reward.
					</Typography>
					<Typography mb={1}>
						6.Staking does have a short cooldown period of 14 days, meaning once
						you want to exit, you have to wait 14 days.
					</Typography>
				</Box>
			),
		});
	};
	const handleShowPopupLocked = (e: React.MouseEvent) => {
		e.stopPropagation();
		setStatusPopup({
			status: true,
			content: (
				<Box>
					<Typography mb={1}>
						<b>Fitter Pass - Locked: </b>
					</Typography>
					<Typography mb={1}>1. Stake FIU - Earn Fitter Pass</Typography>
					<Typography mb={1}>
						2. Stake amount is calculated by block unit. 1 block is equivalent
						to 40,000 FIU{' '}
					</Typography>
					<Typography mb={1}>
						3. Minimum stake amount required is 1 block; maximum 12 blocks
					</Typography>
					<Typography mb={1}>
						4. Minimum lock-up duration is 3 days ; maximum 30 days
					</Typography>
					<Typography fontWeight={600} mb={1}>
						5. Fitter Pass(es) will be immediately sent to your account right
						after you successfully stake.
					</Typography>
					<Typography mb={1}>
						6.Staking reward has its limit with maximum of 31 Fitter Passes per
						one staking action
					</Typography>
				</Box>
			),
		});
	};

	return (
		<Wrap>
			<Container sx={{ maxWidth: 1120 }}>
				<Top>
					<BoxTabs value={tabCurrent}>
						<TabItem
							className={tabCurrent === 0 ? 'Mui-selected' : ''}
							label="All pools"
							onClick={() => setTabCurrent(0)}
						/>
						<TabItem
							className={tabCurrent === 1 ? 'Mui-selected' : ''}
							label="My pool"
							onClick={() => setTabCurrent(1)}
						/>
					</BoxTabs>
					<Search
						placeholder="Search pool..."
						InputProps={{
							endAdornment: (
								<InputAdornment position="start">
									<img src={STAKING_ICON.search} />
								</InputAdornment>
							),
						}}
					/>
				</Top>
				<Body>
					{rows.map((item, index) => {
						return (
							<Box key={index} sx={{ overflowX: 'auto', borderRadius: '16px', mt: index != 0 ? '20px' : '0px', }}>
								<Box
									onClick={item.onClick ? item.onClick : () => { }}
									sx={{ position: 'relative', backgroundColor: 'white' }}
								>
									<BoxWrapper
										statusAction={item.statusAction}
									>

										<Box>
											<TableContainerCus component={Paper}>
												<Table
													sx={{ minWidth: 1020 }}
													aria-label="simple table"
												>
													<TableHead>
														<TableRow>
															<TableCell width={'70px'} sx={{ paddingLeft: 0 }}>Status</TableCell>
															<TableCell width={'140px'} align="left">Reward</TableCell>
															<TableCell width={'140px'} align="left">{item.name === "Fitter Pass" ? 'CLAIMABLE' : 'Earned'}</TableCell>
															<TableCell width={'150px'} align="left">
																Token remaining
															</TableCell>
															<TableCell width={'130px'} align="left">Lock-up time</TableCell>
															<TableCell width={'200px'} align="left">
																Withdrawal delay time
															</TableCell>
															<TableCell align="left">
																Total IN POOL
															</TableCell>
														</TableRow>
													</TableHead>
													<TableBody>
														<TableRow
															sx={{
																'&:last-child td, &:last-child th': {
																	border: 0,
																},
															}}
														>
															<TableCell width={'70px'} sx={{ paddingLeft: 0 }} component="th" scope="row">
																{item.data.status}
															</TableCell>
															<TableCell width={'140px'} align="left">
																{item.data.reward}
															</TableCell>
															<TableCell width={'140px'} align="left">{item.data.earned}</TableCell>
															<TableCell width={'150px'} align="left">{item.data.tokenRemaining}</TableCell>
															<TableCell width={'130px'} align="left">{item.data.lockUpTime}</TableCell>
															<TableCell width={'200px'} align="left">{item.data.delayTime}</TableCell>
															<TableCell width={'200px'} align="left">
																{item.data.total}
															</TableCell>
														</TableRow>

													</TableBody>
												</Table>
												<TitleItem2 key={index}>
													<img src={item.token === "FIU" ? STAKING_ICON.fiu : STAKING_ICON.hee} />
													<h5
														style={{
															...TEXT_STYLE(16, 600, '#31373E'),
															width: isMobile ? '100px' : 'auto',
															whiteSpace: 'nowrap',
															overflow: 'hidden',
															textOverflow: 'ellipsis'
														}}
													>

														{item.title}{' '}
													</h5>
													<span
														style={{
															textDecoration: 'underline'
														}}
														onClick={item.howItWork}
													>
														How it works?
													</span>
												</TitleItem2>
												{item.status !== 2 && (
													<Status
														status={item.status}
														sx={{
															top: 4,
														}}
													>
														{item.status === 3 ? 'closed' : 'coming soon'}
													</Status>
												)}
											</TableContainerCus>
										</Box>

									</BoxWrapper>
								</Box>
							</Box>
						);
					})}
				</Body>
			</Container>
			<PopupMessage
				title="How it works?"
				status={statusPopup.status}
				titleButton="I understand"
				handleToggleStatus={() =>
					setStatusPopup({ ...statusPopup, status: false })
				}
				sx={customWidthPopup}
				handleClickButton={() =>
					setStatusPopup({ ...statusPopup, status: false })
				}
				message={<BodyPopup>{statusPopup.content}</BodyPopup>}
			/>

			<DialogsItemStaking
				isEnable={isEnable}
				stateContentInit={stateContentInit}
				dataActive={rows.find((e) => e.typeEvent === eventActive)}
				status={eventActive && eventActive === Events.Flexible ? true : false}
				handleToggle={() => setEventActive(null)}
				title={showDialogItem.title}
				content={showDialogItem.content}
				balanceFiu={balanceFiu}
				balanceSA={balanceSA}
				balanceCP={balanceCP}
				balanceUS={balanceUS}
				totalStakingToken={totalStakingToken}
				claimableTime={claimableTime}
				remainingDelayTime={remainingDelayTime}
				setStateContentInit={setStateContentInit}
			></DialogsItemStaking>
			<DialogItemStakingLocked
				status={eventActive && eventActive === Events.Locked ? true : false}
				balanceFiu={balanceFiu}
				dataActive={rows.find((e) => e.typeEvent === eventActive)}
				handleToggle={() => setEventActive(null)}
				stateContentInit={stateContentInitLocked}
				setStateContentInit={setStateContentInit}
				dataMyStakingLock={dataMyStakingLock}
			/>

			<DialogsItemStaking
				isEnable={isEnableFlexible2}
				stateContentInit={stateContentInitFlexible2}
				dataActive={rows.find((e) => e.typeEvent === eventActive)}
				status={eventActive && eventActive === Events.Flexible2 ? true : false}
				handleToggle={() => setEventActive(null)}
				title={showDialogItem.title}
				content={showDialogItem.content}
				balanceFiu={balanceFiuFlexible2}
				balanceSA={balanceSAFlexible2}
				balanceCP={balanceCPFlexible2}
				balanceUS={balanceUSFlexible2}
				totalStakingToken={totalStakingTokenFlexible2}
				claimableTime={claimableTimeFlexible2}
				remainingDelayTime={remainingDelayTimeFlexible2}
				setStateContentInit={setStateContentInitFlexible2}
			></DialogsItemStaking>
			<Backdrop sx={{ zIndex: 1100, color: '#FF6D24' }} open={isLoading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Wrap >
	);
};

const Wrap = styled(Stack)({});
const customWidthPopup = {
	padding: '0px 16px 0px 16px',
	margin: '16px 0px 16px 0px',
	'@media (min-width: 650px)': {
		width: '541px !important',
		padding: '0px 24px 0px 24px',
		margin: '24px 0px 24px 0px',
	},
	'@media (max-height: 720px)': {
		overflowY: 'auto',
		height: 'calc(100vh - 32px)',
	},
};
const BodyPopup = styled(Box)({
	'& p': {
		lineHeight: '24px',
		textAlign: 'left',
	},
	'& b': {
		color: '#31373E',
	},
});

type statusProps = BoxProps & {
	status: number;
};

const Status = styled(Box)((props: statusProps) => ({
	position: 'absolute',
	top: 4,
	right: 0,
	padding: 8,
	borderRadius: '10px',
	background: props.status === 1 ? '#FFC83A' : '#5A6178',
	textTransform: 'uppercase',
	...TEXT_STYLE(12, 600, props.status === 1 ? '#31373E' : '#fff'),
}));

const Top = styled(Box)({
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: 16,
	'@media (min-width: 768px)': {
		display: 'flex',
	},
});
const Search = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		padding: '8px 16px',
		background: '#E9EAEF',
		borderRadius: 8,
		width: 320,
		height: 40,
	},
	'& input': {
		padding: 0,
		...TEXT_STYLE(14, 500, '#A7ACB8'),
	},
	'& fieldset': { display: 'none' },
	'@media (max-width: 767px)': {
		width: '100%',
		'& .MuiOutlinedInput-root': {
			width: '100%',
			height: 35,
		},
	},
});
const TabItem = styled(Tab)({
	...TEXT_STYLE(14, 500, '#5A6178'),
	padding: '8px 16px',
	borderRadius: 18,
	'&.Mui-selected': {
		background: '#FFE2D3',
		color: '#FF6D24',
	},
});
const BoxTabs = styled(Tabs)({
	'& .MuiTabs-indicator': {
		display: 'none',
	},
	'@media (max-width: 767px)': {
		marginBottom: 10,
	},
});
const Body = styled(Box)({
	padding: 16,
	background: '#F8F9FB',
	borderRadius: 16,
	marginBottom: 24,
});

type accordionProps = BoxProps & {
	statusAction: number;
};

const BoxWrapper = styled((props: accordionProps) => (
	<Box
		{...props}
	/>
))(({ theme, statusAction }) => ({
	display: 'flex',
	flexDirection: 'column',
	overflowX: 'auto',
	width: '100%',
	height: '140px',
	'&:hover': {
		backgroundColor: statusAction === 2 ? 'none' : '#FFE2D3',
	},
	padding: '16px',
	overflow: 'hidden',
	cursor: statusAction === 2 ? 'auto !important' : 'pointer',
}));
type tableContainerProps = TableContainerProps & {
	component: any;
};
const TableContainerCus = styled(TableContainer)(
	(props: tableContainerProps) => ({
		background: 'transparent',
		boxShadow: 'none',
		marginTop: '20px',
		'& .MuiTableHead-root': {
			'& .MuiTableCell-root': {
				border: 'none',
				color: '#898E9E',
				fontFamily: 'BeVietnamPro',
				fontWeight: 500,
				fontSize: '12px',
				textTransform: 'uppercase',
			},
		},
		'& .MuiTableBody-root': {
			'& .MuiTableCell-root': {
				paddingTop: '0px',
				border: 'none',
				color: '#31373E',
				fontFamily: 'BeVietnamPro',
				fontWeight: 500,
				fontSize: '14px',
			},
		},
	})
);
const TitleItem2 = styled(Box)({
	position: 'absolute',
	top: 0,
	borderBottom: 0,
	padding: 0,
	margin: '16px 0 0 0px',
	display: 'flex',
	alignItems: 'center',
	...TEXT_STYLE(16, 600, '#31373E'),
	'& img': {
		marginRight: 8,
	},
	'& span': {
		...TEXT_STYLE(12, 500, '#55C8FC'),
		marginLeft: 8,
		cursor: 'pointer',
	},
});
const ItemHowItWord = styled(Box)({
	display: 'flex',
	alignItems: 'flex-start',
	color: '#31373E',
	fontWeight: '500',
	fontSize: '14px',
	'& > p:first-child': {
		paddingRight: '8px',
		width: '14px',
	},
	'& p': {
		color: '#5A6178',
	},
});