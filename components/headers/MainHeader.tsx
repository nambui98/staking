import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
	Stack,
	styled,
	Button,
	Typography,
	Tooltip
} from '@mui/material';
import MenuButton from '../buttons/MenuButton';
import { HEADER_ICON_BNB, LOGO, PAGE } from '../../constants/header';
import { useRouter } from 'next/router';
import { useWalletContext } from '../../contexts/WalletContext';
import { isBoxedPrimitive } from 'util/types';
import { UserService } from '../../services/user.service';
import { SECURICHAIN_LOGO } from '../../constants/header';

const MainHeader: React.FC<any> = ({ sxProps, children }) => {
	const { asPath } = useRouter();
	const { setToggleActivePopup, walletAccount } = useWalletContext();
	const [userInfo, setUserInfo] = useState({walletAddress: walletAccount});

	useEffect(() => {
		if(UserService.getCurrentUser()){
			setUserInfo(UserService.getCurrentUser())
		}
	}, [])


	return (
		<Box component={'header'} mb={10}>
			<AppBar
				color="transparent"
				square
				elevation={0}
				sx={{
					background: '#fff',
				}}
			>
				<Toolbar sx={{ height: 80, borderBottom: '1px solid #E9EAEF' }}>
					<Container
						disableGutters
						sx={{
							py: 0,
							display: 'flex',
							justifyContent: 'space-between',
							maxWidth: { xl: 1920 - 240 },
						}}
					>
						<Link href={PAGE.HOME.link}>
							<Box
								component={'a'}
								sx={{
									display: 'flex',
									alignItems: 'center',
									cursor: 'pointer',
								}}
							>
								<img src={LOGO} alt="Logo" width={'auto'} height={40} />
							</Box>
						</Link>
						<BoxMenuItem>
							<MenuItem sx={asPath === PAGE.PRE_SALES.link ? activeLink : {}}><Link href={PAGE.PRE_SALES.link}>{PAGE.PRE_SALES.title}</Link></MenuItem>
							<MenuItem sx={asPath === PAGE.DOCUMENT.link ? activeLink : {}}><Link href={PAGE.DOCUMENT.link}>{PAGE.DOCUMENT.title}</Link></MenuItem>
						</BoxMenuItem>
						{walletAccount ?
							<WalletAccount>
								<WalletAccountChain>BSC Mainnet</WalletAccountChain>
								<WalletAccountAddress>10 <img src={HEADER_ICON_BNB} /> 
								<Tooltip title="Copy">
									<ButtonAddress onClick={() => navigator.clipboard.writeText(walletAccount || '')}>{walletAccount.slice(0, 5) + '...' + walletAccount.slice(-6)}</ButtonAddress>
								</Tooltip>
								</WalletAccountAddress>
							</WalletAccount> : <ConnectButton variant="contained" onClick={() => setToggleActivePopup(true)}>Connect wallet</ConnectButton>
						}
						{/* <MenuButton /> */}
						<BoxSecurichain>{<img src={SECURICHAIN_LOGO} />}</BoxSecurichain>
						<MenuButton />
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default MainHeader;

const BoxMenuItem = styled(Stack)({
	flexDirection: 'row',
	alignItems: 'center',
	marginLeft: 'auto'
})
const MenuItem = styled(Box)({
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	marginRight: '32px',
	'& a': {
		textDecoration: 'none',
		color: '#5A6178',
		fontSize: 16,
		fontWeight: 600,
	},
	height: '100%',
	padding: '0 16px'
})
const activeLink = {
	'& a': {
		color: '#31373E'
	},
	'&:before': {
		content: `''`,
		position: 'absolute',
		bottom: '-14px',
		left: 0,
		width: '100%',
		height: 2,
		backgroundColor: '#FF8A50'
	}
}
const ConnectButton = styled(Button)({
	boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
	background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
	borderRadius: '12px',
	padding: '13px 24px',
	fontFamily: 'Electrofied',
	fontStyle: 'italic',
	textShadow: '0px 2px 1px #C64B0D',
	fontSize: '16px',
	fontWeight: '600',
	color: '#ffffff'
})
const WalletAccount = styled(Stack)({
	alignItems: 'center',
	flexDirection: 'row',
})
const WalletAccountChain = styled(Typography)({
	marginRight: '16px',
	fontSize: '12px',
	fontWeight: '600',
	color: '#31373E'
})
const WalletAccountAddress = styled(Typography)({
	color: '#31373E',
	fontSize: '14px',
	fontWeight: '600',
	padding: '8px',
	borderRadius: '8px',
	border: '1px solid #E9EAEF',
	background: '#F8F9FB',
	alignItems: 'center',
	display: 'flex',
	'& img': {
		margin: '0 12px 0 4px'
	}
})
const ButtonAddress = styled(Button)({
	boxShadow: 'none !important',
	background: '#5A6178 !important',
	borderRadius: '8px',
	color: '#ffffff',
	padding: '3px 8px',
	fontSize: '12px',
	fontWeight: '500',
})

const BoxSecurichain = styled(Box)({
	margin: 'auto auto auto 24px',
	'@media (max-width: 465px)': {
		display: 'none',
	}
})