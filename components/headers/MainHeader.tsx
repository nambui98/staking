import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
} from '@mui/material';
import MenuButton from '../buttons/MenuButton';
import { LOGO } from '../../constants/header';

const MainHeader: React.FC<any> = ({ sxProps, children }) => {
	return (
		<Box component={'header'} mb={10}>
			<AppBar
				color="transparent"
				square
				elevation={0}
				sx={{
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
						<MenuButton />
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default MainHeader;
