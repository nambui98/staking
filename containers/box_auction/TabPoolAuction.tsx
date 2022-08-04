import {
	Backdrop,
	Box,
	CircularProgress,
	Container,
	InputAdornment,
	InputBase,
	Stack,
	styled,
	Tab,
	Table,
	TableBody,
	TableCell,
	TableRow,
	TableRowProps,
	Tabs,
	TextField,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { PopupMessage } from '../../components/pageComponent/claim/PopupMessage';
import { StateStaking } from '../../const';
import { STAKING_ICON } from '../../constants/staking';
import { changeNetwork, useWalletContext } from '../../contexts/WalletContext';
import { ShowAction } from './components/ShowAction';

import { formatMoney } from '../../libs/utils/utils';
import { TEXT_STYLE } from '../../styles/common/textStyles';

import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import userBurnHook from '../../libs/hooks/useBurnHook';

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	// border: `1px solid ${theme.palette.divider}`,
	// '&:not(:last-child)': {
	// 	borderBottom: 0,
	// },
	// '&:before': {
	// 	display: 'none',
	// },
	// '& .css-ta84vm-MuiAccordionDetails-root': {
	// 	padding: 0,
	// },
	border: 0,
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		// expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
		{...props}
	/>
))(({ theme }) => ({
	// backgroundColor:
	// 	theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : '#FFE2D3',
	// flexDirection: 'row-reverse',
	'&:hover': {
		backgroundColor: '#FFE2D3',
	},
	// '& .Mui-expanded': {
	// 	backgroundColor: '#FFE2D3',
	// },
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
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	borderTop: '1px solid rgba(0, 0, 0, .125)',
	padding: 0,
}));

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
	const [statusPopup, setStatusPopup] = useState<any>({
		status: false,
		content: <Box></Box>,
	});
	const [isLoading, setIsLoading] = useState(false);
	const {
		totalStake,
		balanceFT,
		numberBurned,
		isApproved,
		isRegister,
		statusRow } = userBurnHook({
			setIsLoading
		})
	const rows = [
		{
			name: 'Fitter Pass',
			title: 'Box Auction',
			isComingSoon: false,
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
	];

	const handleShowBurn = (e: React.MouseEvent) => {
		e.stopPropagation();
		setStatusPopup({
			status: true,
			content: (
				<Box>

					<Typography mb={1}>1.Burn Fitter Pass - Get Diamond and Gold Genesis NFT Box</Typography>

					<Typography mb={1}>2.You are required to burn 2 Fitter Passes to participate for the very first time</Typography>

					<Typography mb={1}>
						3.The top 50 ranked participants who burn the largest number of Fitter Passes will each receive a Genesis NFT Box with estimated price no less than $500.
					</Typography>

					<Typography mb={1}>
						4.Event takes place in 5 days ( Aug 5 - Aug 10)
					</Typography>

					<Typography mb={1}>
						5.After this time, winner list will be determined.
						<br />
						&ensp;	Top 1-10: get 1 Diamond Box/each
						<br />
						&ensp;	Top 11-50: get 1 Gold Box/each
						<br />
						&ensp;	All Fitter Passes from this winner list will be burned
						<br />
						&ensp;	Participants who are not named in this list will get their Fitter Passes back, excluding the 2-Fitter Pass participation fee
					</Typography>

					<Typography mb={1}>
						6.Reward and refund will be paid to users after event is closed
					</Typography>


				</Box>
			),
		});
	};

	return (
		<Wrap>
			<Container sx={{ width: 1120 }}>
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
					<Box sx={{ overflowX: 'auto', borderRadius: '16px' }}>

						<Accordion onChange={() => { }}>
							{rows.map((item, index) => {
								return (
									<AccordionSummary
										aria-controls="panel1d-content"
										id="panel1d-header"
										key={index}
									>

										<Table>
											<TableBody >
												<TableRow>
													<TitleItem key={index}>
														<img src={STAKING_ICON.fiu} /> {item.title}{' '}
														<span
															style={{ textDecoration: 'underline' }}
															onClick={
																(e: React.MouseEvent) => handleShowBurn(e)
															}
														>
															How it works?
														</span>
													</TitleItem>
													{item.isComingSoon && (
														<ComingSoon
															sx={{
																top: index === 0 ? '0 !important' : 4,
															}}
														>
															coming soon
														</ComingSoon>
													)}
													<Item
														sx={{
															paddingLeft: '8px',
															borderRadiusTopleft: '12px',
														}}
														align="left"
													>
														Status{' '}
														<Box sx={{ fontSize: '14px' }}>{item.data.status}</Box>
													</Item>
													<Item align="left" sx={{ textTransform: 'none' }}>
														{index === 0 ? 'REWARD' : 'APR'}{' '}
														<Box>{item.data.reward}</Box>
													</Item>
													<Item align="left">
														Earned <Box>{item.data.earned}</Box>
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
														Total in pool
														<Box sx={{ textTransform: 'none' }}>
															{formatMoney(item.data.total)} Fitter Pass
														</Box>
													</Item>
												</TableRow>
											</TableBody>
										</Table>

									</AccordionSummary>
								);
							})}
							<AccordionDetails>
								<ShowAction
									isApproved={isApproved}
									isRegister={isRegister}
									balanceFT={balanceFT}
									numberBurned={numberBurned}></ShowAction>
							</AccordionDetails>
						</Accordion>

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
			<Backdrop sx={{ zIndex: 1100, color: '#FF6D24' }} open={isLoading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Wrap>
	);
};

const Wrap = styled(Stack)({
	'@media (min-width: 900px)': {
		// width: '1120px',
	},
});
const customWidthPopup = {
	'@media (max-width: 650px)': {
		marginBottom: '16px',
		marginTop: '16px',
		paddingTop: '0px',
	},
	'@media (min-width: 650px)': {
		width: '541px !important',
		paddingTop: '8px',
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
const ComingSoon = styled(TableCell)({
	position: 'absolute',
	top: 4,
	right: 0,
	padding: 8,
	background: '#FFC83A',
	textTransform: 'uppercase',
	...TEXT_STYLE(12, 600, '#31373E'),
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
const BoxTr = styled(TableRow)((props: itemProps) => ({
	background: '#FFFFFF',
	position: 'sticky',
	transition: 'all .3s',
	cursor: 'pointer',
	':hover': {
		background: !props.isComingSoon ? '#FFE2D3' : 'none',
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
	paddingTop: 56,
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
	margin: '16px 0 0 8px',
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
