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
	BoxProps
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
	{ name: 'GET THE APP', link: '#' },
	{ name: 'Staking', link: '#' },
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
	const { asPath } = useRouter();
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
	const [statusPopup, setStatusPopup] = useState(false);
	const isMobile992 = useMediaQuery('(max-width:992px)');
	console.log(currentPage, 333)
	const stickTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 200,
	});
	
	const handleCommingSoon = () => {
		toast('COMING SOON!', {
			position: "top-center",
			autoClose: 5000,
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
					background: currentPage === '1' ? 'linear-gradient(180deg, rgba(185, 185, 185, 0.4) 0%, rgba(177, 177, 177, 0) 100%)' : '#fff',
					borderBottom: currentPage === '1' ? '0' : '1px solid #E9EAEF',
					transition: 'all ease 0.2s ',
				}}
			>
				<Toolbar
					sx={{
						height: stickTrigger ? 80 : 'unset',
						borderBottom: stickTrigger ? '1px solid #E9EAEF' : 'unset',
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
								{MAIN_MENU?.map((item, index) => (
									<Link key={index} href={item.link}>
										<MenuItem onClick={() => index === 0 ? setStatusPopup(true) : index === 1 ? handleCommingSoon() : null}  active={index === 0 ? true : false}>{item.name}</MenuItem>
									</Link>
								))}
							</MainMenu>}
							<MenuButtonNew customImage={'40px'} />
						</>
					</Container>
				</Toolbar>
			</AppBar>
			<PopupApp statusPopup={statusPopup} handleToggleStatusPopup={setStatusPopup} />
		</Box>
	);
};

export default HomeHeaderNew;

const MainMenu = styled(Stack)({
	flexDirection: 'row',
	alignItems: 'center',
	marginLeft: 'auto',
})
type menuItemProp = BoxProps & {
	active: boolean
}
const MenuItem = styled(Box)((props: menuItemProp) => ({
	padding: '12px 16px',
	borderRadius: '12px',
	marginRight: 16,
	...TEXT_STYLE(20, 600, '#31373E'),
	background: props.active ? '#FFFFFF' : 'transparent',
	boxShadow: props.active ? '0px 2px 8px rgba(0, 0, 0, 0.15)' : 'none',
	fontFamily: props.active ? 'Electrofied': 'BeVietnamPro',	
	textTransform: 'uppercase',
	fontStyle: props.active ? 'italic' : 'normal',
	color: props.active ? '#FF8A50' : '#31373E',
	cursor: 'pointer',
}))
