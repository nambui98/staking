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
	Tooltip,
	useMediaQuery,
	Popover,
	LinkProps
} from '@mui/material';
import MenuButton from '../buttons/MenuButton';
import { HEADER_ICON, HEADER_ICON_BNB, LOGO, MAIN_PAGE, PAGE } from '../../constants/header';
import { useRouter } from 'next/router';
import { useWalletContext } from '../../contexts/WalletContext';
import { isBoxedPrimitive } from 'util/types';
import { UserService } from '../../services/user.service';
import { SECURICHAIN_LOGO } from '../../constants/header';
import { MainMenuButton } from '../buttons/MainMenuButton';
import { TEXT_STYLE } from '../../styles/common/textStyles';
import { convertWalletAddress } from '../../libs/utils/utils';

const MainHeader: React.FC<any> = ({ sxProps, children }) => {
	const { asPath } = useRouter();
	const isMobile = useMediaQuery('(max-width: 767px)');
	const { setToggleActivePopup, walletAccount, setWalletAccount, bnbBalance } = useWalletContext();
	const [userInfo, setUserInfo] = useState({ walletAddress: walletAccount });
	const [activePopoverAddress, setActiveProverAddress] = React.useState<HTMLButtonElement | null>(null);
	const open = Boolean(activePopoverAddress);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setActiveProverAddress(event.currentTarget);
	};

	const handleClose = () => {
		setActiveProverAddress(null);
	};

	useEffect(() => {
		if (UserService.getCurrentUser()) {
			setUserInfo(UserService.getCurrentUser())
		}
	}, [])


	return (
		<Box component={'header'} sx={{ marginBottom: '125px', '@media (min-width: 1100px)': {marginBottom: '62px'} }}>
			<AppBar
				color="transparent"
				square
				elevation={0}
				sx={{
					background: '#fff',
				}}
			>
				<ToolbarBox>
					<Container
						disableGutters
						sx={{
							py: 0,
							display: 'flex',
							justifyContent: 'space-between',
							maxWidth: { xl: 1120 },
							flexWrap: 'wrap',
							alignItems: 'center'
						}}
					>
						<BoxLogo>
							<Link href={PAGE.HOME.link}>
								<Logo
									component={'a'}
									sx={{
										display: 'flex',
										alignItems: 'center',
										cursor: 'pointer',
									}}
								>
									<img src={LOGO} alt="Logo" width={'auto'} height={40} />
								</Logo>
							</Link>
							<BoxSecurichain>{<img src={SECURICHAIN_LOGO} />}</BoxSecurichain>
						</BoxLogo>
						<BoxMenuItem>
							{MAIN_PAGE.map((item, index) => (
								<Link key={index} href={item.active ? item.link : '#'}>
									<MenuItem><MainMenuButton disabledBtn={!item.active} active={asPath === item.link ? true : false} title={item.title} iconLink={item.icon} /></MenuItem>
								</Link>
							))}
						</BoxMenuItem>
						{walletAccount ?
							<WalletAccount>
								<WalletAccountChain>BSC Mainnet</WalletAccountChain>
								<WalletAccountAddress>{bnbBalance?.length && parseFloat(bnbBalance) > 0 ? parseFloat(bnbBalance).toFixed(4) : '0.00'} <img src={HEADER_ICON_BNB} />									
									<ButtonAddress onClick={handleClick}>{convertWalletAddress(walletAccount, 6, 3)}</ButtonAddress>
									<ActiveProver
										open={open}
										anchorEl={activePopoverAddress}
										onClose={handleClose}
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'left',
										}}
									>
										{/* <ProverItem sx={{marginBottom: '20px'}}><img style={{marginRight: 10}} src={HEADER_ICON.user} /><Link href={PAGE.WALLET.link}>{PAGE.WALLET.title}</Link></ProverItem> */}
										<ProverItem onClick={() => setWalletAccount(null)} sx={{color: '#FF6F61'}}><img style={{marginRight: 10}} src={HEADER_ICON.logout} /> Disconnect wallet</ProverItem>
									</ActiveProver>
								</WalletAccountAddress>
							</WalletAccount> : <ConnectButton variant="contained" onClick={() => setToggleActivePopup(true)}>Connect wallet</ConnectButton>
						}
					</Container>
				</ToolbarBox>
			</AppBar>
		</Box>
	);
};

export default MainHeader;

const Logo = styled(Box)({
	'& img': {
		'@media (max-width: 767px)': {
			width: 150
		}
	}
})
const BoxLogo = styled(Box)({
	flexDirection: 'column',
	justifyContent: 'flex-end',
	'@media (min-width: 1100px)': {
		display: 'flex',
		flexDirection: 'row',
	}
})
const BoxMenuItem = styled(Stack)({
	flexDirection: 'row',
	alignItems: 'center',
	'@media (max-width: 1100px)': {
		width: '100%',
		order: 3, 
		justifyContent: 'center',
		marginTop: 10,
		overflow: 'auto'
	},
	'@media (max-width: 500px)': {
		justifyContent: 'flex-start'
	}
})
const ToolbarBox = styled(Toolbar)({
	padding: '10px 16px',
	'@media (min-width: 1100px)': {
		height: 62,
		padding: '0 16px'
	}
})
const MenuItem = styled(Box)({
	marginRight: 8,
})

const ActiveProver = styled(Popover)({
	'& .MuiPaper-root': {
		border: '1px solid #E9EAEF',
		borderRadius: 8,
		padding: '10px 18px',
		boxShadow: 'none',
		marginTop: 5,
		cursor: 'pointer',
	}
})
const ProverItem = styled(Typography)({
	display: 'flex',
	alignItems: 'center',
	color: '#5A6178',
	...TEXT_STYLE(14, 500),
	'& a': {
		textDecoration: 'none',
		color: '#5A6178'
	}
})
const ConnectButton = styled(Button)({
	boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
	background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
	borderRadius: '12px',
	padding: '4px 24px',
	fontFamily: 'Electrofied',
	fontStyle: 'italic',
	textShadow: '0px 2px 1px #C64B0D',
	...TEXT_STYLE(14, 600),
	color: '#ffffff',
	width: 121,
	lineHeight: '16px',
	'@media (min-width: 1100px)': {
		padding: '13px 24px',
		...TEXT_STYLE(16, 600),
		lineHeight: '1.75',
		width: 'auto'
	}
})
const WalletAccount = styled(Stack)({
	'@media (max-width: 1100px)': {
		background: '#E9EAEF',
		borderRadius: 8,
		padding: '4px 8px'
	}
})
const WalletAccountChain = styled(Typography)({
	...TEXT_STYLE(12, 600),
	color: '#31373E',
	textAlign: 'right',
	marginBottom: 4
})
const WalletAccountAddress = styled(Typography)({
	color: '#31373E',
	...TEXT_STYLE(12, 600),
	borderRadius: '8px',
	alignItems: 'center',
	display: 'flex',
	'& img': {
		margin: '0 12px 0 4px',
		'@media (max-width: 767px)': {
			width: 16
		}
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
	'@media (max-width: 1100px)': {
		margin: 0,
		display: 'flex',
		justifyContent: 'flex-end',
		'& img': {
			width: 98,
			marginRight: -15,
			marginTop: -4
		}
	}
})
