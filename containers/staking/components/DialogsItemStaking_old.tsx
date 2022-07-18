// import { Box, Button, InputAdornment, Stack, styled, TextField, Typography } from "@mui/material"
// import Dialog from "@mui/material/Dialog"
// import DialogTitle from "@mui/material/DialogTitle"
// import { useState } from "react"
// import { MARKETPLACE_ICON } from "../../constants/marketplace"
// import { STAKING_ICON } from "../../constants/staking"
// import { useWalletContext } from "../../contexts/WalletContext"
// import { TEXT_STYLE } from "../../styles/common/textStyles"
// import { MarketplaceButton } from "../buttons/MarketplaceButton"

// interface IProps {
// 	status: boolean
// 	handleToggle: () => any
// 	title?: any
// 	titleCustomStyle?: any
// 	children: any
// 	content: any
// 	titleButton?: string
// 	priceButton?: number
// 	handleClickButton?: () => any
// 	customStyleButton?: any
// 	sx?: any
// 	dataActive: any
// }
// enum Direction {
// 	Up = 1,
// 	Down,
// 	Left,
// 	Right,
// }
// export const DialogsItemStaking: React.FC<IProps> = ({ status, handleToggle, dataActive }) => {
// 	const { setToggleActivePopup, walletAccount, setWalletAccount, bnbBalance } = useWalletContext();
// 	//stateContent === 0 ? contentPool 
// 	//stateContent === 1 ? contentProcess 
// 	//stateContent === 2 ? contentStake 
// 	//stateContent === 3 ? contentWarning 
// 	//stateContent === 4 ? contentUnstake 
// 	//stateContent === 5 ? contentError 
// 	//stateContent === 6 ? contentSuccess
// 	const [stateContent, setStateContent] = useState(0);
// 	//continueToStake=true : show pool success
// 	const [continueToStake, setContinueToStake] = useState(false);
// 	//continueToStake=true : show pool success
// 	const [isClaim, setIsClaim] = useState(true);
// 	const [titleSuccess, setTitleSuccess] = useState("");
// 	const [titleWarning, setTitleWarning] = useState("");
// 	const contentProcess = <>
// 		<Item>
// 			<TitleItem>your current balance</TitleItem>
// 			<ValueItem>1000.00 FIU</ValueItem>
// 		</Item>
// 		<Item>
// 			<TitleItem >your current amount staked</TitleItem>
// 			<ValueItem>0 FIU</ValueItem>
// 		</Item>
// 		<Item>
// 			<TitleItem >you want to stake</TitleItem>
// 			<ValueItem>	<Search placeholder=""
// 			/>

// 			</ValueItem>
// 		</Item>
// 		<Item sx={{ mt: "8px" }}>
// 			<TitleItem ></TitleItem>
// 			<ValueItem>		<Typography sx={{ ...TEXT_STYLE(12, 500, "#FF6F61"), }}>Please enter valid number</Typography>
// 			</ValueItem>
// 		</Item>
// 		<Item sx={{ mt: "8px" }}>
// 			<TitleItem ></TitleItem>
// 			<ValueItem sx={{ display: "flex", gap: "8px" }}>
// 				{/* <Box sx={{
// 					background: "#D9F2FD",
// 					borderRadius: '4px',
// 					// width: "35px",
// 					// height: "26px",
// 					padding: ' 10px',
// 					textAlign: "center"
// 				}}>
// 					<Typography sx={{ ...TEXT_STYLE(12, 500, "#55C8FC") }}>25%</Typography>
// 				</Box> */}
// 				<ButtonPercent variant="text">
// 					25%
// 				</ButtonPercent>
// 				<ButtonPercent variant="text">
// 					50%
// 				</ButtonPercent>
// 				<ButtonPercent variant="text">
// 					75%
// 				</ButtonPercent>
// 				<ButtonPercent variant="text" >
// 					Max
// 				</ButtonPercent>
// 			</ValueItem>
// 		</Item>
// 		<Item>
// 			<TitleItem >TOTAL reward earned</TitleItem>
// 			<ValueItem>0 FITTER Pass</ValueItem>
// 		</Item>
// 		<Item>
// 			<TitleItem >estimated daily rewards</TitleItem>
// 			<ValueItem>-</ValueItem>
// 		</Item>
// 		<Item>
// 			<TitleItem >estimated daily apr</TitleItem>
// 			<ValueItem>-</ValueItem>
// 		</Item>
// 		<Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
// 			{walletAccount ?
// 				<MarketplaceButton customStyle={{ width: "100%" }} title={"Enable"} handleOnClick={() => { setToggleActivePopup(true) }} /> : <MarketplaceButton customStyle={{ marginTop: "auto" }} title={"Connect Wallet"} handleOnClick={() => { setToggleActivePopup(true) }} />
// 			}
// 		</Box></>;
// 	const contentPool = <>
// 		<Item>
// 			<TitleItem>TOTAL AMOUNT</TitleItem>
// 			<ValueItem>Unlimited</ValueItem>
// 		</Item>
// 		<Item>
// 			<TitleItem >START TIME JOIN</TitleItem>
// 			<ValueItem>00:00 24/12/2022</ValueItem>
// 		</Item>
// 		<Item>
// 			<TitleItem >End time JOIN</TitleItem>
// 			<ValueItem>0:00 24/12/2022</ValueItem>
// 		</Item>
// 		<Item>
// 			<TitleItem >stake amount (min)</TitleItem>
// 			<ValueItem>1000 FIU/1 person</ValueItem>
// 		</Item>
// 		<Item>
// 			<TitleItem >stake amount (mAX)</TitleItem>
// 			<ValueItem>-</ValueItem>
// 		</Item>
// 		<Item>

// 			<TitleItem >REWARD</TitleItem>
// 			<ValueItem>
// 				{
// 					continueToStake ? "1 FITTER pass/ 3 days/ 5000 FIU" : 'FITTER pass'
// 				}
// 			</ValueItem>
// 		</Item>
// 		<Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
// 			{walletAccount ?
// 				<MarketplaceButton customStyle={{ width: "100%" }} title={"Enable"} handleOnClick={() => {

// 					// setContinueToStake(true)
// 					setStateContent(4)

// 				}} /> : <MarketplaceButton customStyle={{ width: "100%" }} title={"Connect Wallet"} handleOnClick={() => { setToggleActivePopup(true) }} />
// 			}
// 		</Box>
// 	</>

// 	const contentStake = <>
// 		<ButtonStakeMore sx={{ marginTop: "25px" }} variant="text">
// 			Stake more
// 		</ButtonStakeMore>
// 		<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="24px" textTransform={"uppercase"}>STAKING</Typography>
// 		<Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={600} mt="8px" textTransform={"uppercase"}>99,888.00 FIU</Typography>
// 		<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="24px" textTransform={"uppercase"}>current  PROFIT</Typography>
// 		{
// 			!isClaim && <Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={500} mt="8px" textTransform={"uppercase"}>0 FITTER PASS</Typography>}
// 		{
// 			isClaim && <Typography fontSize={16} color="#1DB268" textAlign={"center"} fontWeight={500} mt="8px" textTransform={"uppercase"}>+1 FITTER PASS</Typography>}
// 		{!isClaim && <Item sx={{ background: "#E9EAEF", marginRight: '-24px', marginLeft: "-24px", padding: "5px", justifyContent: "center" }}>
// 			<Typography fontSize={14} color="#5A6178" textAlign={"center"} fontWeight={500} mt="8px">Available to claim at 08:23 11/7/2022</Typography>
// 		</Item>}

// 		{
// 			isClaim && <Item sx={{
// 				justifyContent: "center",
// 			}}>
// 				<MarketplaceButton customStyle={{ width: "160px" }} title={"Claim"} handleOnClick={() => { setContinueToStake(true) }} />
// 			</Item>
// 		}
// 		<Item sx={{ gap: "8px", mt: "0px" }}>
// 			<ButtonStakeMore sx={{ marginTop: "25px", color: "#31373E", height: "38px", flex: 1, borderColor: "#E9EAEF" }} variant="text">
// 				Unstake
// 			</ButtonStakeMore>
// 			<ButtonStakeMore disabled sx={{ marginTop: "25px", color: "#31373E", height: "38px", flex: 1, borderColor: "#E9EAEF" }} variant="text">
// 				Withdraw
// 			</ButtonStakeMore>
// 		</Item>
// 		<Item sx={{
// 			justifyContent: "center",
// 			mt: "8px"
// 		}}>
// 			<Typography fontSize={14} color="#31373E" textAlign={"center"} fontWeight={600} mt="8px" sx={{
// 				textDecoration: "underline"
// 			}}>Transaction history</Typography>
// 		</Item>


// 	</>
// 	const contentWarning = <>
// 		<Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100%" }}>
// 			<Box sx={{ textAlign: "center", }}>
// 				<Box>

// 					<img src={MARKETPLACE_ICON.infocircle} alt="" />
// 				</Box>
// 				{
// 					titleWarning
// 				}
// 				{/* <Typography fontSize={14} color="#FF6F61" fontWeight={500} lineHeight="20px" mt="28px">YOU ARE UNSTAKING.</Typography>
// 				<Typography fontSize={14} color="#31373E" fontWeight={500} lineHeight="20px" mt="4px">The amount of TOKEN that you unstaked will not be continuously calculated. You can withdraw after the withdrawal delay time. If you only want to CLAIM the reward, please go back and click on the CLAIM button.</Typography> */}
// 			</Box>
// 		</Box>
// 		<MarketplaceButton customStyle={{ width: "100%", mt: "auto" }} title={"Continue Unstaking"} handleOnClick={() => { setContinueToStake(true) }} />
// 	</>
// 	const contentUnstake = <>
// 		<Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100%" }}>
// 			<Box sx={{ textAlign: "center", }}>
// 				<Box>

// 					<img src={MARKETPLACE_ICON.infocircle} alt="" />
// 				</Box>
// 				<Typography fontSize={14} color="#FF6F61" fontWeight={500} lineHeight="20px" mt="28px">YOU ARE UNSTAKING.</Typography>
// 				<Typography fontSize={14} color="#31373E" fontWeight={500} lineHeight="20px" mt="4px">The amount of TOKEN that you unstaked will not be continuously calculated. You can withdraw after the withdrawal delay time. If you only want to CLAIM the reward, please go back and click on the CLAIM button.</Typography>
// 			</Box>
// 		</Box>
// 		<MarketplaceButton customStyle={{ width: "100%", mt: "auto" }} title={"Continue Unstaking"} handleOnClick={() => { setContinueToStake(true) }} />
// 	</>
// 	const contentError = <>
// 		<Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100%" }}>
// 			<Box sx={{ textAlign: "center", }}>
// 				<Box>

// 					<img src={MARKETPLACE_ICON.CLOSE_ICON} alt="" />
// 				</Box>
// 				<Typography fontSize={14} color="#31373E" fontWeight={500} mt="28px">Something went wrong, please try again</Typography>
// 			</Box>
// 		</Box>
// 		<MarketplaceButton customStyle={{ width: "100%", mt: "auto" }} title={"Try again"} handleOnClick={() => { setContinueToStake(true) }} />
// 	</>
// 	const contentSuccess = <>
// 		<Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", height: "100%" }}>
// 			<Box sx={{ textAlign: "center", }}>
// 				<Box>

// 					<img src={MARKETPLACE_ICON.TICK} alt="" />
// 				</Box>
// 				<Typography fontSize={14} color="#31373E" fontWeight={500} mt="28px">{titleSuccess}</Typography>
// 			</Box>
// 		</Box>
// 		<MarketplaceButton customStyle={{ width: "100%", mt: "auto" }} title={"Continue      "} handleOnClick={() => { setContinueToStake(true) }} />
// 	</>
// 	return (
// 		<Dialog sx={borderRadius} onClose={() => {
// 			setStateContent(0);
// 			handleToggle()
// 		}} open={status}>
// 			<Wrap >
// 				<Box onClick={() => {
// 					setStateContent(0);
// 					handleToggle()
// 				}} sx={closeIcon}><img src={'assets/icons/close.svg'} /></Box>
// 				<TitlePopup>
// 					<img src="assets/icons/fiu.svg" alt="" />
// 					{dataActive && dataActive.name}
// 				</TitlePopup>
// 				{
// 					stateContent === 0 ? contentPool :
// 						stateContent === 1 ? contentProcess :
// 							stateContent === 2 ? contentStake :
// 								stateContent === 3 ? contentWarning :
// 									stateContent === 4 ? contentUnstake :
// 										stateContent === 5 ? contentError :
// 											stateContent === 6 ? contentSuccess :
// 												<Box></Box>
// 				}
// 				{/* <Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
// 			 	{walletAccount ?
// 						<MarketplaceButton customStyle={{ width: "100%" }} title={"Enable"} handleOnClick={() => { setToggleActivePopup(true) }} /> : <MarketplaceButton customStyle={{ marginTop: "auto" }} title={"Connect Wallet"} handleOnClick={() => { setToggleActivePopup(true) }} />
// 					}
// 			 </Box> */}

// 			</Wrap>
// 		</Dialog>
// 	)
// }
// const Search = styled(TextField)({
// 	'& .MuiOutlinedInput-root': {
// 		padding: '8px 16px',
// 		background: '#F8F9FB',
// 		borderRadius: 4,
// 		width: "111px",
// 		height: 34,
// 		flex: 1,
// 		border: "1px solid #E9EAEF"
// 	},
// 	'& input': {
// 		padding: 0,
// 		...TEXT_STYLE(12, 500, '#31373E')
// 	},
// 	'& fieldset': { display: 'none' },
// 	'@media (max-width: 767px)': {
// 		width: '100%',
// 		'& .MuiOutlinedInput-root': {
// 			width: '100%',
// 			height: 35
// 		},
// 	}
// })
// const ButtonPercent = styled(Button)({
// 	color: "#55C8FC",
// 	background: " #D9F2FD",
// 	borderRadius: "4px",
// 	padding: "5px 5px",
// 	minWidth: "35px",
// 	textTransform: "none",
// 	":hover": {
// 		background: " #d0edfa",
// 	}
// })
// const ButtonStakeMore = styled(Button)({
// 	color: "#5A6178",
// 	background: "transparent",
// 	borderRadius: "12px",
// 	border: "1px solid #A7ACB8",
// 	// padding: "5px 5px",
// 	// minWidth: "35px",

// 	height: "56px",
// 	textTransform: "none",
// 	transition: 'all .3s',
// 	":hover": {
// 		background: "#FF8A50",
// 		border: "0px",
// 		color: '#fff'
// 	},
// 	':disabled': {

// 	}
// })
// const Item = styled(Box)({
// 	display: "flex",
// 	alignItems: "center",
// 	justifyContent: "space-between",
// 	marginTop: "25px"
// })
// const TitleItem = styled(Typography)({
// 	fontSize: "12px",
// 	color: "#898E9E",
// 	fontWeight: "500",
// 	lineHeight: "18px",
// 	textTransform: "uppercase"
// })
// const ValueItem = styled(Typography)({
// 	fontSize: "12px",
// 	color: "#31373E",
// 	fontWeight: "500",
// 	lineHeight: "18px"
// })

// const Wrap = styled(Stack)({
// 	position: 'relative',
// 	padding: '0 16px 16px',
// 	width: 'calc(100vw - 32px)',
// 	'@media (min-width: 650px)': {
// 		width: '360px',
// 		height: "465px",
// 		padding: '16px 24px 24px',
// 	}
// })
// const TitlePopup = styled(DialogTitle)({
// 	fontSize: '16px !important',
// 	fontWeight: '600',
// 	color: '#31373E',
// 	lineHeight: "22px",
// 	padding: "0px",
// 	// marginBottom: '17px',
// 	// marginBottom: 10,
// 	textAlign: 'left',
// 	display: 'flex',
// 	alignItems: "center",
// 	'& p': {
// 		...TEXT_STYLE(16, 600)
// 	}
// })
// const closeIcon = {
// 	position: 'absolute',
// 	top: '18px',
// 	right: '18px',
// 	cursor: 'pointer',
// }
// const borderRadius = {
// 	'& .MuiDialog-paper': {
// 		borderRadius: '16px',
// 		margin: '0 !important',
// 		overflow: 'visible',
// 	}
// }