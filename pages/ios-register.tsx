import { NextPage } from 'next';
import {
	Backdrop,
	Box, Button,
	CircularProgress,
	InputBase, InputLabel, Stack, styled,
	Typography,
	useMediaQuery
} from '@mui/material';
import MainLayout from '../components/layouts/MainLayout';
import StayInTouch from '../components/sections/StayInTouch';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import axios from 'axios';

const IosRegister: NextPage = () => {
	const isTablet = useMediaQuery('(max-width:959px)');
	const isXs = useMediaQuery('(max-width: 800px)');

	return (
		<MainLayout sxProps={{background: '#FFF'}}>
			<Stack
				alignItems="center"
				sx={{
					position: 'relative',
					// pt: 12,
					// height: '100%',
					overflow: 'hidden',
				}}
			>
				<Banner isXs={isXs}/>
				<Form isTablet={isTablet} sxProps={{mb: 5}}/>
			</Stack>
			<StayInTouch/>
		</MainLayout>
	);
};


const Banner: React.FC<any> = ({isXs}) => {
	const isTablet = useMediaQuery('(max-width:800px)');
	const BANNER_IMAGE = 'assets/ios/banner.png';
	const BANNER_IMAGE_MOBILE = 'assets/ios/banner_mobile.png'
	return (
		<Stack
			justifyContent="center"
			alignItems="center"
			sx={{
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Stack alignItems="center" sx={{position: 'relative', px: '10%'}}>
				<img src={isXs ? BANNER_IMAGE_MOBILE : BANNER_IMAGE} width={'auto'} height={'auto'}/>
			</Stack>
		</Stack>
	);
}

const Form: React.FC<any> = ({isTablet, sxProps}) => {
	const [textEmail, setTextEmail] = useState('');

	const [textWallet, setTextWallet] = useState('');

	const [errorEmail, setErrorEmail] = useState(false);

	const [errorWallet, setErrorWallet] = useState(false);
	const [errorWalletString, setErrorWalletString] = useState('');

	const [errorCaptcha, setErrorCaptcha] = useState(false);
	const [errorCaptchaString, setErrorCaptchaString] = useState('');

	const [showBackdrop, setShowBackdrop] = useState(false);

	// const recaptchaRef = React.createRef<ReCAPTCHA>();
	const recaptchaRef = React.useRef<ReCAPTCHA>(null);
	const [captchaToken, setCaptchaToken] = useState('');

	const onReCAPTCHAChange = async (captchaCode: any) => {
		// console.log('onReCAPTCHAChange', captchaCode);
		// If the reCAPTCHA code is null or undefined indicating that
		// the reCAPTCHA was expired then return early
		if (!captchaCode) {
			return;
		}
		// Else reCAPTCHA was executed successfully so proceed with the 
		// alert
		setCaptchaToken(captchaCode);
		// Reset the reCAPTCHA so that it can be executed again if user 
		// submits another email.
		// if (recaptchaRef.current) {
		// 	recaptchaRef.current.reset();
		// } else {
		// 	window.location.reload();
		// }
	}

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		if (!textEmail || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(textEmail)) {
			setErrorEmail(true);
			setTimeout(() => setErrorEmail(false), 3000);
			return;
		}
		if (!textWallet) {
			setErrorWallet(true);
			setErrorWalletString('Empty value')
			setTimeout(() => {
				setErrorWallet(false)
				setErrorWalletString('')
			}, 3000);
			return;
		}
		if (!captchaToken) {
			setErrorCaptcha(true);
			setErrorCaptchaString('Please verify the ReCaptcha')
			setTimeout(() => {
				setErrorCaptcha(false)
				setErrorCaptchaString('')
			}, 3000);
			return;
		}

		try {
			setShowBackdrop(true);
			await axios.post(
				"https://apidev.befitter.io/befverification/email",
				{
					email: textEmail,
					walletAddress: textWallet,
					captcha: captchaToken,
				}, {
					headers: {
						"Content-Type": "application/json"
					}
				}
			).then(() => {
				toast('SUCCESS', {
					position: 'top-center',
					autoClose: 3000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			setShowBackdrop(false);
		} catch (error: any) {
			if (error.response.status === 400) {
				if (error.response.data.message === " invalid captcha") {
					setErrorCaptcha(true);
					setErrorCaptchaString('Invalid Captcha')
					setTimeout(() => setErrorCaptcha(false), 3000);
					return;
				}
				if (error.response.data.message === " wallet not registered") {
					setErrorWallet(true);
					setErrorWalletString('Wallet has not been registered')
					setTimeout(() => {
						setErrorWallet(false)
						setErrorWalletString('')
					}, 3000);
					return;
				}
			}
		} finally {
			setShowBackdrop(false)
			setTextEmail('');
			setTextWallet('');
			// Reset the reCAPTCHA when the request has failed or succeeded
			// so that it can be executed again if user submits another email.
			if (recaptchaRef.current) {
				recaptchaRef.current.reset();
				// recaptchaRef.current.execute();
			} else {
				window.location.reload();
			}
		}
	};

	const RECAPTCHA_SITE_KEY = "6LfVxzAgAAAAAEFPNTeG6d8xqKifrYhwVZ4VAKtd";

	return (
		<Box sx={{...sxProps, width: isTablet ? '75%' : 'auto'}}>
			<Backdrop
				sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
				open={showBackdrop}
			>
				<CircularProgress color="inherit"/>
			</Backdrop>
			<Stack alignItems="left" sx={{position: 'relative'}}>
				<img src={'assets/ios/warning.png'} style={{ width: 'fit-content'}}/>
			</Stack>
			<Typography fontSize={{xs: 18, md: 18}} lineHeight={'28px'} color="#31373E">
				{'This email address is your Apple ID and the username that '}
				{!isTablet && <br/>}
				you use to sign in to Apple services.
			</Typography>
			<Typography fontSize={{xs: 18, md: 18}} lineHeight={'28px'} paddingTop={1} color="#31373E">
				{'This wallet address must be the same as what you registered '}
				{!isTablet && <br/>}
				in The Alpha Challenge
			</Typography>
			<Box component="form" sx={{maxWidth: {md: 448}, paddingTop: 5}}>
				<Stack spacing={1} mb={2} alignItems={{xs: 'center', md: 'start'}}>
					<Stack spacing={0} sx={{width: '100%'}}>
						<CustomInput
							fullWidth
							required
							placeholder="ID Apple"
							value={textEmail}
							onChange={(e) => setTextEmail(e.target.value)}
						/>
						<CustomHelperText>
							{errorEmail && 'Incorrect Apple ID'}
						</CustomHelperText>
					</Stack>
					<Stack spacing={0} sx={{width: '100%'}}>
						<CustomInput
							fullWidth
							required
							placeholder="BSC Testnet Wallet"
							value={textWallet}
							onChange={(e) => setTextWallet(e.target.value)}
						/>
						<CustomHelperText>{errorWallet && errorWalletString}</CustomHelperText>
					</Stack>
					<ReCAPTCHA
						ref={recaptchaRef}
						// size="invisible"
						sitekey={RECAPTCHA_SITE_KEY}
						onChange={onReCAPTCHAChange}
					/>
					<CustomHelperText>
						{errorCaptcha && errorCaptchaString}
					</CustomHelperText>
				</Stack>
				<Button
					onClick={handleSubmit}
					sx={{
						background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
						borderRadius: '16px',
						fontSize: {xs: 16, md: 18},
						color: '#fff',
						py: {xs: 1.5, md: 3},
						px: 6,
						border: 'none',
						boxShadow: 'none',
						width: {xs: '100%', md: 'unset'},
					}}
				>
					Confirm
				</Button>
			</Box>
		</Box>
	);
};

const CustomInput = styled(InputBase)({
	'& .MuiInputBase-input': {
		fontSize: 14,
		padding: '14px 24px',
		borderRadius: '8px',
		border: '1px solid #E9EAEF',
		background: '#F8F9FB',
	},
});

const CustomHelperText: React.FC<any> = ({children}) => (
	<InputLabel
		shrink
		sx={{
			mt: 1,
			color: '#FF6F61',
			fontSize: 14,
		}}
	>
		{children}
	</InputLabel>
);

export default IosRegister;