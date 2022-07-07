import React from 'react';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import { END_DATE_EVENT, END_DATE_EVENT_EXTRA_HOURS } from '../../constants/common';

interface IProps {
	endDate?: string
	sxTitle?: any
	sxSubTitle?: any
}

const CountdownClockNew: React.FC<IProps> = ({ endDate, sxTitle, sxSubTitle }) => {
	const end = Date.parse(endDate || END_DATE_EVENT);
	const _second = 1000;
	const _minute = _second * 60;
	const _hour = _minute * 60;
	const _day = _hour * 24;

	const [dayText, setDayText] = React.useState('00');
	const [hrText, setHrText] = React.useState('00');
	const [minText, setMinText] = React.useState('00');
	const [secText, setSecText] = React.useState('00');
	const isMobile = useMediaQuery('(max-width: 767px)')

	React.useEffect(() => {
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
		<Stack direction="row" alignItems="center" justifyContent="center">
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
          sx={{flexDirection: 'row'}}
				>
					<Typography
						variant="subtitle1"
						fontSize={isMobile ? 24 : 40}
						fontStyle="italic"
						color="#31373E"
            sx={flex}
            paddingRight='10px'
					>
						{count}
					</Typography>
					<Typography
						fontSize={isMobile ? 8 : 16}
						fontStyle="italic"
						color="#31373E"
						fontWeight="bold"
            sx={flex}
					>
						{title}
					</Typography>
				</Stack>
			))}
		</Stack>
	);
};

export default CountdownClockNew;

const flex = {
  display: 'flex',
  alignItems: 'center',
  color: '#ffffff'
}
