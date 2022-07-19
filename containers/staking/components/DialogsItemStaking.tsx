import { Backdrop, Box, Button, CircularProgress, InputAdornment, Stack, styled, TextField, Typography } from "@mui/material"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import { useEffect, useState } from "react"
import { MarketplaceButton } from "../../../components/buttons/MarketplaceButton"
import { StateStaking } from "../../../const"
import { MARKETPLACE_ICON } from "../../../constants/marketplace"
import { STAKING_ICON } from "../../../constants/staking"
import { useWalletContext } from "../../../contexts/WalletContext"
import { TEXT_STYLE } from "../../../styles/common/textStyles"
import { EnablePool } from "./EnablePool"
import { Error } from "./Error"
import { Staked } from "./Staked"
import { StakeProcess } from "./StakeProcess"
import { Success } from "./Success"
import { TransactionHistory } from "./TransactionHistory"
import { Unstake } from "./Unstake"
import { UnstakedSuccess } from "./UnstakedSuccess"
import { UnstakeWarrning } from "./UnstakeWarrning"
import { WithDraw, WithDrawWarning } from "./WithDraw"

interface IProps {
	status: boolean
	handleToggle: () => any
	title?: any
	titleCustomStyle?: any
	children: any
	content: any
	titleButton?: string
	priceButton?: number
	handleClickButton?: () => any
	customStyleButton?: any
	sx?: any
	dataActive: any
	isEnable: Boolean
	balanceFiu: string
	balanceSA: string
	balanceCP: string
	balanceUS: string
	totalStakingToken: string
	stateContentInit: StateStaking
	claimableTime: string
	remainingDelayTime: string
}

export const DialogsItemStaking: React.FC<IProps> = ({
	status,
	handleToggle,
	dataActive,
	isEnable,
	balanceFiu,
	balanceSA,
	balanceCP,
	balanceUS,
	stateContentInit,
	claimableTime,
	remainingDelayTime,
	totalStakingToken }) => {

	const [stateContent, setStateContent] = useState<StateStaking | null>(stateContentInit);
	const [success, setSuccess] = useState<any>({
		titleSuccess: '',
		functionSuccess: ''
	});
	const [error, setError] = useState<any>({
		titleError: '',
		functionError: ''
	});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setStateContent(stateContentInit)
	}, [stateContentInit])


	const handleClickSuccess = ({ titleSuccess = "", functionSuccess = null, stateContentNew = null }: { titleSuccess: String, functionSuccess: Function | null, stateContentNew: StateStaking | null }) => {
		setStateContent(stateContentNew);
		setSuccess({
			titleSuccess: titleSuccess,
			functionSuccess: functionSuccess
		})
	}
	const handleClickError = ({ titleError = "", functionError = null, stateContentNew = null }: { titleError: String, functionError: Function | null, stateContentNew: StateStaking | null }) => {

		setStateContent(stateContentNew);
		setError({
			titleError: titleError,
			functionError: functionError
		})
	}
	console.log(stateContent);

	return (
		<Dialog sx={borderRadius} onClose={() => {
			// setStateContent(0);
			if (stateContent === StateStaking.TransactionHistory) {
				setStateContent(StateStaking.StakeProcess);
			}
			handleToggle()
		}} open={status}>
			<Wrap >
				<Box onClick={() => {
					if (stateContent === StateStaking.TransactionHistory) {
						setStateContent(StateStaking.StakeProcess);
					}
					handleToggle()
				}} sx={closeIcon}><img src={'assets/icons/close.svg'} /></Box>
				<TitlePopup>
					{
						stateContent === StateStaking.WithDraw &&


						<img src={STAKING_ICON.arrowLeftGray} alt="" onClick={() => setStateContent(StateStaking.UnstakedSuccess)} />

					}
					<img src="assets/icons/fiu.svg" alt="" />
					{dataActive && dataActive.name}
				</TitlePopup>
				{
					stateContent === StateStaking.EnablePool ? <EnablePool setStateContent={setStateContent} setIsLoading={setIsLoading} handleClickError={handleClickError} /> :
						stateContent === StateStaking.StakeProcess ? <StakeProcess
							balanceFiu={balanceFiu}
							balanceSA={balanceSA}
							balanceCP={balanceCP}
							setIsLoading={setIsLoading}
							setSuccess={setSuccess}
							setStateContent={setStateContent}
							handleClickSuccess={handleClickSuccess}
							handleClickError={handleClickError} /> :
							stateContent === StateStaking.Staked ? <Staked
								balanceFiu={balanceFiu}
								balanceSA={balanceSA}
								balanceCP={balanceCP}
								balanceUS={balanceUS}
								claimableTime={claimableTime}
								setIsLoading={setIsLoading}
								setStateContent={setStateContent}
								handleClickSuccess={handleClickSuccess}
								handleClickError={handleClickError} /> :
								stateContent === StateStaking.UnstakeWarrning ? <UnstakeWarrning

									balanceFiu={balanceFiu}
									balanceSA={balanceSA}
									balanceCP={balanceCP}
									balanceUS={balanceUS}
									claimableTime={claimableTime}
									setIsLoading={setIsLoading}
									setStateContent={setStateContent}
									handleClickSuccess={handleClickSuccess}
									handleClickError={handleClickError}
								/> :
									stateContent === StateStaking.UnstakedSuccess ? <UnstakedSuccess
										balanceFiu={balanceFiu}
										balanceSA={balanceSA}
										balanceCP={balanceCP}
										balanceUS={balanceUS}
										claimableTime={claimableTime}
										setIsLoading={setIsLoading}
										setStateContent={setStateContent}
										handleClickSuccess={handleClickSuccess}
										handleClickError={handleClickError}
									/> :
										stateContent === StateStaking.Unstake ? <Unstake
											balanceFiu={balanceFiu}
											balanceSA={balanceSA}
											balanceCP={balanceCP}
											balanceUS={balanceUS}
											setIsLoading={setIsLoading}
											setStateContent={setStateContent}
											handleClickSuccess={handleClickSuccess}
											handleClickError={handleClickError} /> :
											stateContent === StateStaking.WithDraw ? <WithDraw
												balanceUS={balanceUS}
												remainingDelayTime={remainingDelayTime}
												setIsLoading={setIsLoading}
												setStateContent={setStateContent}
												handleClickSuccess={handleClickSuccess}
												handleClickError={handleClickError} /> :
												stateContent === StateStaking.WithDrawWarning ? <WithDrawWarning
													balanceUS={balanceUS}
													remainingDelayTime={remainingDelayTime}
													setIsLoading={setIsLoading}
													setStateContent={setStateContent}
													handleClickSuccess={handleClickSuccess}
													handleClickError={handleClickError} /> :
													stateContent === StateStaking.TransactionHistory ? <TransactionHistory setStateContent={setStateContent} /> :
														stateContent === StateStaking.Success ? <Success success={success} setStateContent={setStateContent} /> :
															stateContent === StateStaking.Error ? <Error setStateContent={setStateContent} error={error} /> :
																<Box></Box>
				}
				{/* <Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
			 	{walletAccount ?
						<MarketplaceButton customStyle={{ width: "100%" }} title={"Enable"} handleOnClick={() => { setToggleActivePopup(true) }} /> : <MarketplaceButton customStyle={{ marginTop: "auto" }} title={"Connect Wallet"} handleOnClick={() => { setToggleActivePopup(true) }} />
					}
			 </Box> */}

			</Wrap>
			<Backdrop
				sx={{ color: '#FF6D24', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={isLoading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Dialog>
	)
}
const Search = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		padding: '8px 16px',
		background: '#F8F9FB',
		borderRadius: 4,
		width: "111px",
		height: "465px",
		flex: 1,
		border: "1px solid #E9EAEF"
	},
	'& input': {
		padding: 0,
		...TEXT_STYLE(12, 500, '#31373E')
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
const ButtonPercent = styled(Button)({
	color: "#55C8FC",
	background: " #D9F2FD",
	borderRadius: "4px",
	padding: "5px 5px",
	minWidth: "35px",
	textTransform: "none",
	":hover": {
		background: " #d0edfa",
	}
})
const ButtonStakeMore = styled(Button)({
	color: "#5A6178",
	background: "transparent",
	borderRadius: "12px",
	border: "1px solid #A7ACB8",
	// padding: "5px 5px",
	// minWidth: "35px",

	height: "56px",
	textTransform: "none",
	transition: 'all .3s',
	":hover": {
		background: "#FF8A50",
		border: "0px",
		color: '#fff'
	},
	':disabled': {

	}
})
const Item = styled(Box)({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginTop: "25px"
})
const TitleItem = styled(Typography)({
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

const Wrap = styled(Stack)({
	position: 'relative',
	padding: '16px 16px 0px 16px',
	// margin: "16px 0px",
	overflowY: 'auto',
	overflowX: "hidden",
	width: 'calc(100vw - 32px)',
	height: 'calc(100vh - 32px)',
	'@media (min-width: 650px)': {
		width: '360px',
		height: "465px",
		padding: '16px',
	},
	'@media (max-width: 650px)': {
		padding: '0px 16px 0px 16px',
		margin: "16px 0px 16px 0px"
	}
})
const TitlePopup = styled(DialogTitle)({
	fontSize: '16px !important',
	fontWeight: '600',
	color: '#31373E',
	lineHeight: "22px",
	padding: "0px",
	// marginBottom: '17px',
	// marginBottom: 10,
	textAlign: 'left',
	display: 'flex',
	alignItems: "center",
	'& p': {
		...TEXT_STYLE(16, 600)
	}
})
const closeIcon = {
	position: 'absolute',
	top: '18px',
	right: '18px',
	cursor: 'pointer',
}
const borderRadius = {
	'& .MuiDialog-paper': {
		borderRadius: '16px',
		margin: '0 !important',
		overflow: 'visible',
	}
}