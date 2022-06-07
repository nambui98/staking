import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	Stack,
	Grid,
	Typography,
	InputBase,
	Button,
	Icon,
	Snackbar,
	Alert,
	Backdrop,
	CircularProgress,
	InputLabel,
	styled,
	Radio,
	RadioProps,
	RadioGroup,
	FormControl,
	FormLabel,
	FormControlLabel,
	useMediaQuery,
} from '@mui/material';
import { toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";

import MainLayout from '../components/layouts/MainLayout';
import { IMG, QUESTIONS } from '../constants/event';
import { IconImage } from '../components/styled';
import StayInTouch from '../components/sections/StayInTouch';
import { END_DATE_EVENT, END_DATE_EVENT_EXTRA_HOURS } from '../constants/common';

const RECAPTCHA_SITE_KEY = "6LfVxzAgAAAAAEFPNTeG6d8xqKifrYhwVZ4VAKtd";

const CustomInput = styled(InputBase)({
	'& .MuiInputBase-input': {
		fontSize: 14,
		padding: '14px 24px',
		borderRadius: '8px',
		border: '1px solid #E9EAEF',
		background: '#F8F9FB',
	},
});

const CustomHelperText: React.FC<any> = ({ children }) => (
	<InputLabel
		shrink
		sx={{
			mt: 1,
			color: '#F00',
			fontSize: 14,
		}}
	>
		{children}
	</InputLabel>
);

const EventName: React.FC<any> = ({ sxProps }) => {
	const isTablet = useMediaQuery('(max-width:959px)');
	const isMobile = useMediaQuery('(max-width:599px)');

	return (
		<Box
			sx={{
				...sxProps,
				position: 'relative',
				height: 220,
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: { xs: 20, sm: 30 },
					left: { xs: -175, sm: -260, md: -60 },
				}}
			>
				<img
					src={IMG.BG_ITEM1}
					width={isMobile ? 440 / 2 : isTablet ? (440 / 4) * 3 : 440}
					height={'auto'}
				/>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					top: 10,
					left: { xs: -145, sm: -210, md: 0 },
				}}
			>
				<img
					src={IMG.CUP}
					width={isMobile ? 175 / 2 : isTablet ? (175 / 4) * 3 : 175}
					height={'auto'}
				/>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: { xs: -70, sm: -100, md: 140 },
				}}
			>
				<img
					src={IMG.NAME}
					width={isMobile ? 480 / 2 : isTablet ? (480 / 4) * 3 : 480}
					height={'auto'}
				/>
			</Box>
		</Box>
	);
};

const Countdown: React.FC<any> = ({ sxProps, endDate }) => {
	const end = Date.parse(endDate);
	const _second = 1000;
	const _minute = _second * 60;
	const _hour = _minute * 60;
	const _day = _hour * 24;

	const [dayText, setDayText] = React.useState('00');
	const [hrText, setHrText] = React.useState('00');
	const [minText, setMinText] = React.useState('00');
	const [secText, setSecText] = React.useState('00');

	useEffect(() => {
		const counter = setInterval(() => {
			const distance = end - Date.now() + END_DATE_EVENT_EXTRA_HOURS * _hour;
			if (distance < 0) {
				clearInterval(counter);
				setDayText('00');
				setHrText('00');
				setMinText('00');
				setSecText('00');
			} else {
				let days = Math.floor(distance / _day);
				let hrs = Math.floor((distance % _day) / _hour);
				let mins = Math.floor((distance % _hour) / _minute);
				let secs = Math.floor((distance % _minute) / _second);
				setDayText(days < 0 ? '' : days < 10 ? `0${days}` : `${days}`);
				setHrText(hrs < 0 ? '' : hrs < 10 ? `0${hrs}` : `${hrs}`);
				setMinText(mins < 0 ? '' : mins < 10 ? `0${mins}` : `${mins}`);
				setSecText(secs < 0 ? '' : secs < 10 ? `0${secs}` : `${secs}`);
			}
		}, 1000);
		return () => clearInterval(counter);
	}, []);

	return (
		<Box sx={{ ...sxProps }}>
			<Typography
				fontStyle="italic"
				fontSize={{ xs: 16, sm: 18, md: 24 }}
				color="#5A6178"
				sx={{
					textAlign: { xs: 'center', md: 'left' },
				}}
			>
				Challenge ends in
			</Typography>
			<Stack direction="row" spacing={{ xs: 0.75, md: 1.5 }} mt={1.5}>
				{[
					{ count: dayText, title: 'days' },
					{ count: hrText, title: 'hours' },
					{ count: minText, title: 'mins' },
					{ count: secText, title: 'secs' },
				].map(({ count, title }) => (
					<Stack
						key={title}
						alignItems="center"
						spacing={0}
						sx={{
							pl: 1,
							pr: 1.5,
							pt: 1,
							pb: 2,
							border: '1px solid #31373E',
							borderRadius: '8px',
						}}
					>
						<Typography
							fontFamily="Electrofied"
							fontSize={{ xs: 24, md: 40 }}
							fontStyle="italic"
							color="#31373E"
						>
							{count}
						</Typography>
						<Typography
							fontSize={{ xs: 12, md: 16 }}
							fontStyle="italic"
							color="#31373E"
							fontWeight="bold"
						>
							{title}
						</Typography>
					</Stack>
				))}
			</Stack>
		</Box>
	);
};

function BpRadio(props: RadioProps) {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent',
        },
      }}
      disableRipple
      color="default"
      icon={<Icon><IconImage src={IMG.ICON_RADIO} /></Icon>}
      checkedIcon={<Icon><IconImage src={IMG.ICON_TICK} /></Icon>}
      {...props}
    />
  );
}

const Form: React.FC<any> = ({ sxProps }) => {
	const isTablet = useMediaQuery('(max-width:959px)');

	const [textEmail, setTextEmail] = useState('');
	const [textWallet, setTextWallet] = useState('');
	const [textTelegram, setTextTelegram] = useState('');
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorWallet, setErrorWallet] = useState(false);
	const [errorTelegram, setErrorTelegram] = useState(false);
	const [errorCaptcha, setErrorCaptcha] = useState(false);
	const [textDevice, setTextDevice] = useState('iOS');
	const [showSnack, setShowSnack] = useState(false);
	const [showBackdrop, setShowBackdrop] = useState(false);

	// const recaptchaRef = React.createRef<ReCAPTCHA>();
	const recaptchaRef = React.useRef<ReCAPTCHA>(null);
	const [captchaToken, setCaptchaToken] = useState('');

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextDevice((event.target as HTMLInputElement).value);
  };

	const onReCAPTCHAChange = async (captchaCode: any) => {
		// console.log('onReCAPTCHAChange', captchaCode);
		// If the reCAPTCHA code is null or undefined indicating that
		// the reCAPTCHA was expired then return early
		if(!captchaCode) {
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
			setTimeout(() => setErrorEmail(false), 2000);
			return;
		}
		if (!textWallet) {
			setErrorWallet(true);
			setTimeout(() => setErrorWallet(false), 2000);
			return;
		}
		if (!textTelegram) {
			setErrorTelegram(true);
			setTimeout(() => setErrorTelegram(false), 2000);
			return;
		}
		if (!captchaToken) {
			setErrorCaptcha(true);
			setTimeout(() => setErrorCaptcha(false), 2000);
			return;
		}

		try {
			// const token = await recaptchaRef.current.executeAsync();
			// console.log('token', token);
			// console.log('recaptchaRef', recaptchaRef.current);
			setShowBackdrop(true);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({
					email: textEmail,
					wallet: textWallet,
					telegram: textTelegram,
					device: textDevice,
					captcha: captchaToken,
				}),
        headers: {
          "Content-Type": "application/json",
        },
      });
			setShowBackdrop(false);
      if (response.ok) {
        // If the response is ok than show the success alert
        toast('SUCCESS', {
					position: 'top-center',
					autoClose: 3000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        throw new Error(error.message)
      }
    } catch (error: any) {
      alert(error?.message || "Something went wrong");
    } finally {
			setTextEmail('');
			setTextWallet('');
			setTextTelegram('');
			setTextDevice('iOS');
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

	return (
		<Box sx={{ ...sxProps }}>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={showBackdrop}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			<Typography fontSize={{ xs: 14, md: 18 }} color="#31373E">
				Fill in your information to join the first{' '}
				<span style={{ color: '#FF6D24' }}>30,000 people</span> that
				{!isTablet && <br />}
				receive free rare items
			</Typography>
			<Typography fontSize={{ xs: 12, md: 14 }} color="#FF6D24" mt={1} mb={1}>
				*Make sure you fill in the correct information
			</Typography>
			<Box component="form" sx={{ maxWidth: { md: 448 } }}>
				<Stack spacing={1} mb={2} alignItems={{ xs: 'center', md: 'start' }}>
					<Stack spacing={0} sx={{ width: '100%' }}>
						<CustomInput
							fullWidth
							required
							placeholder="Your email"
							value={textEmail}
							onChange={(e) => setTextEmail(e.target.value)}
						/>
						<CustomHelperText>
							{errorEmail && 'Incorrect email'}
						</CustomHelperText>
					</Stack>
					<Stack spacing={0} sx={{ width: '100%' }}>
						<CustomInput
							fullWidth
							required
							placeholder="BEP20 Wallet"
							value={textWallet}
							onChange={(e) => setTextWallet(e.target.value)}
						/>
						<CustomHelperText>{errorWallet && 'Empty value'}</CustomHelperText>
					</Stack>
					<Stack spacing={0} sx={{ width: '100%' }}>
						<CustomInput
							fullWidth
							required
							placeholder="Your ID Telegram"
							value={textTelegram}
							onChange={(e) => setTextTelegram(e.target.value)}
						/>
						<CustomHelperText>
							{errorTelegram && 'Empty value'}
						</CustomHelperText>
					</Stack>
					<Stack sx={{ width: '100%' }}>
						<FormControl sx={{
							flexDirection: 'row',
							alignItems: 'center',
							color: '#31373E',
						}}>
							<FormLabel sx={{mr: 3, color: '#31373E !important'}}>Register for</FormLabel>
							<RadioGroup
								row
								defaultValue="iOS"
								onChange={handleRadioChange}
							>
								<FormControlLabel value="iOS" control={<BpRadio />} label="iOS" />
								<FormControlLabel value="Android" control={<BpRadio />} label="Android" />
							</RadioGroup>
						</FormControl>
					</Stack>
					<ReCAPTCHA
						ref={recaptchaRef}
						// size="invisible"
						sitekey={RECAPTCHA_SITE_KEY}
						onChange={onReCAPTCHAChange}
					/>
					<CustomHelperText>
						{errorCaptcha && 'Please verify the ReCaptcha'}
					</CustomHelperText>
				</Stack>
				<Button
					onClick={handleSubmit}
					sx={{
						background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
						borderRadius: '16px',
						fontSize: { xs: 16, md: 18 },
						color: '#fff',
						py: { xs: 1.5, md: 3 },
						px: 6,
						border: 'none',
						boxShadow: 'none',
						width: { xs: '100%', md: 'unset' },
					}}
				>
					SUBMIT
				</Button>
			</Box>
		</Box>
	);
};

const Questions: React.FC<any> = ({ sxProps }) => (
	<Stack spacing={3} sx={{ ...sxProps, maxWidth: 448 }}>
		{QUESTIONS.map(({ title, icon, href }, idx) => (
			// <Link href={href} key={href}>
			<Stack
				direction="row"
				spacing={1}
				component="a"
				href={href}
				key={idx}
				target="_blank"
				alignItems="center"
				sx={{
					cursor: 'pointer',
					textDecoration: 'none',
				}}
			>
				<Icon>
					<IconImage src={icon} />
				</Icon>
				<Typography fontSize={{ xs: 16, md: 18 }} color="#31373E">
					{title}
				</Typography>
			</Stack>
			// </Link>
		))}
	</Stack>
);

const BgItems: React.FC<any> = () => (
	<Box
		sx={{
			position: 'relative',
			width: '100%',
			minWidth: 1920,
		}}
	>
		<Box
			sx={{
				position: 'absolute',
				top: 0,
				right: 0,
			}}
		>
			<img src={IMG.BG_ITEM5} width={'auto'}></img>
		</Box>
		<Box
			sx={{
				position: 'absolute',
				top: 465,
				left: 0,
			}}
		>
			<img src={IMG.BG_ITEM4} width={'auto'}></img>
		</Box>
		<Box
			sx={{
				position: 'absolute',
				top: -62,
				right: `${25}%`,
			}}
		>
			<img src={IMG.BG_ITEM2} width={'auto'}></img>
		</Box>
		<Box
			sx={{
				position: 'absolute',
				top: 40,
				right: `${21.5}%`,
			}}
		>
			<img src={IMG.BG_ITEM3} width={'auto'}></img>
		</Box>
	</Box>
);

const EventDetail: NextPage = () => {
	const isTablet = useMediaQuery('(max-width:959px)');

	return (
		<MainLayout sxProps={{ background: '#FFF' }}>
			<Stack
				alignItems="center"
				sx={{
					position: 'relative',
					pt: 12,
					// height: '100%',
					overflow: 'hidden',
				}}
			>
				{!isTablet && <BgItems />}
				<Container sx={{ position: 'relative' }}>
					<Stack alignItems={{ xs: 'center', md: 'start' }}>
						<EventName sxProps={{ mb: { xs: -10, sm: 0, md: 5 } }} />
						<Countdown sxProps={{ mb: 5 }} endDate={END_DATE_EVENT} />
						<Form sxProps={{ mb: 5 }} />
						<Questions sxProps={{ mb: 10 }} />
					</Stack>
				</Container>
			</Stack>
			<StayInTouch />
		</MainLayout>
	);
};

export default EventDetail;
