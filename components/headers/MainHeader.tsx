import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
	styled,
} from '@mui/material';
import MenuButton from '../buttons/MenuButton';
import { LOGO, SECURICHAIN_LOGO } from '../../constants/header';

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
						<BoxSecurichain>{<img src={SECURICHAIN_LOGO} />}</BoxSecurichain>
						<MenuButton />
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default MainHeader;

const BoxSecurichain = styled(Box)({
	margin: 'auto auto auto 24px',
	'@media (max-width: 465px)': {
		display: 'none',
	}
})