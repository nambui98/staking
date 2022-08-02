import Head from 'next/head';
import { Backdrop, Box, CircularProgress } from '@mui/material';

import { META_TITLE, META_DESC } from '../../constants/head';
import MainHeader from '../headers/MainHeader';
import MainFooter from '../footers/MainFooter';
import { ConnectWallet } from '../pageComponent/marketplace/ConnectWallet';
import { useWalletContext } from '../../contexts/WalletContext';
import { PopupMessage } from '../pageComponent/claim/PopupMessage';
import { useCommonContext } from '../../contexts/CommonContext';


const MainLayout: React.FC<any> = ({ sxProps, children, titlePage }) => {
	const { setToggleActivePopup, activePopup } = useWalletContext();
	const { popupNoti, spinner } = useCommonContext();
	return (
		<>
			<Head>
				<title>{titlePage ? titlePage : 'beFITTER'}</title>
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
				<MainHeader />
				<Box component="main" flexGrow={1} sx={{ ...sxProps }}>
					{children}
				</Box>
				<ConnectWallet status={activePopup} handleToggleStatus={setToggleActivePopup} />
				<MainFooter />
				<PopupMessage
					status={popupNoti.status}
					title={popupNoti.title}
					handleToggleStatus={popupNoti.handleToggleStatus}
					popupType={popupNoti.popupType}
					message={popupNoti.message}
					titleButton={popupNoti.titleButton}
					titleCustomColor={popupNoti.titleCustomColor}
					handleClickButton={popupNoti.handleClickButton || popupNoti.handleHidePopup}
				/>
				<Backdrop
					sx={{ color: '#FF6D24', zIndex: 2000 }}
					className="backdrop-loading"
					open={spinner.status}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			</Box>
		</>
	);
};

export default MainLayout;
