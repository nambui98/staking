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
	{ name: 'HUB', link: 'https://hub.befitter.io/' },
	{ name: 'BUSINESS PAGE', link: '' },
	{ name: 'manifesto', link: '' }
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
				<img src={HOME_LOGO} alt="Logo" width={'auto'} height={40} />


				<BoxSecurichain>{<img src={SECURICHAIN_LOGO} />}</BoxSecurichain>

			</Box>
		</Link>
	);
};
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

const HomeHeaderNew: React.FC<any> = ({ sxProps, children, headerLandingPage, currentPage }) => {
	const [statusPopup, setStatusPopup] = useState(false);
	const isMobile992 = useMediaQuery('(max-width:992px)');
	const isMobile = useMediaQuery('(max-width:599px)');
	// const stickTrigger = useScrollTrigger({
	// 	disableHysteresis: true,
	// 	threshold: 200,
	// });
	// console.log(stickTrigger);

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

	return (
		<Box component={'header'}>
			<AppBar
				color="transparent"
				square
				elevation={0}
				sx={{
					backgroundColor: ' rgba(28, 30, 41, 0.8)',
					backdropFilter: 'blur(24px)',
					// background: (currentPage === '1' && !stickTrigger) || (!stickTrigger && isMobile) ? 'linear-gradient(180deg, rgba(185, 185, 185, 0.4) 0%, rgba(177, 177, 177, 0) 100%)' : '#fff',
					// borderBottom: currentPage === '1' ? '0' : '1px solid #E9EAEF',
					transition: 'all ease 0.2s ',
					padding: currentPage === '1' ? '14px 0' : '0'
				}}
			>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						// maxWidth: '1120px !important',
						padding: '0 120px !important'
					}}
				>
					<>
						<Logo />
						{/* {!isMobile992 &&  */}
						<MainMenu>
							<ButtonApp onClick={() => setStatusPopup(true)} className="button">
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

							<MenuItem onClick={() => handleCommingSoon()} hover={true}>
								<div>STAKING</div>
								<div>STAKING</div>
							</MenuItem>
							{MAIN_MENU?.map((item, index) => (
								<Link key={index} href={item.link}>
									<MenuItem onClick={() => index === 0 ? handleCommingSoon() : null} hover={true}>

										<div>{item.name}</div>
										<div>{item.name}</div>

									</MenuItem>
								</Link>
							))}
							<Button sx={{ backgroundColor: 'transparent', boxShadow: 'none', }} >
								<img src="assets/icons/menu_dark.png" alt="" />
							</Button>
						</MainMenu>
						{/* } */}
						{isMobile992 && <MenuButtonNew customImage={'40px'} />}
					</>
				</Box>

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
	padding: '0px 16px',
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
			position: 'absolute',
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
})
