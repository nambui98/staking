import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
import Loading from '../components/loadding/loadding';


function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			pageView(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	useEffect(() => {
		const handleStart = (url: String) => {
			url !== router.pathname ? setLoading(true) : setLoading(false);
		};
		const handleComplete = (url: string) => setLoading(false);

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);
	}, [router]);
	return (
		<>

			<Loading loading={loading} />
			<ThemeProvider theme={theme}>

				<WalletProvider>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					{/* <NextNProgress color="#FF6D24" /> */}
					<Component {...pageProps} />
					<ToastContainer />
				</WalletProvider>
			</ThemeProvider >
		</>

	)
}
export default MyApp
