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
} from '@mui/material';
import { toast } from 'react-toastify';

import { HOME_LOGO, HOME_BG_LOGO, ITEMS } from '../../constants/header';

const HomeHeader: React.FC<any> = ({ sxProps, children }) => {
	function handleMenuItemClick() {
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
									width: 357,
									height: 165,
									backgroundImage: `url(${HOME_BG_LOGO})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'contain',
									pt: 3,
									pl: 6,
								}}
							>
								<img src={HOME_LOGO} alt="Logo" width={'auto'} height={64} />
							</Box>
						</Link>
						{/* <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
							<Avatar alt="Menu" src={MENU} sx={{ width: 48, height: 48 }} />
						</IconButton> */}
						<Box
							sx={{
								position: 'relative',
								width: 192,
								height: 176,
							}}
						>
							<Box
								sx={{
									position: 'absolute',
									width: 192,
									height: 176,
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
									height: 176,
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
												onClick={handleMenuItemClick}
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
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default HomeHeader;
