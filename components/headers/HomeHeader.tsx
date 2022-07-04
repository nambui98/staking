import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
	Theme,
	useMediaQuery,
	useScrollTrigger,
} from '@mui/material';
import MenuButton from '../buttons/MenuButton';
import {
	LOGO,
	HOME_LOGO,
	HOME_BG_LOGO,
} from '../../constants/header';

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

const LogoWithBackground: React.FC<any> = ({ isSm, isXs }) => {
	return (
		<Link href={'/'}>
			<Box
				component={'a'}
				sx={{
					display: 'flex',
					// alignItems: 'center',
					cursor: 'pointer',
					width: isXs ? 357 / 2.5 : isSm ? 357 / 2 : 357,
					height: isXs ? 165 / 2.5 : isSm ? 165 / 2 : 165,
					backgroundImage: `url(${HOME_BG_LOGO})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					pt: { xs: 1, md: 3 },
					pl: { xs: 3, md: 6 },
				}}
			>
				<img
					src={HOME_LOGO}
					alt="Logo"
					width={'auto'}
					height={isXs ? 24 : isSm ? 32 : 64}
				/>
			</Box>
		</Link>
	);
};

const HomeHeader: React.FC<any> = ({ sxProps, children, headerLandingPage }) => {
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

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
							alignItems: stickTrigger ? 'center' : 'flex-start',
							maxWidth: { xl: 'unset' },
							px: { xl: 7 },
						}}
					>
						{headerLandingPage && <>
								<Logo />
								<MenuButton />
							</>}
						{!headerLandingPage && (
							stickTrigger ? (
								<>
									<Logo />
									<MenuButton />
								</>
							) : (
								<>
									<LogoWithBackground isSm={isSm} isXs={isXs} />
									<MenuButton dark={false} />
								</>
							)
						)}
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default HomeHeader;
