import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
	Box,
	Container,
	Typography,
	Stack,
	InputBase,
	Button,
	Icon,
	styled,
} from '@mui/material';

import MainLayout from '../components/layouts/MainLayout';
import { IMG, QUESTIONS, SOCIAL } from '../constants/event';

const IconImage = styled('img')({
	display: 'flex',
	height: 'inherit',
	width: 'inherit',
});

const CustomInput = styled(InputBase)({
	'& .MuiInputBase-input': {
		fontSize: 16,
		padding: '14px 24px',
		borderRadius: '8px',
		border: '1px solid #E9EAEF',
		background: '#F8F9FB',
	},
});

const EventName: React.FC<any> = ({ sxProps }) => (
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
				top: 30,
				left: -60,
			}}
		>
			<img src={IMG.BG_ITEM1} width={'auto'} />
		</Box>
		<Box
			sx={{
				position: 'absolute',
				top: 10,
				left: 0,
			}}
		>
			<img src={IMG.CUP} width={'auto'} />
		</Box>
		<Box
			sx={{
				position: 'absolute',
				top: 0,
				left: 140,
			}}
		>
			<img src={IMG.NAME} width={'auto'} />
		</Box>
	</Box>
);

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
			<Typography fontStyle="italic" fontSize={24} color="#5A6178">
				Begins in
			</Typography>
			<Stack direction="row" spacing={1.5} mt={1.5}>
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
							fontSize={40}
							fontStyle="italic"
							color="#31373E"
						>
							{count}
						</Typography>
						<Typography
							fontSize={16}
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
	return (
		<Box sx={{ ...sxProps }}>
			<Typography fontSize={18} color="#31373E">
				Fill in your information to join the first{' '}
				<span style={{ color: '#FF6D24' }}>10,000 people</span> that
				<br />
				receive free rare items
			</Typography>
			<Typography fontSize={14} color="#FF6D24" mt={1} mb={1}>
				*Make sure you fill in the correct information
			</Typography>
			<Box component="form" sx={{ maxWidth: 448 }}>
				<Stack spacing={1} mb={2}>
					<CustomInput placeholder="BEP20 Wallet"></CustomInput>
					<CustomInput placeholder="Your ID Telegram"></CustomInput>
					<CustomInput placeholder="Your email"></CustomInput>
				</Stack>
				<Button
					sx={{
						background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
						borderRadius: '16px',
						fontSize: 18,
						color: '#fff',
						py: 3,
						px: 6,
						border: 'none',
						boxShadow: 'none',
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
		{QUESTIONS.map(({ title, icon, href }) => (
			<Link href={href} key={href}>
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
					<Typography fontSize={18} color="#31373E">
						{title}
					</Typography>
				</Stack>
			</Link>
		))}
	</Stack>
);

const Social: React.FC<any> = ({ sxProps }) => (
	<Stack
		justifyContent="center"
		alignItems="center"
		spacing={6}
		sx={{ ...sxProps, background: '#F8F9FB', py: 10 }}
	>
		<Typography
			fontSize={32}
			fontStyle="italic"
			fontWeight="900"
			color="#5A6178"
		>
			STAY IN TOUCH WITH <span style={{ color: '#FF6D24' }}>beFITTER</span>
		</Typography>
		<Stack direction="row" spacing={10} alignItems="center">
			{SOCIAL.map(({ icon, href }, idx) => (
				<Link href={href} key={idx}>
					<Icon sx={{ cursor: 'pointer', width: 56, height: 48 }}>
						<IconImage src={icon} />
					</Icon>
				</Link>
			))}
		</Stack>
	</Stack>
);

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
				<BgItems />
				<Container sx={{ position: 'relative' }}>
					<EventName sxProps={{ mb: 5 }} />
					<Countdown sxProps={{ mb: 5 }} endDate={'2022-06-01'} />
					<Form sxProps={{ mb: 5 }} />
					<Questions sxProps={{ mb: 5 }} />
				</Container>
			</Stack>
			<Social />
		</MainLayout>
	);
};

export default EventDetail;
