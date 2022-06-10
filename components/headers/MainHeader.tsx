import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
	Stack,
} from '@mui/material';
import MenuButton from '../buttons/MenuButton';
import { LOGO, PAGE } from '../../constants/header';
import { useRouter } from 'next/router';

const MainHeader: React.FC<any> = ({ sxProps, children }) => {
	const { asPath } = useRouter();

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
						<Link href={PAGE.HOME.link}>
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
						<Stack sx={{marginLeft: 'auto'}}>
							<Box sx={[menuItem, asPath === PAGE.PRE_SALES.link ? activeLink : {}]}><Link href={PAGE.PRE_SALES.link}>{PAGE.PRE_SALES.title}</Link></Box>
						</Stack>
						<MenuButton />
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default MainHeader;

const menuItem = {
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	'& a': {
		textDecoration: 'none',
		color: '#5A6178',
		fontSize: 16,
		fontWeight: 600,
	},
	height: '100%',
	padding: '0 16px'
}
const activeLink = {
	'& a': {
		color: '#31373E'
	},
	'&:before': {
		content: `''`,
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		height: 2,
		backgroundColor: '#FF8A50'
	}
}
