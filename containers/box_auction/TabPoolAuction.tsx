import {
	Backdrop,
	Box,
	BoxProps,
	Button,
	CircularProgress,
	Container,
	InputAdornment, Stack,
	styled,
	Tab,
	Table,
	TableBody,
	TableCell, TableContainer,
	TableContainerProps,
	TableHead,
	TableRow,
	TableRowProps,
	Tabs,
	TextField,
	Typography,
	useMediaQuery
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { PopupMessage } from '../../components/pageComponent/claim/PopupMessage';
import { StateBurnHEE } from '../../const';
import { STAKING_ICON } from '../../constants/staking';
import { formatMoney } from '../../libs/utils/utils';
import { TEXT_STYLE } from '../../styles/common/textStyles';
import { ShowAction } from './components/ShowAction';

import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
	AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import { configBurnHEE } from '../../libs/burnHee';
import useBurnHeeHook from '../../libs/hooks/useBurnHeeHook';
import useBurnHook from '../../libs/hooks/useBurnHook';
import DialogBurnHee from './burnHee/DialogBurnHee';
import { DialogLeaderBoard } from './components/DialogLeaderBoard';
import moment from 'moment';



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

export const TabPoolAuction = () => {
	const [tabCurrent, setTabCurrent] = useState<number>(0);
	const [showInsideBox, setShowInsideBox] = useState<boolean>(false);
	const [showLeaderBoard, setShowLeaderBoard] = useState<boolean>(false);
	const [showBurnHee, setShowBurnHee] = useState<boolean>(false);
	const [statusPopup, setStatusPopup] = useState<any>({
		status: false,
		content: <Box></Box>,
	});
	const [stateContentBurnInit, setStateContentBurnInit] =
		useState<StateBurnHEE | null>(StateBurnHEE.HeeExchange);
	const [isLoading, setIsLoading] = useState(false);
	const isMobile = useMediaQuery('(max-width: 767px)');
	const {
		totalStake,
		balanceFT,
		numberBurned,
		isApproved,
		isRegister,
		statusRow,
	} = useBurnHook({
		setIsLoading,
	});
	const {
		dataMyBurned,
		totalInPool,
		balanceHee,
		earned,
		isApprovedBurn,
		allowance,

	} = useBurnHeeHook({
		setIsLoading,
		setStateContent: setStateContentBurnInit,
	});

	const [expanded, setExpanded] = useState<string | false>(false);
	console.log(moment('2022-08-19T06:56:00.000Z') < moment(Date.now()));

	const rows = [
		{
			name: 'Fitter Pass',
			token: 'FIU',
			title: 'Box Auction',
			status: moment('2022-08-19T09:00:00.000Z') >= moment(Date.now()) ? 2 : 3,//1 coming soon, 2: open, 3: closed
			endTime: '2022-08-19T09:00:00.000Z',
			statusAction: 1,//1 open, 2 close
			howItWork: (e: React.MouseEvent) => handleShowBurn(e),
			onClick: () => handleChangeTab('BOX-AUCTION'),
			data: createData(
				statusRow,
				'Mystery Box',
				'0',
				'-',
				'None',
				'None',
				`${totalStake} Fitter Passes`
			),
		},
		{
			name: 'Burn hee',
			token: 'HEE',
			title: 'HEE Exchange - Win Fitter Pass',
			status: moment('2022-08-19T10:00:00.000Z') >= moment(Date.now()) ? 2 : 3,
			endTime: '2022-08-19T10:00:00.000Z',
			statusAction: moment('2022-08-19T10:00:00.000Z') >= moment(Date.now()) ? 1 : 2,
			howItWork: (e: React.MouseEvent) => handleShowBurnHee(e),
			onClick: () => handleChangeTab('HEE'),
			data: createData(
				parseInt(earned) > 0 ? 'Joined' : '-',
				'Fitter Pass',
				`${parseInt(earned) > 0 ? earned + ' Fitter Passes' : '0 Fitter Pass'} `,
				'-',
				'None',
				'None',
				`${totalInPool} HEE`
			),
		}
	];

	const handleChangeTab =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	const handleShowBurn = (e: React.MouseEvent) => {
		e.stopPropagation();
		setStatusPopup({
			status: true,
			content: (
				<Box>
					<ItemHowItWord>
						<Typography mb={1}>1.</Typography>
						<Typography mb={1} ml={1}>
							Burn Fitter Pass - Get Diamond and Gold Genesis NFT Box
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>2.</Typography>
						<Typography mb={1} ml={1}>
							You are required to burn 2 Fitter Passes to participate for the
							very first time
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>3.</Typography>
						<Typography mb={1} ml={1}>
							The top 50 ranked participants who burn the largest number of
							Fitter Passes will each receive a Genesis NFT Box with estimated
							price no less than $500.
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>4.</Typography>
						<Typography mb={1} ml={1}>
							Event takes place in 12 days ( Aug 06 - Aug 19)
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>5.</Typography>
						<Typography mb={1} ml={1}>
							After this time, winner list will be determined.
							<br />
							Top 1-10: get 1 Diamond Box/each
							<br />
							Top 11-50: get 1 Gold Box/each
							<br />
							All Fitter Passes from this winner list will be burned
							<br />
							Participants who are not named in this list will get their Fitter
							Passes back, excluding the 2-Fitter Pass participation fee
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>6.</Typography>
						<Typography mb={1} ml={1}>
							Reward and refund will be paid to users after event is closed
						</Typography>
					</ItemHowItWord>
				</Box>
			),
		});
	};
	const handleShowBurnHee = (e: React.MouseEvent) => {
		e.stopPropagation();
		setStatusPopup({
			status: true,
			content: (
				<Box>
					<Typography
						mb={1}
						fontSize={{ xs: '16px', sm: '16px' }}
						fontWeight={600}
					>
						HEE EXCHANGE - WIN FITTER PASS (Aug 10 - Aug 19)
					</Typography>
					<Typography mb={1}>
						Easiest way to get your own powerful NFT item - Fitter Pass
					</Typography>
					<ItemHowItWord>
						<Typography mb={1}>1.</Typography>
						<Typography mb={1} ml={1}>
							Burn HEE - Get Fitter Pass
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>2.</Typography>
						<Typography mb={1} ml={1}>
							{formatMoney(configBurnHEE.exchange.toString())} HEE is equivalent
							to 1 Fitter Pass
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>3.</Typography>
						<Typography
							mb={1}
							ml={1}
							color="#31373E !important"
							fontWeight={600}
						>
							Fitter Pass(es) will be immediately sent to your account right
							after you successfully confirm.
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>4.</Typography>
						<Typography mb={1} ml={1}>
							Unlimited burning amount. The more you burn, the more you earn.
						</Typography>
					</ItemHowItWord>
					<ItemHowItWord>
						<Typography mb={1}>5.</Typography>
						<Typography mb={1} ml={1}>
							Use Fitter Pass(es) to participate in Box Auction events or other
							upcoming special campaign/features/...
						</Typography>
					</ItemHowItWord>
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
								<Accordion
									expanded={item.name === "Burn hee" ? expanded === "HEE" : expanded === 'BOX-AUCTION'}
									onChange={item.statusAction === 1 ? item.onClick() : () => { }}
								>

									<AccordionSummary
										statusAction={item.statusAction}
										aria-controls="panel1d-content"
										id="panel1d-header"
										key={index}
										sx={{
											height: item.title === 'Box Auction' ? '180px' : (isMobile ? '180px' : '140px'),
											paddingBottom: '50px',
											// display: 'flex',
											// flexDirection: 'column',
											overflowX: 'auto',
											'@media (max-width: 767px)': {
												// width: '0px',
												' .MuiAccordionSummary-content': {
													width: '0px',
												},
											},
										}}
									>
										<Box
											sx={{
												display: 'flex',
												flexDirection: 'column',
												overflowX: 'auto',
												width: '100%',
											}}
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
																<TableCell width={'140px'} align="left">Earned</TableCell>
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
																	{statusRow}
																</TableCell>
																<TableCell width={'140px'} align="left">
																	{item.data.reward}
																</TableCell>
																<TableCell width={'140px'} align="left">{item.data.earned}</TableCell>
																<TableCell width={'150px'} align="left">{item.data.tokenRemaining}</TableCell>
																<TableCell width={'130px'} align="left">{item.data.lockUpTime}</TableCell>
																<TableCell width={'200px'} align="left">{item.data.delayTime}</TableCell>
																<TableCell width={'200px'} align="left">
																	{parseInt(item.data.total) > 0
																		? formatMoney(item.data.total) +
																		' Fitter Passes'
																		: '0 Fitter Pass'}{' '}
																</TableCell>
															</TableRow>

														</TableBody>
													</Table>
													<TitleItem key={index}>
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
													</TitleItem>
													{
														item.status === 3 &&
														<Status
															status={item.status}
														>
															closed
														</Status>
													}
												</TableContainerCus>
											</Box>
											{
												item.title === 'Box Auction' &&
												<Box>
													<ButtonOutline
														onClick={(e: React.MouseEvent) => {
															e.stopPropagation();
															setShowLeaderBoard(true);
														}}
														sx={{ width: '150px', maxHeight: '28px' }}
														variant="text"
													>
														View Leaderboard
													</ButtonOutline>
												</Box>
											}
										</Box>
									</AccordionSummary>
									{
										item.token === "FIU" ? <AccordionDetails>
											<ShowAction
												isApproved={isApproved}
												isRegister={isRegister}
												balanceFT={balanceFT}
												numberBurned={numberBurned}
											></ShowAction>
										</AccordionDetails> : <AccordionDetails>
											<DialogBurnHee
												status={showBurnHee}
												stateContentBurnInit={stateContentBurnInit}
												dataMyBurned={dataMyBurned}
												totalInPool={totalInPool}
												balanceHee={balanceHee}
												earned={earned}
												isApproved={isApprovedBurn}
												allowance={allowance}
												handleToggle={() => {
													setShowBurnHee(false);
												}}
											/>
										</AccordionDetails>
									}

								</Accordion>
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
			<Backdrop sx={{ zIndex: 1100, color: '#FF6D24' }} open={isLoading}>
				<CircularProgress color="inherit" />
			</Backdrop>
			<DialogLeaderBoard
				status={showLeaderBoard}
				handleToggle={(e: React.MouseEvent) => {
					e.stopPropagation();
					setShowLeaderBoard(false);
				}}
			/>
		</Wrap>
	);
};
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
type tableContainerProps = TableContainerProps & {
	component: any;
};
const TableContainerCus = styled(TableContainer)(
	(props: tableContainerProps) => ({
		background: 'transparent',
		boxShadow: 'none',
		marginTop: '50px',
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
const ButtonOutline = styled(Button)({
	color: '#5A6178',
	background: 'transparent',
	borderRadius: '8px',
	border: '1px solid #A7ACB8',
	// padding: "5px 5px",
	// minWidth: "35px",

	minHeight: '28px',
	textTransform: 'none',
	transition: 'all .3s',
	fontSize: '12px',
	fontWeight: 600,
	'&:hover': {
		background: '#FF8A50',
		border: '0px',
		color: '#fff',
	},
	':disabled': {},
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

const Wrap = styled(Stack)({
	'@media (min-width: 900px)': {
	},
});
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
type itemProps = TableRowProps & {
	isComingSoon: boolean;
};

const TitleItem = styled(Box)({
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
const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: 0,
}));
type accordionProps = AccordionSummaryProps & {
	statusAction: number;
};

const AccordionSummary = styled((props: accordionProps) => (
	<MuiAccordionSummary
		{...props}
	/>
))(({ theme, statusAction }) => ({
	'&:hover': {
		backgroundColor: statusAction === 2 ? 'none' : '#FFE2D3',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
	padding: '16px',
	'& .css-1betqn-MuiAccordionSummary-content': {
		margin: '0 !important',
		display: 'flex',
		justifyContent: 'space-between',
	},
	height: '110px',
	overflow: 'hidden',
	cursor: statusAction === 2 ? 'auto !important' : 'pointer',
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	borderTop: '1px solid rgba(0, 0, 0, .125)',
	padding: 0,
}));