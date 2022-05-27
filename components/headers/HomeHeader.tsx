import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
	IconButton,
	Avatar,
	Button,
	Stack,
	useMediaQuery,
} from '@mui/material';
import { toast } from 'react-toastify';

import {
	HOME_LOGO,
	HOME_BG_LOGO,
	HOME_MENU,
	ITEMS,
} from '../../constants/header';

const HomeHeader: React.FC<any> = ({ sxProps, children }) => {
	const isTablet = useMediaQuery('(max-width:960px)');
	const isMobile = useMediaQuery('(max-width:600px)');
	const [showMenu, setShowMenu] = React.useState<boolean>(false);

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

	function handleOpenMenu() {setShowMenu(true)}

	return (
		<Box component={'header'}>
			<AppBar color="transparent" square elevation={0}>
				<Toolbar>
					<Container
						disableGutters
						sx={{
							py: 0,
							pt: 3,
							display: 'flex',
							justifyContent: 'space-between',
							maxWidth: { xl: 1920 - 240 },
						}}
					>
						<Link href={'/'}>
							<Box
								component={'a'}
								sx={{
									display: 'flex',
									// alignItems: 'center',
									cursor: 'pointer',
									width: isMobile ? 357/4 : isTablet ? 357/2 : 357,
									height: isMobile ? 165/4 : isTablet ? 165/2 : 165,
									backgroundImage: `url(${HOME_BG_LOGO})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'contain',
									pt: 3,
									pl: 6,
								}}
							>
								<img src={HOME_LOGO} alt="Logo" width={'auto'} height={isMobile ? 16 : isTablet ? 32 : 64} />
							</Box>
						</Link>
						{isMobile && !showMenu && (
							<IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
								<Avatar
									alt="Menu"
									src={HOME_MENU}
									sx={{ width: 48, height: 48 }}
								/>
							</IconButton>
						)}
						{(!isMobile || showMenu) && (
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
						)}
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default HomeHeader;
