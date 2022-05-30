import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
	IconButton,
	Icon,
	Button,
	Stack,
	useMediaQuery,
	useScrollTrigger,
} from '@mui/material';
import { toast } from 'react-toastify';
import { IconImage } from '../styled';
import {
	LOGO,
	MENU,
	HOME_LOGO,
	HOME_BG_LOGO,
	HOME_MENU,
	ITEMS,
} from '../../constants/header';

const HomeHeader: React.FC<any> = ({ sxProps, children }) => {
	const isTablet = useMediaQuery('(max-width:960px)');
	const isMobile = useMediaQuery('(max-width:600px)');
	const [showMenu, setShowMenu] = React.useState<boolean>(false);
	const stickTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 200,
	});

	function handleMenuItemClick() {
		setShowMenu(false);
		toast('COMING SOON!', {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}

	function handleOpenMenu() {
		setShowMenu(true);
	}

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
							maxWidth: { xl: 'unset' },
							px: { xl: 7 },
						}}
					>
						{stickTrigger ? (
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
						) : (
							<Link href={'/'}>
								<Box
									component={'a'}
									sx={{
										display: 'flex',
										// alignItems: 'center',
										cursor: 'pointer',
										width: isMobile ? 357 / 2.5 : isTablet ? 357 / 2 : 357,
										height: isMobile ? 165 / 2.5 : isTablet ? 165 / 2 : 165,
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
										height={isMobile ? 24 : isTablet ? 32 : 64}
									/>
								</Box>
							</Link>
						)}
						{isMobile ? (
							<IconButton onClick={handleOpenMenu}>
								<Icon sx={{ width: 48, height: 48 }}>
									<IconImage src={HOME_MENU} />
								</Icon>
							</IconButton>
						) : stickTrigger ? (
							<IconButton onClick={handleOpenMenu}>
								<Icon sx={{ width: 48, height: 48 }}>
									<IconImage src={MENU} />
								</Icon>
							</IconButton>
						) : (
							<Button
								href={ITEMS[0].href}
								target="_blank"
								sx={{
									height: 53,
									fontFamily: 'Electrofied',
									fontSize: 20,
									color: '#fff',
									px: 3,
									py: 2,
									background: 'rgba(255, 255, 255, 0.2)',
									border: '2px solid #FFFFFF',
									boxShadow: '0px 0px 12px rgba(255, 255, 255, 0.5)',
									'&:hover': {
										background:
											'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
										color: '#fff',
										border: 'none',
										px: '26px',
										py: '18px',
									},
								}}
							>
								{ITEMS[0].title}
							</Button>
						)}
						{/* {(!isMobile || showMenu) && (
							<Box
								sx={{
									position: 'relative',
									width: 192,
									height: 176/3,
								}}
							>
								<Box
									sx={{
										position: 'absolute',
										width: 192,
										height: 176/3,
										borderRadius: '16px',
										border: '2px solid #FFFFFF',
										top: 4,
										left: 4,
									}}
								></Box>
								<Box
									sx={{
										position: 'absolute',
										width: 192,
										height: 176/3,
										background: '#FFF',
										opacity: 0.8,
										backdropFilter: 'blur(24px)',
										borderRadius: '16px',
									}}
								>
									<Stack
										spacing={0}
										alignItems="center"
										justifyContent="center"
										sx={{ height: '100%' }}
									>
										{ITEMS.map(({ title, href }) => (
											// <Link href={href} key={title}>
											<Button
												key={title}
												variant="text"
												// onClick={handleMenuItemClick}
												href={href}
												target={"_blank"}
												sx={{
													fontFamily: 'Electrofied',
													fontStyle: 'italic',
													fontWeight: 900,
													fontSize: 18,
													color: '#31373E',
												}}
											>
												{title}
											</Button>
											// </Link>
										))}
									</Stack>
								</Box>
							</Box>
						)} */}
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default HomeHeader;
