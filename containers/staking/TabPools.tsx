import { Backdrop, Box, CircularProgress, Container, InputAdornment, InputBase, Stack, styled, Tab, Table, TableBody, TableCell, TableRow, TableRowProps, Tabs, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { PopupMessage } from "../../components/pageComponent/claim/PopupMessage";
import { StateStaking } from "../../const";
import { STAKING_ICON } from "../../constants/staking"
import { changeNetwork, useWalletContext } from "../../contexts/WalletContext";
import { getAllowanceStakingFiu, getBalanceFiuStaking, getBalancePass, getBalanceStaked, getCurrentProfit, getRemainingDelayTime, getStakingAmount, getStakingStatus, getTotalStakingToken, getUnstakeAmount, toClaimableTime } from "../../libs/staking";
import { TEXT_STYLE } from "../../styles/common/textStyles"
import { DialogsItemStaking } from "./components/DialogsItemStaking";

function createData(status: string, reward: string, earned: string, tokenRemaining: string, lockUpTime: string, delayTime: string, total: string) {
	return { status, reward, earned, tokenRemaining, lockUpTime, delayTime, total };
}

export const TabPools = () => {
	const [tabCurrent, setTabCurrent] = useState<number>(0)
	const [statusPopup, setStatusPopup] = useState<any>({
		status: false,
		content: <Box></Box>
	});
	const [stateContentInit, setStateContentInit] = useState<StateStaking>(StateStaking.EnablePool)
	const [isLoading, setIsLoading] = useState(false);
	const [balanceFiu, setBalanceFiu] = useState('');
	const [balanceSA, setBalanceSA] = useState('');
	const [balanceCP, setBalanceCP] = useState('');
	const [balanceUS, setBalanceUS] = useState('');
	const [claimableTime, setClaimableTime] = useState('');
	const [remainingDelayTime, setRemainingDelayTime] = useState('');
	const [totalStakingToken, setTotalStakingToken] = useState('');
	const [statusRow, setStatusRow] = useState('-');
	const [isEnable, setIsEnable] = useState<boolean>(false);
	const { setToggleActivePopup, walletAccount, ethersSigner, ethersProvider, chainIdIsSupported, provider, refresh } = useWalletContext();
	const [showDialogItem, setShowDialogItem] = useState<any>({
		status: false,
		title: "",
		content: <Box></Box>
	});
	const [activeItem, setActiveItem] = useState<any>(null);
	const rows = [
		{
			name: 'Fitter Pass', title: 'Fitter Pass Drops - Flexible', isComingSoon: false, data: createData(statusRow, 'Fitter Pass', balanceCP, '-', 'None', '7 days', `${totalStakingToken} FIU`),

		},
		{ name: 'Shared Pool', title: 'Shared Pool', isComingSoon: true, data: createData('-', '-', '0', '-', 'None', '14 days', '0 FIU') },
	];

	const handleShowPopupPass = (e: React.MouseEvent) => {
		e.stopPropagation();
		setStatusPopup({
			status: true,
			content: <Box>
				<Typography><b>Fitter Pass:</b></Typography>

				<Typography>1.Stake FIU, minimum 1000 FIU.</Typography>

				<Typography>2.Earn Fitter Pass.</Typography>

				<Typography>3.You have to stake at least 24h to receive Pass.</Typography>

				<Typography>4.Fitter Pass will be given to your account in every block of 24h from the last moment you stake/unstake</Typography>

				<Typography>5.For every 1000 FIU staked per 960h, you earn one Fitter Pass.</Typography>

				<Typography>For every 40.000 FIU staked per 24h, you earn one Fitter Pass.</Typography>

				<Typography>For every 80.000 FIU staked per 24h, you earn 2 Fitter Passes,....</Typography>

				<Typography>The more token you stake, the more reward you will receive.</Typography>

				<Typography>6.Specially, in the first 72 hours from this campaign begin, the reward will be doubled.</Typography>

				<Typography>Ex: With 20.000 FIU staked per 24h, you earn 1 Fitter Passes.</Typography>

				<Typography>7.Staking does have a short cooldown period of 7days, meaning once you want to exit, you have to wait 7days.</Typography>

				<Typography><b>Important note:</b> If you change your stake amount (stake more or partical unstake ), system will recalculate 24h period from that time and amount. Finished rewards will remain but fractional staking rewards will be cleared.</Typography>
			</Box>
		})
	}

	const handleShowPopupShared = (e: React.MouseEvent) => {
		e.stopPropagation();
		setStatusPopup({
			status: true,
			content: <Box>
				<Typography><b>Shared Pool: </b></Typography>
				<Typography>1.Stake FIU, minimum 1000 FIU.</Typography>
				<Typography>2.Earn FIU</Typography>
				<Typography>3.High-yield in return, take place in 1 month</Typography>
				<Typography>4.Unlimited number of stakers and token</Typography>
				<Typography>5.In the first 3 days from this campaign begin, you have chance to get double the reward.</Typography>
				<Typography>6.Staking does have a short cooldown period of 14 days, meaning once you want to exit, you have to wait 14 days.</Typography>
			</Box>
		})
	}
	const handleShowPopupDetail = (title: String, content: any) => {
		setShowDialogItem({
			status: true,
			title: title,
			content: content
		})
	}
	const getAllowance = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider)
		}
		if (walletAccount) {

			const allowance = await getAllowanceStakingFiu(walletAccount, ethersSigner);
			// setIsLoading(false);
			if (allowance > 0) {
				// setStateContentInit(StateStaking.EnablePool);
				setIsEnable(true);
				// setTabCurrent(1);
			} else {
				// setTabCurrent(0);
				setIsEnable(false);
			}

		} else {
			// setIsLoading(false);
		}
	}
	const getBalanceFiu = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider)
		}
		if (walletAccount) {

			const balance = await getBalanceFiuStaking(walletAccount, ethersSigner);
			setBalanceFiu(balance);
		} else {
			setBalanceFiu("0");
			// setIsLoading(false);
		}
	}
	const getBalanceSA = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider)
		}
		if (walletAccount) {

			const balance = await getStakingAmount(walletAccount, ethersSigner);
			setBalanceSA(balance);
		} else {
			setBalanceSA("0");
			// setIsLoading(false);
		}
	}
	const getBalanceCP = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider)
		}
		if (walletAccount) {

			const balance = await getCurrentProfit(walletAccount, ethersSigner);
			setBalanceCP(balance);
		} else {
			setBalanceCP("0");
			// setIsLoading(false);
		}
	}
	const getUnstakeA = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider)
		}
		if (walletAccount) {

			const balance = await getUnstakeAmount(walletAccount, ethersSigner);

			setBalanceUS(balance);
		} else {
			setBalanceUS("0");
			// setIsLoading(false);
		}
	}
	const toClaimableT = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider)
		}
		if (walletAccount) {

			const balance = await toClaimableTime(walletAccount, ethersSigner);
			setClaimableTime(balance);
		} else {
			// setIsLoading(false);
		}
	}
	const getRemainingDelayT = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider)
		}
		if (walletAccount) {

			const balance = await getRemainingDelayTime(walletAccount, ethersSigner);
			setRemainingDelayTime(balance);
		} else {
		}
	}
	const getTotalStakingT = async () => {
		setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider)
		}
		if (ethersSigner) {
			const balance = await getTotalStakingToken(ethersSigner);
			setTotalStakingToken(balance);
		} else {
			setTotalStakingToken('0');
			setIsLoading(false);
		}
	}
	// const statusMap ={
	// 	0:'-',
	// 	1:'STAKING',
	// }
	const getStakingS = async () => {
		setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider)
		}
		if (ethersSigner && walletAccount) {
			const status = await getStakingStatus(walletAccount, ethersSigner);
			if (parseInt(status) === 0) {
				setStatusRow('-');
			} else if (parseInt(status) === 1) {
				setStatusRow('STAKING');
			} else {
				setStatusRow('UNSTAKED');
			}
			debugger
			// setStatusRow('STAKING')
		} else {
			setStatusRow('-')
		}
	}
	const getAll = async () => {
		setIsLoading(true);
		await Promise.all([
			// getStakingS(),
			getAllowance(),
			getBalanceFiu(),
			getBalanceSA(),
			getBalanceCP(),
			getUnstakeA(),
			toClaimableT(),
			getRemainingDelayT(),

		])
		setIsLoading(false);
	}
	useEffect(() => {
		getAll()
		getTotalStakingT()
		// getBalanceP()
		// getBalanceS()
	}, [walletAccount, refresh])
	console.log(balanceUS)
	useEffect(() => {
		// if (parseFloat(balanceSA) > 0) {
		// 	setStatusRow('STAKING')
		// } else {
		// 	setStatusRow('-')
		// 	// if (parseFloat(balanceFiu) > 0) {

		// 	// } else {
		// 	// 	setStatusRow('-')
		// 	// }
		// }
		if (parseFloat(balanceSA) > 0 || parseFloat(balanceUS) > 0) {
			setStateContentInit(StateStaking.Staked);
		} else {
			if (isEnable) {
				setStateContentInit(StateStaking.StakeProcess);
			} else {
				setStatusRow('-')
				setStateContentInit(StateStaking.EnablePool);
			}
		}

	}, [balanceFiu,
		balanceSA,
		balanceCP,
		balanceUS,
		claimableTime,
		walletAccount])


	return (
		<Wrap>
			<Container sx={{ maxWidth: 1120 }}>
				<Top>
					<BoxTabs value={tabCurrent}>
						<TabItem className={tabCurrent === 0 ? "Mui-selected" : ''} label="All pools" onClick={() => setTabCurrent(0)} />
						<TabItem className={tabCurrent === 1 ? "Mui-selected" : ''} label="My pool" onClick={() => setTabCurrent(1)} />
					</BoxTabs>
					<Search placeholder="Search pool..." InputProps={{
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
												isComingSoon={item.isComingSoon}
												onClick={() => {
													index === 0 &&
														setActiveItem(index);
													// handleShowPopupDetail(item.name, item.data)
												}}
												key={index}
												sx={{ '&:last-child td, &:last-child th': { border: 0 }, background: index === activeItem ? "#FFE2D3" : "#fff" }}
											>
												<TitleItem key={index}><img src={STAKING_ICON.fiu} /> {item.title} <span style={{ textDecoration: 'underline' }} onClick={index === 0 ? (e: React.MouseEvent) => handleShowPopupPass(e) : (e: React.MouseEvent) => handleShowPopupShared(e)}>How it works?</span></TitleItem>
												{
													item.isComingSoon && <ComingSoon sx={{
														top: index === 0 ? '0 !important' : 4
													}}>coming soon</ComingSoon>
												}
												<Item sx={{ paddingLeft: '8px', borderRadiusTopleft: '12px' }} align="left">Status <Box>{item.data.status}</Box></Item>
												<Item align="left" sx={{ textTransform: "none" }}>{index === 0 ? 'REWARD' : 'APR'} <Box>{item.data.reward}</Box></Item>
												<Item align="left">CLAIMABLE <Box>{item.data.earned}</Box></Item>
												<Item align="left">Token remaining <Box>{item.data.tokenRemaining}</Box></Item>
												<Item align="left">Lock-up time <Box>{item.data.lockUpTime}</Box></Item>
												<Item align="left">Withdrawal delay time <Box>{item.data.delayTime}</Box></Item>
												<Item align="left">Total in pool<Box>{item.data.total}</Box></Item>
											</BoxTr>
										)
									} else if (tabCurrent === 0) {
										return (
											<BoxTr
												isComingSoon={item.isComingSoon}
												onClick={() => {
													index === 0 &&
														setActiveItem(index);
													// handleShowPopupDetail(item.name, item.data)
												}}
												key={index}
												sx={{ '&:last-child td, &:last-child th': { border: 0 }, background: index === activeItem ? "#FFE2D3" : "#fff" }}
											>
												<TitleItem key={index}><img src={STAKING_ICON.fiu} /> {item.title} <span style={{ textDecoration: 'underline' }} onClick={index === 0 ? (e: React.MouseEvent) => handleShowPopupPass(e) : (e: React.MouseEvent) => handleShowPopupShared(e)}>How it works?</span></TitleItem>
												{
													item.isComingSoon && <ComingSoon sx={{
														top: index === 0 ? '0 !important' : 4
													}}>coming soon</ComingSoon>
												}
												<Item sx={{ paddingLeft: '8px', borderRadiusTopleft: '12px' }} align="left">Status <Box>{item.data.status}</Box></Item>
												<Item align="left" sx={{ textTransform: "none" }}>{index === 0 ? 'REWARD' : 'APR'} <Box>{item.data.reward}</Box></Item>
												<Item align="left">CLAIMABLE <Box>{item.data.earned}</Box></Item>
												<Item align="left">Token remaining <Box>{item.data.tokenRemaining}</Box></Item>
												<Item align="left">Lock-up time <Box>{item.data.lockUpTime}</Box></Item>
												<Item align="left">Withdrawal delay time <Box>{item.data.delayTime}</Box></Item>
												<Item align="left">Total in pool<Box>{item.data.total}</Box></Item>
											</BoxTr>
										)
									}
								})}
							</TableBody>
						</Table>
					</Box>
				</Body>
			</Container>
			<PopupMessage title="How it works?" status={statusPopup.status} titleButton="I understand" handleToggleStatus={() => setStatusPopup({ ...statusPopup, status: false })} sx={customWidthPopup}
				handleClickButton={() => setStatusPopup({ ...statusPopup, status: false })} message={<BodyPopup>
					{statusPopup.content}
				</BodyPopup>} />

			<DialogsItemStaking
				// status={showDialogItem.status} 
				isEnable={isEnable}
				stateContentInit={stateContentInit}
				dataActive={rows[activeItem]}
				status={activeItem !== null}
				// handleToggle={() => setShowDialogItem({ ...showDialogItem, status: false })}
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
			>

			</DialogsItemStaking>
			<Backdrop
				sx={{ zIndex: 1100, color: '#FF6D24' }}
				open={isLoading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Wrap >
	)
}

const Wrap = styled(Stack)({

})
const customWidthPopup = {
	'@media (max-width: 650px)': {
		marginBottom: "16px",
		marginTop: "16px",
		paddingTop: '0px'
	},
	'@media (min-width: 650px)': {
		width: '541px !important',
		paddingTop: '8px'
	},
	'@media (max-height: 720px)': {
		overflowY: 'auto',
		height: 'calc(100vh - 32px)',
	}
}
const BodyPopup = styled(Box)({
	'& p': {
		lineHeight: '24px',
		textAlign: 'left',
	},
	'& b': {
		color: '#31373E'
	}
})
const ComingSoon = styled(TableCell)({
	position: 'absolute',
	top: 4,
	right: 0,
	padding: 8,
	background: '#FFC83A',
	textTransform: 'uppercase',
	...TEXT_STYLE(12, 600, '#31373E')
})
const Top = styled(Box)({
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBottom: 16,
	'@media (min-width: 768px)': {
		display: 'flex',
	}
})
const Search = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		padding: '8px 16px',
		background: '#E9EAEF',
		borderRadius: 8,
		width: 320,
		height: 40
	},
	'& input': {
		padding: 0,
		...TEXT_STYLE(14, 500, '#A7ACB8')
	},
	'& fieldset': { display: 'none' },
	'@media (max-width: 767px)': {
		width: '100%',
		'& .MuiOutlinedInput-root': {
			width: '100%',
			height: 35
		},
	}
})
const TabItem = styled(Tab)({
	...TEXT_STYLE(14, 500, '#5A6178'),
	padding: '8px 16px',
	borderRadius: 18,
	'&.Mui-selected': {
		background: '#FFE2D3',
		color: '#FF6D24',
	}
})
const BoxTabs = styled(Tabs)({
	'& .MuiTabs-indicator': {
		display: 'none'
	},
	'@media (max-width: 767px)': {
		marginBottom: 10
	}
})
const Body = styled(Box)({
	padding: 16,
	background: '#F8F9FB',
	borderRadius: 16,
	marginBottom: 24,
	// '& tr': {
	//   background: '#FFFFFF',
	//   padding: 8
	// }
})
type itemProps = TableRowProps & {
	isComingSoon: boolean
}
const BoxTr = styled(TableRow)((props: itemProps) => ({
	background: '#FFFFFF',
	position: 'sticky',
	transition: 'all .3s',
	cursor: 'pointer',
	':hover': {
		background: !props.isComingSoon ? "#FFE2D3" : 'none'
	}
}))
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
		...TEXT_STYLE(14, 500, '#31373E')
	}
})
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
		marginRight: 8
	},
	'& span': {
		...TEXT_STYLE(12, 500, '#55C8FC'),
		marginLeft: 8,
		cursor: 'pointer',
	}
})
const ItemDialog = styled(Box)({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginTop: "25px"
})
const TitleItemDialog = styled(Typography)({
	fontSize: "12px",
	color: "#898E9E",
	fontWeight: "500",
	lineHeight: "18px",
	textTransform: "uppercase"
})
const ValueItem = styled(Typography)({
	fontSize: "12px",
	color: "#31373E",
	fontWeight: "500",
	lineHeight: "18px"
})