import { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../utils/gtag';
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
				<script
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
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
