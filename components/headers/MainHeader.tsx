import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
	IconButton,
	Avatar,
} from '@mui/material';

import { LOGO, MENU } from '../../constants/header';

const MainHeader: React.FC<any> = ({ sxProps, children }) => {
	function handleOpenMenu() {}

	return (
		<Box component={'header'} mb={10}>
			<AppBar
				// position="static"
				color="transparent"
				square
				elevation={0}
				sx={{
					// background: (theme) => theme.palette.primary.main,
					background: '#fff',
				}}
			>
				<Toolbar sx={{ height: 80, borderBottom: '1px solid #E9EAEF' }}>
					<Container
						disableGutters
						sx={{
							py: 0,
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
									alignItems: 'center',
									cursor: 'pointer',
								}}
							>
								<img src={LOGO} alt="Logo" width={'auto'} height={40} />
							</Box>
						</Link>
						<IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
							<Avatar alt="Menu" src={MENU} sx={{ width: 48, height: 48 }} />
						</IconButton>
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default MainHeader;
