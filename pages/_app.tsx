import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material';
import NextNProgress from 'nextjs-progressbar';
import AOS from "aos";
import "aos/dist/aos.css";
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
		// const handleStart = (url: String) => {
		// 	url !== router.pathname ? setLoading(true) : setTimeout(() => setLoading(false), 1000);
		// };
		const handleComplete = (url: string) => setTimeout(() => setLoading(false), 1000)

		// router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);
	}, [router]);
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<>

			<ThemeProvider theme={theme}>

				<WalletProvider>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Loading loading={loading} />
					{/* <NextNProgress color="#FF6D24" /> */}
					<Component {...pageProps} />
					<ToastContainer />
				</WalletProvider>
			</ThemeProvider >
		</>

	)
}
export default MyApp
