import React, { useState } from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
	Theme,
	useMediaQuery,
	useScrollTrigger,
	styled,
	Stack,
	BoxProps,
	Button
} from '@mui/material';
import MenuButton from '../buttons/MenuButton';
import {
	LOGO,
	HOME_LOGO,
	HOME_BG_LOGO,
} from '../../constants/header';
import { TEXT_STYLE } from '../../styles/common/textStyles';
import { useRouter } from 'next/router';
import { PopupApp } from '../../containers/home/PopupApp';
import MenuButtonNew from '../buttons/MenuButtonNew';
import { toast } from 'react-toastify';

const MAIN_MENU = [
	{ name: 'HUB', link: 'https://hub.befitter.io/' },
	{ name: 'Litepaper', link: '/litePaper' }
]

const Logo: React.FC<any> = () => {
	return (
		<Link href={'/'}>
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
	);
};
const HomeHeaderNew: React.FC<any> = ({ sxProps, children, headerLandingPage, currentPage }) => {
	const [statusPopup, setStatusPopup] = useState(false);
	const isMobile992 = useMediaQuery('(max-width:992px)');
	const isMobile = useMediaQuery('(max-width:599px)');
	const stickTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 200,
	});
	console.log(stickTrigger);

	const handleCommingSoon = () => {
		toast('COMING SOON!', {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}
	console.log(currentPage);

	return (
		<Box component={'header'}>
			<AppBar
				color="transparent"
				square
				elevation={0}
				sx={{
					background: (currentPage === '1' && !stickTrigger) || (!stickTrigger && isMobile) ? 'linear-gradient(180deg, rgba(185, 185, 185, 0.4) 0%, rgba(177, 177, 177, 0) 100%)' : '#fff',
					// borderBottom: currentPage === '1' ? '0' : '1px solid #E9EAEF',
					transition: 'all ease 0.2s ',
					padding: currentPage === '1' ? '14px 0' : '0'
				}}
			>
				<Toolbar
					sx={{
						height: stickTrigger ? 80 : 'unset',
						// borderBottom: stickTrigger ? '1px solid #E9EAEF' : 'unset',
					}}
				>
					<Container
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							maxWidth: '1120px !important',
							padding: '0 0 !important'
						}}
					>
						<>
							<Logo />
							{!isMobile992 && <MainMenu>
								<ButtonApp onClick={() => setStatusPopup(true)}><span>GET THE APP</span></ButtonApp>
								<MenuItem onClick={() => handleCommingSoon()} hover={true}>STAKING</MenuItem>
								{MAIN_MENU?.map((item, index) => (
									<Link key={index} href={item.link}>
										<MenuItem onClick={() => index === 0 ? handleCommingSoon() : null} hover={true}>{item.name}</MenuItem>
									</Link>
								))}
							</MainMenu>}
							{isMobile992 && <MenuButtonNew customImage={'40px'} />}
						</>
					</Container>
				</Toolbar>
			</AppBar>
			<PopupApp statusPopup={statusPopup} handleToggleStatusPopup={setStatusPopup} />
		</Box>
	);
};

export default HomeHeaderNew;

const LinkItem = styled(Link)({
	'&:hover': {

	}
})
const MainMenu = styled(Stack)({
	flexDirection: 'row',
	alignItems: 'center',
	marginLeft: 'auto',
})
type menuItemProp = BoxProps & {
	hover: boolean
}
const MenuItem = styled(Box)((props: menuItemProp) => ({
	padding: '12px 16px',
	borderRadius: '12px',
	marginRight: 16,
	...TEXT_STYLE(20, 600, '#31373E'),
	fontFamily: 'BeVietnamPro',
	textTransform: 'uppercase',
	color: '#31373E',
	cursor: 'pointer',
	'&:last-of-type': {
		marginRight: 0
	},
	'&:hover': {
		color: '#FF6D24',
		animation: props.hover ? 'shake .15s linear' : 'internal',
	},
	'@keyframes shake': {
		'0%,100%': { transform: `translateY(0)` },
		'30%': { transform: 'translateY(-10px)' },
		'60%': { transform: 'translateY(10px)' },
		'90%': { transform: 'translateY(-10px)' },
	},
}))
const ButtonApp = styled(Button)({
	background: '#FFFFFF',
	boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
	fontFamily: 'Electrofied',
	fontStyle: 'italic',
	padding: '5.5px 16px',
	borderRadius: '12px',
	marginRight: 16,
	...TEXT_STYLE(20, 600, '#FF8A50'),
	'&:hover': {
		background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
		color: '#ffffff',
		'& span': {
			animation: 'shake .15s linear',
		}
	},
	'@keyframes shake': {
		'0%,100%': { transform: `translateY(0)` },
		'30%': { transform: 'translateY(-10px)' },
		'60%': { transform: 'translateY(10px)' },
		'90%': { transform: 'translateY(-10px)' },
	},
})
