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
	TableCellProps,
	TableRow,
	TableRowProps,
	Tabs,
	TextField,
	Typography
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { PopupMessage } from '../../components/pageComponent/claim/PopupMessage';
import { StateStaking, StateStakingLocked } from '../../const';
import { STAKING_ICON } from '../../constants/staking';
import useLockedHook from '../../libs/hooks/useLockedHook';
import lockedHook, { row } from '../../libs/hooks/useLockedHook';
import useStakingHook from '../../libs/hooks/useStakingHook';
import { formatMoney } from '../../libs/utils/utils';
import { TEXT_STYLE } from '../../styles/common/textStyles';
import { DialogsItemStaking } from './components/DialogsItemStaking';
import { DialogItemStakingLocked } from './components/stakingLocked/DialogsItemStakingLocked';

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

export const TabPools = () => {
	const [tabCurrent, setTabCurrent] = useState<number>(0);
	const [statusPopup, setStatusPopup] = useState<any>({
		status: false,
		content: <Box></Box>,
	});
	const [stateContentInit, setStateContentInit] = useState<StateStaking>(
		StateStaking.StakeProcess
	);
	const [stateContentInitLocked, setStateContentInitLocked] = useState<StateStakingLocked>(
		StateStakingLocked.LockedStakeProcess
	);
	const [isLoading, setIsLoading] = useState(false);
	const { balanceFiu,
		balanceSA,
		balanceCP,
		balanceUS,
		isEnable,
		totalStakingToken,
		claimableTime,
		remainingDelayTime,
		statusRow } = useStakingHook({
			setIsLoading,
			setStateContentInit
		})
	const { dataMyStakingLock, totalInPool } = useLockedHook({
		setIsLoading,
		setStateContentInitLocked
	})
	const [showDialogItem, setShowDialogItem] = useState<any>({
		status: false,
		title: '',
		content: <Box></Box>,
	});
	const [activeItem, setActiveItem] = useState<any>(null);
	const [activeItemLocked, setActiveItemLocked] = useState<any>(null);
	const totalFitterPassLocked = dataMyStakingLock && dataMyStakingLock?.length > 0 ? dataMyStakingLock?.reduce(
		(previousValue, currentValue: row) => previousValue + currentValue.fpNum,
		0
	) : 0;
	//status = 1: coming soon, 2: active, 3: closed
	const rows = [
		{
			name: 'Fitter Pass',
			title: 'Fitter Pass Drops - Flexible',
			status: 3,
			data: createData(
				statusRow,
				'Fitter Pass',
				balanceCP,
				'-',
				'None',
				'7 days',
				`${totalStakingToken} FIU`
			),
		},
		{
			name: 'Fitter Pass - Locked',
			title: 'Fitter Pass Drops - Locked',
			status: 2,
			data: createData(`${dataMyStakingLock && dataMyStakingLock?.length > 0 ? 'Staking' : '-'}`, 'Fitter Pass', `${totalFitterPassLocked}`, '-', '3 - 30 days', '7 days', `${totalInPool} FIU`),
		},
		{
			name: 'FIU - Shared Pool',
			title: 'FIU - Shared Pool',
			status: 1,
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
					<Typography mb={1}>3.High-yield in return, take place in 1 month</Typography>
					<Typography mb={1}>4.Unlimited number of stakers and token</Typography>
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
					<Typography mb={1}>2. Stake amount is calculated by block unit. 1 block is equivalent to 40,000 FIU </Typography>
					<Typography mb={1}>3. Minimum stake amount required is 1 block;  maximum 12 blocks</Typography>
					<Typography mb={1}>4. Minimum lock-up duration is 3 days ; maximum 30 days</Typography>
					<Typography fontWeight={600} mb={1}>
						5. Fitter Pass(es) will be immediately sent to your account right after you successfully stake.
					</Typography>
					<Typography mb={1}>
						6.Staking reward has its limit with maximum of 31 Fitter Passes per one staking action
					</Typography>
				</Box>
			),
		});
	};
	return (
		<Wrap>
			<Container sx={{ maxWidth: 1120 }}>
				<Event href={'/burn'} >
					<a

					>
						<img src="assets/staking/bannerBurn.png" width={"100%"} alt="" />
					</a>
				</Event>
				<Top sx={{ mt: 2 }}>
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
					<Box sx={{ overflowX: 'auto' }}>
						<Table sx={{ minWidth: '100%' }} aria-label="simple table">
							<TableBody sx={{ width: '100%' }}>
								{rows.map((item, index) => {
									if (tabCurrent === 1 && index !== 1 && isEnable) {
										return (
											<BoxTr
												status={item.status}
												onClick={() => {
													index === 0 && setActiveItem(index);
												}}
												key={index}
												sx={{
													'&:last-child td, &:last-child th': { borderRadius: "8px" },
													background: index === activeItem ? '#FFE2D3' : '#fff',
												}}
											>
												<TitleItem key={index}>
													<img src={STAKING_ICON.fiu} /> {item.title}{' '}
													<span
														style={{ textDecoration: 'underline' }}
														onClick={
															index === 0
																? (e: React.MouseEvent) =>
																	handleShowPopupPass(e)
																: index === 1 ? (e: React.MouseEvent) =>
																	handleShowPopupLocked(e)
																	: (e: React.MouseEvent) =>
																		handleShowPopupShared(e)
														}
													>
														How it works?
													</span>
												</TitleItem>
												{item.status !== 1 && (
													<Status
														status={item.status}
														sx={{
															top: index === 0 ? '0 !important' : 4,
														}}
													>
														{item.status === 3 ? 'closed' : 'coming soon'}
													</Status>
												)}
												<Item
													sx={{
														paddingLeft: '8px',
														borderRadiusTopleft: '12px',
													}}
													align="left"
												>
													Status <Box>{item.data.status}</Box>
												</Item>
												<Item align="left" sx={{ textTransform: 'none' }}>
													{'REWARD'}
													<Box>{item.data.reward}</Box>
												</Item>
												<Item align="left">
													{index === 1 ? 'EARNED' : "CLAIMABLE"}	 <Box>{item.data.earned}</Box>
												</Item>
												<Item align="left">
													Token remaining <Box>{item.data.tokenRemaining}</Box>
												</Item>
												<Item align="left">
													Lock-up time <Box>{item.data.lockUpTime}</Box>
												</Item>
												<Item align="left">
													Withdrawal delay time <Box>{item.data.delayTime}</Box>
												</Item>
												<Item align="left">
													Total in pool<Box>{formatMoney(item.data.total)} FIU</Box>
												</Item>
											</BoxTr>
										);
									} else if (tabCurrent === 0) {
										return (
											<BoxTr
												status={item.status}
												onClick={() => {
													index === 0 && setActiveItem(index);
													index === 1 && setActiveItemLocked(index);
													// handleShowPopupDetail(item.name, item.data)
												}}
												key={index}
												sx={{
													'&:last-child td, &:last-child th': { borderRadius: "8px" },
													background: index === activeItem ? '#FFE2D3' : '#fff',
												}}
											>
												<TitleItem key={index}>
													<img src={STAKING_ICON.fiu} /> {item.title}{' '}
													<span
														style={{ textDecoration: 'underline' }}
														onClick={
															index === 0
																? (e: React.MouseEvent) =>
																	handleShowPopupPass(e)
																: index === 1 ? (e: React.MouseEvent) =>
																	handleShowPopupLocked(e)
																	: (e: React.MouseEvent) => handleShowPopupShared(e)
														}
													>
														How it works?
													</span>
												</TitleItem>
												{item.status !== 2 && (
													<Status
														status={item.status}
														sx={{
															top: index === 0 ? '0 !important' : 4,
														}}
													>
														{item.status === 3 ? 'closed' : 'coming soon'}
													</Status>
												)}
												<Item
													sx={{
														paddingLeft: '8px',
														borderRadiusTopleft: '12px',
													}}
													align="left"
												>
													Status <Box>{item.data.status}</Box>
												</Item>
												<Item align="left" sx={{ textTransform: 'none' }}>
													{'REWARD'}
													<Box>{item.data.reward}</Box>
												</Item>
												<Item align="left">
													{index === 1 ? 'EARNED' : "CLAIMABLE"} <Box>{item.data.earned}</Box>
												</Item>
												<Item align="left">
													Token remaining <Box>{item.data.tokenRemaining}</Box>
												</Item>
												<Item align="left">
													Lock-up time <Box>{item.data.lockUpTime}</Box>
												</Item>
												<Item align="left">
													Withdrawal delay time <Box>{item.data.delayTime}</Box>
												</Item>
												<Item align="left">
													Total in pool<Box>{item.data.total ? formatMoney(item.data.total) + ' FIU' : '-'} </Box>
												</Item>
											</BoxTr>
										);
									}
								})}
							</TableBody>
						</Table>
					</Box>
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
				dataActive={rows[activeItem]}
				status={activeItem !== null}
				handleToggle={() => setActiveItem(null)}
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
				status={activeItemLocked}
				balanceFiu={balanceFiu}
				dataActive={rows[activeItemLocked]}
				handleToggle={() => setActiveItemLocked(null)}
				stateContentInit={stateContentInitLocked}
				setStateContentInit={setStateContentInit}
				dataMyStakingLock={dataMyStakingLock}
			/>
			<Backdrop sx={{ zIndex: 1100, color: '#FF6D24' }} open={isLoading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Wrap>
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

type statusProps = TableCellProps & {
	status: number;
};

const Status = styled(TableCell)((props: statusProps) => ({
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
	// '& tr': {
	//   background: '#FFFFFF',
	//   padding: 8
	// }
});
const Event = styled(Link)({
	width: "100%",
});
type itemProps = TableRowProps & {
	status: number;
};
const BoxTr = styled(TableRow)((props: itemProps) => ({
	background: '#FFFFFF',
	position: 'sticky',
	transition: 'all .3s',
	cursor: 'pointer',

	'&:hover': {
		background: props.status !== 1 ? '#FFE2D3' : 'none',
	},
}));
// const BoxTr = styled(TableRow)({
// 	background: '#FFFFFF',
// 	position: 'sticky',
// 	transition: 'all .3s',
// 	cursor: 'pointer',
// 	':hover': {
// 		background: "#FFE2D3"
// 	}
// })
const Item = styled(TableCell)({
	paddingTop: 40,
	paddingBottom: 16,
	borderBottom: '8px solid transparent',
	...TEXT_STYLE(12, 500, '#898E9E'),
	textTransform: 'uppercase',
	'& div': {
		marginTop: 8,
		...TEXT_STYLE(14, 500, '#31373E'),
	},
});
const TitleItem = styled(TableCell)({
	position: 'absolute',
	top: 0,
	borderBottom: 0,
	padding: 0,
	margin: '8px 0 0 8px',
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
const ItemDialog = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginTop: '25px',
});
const TitleItemDialog = styled(Typography)({
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
