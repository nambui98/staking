import Head from 'next/head';
import { Box, ThemeProvider } from '@mui/material';

import { META_TITLE, META_DESC } from '../../constants/head';
import HomeHeader from '../headers/HomeHeader';


const HomeLayout: React.FC<any> = ({ sxProps, children }) => {
	return (
		<>
			<Head>
				<title>Befitter</title>
				<meta name="description" content={META_DESC} />
				<meta property="og:title" content={META_TITLE} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.befitter.io/" />
				<meta
					property="og:image"
					content="https://befitter.io/images/item.png"
				/>
				<meta property="og:description" content={META_DESC} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:title" content={META_TITLE} />
				<meta property="twitter:description" content={META_DESC} />
				<meta
					property="twitter:image"
					content="https://befitter.io/images/item.png"
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
				<HomeHeader />
				<Box component="main" flexGrow={1} sx={{...sxProps}}>
					{children}
				</Box>
			</Box>
		</>
	);
};

export default HomeLayout;
