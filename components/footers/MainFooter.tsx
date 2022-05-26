import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	Stack,
	Icon,
	Button,
	Typography,
	styled,
} from '@mui/material';

import { LOGO, BG1, BG2, ICON, EMAIL, BUTTON } from '../../constants/footer';

const IconImage = styled('img')({
	display: 'flex',
	height: 'inherit',
	width: 'inherit',
});

const DownloadIcon: React.FC<any> = () => (
	<Icon>
		<IconImage src={ICON.DOWNLOAD} />
	</Icon>
);

const MainFooter: React.FC<any> = ({ sxProps, children }) => {
	return (
		<Box
			component={'footer'}
			sx={{
				background: '#272B3F',
				position: 'relative',
				height: 215,
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: 20,
					left: '8.6%',
				}}
			>
				<img src={BG1} width={'auto'}></img>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					bottom: 9.25,
					right: '14.385%',
				}}
			>
				<img src={BG2} width={'auto'}></img>
			</Box>
			<Container
				sx={{
					position: 'relative',
				}}
			>
				<Stack direction="row" justifyContent="space-between" mt={5}>
					<Link href={'/'}>
						<Box
							component={'a'}
							sx={{
								display: 'flex',
								alignItems: 'center',
								cursor: 'pointer',
							}}
						>
							<img src={LOGO} alt="Logo" width={'auto'} height={48} />
						</Box>
					</Link>
					<Stack direction="row" spacing={4}>
						<Button variant="text" startIcon={<DownloadIcon />}>
							{BUTTON.DOCS.title}
						</Button>
						<Button variant="text" startIcon={<DownloadIcon />}>
							{BUTTON.MEDIA.title}
						</Button>
						<Button variant="outlined" sx={{ borderRadius: '16px' }}>
							{BUTTON.SUPPORT.title}
						</Button>
					</Stack>
				</Stack>
				<Stack direction="row" ml={3} mt={3} spacing={1}>
					<Icon>
						<IconImage src={ICON.SMS} />
					</Icon>
					<Typography fontSize={16}>{EMAIL}</Typography>
				</Stack>
			</Container>
		</Box>
	);
};

export default MainFooter;
