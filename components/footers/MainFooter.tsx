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
	useMediaQuery,
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
	const isTablet = useMediaQuery('(max-width:960px)');

	return (
		<Box
			component={'footer'}
			sx={{
				background: '#272B3F',
				position: 'relative',
				height: {xs: 'unset', md: 215},
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: 20,
					left: { xs: '-40%', sm: '8.6%' },
				}}
			>
				<img src={BG1} width={'auto'}></img>
			</Box>
			{!isTablet && (
				<Box
					sx={{
						position: 'absolute',
						bottom: 9.25,
						right: '14.385%',
					}}
				>
					<img src={BG2} width={'auto'}></img>
				</Box>
			)}
			<Container
				sx={{
					position: 'relative',
				}}
			>
				<Stack
					direction="row"
					justifyContent={{ xs: 'center', md: 'space-between' }}
					mt={5}
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
							<img src={LOGO} alt="Logo" width={'auto'} height={48} />
						</Box>
					</Link>
					{!isTablet && (
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
					)}
				</Stack>
				<Stack
					direction="row"
					justifyContent={{ xs: 'center', md: 'start' }}
					ml={{ xs: 0, md: 3 }}
					my={4}
					spacing={1}
				>
					<Icon>
						<IconImage src={ICON.SMS} />
					</Icon>
					<Typography fontSize={16}>{EMAIL}</Typography>
				</Stack>
				{isTablet && (
					<>
						<Stack direction="row" spacing={4} justifyContent="center">
							<Button variant="text" startIcon={<DownloadIcon />}>
								{BUTTON.DOCS.title}
							</Button>
							<Button variant="text" startIcon={<DownloadIcon />}>
								{BUTTON.MEDIA.title}
							</Button>
						</Stack>
						<Stack spacing={2} alignItems="center" mt={4}>
							<Button variant="outlined" sx={{ borderRadius: '16px', width: 340 }}>
								{BUTTON.SUPPORT.title}
							</Button>
							<Box sx={{ width: '100%', height: 1.5, background: '#4E5472' }}></Box>
							<Typography fontSize={14} color="#898E9E">Copyright @2022 beFITTER</Typography>
						</Stack>
					</>
				)}
			</Container>
		</Box>
	);
};

export default MainFooter;
