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
	SECURICHAIN_LOGO,
} from '../../constants/header';
import { TEXT_STYLE } from '../../styles/common/textStyles';
import { useRouter } from 'next/router';
import { PopupApp } from '../../containers/home/PopupApp';
import MenuButtonNew from '../buttons/MenuButtonNew';
import { toast } from 'react-toastify';

const MAIN_MENU = [
	{ name: 'HUB', link: 'https://hub.befitter.io/claim' },
	{ name: 'Business Paper', link: '/business' },
	// { name: 'manifesto', link: '' }
]
const BoxSecurichain = styled(Box)({
	margin: 'auto auto auto 24px',
	'@media (max-width: 1100px)': {
		display: 'flex',
		justifyContent: 'flex-end',
		'& img': {
			width: 98,
			marginRight: -15,
			marginTop: -4
		}
	},
	'@media (max-width: 767px)': {
		display: 'none',
	}
})

const HomeHeaderNew: React.FC<any> = ({ sxProps, children, headerLandingPage, currentPage }) => {
	const [statusPopup, setStatusPopup] = useState(false);
	const isMobile992 = useMediaQuery('(max-width:992px)');
	const isMobile = useMediaQuery('(max-width:599px)');
	const isMobile1500 = useMediaQuery('(max-width: 1500px)');
	const isMobile1140 = useMediaQuery('(max-width: 1140px)');

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

	const Logo: React.FC<any> = () => {
		return (
			<Link href={'/'}>
				<Box
					component={'a'}
					sx={{
						display: 'flex',
						alignItems: 'center',
						cursor: 'pointer',
						'@media (max-width: 599px)': {
							img: {
								width: '33.33px',
								height: 'auto'
							}
						}
					}}
				>
					<img src={isMobile ? 'assets/logo/logo.png' : HOME_LOGO} alt="Logo" width={'auto'} height={40} />


					<Link target="_blank" href={'https://www.securichain.io/audits/2022/beFITTERTokenAudit_Public.pdf'}><BoxSecurichain>{<img src={SECURICHAIN_LOGO} />}</BoxSecurichain></Link>

				</Box>
			</Link>
		);
	};

	return (
		<Box component={'header'}>
			<AppBar
				color="transparent"
				square
				elevation={0}
				sx={{
					backgroundColor: ' rgba(28, 30, 41, 0.5)',
					backdropFilter: 'blur(24px)',
					// background: (currentPage === '1' && !stickTrigger) || (!stickTrigger && isMobile) ? 'linear-gradient(180deg, rgba(185, 185, 185, 0.4) 0%, rgba(177, 177, 177, 0) 100%)' : '#fff',
					// borderBottom: currentPage === '1' ? '0' : '1px solid #E9EAEF',
					transition: 'all ease 0.2s ',
					'@media (min-width: 768px)': {
						padding: '2px 0',
					}
				}}
			>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: '0 16px !important',
						'@media (min-width: 1500px)': {
							padding: '0 120px !important'
						}
					}}
				>
					<>
						<Logo />
						{/* {!isMobile992 &&  */}
						<MainMenu>
							<ButtonApp className="button" onClick={() => setStatusPopup(true)}>
								<Box className="button-wrapper">
									<Box className="text" sx={{
										...TEXT_STYLE(20, 600, '#ffffff'), fontFamily: 'Electrofied',
										fontStyle: 'italic',
									}}>GET THE APP</Box>
									<Box className="text2" sx={{
										...TEXT_STYLE(20, 600, '#ffffff'), fontFamily: 'Electrofied',
										fontStyle: 'italic',
									}}>GET THE APP</Box>

								</Box>
							</ButtonApp>

							{!isMobile1140 && <Link href={'/staking'}>
								<Box sx={{position: 'relative'}}>
									<Hot className='animationArrow'>Hot</Hot>
									<MenuItem hover={true}>									
										<div>STAKING</div>
										<div>STAKING</div>
									</MenuItem>
								</Box>								
							</Link>}
							{!isMobile1140 && MAIN_MENU?.map((item, index) => (
								<Link key={index} href={item.link}>
									<MenuItem hover={true}>
										<div>{item.name}</div>
										<div>{item.name}</div>
									</MenuItem>
								</Link>
							))}
							{/* {!isMobile1500 && <MenuItem onClick={() => handleCommingSoon()} hover={true}>
								<div>manifesto</div>
								<div>manifesto</div>
							</MenuItem>} */}
							<MenuButtonNew customImage={'40px'} />
						</MainMenu>
						{/* } */}
					</>
				</Box>

			</AppBar>
			<PopupApp statusPopup={statusPopup} handleToggleStatusPopup={setStatusPopup} />
		</Box>
	);
};

export default HomeHeaderNew;

const Hot = styled(Box)({
	position: 'absolute',
	right: '1px',
	top: '-12px',
	background: '#FF6F61',
	borderRadius: 4,
	padding: '2px 5px',
	...TEXT_STYLE(10, 700, '#ffffff'),
	fontStyle: 'italic',
	textTransform: 'uppercase',
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
	padding: '0px 25px',
	height: "20px",
	borderRadius: '12px',
	marginRight: 16,
	...TEXT_STYLE(20, 600, '#FFF'),
	fontFamily: 'BeVietnamPro',
	textTransform: 'uppercase',
	color: '#FFF',
	cursor: 'pointer',
	overflow: 'hidden',
	transition: 'all .4s',
	'& div': {
		transition: 'all .3s',
		'&:last-child': {
			opacity: 0,
			position: 'relative',
		}
	},
	'&:last-of-type': {
		marginRight: 0
	},
	'&:hover div': {
		transform: "translateY(-100%)",
		color: '#FF6D24',
		'&:last-child': {
			opacity: 1,
		},
		'&:first-child': {
			opacity: 0,
		}
	},
}))
const ButtonApp = styled(Button)({
	background: 'url(assets/backgrounds/bt-bg.png)',
	height: '46px',
	width: '198px',
	borderRadius: "12px",
	position: "relative",
	textAlign: "center",
	transition: "all 0.3s",
	fontFamily: 'Electrofied',
	fontStyle: 'italic',
	padding: '5.5px 16px',
	marginRight: 16,
	boxShadow: '0px 2px 8px rgba(0, 0, 0, 0)',
	...TEXT_STYLE(20, 600, '#ffffff'),
	'& div': {
		overflow: 'hidden',
		position: 'absolute',
		width: '100%',
		height: '100%',
		left: 0,
		color: '#fff',
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		// transition: 'top 5s'
		transition: "all 0.3s",

	},
	'&:hover': {
		background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
		boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
	},
	'@media (max-width: 767px)': {
		height: '31px !important',
		width: 140,
		backgroundPosition: '100%',
		backgroundSize: 'cover',
		'& div': {
			...TEXT_STYLE(14, 600, '#ffffff'),
		}
	}
})
