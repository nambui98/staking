import React from 'react';
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
	IconButton,
	InputLabel,
	Theme,
	styled,
	useMediaQuery,
} from '@mui/material';
import { SOCIAL, END_DATE_EVENT } from '../constants/common';
import { IconButtonBounceUpOnHover } from './buttons';

export const SocialSection: React.FC<any> = ({ sxProps }) => {
	const isTablet = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down('md')
	);

	return (
		<Stack
			justifyContent="center"
			alignItems="center"
			spacing={{ xs: 1, md: 6 }}
			sx={{ background: '#F8F9FB', py: { xs: 5, md: 10 }, ...sxProps }}
		>
			<Typography
				fontSize={{ xs: 24, sm: 32 }}
				fontStyle="italic"
				fontWeight="900"
				color="#5A6178"
				align="center"
				px={2}
			>
				STAY IN TOUCH WITH <span style={{ color: '#FF6D24' }}>beFITTER</span>
			</Typography>
			{!isTablet && (
				<Stack direction="row" spacing={10} alignItems="center">
					{SOCIAL.map(({ icon, iconActive, href }, idx) => (
						<IconButtonBounceUpOnHover
							key={idx}
							href={href}
							icon={icon}
							iconActive={iconActive}
						/>
					))}
				</Stack>
			)}
			{isTablet && (
				<Grid container justifyContent="center" rowSpacing={3}>
					{SOCIAL.map(({ icon, iconActive, href }, idx) => (
						<Grid item xs={3} key={idx}>
							<Stack alignItems="center">
								<IconButtonBounceUpOnHover
									href={href}
									icon={icon}
									iconActive={iconActive}
								/>
							</Stack>
						</Grid>
					))}
				</Grid>
			)}
		</Stack>
	);
};

export const CountdownClock: React.FC<any> = ({ endDate = END_DATE_EVENT }) => {
	const end = Date.parse(endDate);
	const _second = 1000;
	const _minute = _second * 60;
	const _hour = _minute * 60;
	const _day = _hour * 24;

	const [dayText, setDayText] = React.useState('');
	const [hrText, setHrText] = React.useState('');
	const [minText, setMinText] = React.useState('');
	const [secText, setSecText] = React.useState('');

	React.useEffect(() => {
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
		<Stack direction="row" spacing={1.5} mt={1.5} alignItems="center">
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
						variant="subtitle1"
						fontSize={24}
						fontStyle="italic"
						color="#31373E"
					>
						{count}
					</Typography>
					<Typography
						fontSize={14}
						fontStyle="italic"
						color="#31373E"
						fontWeight="bold"
					>
						{title}
					</Typography>
				</Stack>
			))}
		</Stack>
	);
};

export const SectionTitle: React.FC<any> = ({
	sxProps,
	title,
	subtitle,
	swap = false,
}) => (
	<Box
		sx={{
			width: '100%',
			pt: 4.5,
			pb: 3,
			pl: 3,
			backgroundImage: 'url(assets/backgrounds/section-title.png)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'center left',
			...sxProps,
		}}
	>
		{!swap && (
			<Typography
				variant="subtitle1"
				fontSize={{ xs: 32, sm: 40 }}
				fontStyle="italic"
				color="#31373E"
				sx={{
					textTransform: 'uppercase',
					textShadow: '1px 1px 0 #FFF, 2px 2px 0 #31373E',
				}}
			>
				{subtitle}
			</Typography>
		)}
		<Typography
			variant="subtitle1"
			fontSize={{ xs: 42, sm: 64 }}
			fontStyle="italic"
			color="#FF6D24"
			sx={{
				textTransform: 'uppercase',
				textShadow: '1px 1px 0 #FFF, 2px 2px 0 #FF6D24',
			}}
		>
			{title}
		</Typography>
		{swap && (
			<Typography
				variant="subtitle1"
				fontSize={{ xs: 32, sm: 40 }}
				fontStyle="italic"
				color="#31373E"
				sx={{
					textTransform: 'uppercase',
					textShadow: '1px 1px 0 #FFF, 2px 2px 0 #31373E',
				}}
			>
				{subtitle}
			</Typography>
		)}
	</Box>
);

export const NumberBox: React.FC<any> = ({ sxProps, icon, count, title }) => {
	return (
		<Box
			sx={{
				width: { xs: 430 * 0.8, sm: 430 },
				height: { xs: 122 * 0.8, sm: 122 },
				position: 'relative',
				...sxProps,
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					position: 'absolute',
				}}
			>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						px: '3px',
						py: '3px',
						background: 'linear-gradient(88.32deg, #8C81F7 0%, #7669EC 100%)',
						borderRadius: '16px',
						// transform: 'matrix(0.98, 0, -0.18, 1, 0, 0)',
						transform: 'skewX(-20deg)',
						position: 'relative',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							width: '6%',
							height: { xs: 122 * 0.8, sm: 122 },
							background:
								'radial-gradient(75% 75% at 21.87% 25%, #FFCC77 18.94%, #FF612F 89.59%)',
							borderRadius: '14px 0px 0px 14px',
							backdropFilter: 'blur(24px)',
							top: 0,
							left: 0,
						}}
					/>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							background: '#FFF',
							borderRadius: '14px',
						}}
					/>
				</Box>
			</Box>
			<Grid
				container
				sx={{ position: 'relative', pt: 3, pl: { xs: 5, sm: 7 } }}
			>
				<Grid item xs={'auto'}>
					<Stack
						justifyContent="center"
						alignItems="center"
						sx={{ height: '100%' }}
						pr={{ xs: 0.5, sm: 1 }}
					>
						<img src={icon} alt={title} />
					</Stack>
				</Grid>
				<Grid item xs>
					<Typography
						variant="subtitle1"
						fontSize={{ xs: 24, sm: 32 }}
						color="#31373E"
					>
						{count}
					</Typography>
					<Typography
						fontSize={{ xs: 12, sm: 20 }}
						fontWeight={500}
						color="#5A6178"
					>
						{title}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};
