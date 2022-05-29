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
	useMediaQuery,
} from '@mui/material';
import { toast } from 'react-toastify';

import MainLayout from '../components/layouts/MainLayout';
import { IMG, QUESTIONS, SOCIAL } from '../constants/event';



const IconImage = styled('img')({
	display: 'flex',
	height: 'inherit',
	width: 'inherit',
});

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
			color: "#F00",
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
					top: {xs: 20, sm: 30},
					left: {xs: -175, sm: -260, md: -60},
				}}
			>
				<img src={IMG.BG_ITEM1} width={isMobile ? 440/2 : isTablet ? 440/4*3 : 440} height={'auto'}/>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					top: 10,
					left: {xs: -145, sm: -210, md: 0},
				}}
			>
				<img src={IMG.CUP} width={isMobile ? 175/2 : isTablet ? 175/4*3 : 175} height={'auto'}/>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: {xs: -70, sm: -100, md: 140},
				}}
			>
				<img src={IMG.NAME} width={isMobile ? 480/2 : isTablet ? 480/4*3 : 480} height={'auto'}/>
			</Box>
		</Box>
	)
};

const Countdown: React.FC<any> = ({ sxProps, endDate }) => {
	const end = Date.parse(endDate);
	const _second = 1000;
	const _minute = _second * 60;
	const _hour = _minute * 60;
	const _day = _hour * 24;

	const [dayText, setDayText] = useState('');
	const [hrText, setHrText] = useState('');
	const [minText, setMinText] = useState('');
	const [secText, setSecText] = useState('');

	useEffect(() => {
		const counter = setInterval(() => {
			const distance = end - Date.now();
			if (distance < 0) {
				clearInterval(counter);
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
			<Typography fontStyle="italic" fontSize={{xs: 16, sm: 18, md: 24}} color="#5A6178" sx={{
				textAlign: {xs: 'center', md: 'left'}
			}}>
				Begins in
			</Typography>
			<Stack direction="row" spacing={{xs: .75, md: 1.5}} mt={1.5}>
				{[
					{ count: dayText, title: 'days' },
					{ count: hrText, title: 'hours' },
					{ count: minText, title: 'mins' },
					{ count: secText, title: 'secs' },
				].map(({ count, title }) => (
					<Stack
						key={title}
						alignItems="center"
						spacing={-1}
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
							fontSize={{xs: 24, md: 40}}
							fontStyle="italic"
							color="#31373E"
						>
							{count}
						</Typography>
						<Typography
							fontSize={{xs: 12, md: 16}}
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

const Form: React.FC<any> = ({ sxProps }) => {
	const isTablet = useMediaQuery('(max-width:959px)');

	const [textEmail, setTextEmail] = useState("");
	const [textWallet, setTextWallet] = useState("");
	const [textTelegram, setTextTelegram] = useState("");
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorWallet, setErrorWallet] = useState(false);
	const [errorTelegram, setErrorTelegram] = useState(false);
	const [showSnack, setShowSnack] = useState(false);
	const [showBackdrop, setShowBackdrop] = useState(false);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		console.log(textEmail, textWallet, textTelegram);
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
		setShowBackdrop(true);
		const response = await fetch("/api/submit", {
			method: "POST",
			body: JSON.stringify({
				email: textEmail,
				wallet: textWallet,
				telegram: textTelegram,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		setShowBackdrop(false);
		// setShowSnack(true);
		toast('SUCCESS', {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		setTextEmail("");
		setTextWallet("");
		setTextTelegram("");
	};

	return (
		<Box sx={{ ...sxProps }}>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={showBackdrop}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			{/* <Snackbar
				open={showSnack}
				onClose={() => setShowSnack(false)}
				autoHideDuration={2000}
			>
				<Alert
					severity="success"
					onClose={() => setShowSnack(false)}
					sx={{ width: "100%" }}
				>
					Sent
				</Alert>
			</Snackbar> */}
			<Typography fontSize={{xs: 14, md: 18}} color="#31373E">
				Fill in your information to join the first{' '}
				<span style={{ color: '#FF6D24' }}>10,000 people</span> that
				{!isTablet && <br />}
				receive free rare items
			</Typography>
			<Typography fontSize={{xs: 12, md: 14}} color="#FF6D24" mt={1} mb={1}>
				*Make sure you fill in the correct information
			</Typography>
			<Box component="form" sx={{ maxWidth: {md: 448} }}>
				<Stack spacing={1} mb={2} alignItems={{xs: "center", md: "start"}}>
					<Stack spacing={0} sx={{width: '100%'}}>
						<CustomInput
							fullWidth
							required
							placeholder="Your email"
							value={textEmail}
							onChange={(e) => setTextEmail(e.target.value)}
						/>
						<CustomHelperText>{errorEmail && "Incorrect email"}</CustomHelperText>
					</Stack>
					<Stack spacing={0} sx={{width: '100%'}}>
						<CustomInput
							fullWidth
							required
							placeholder="BEP20 Wallet"
							value={textWallet}
							onChange={(e) => setTextWallet(e.target.value)}
						/>
						<CustomHelperText>{errorWallet && "Empty value"}</CustomHelperText>
					</Stack>
					<Stack spacing={0} sx={{width: '100%'}}>
						<CustomInput
							fullWidth
							required
							placeholder="Your ID Telegram"
							value={textTelegram}
							onChange={(e) => setTextTelegram(e.target.value)}
						/>
						<CustomHelperText>{errorTelegram && "Empty value"}</CustomHelperText>
					</Stack>
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
						width: {xs: '100%', md: 'unset'}
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
			<Box component="a" href={href} key={idx} target="_blank" sx={{
				textDecoration: 'none'
			}}>
				<Stack
					direction="row"
					spacing={1}
					component="a"
					sx={{ cursor: 'pointer' }}
					alignItems="center"
				>
					<Icon>
						<IconImage src={icon} />
					</Icon>
					<Typography fontSize={{xs: 16, md: 18}} color="#31373E">
						{title}
					</Typography>
				</Stack>
			</Box>
			// </Link>
		))}
	</Stack>
);

const Social: React.FC<any> = ({ sxProps }) => {
	const isTablet = useMediaQuery('(max-width:960px)');

	return (
		<Stack
			justifyContent="center"
			alignItems="center"
			spacing={{xs: 1, md: 6}}
			sx={{ ...sxProps, background: '#F8F9FB', py: {xs: 5, md: 10} }}
		>
			<Typography
				fontSize={{xs: 24, sm: 32}}
				fontStyle="italic"
				fontWeight="900"
				color="#5A6178"
				align='center'
				px={2}
			>
				STAY IN TOUCH WITH <span style={{ color: '#FF6D24' }}>beFITTER</span>
			</Typography>
			{!isTablet && <Stack direction="row" spacing={10} alignItems="center">
				{SOCIAL.map(({ icon, href }, idx) => (
					// <Link href={href} key={idx}>
					<Box component="a" href={href} key={idx} target="_blank">
						<Icon sx={{ cursor: 'pointer', width: 56, height: 48 }}>
							<IconImage src={icon} />
						</Icon>
					</Box>
					// </Link>
				))}
			</Stack>}
			{isTablet && <Grid container justifyContent="center" rowSpacing={3}>
				{SOCIAL.map(({ icon, href }, idx) => (
					<Grid item xs={3} key={idx}>
						<Stack alignItems="center">
							{/* <Link href={href} key={idx}> */}
							<Box component="a" href={href} target="_blank">
								<Icon sx={{ cursor: 'pointer', width: 56, height: 48 }}>
									<IconImage src={icon} />
								</Icon>
							</Box>
							{/* </Link> */}
						</Stack>
					</Grid>
				))}
			</Grid>}
		</Stack>
	)
};

const BgItems: React.FC<any> = () => (
	<Box sx={{
		position: 'relative',
		width: '100%',
		minWidth: 1920,
	}}>
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
)

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
					<Stack alignItems={{xs: 'center', md: 'start'}}>
						<EventName sxProps={{ mb: {xs: -10, sm: 0, md: 5} }} />
						<Countdown sxProps={{ mb: 5 }} endDate={'2022-06-06'} />
						<Form sxProps={{ mb: 5 }} />
						<Questions sxProps={{ mb: 10 }} />
					</Stack>
				</Container>
			</Stack>
			<Social />
		</MainLayout>
	);
};

export default EventDetail;
