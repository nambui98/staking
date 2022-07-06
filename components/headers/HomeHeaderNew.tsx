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

const MAIN_MENU = [
	{ name: 'GET THE APP', link: '#' },
	{ name: 'Staking', link: '#' },
	{ name: 'HUB', link: '#' },
	{ name: 'Litepaper', link: '#' }
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
const HomeHeaderNew: React.FC<any> = ({ sxProps, children, headerLandingPage }) => {
	const { asPath } = useRouter();
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
	const [statusPopup, setStatusPopup] = useState(false);

	const stickTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 200,
	});

	return (
		<Box component={'header'}>
			<AppBar
				color="transparent"
				square
				elevation={0}
				sx={{
					background: stickTrigger ? '#fff' : 'transparent',
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
						disableGutters
						sx={{
							py: 0,
							pt: stickTrigger ? 'unset' : 3,
							display: 'flex',
							justifyContent: 'space-between',
							maxWidth: '1120px',
							alignItems: 'center',
							px: { xl: 7 },
						}}
					>
						<>
							<Logo />
							<MainMenu>
								{MAIN_MENU?.map((item, index) => (
									<Link key={index} href={item.link}>
										<MenuItem onClick={() => setStatusPopup(true)}  active={index === 0 ? true : false}>{item.name}</MenuItem>
									</Link>
								))}
							</MainMenu>
							<MenuButton customImage={'40px'} />
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
