import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material';
import NextNProgress from 'nextjs-progressbar';
import theme from '../utils/theme';
import { pageView } from "../utils/gtag";

import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WalletProvider } from '../contexts/WalletContext';


function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			pageView(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (

		<ThemeProvider theme={theme}>
			<WalletProvider>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<NextNProgress color="#FF6D24" />
				<Component {...pageProps} />
				<ToastContainer />
			</WalletProvider>
		</ThemeProvider >

	)
}
export default MyApp
