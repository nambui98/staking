import Head from 'next/head';
import { Box, ThemeProvider } from '@mui/material';

import theme from '../../utils/theme';
import { GA_TRACKING_ID } from '../../utils/gtag';
import { META_TITLE, META_DESC } from '../../constants/head';
import MainHeader from '../headers/MainHeader';
import MainFooter from '../footers/MainFooter';


const MainLayout: React.FC<any> = ({ sxProps, children }) => {
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
				{/* <script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${GA_TRACKING_ID}', {
							page_path: window.location.pathname,
						});
				`,
					}}
				/> */}
			</Head>
			<ThemeProvider theme={theme}>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						minHeight: '100vh',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<MainHeader />
					<Box component="main" flexGrow={1} sx={{...sxProps}}>
						{children}
					</Box>
					<MainFooter />
				</Box>
			</ThemeProvider>
		</>
	);
};

export default MainLayout;
