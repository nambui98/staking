import Head from 'next/head';
import { Box, ThemeProvider } from '@mui/material';

import { META_TITLE, META_DESC } from '../../constants/head';
import HomeHeader from '../headers/HomeHeader';
import MainFooter from '../footers/MainFooter';

const HomeLayout: React.FC<any> = ({ sxProps, children, headerLandingPage }) => {
	return (
		<>
			<Head>
				<title>beFITTER</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta name="description" content={META_DESC} />
				<meta property="og:title" content={META_TITLE} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.befitter.io/" />
				<meta
					property="og:image"
					content="https://befitter.io/images/image_meta.png"
				/>
				<meta property="og:description" content={META_DESC} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:title" content={META_TITLE} />
				<meta property="twitter:description" content={META_DESC} />
				<meta
					property="twitter:image"
					content="https://befitter.io/images/image_meta.png"
				/>
			</Head>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<HomeHeader headerLandingPage={headerLandingPage} />
				<Box component="main" flexGrow={1} sx={{...sxProps}}>
					{children}
				</Box>
				<MainFooter />
			</Box>
		</>
	);
};

export default HomeLayout;
