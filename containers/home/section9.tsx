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
// import BounceIconButton from '../buttons/BounceIconButton';
import { SOCIAL } from '../../constants/common';
import BounceIconButton from '../../components/buttons/BounceIconButton';
import MainFooter from '../../components/footers/MainFooter';

const StayInTouch: React.FC<any> = ({ sxProps }) => {
	const isSm = useMediaQuery((theme: Theme) =>
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
			{!isSm && (
				<Stack direction="row" spacing={10} alignItems="center">
					{SOCIAL.map(({ icon, iconActive, href }, idx) => (
						<BounceIconButton
							key={idx}
							href={href}
							icon={icon}
							iconActive={iconActive}
						/>
					))}
				</Stack>
			)}
			{isSm && (
				<Grid container justifyContent="center" rowSpacing={3}>
					{SOCIAL.map(({ icon, iconActive, href }, idx) => (
						<Grid item xs={3} key={idx}>
							<Stack alignItems="center">
								<BounceIconButton
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

const Section9: React.FC<any> = ({ sxProps }) => {

	return (
		<Box sx={{

			background: '#F8F9FB',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
		}}>
			<Box mt={"100px"} sx={{ position: 'relative', marginBottom: 'auto' }}>

				<StayInTouch />
				<Box sx={{ position: 'absolute', right: "50%", transform: 'translateX(50%)' }}>
					<img height={'495px'} src="assets/sec9.png" />
				</Box>
			</Box>
			<MainFooter />
		</Box>

	)
}

export default Section9;
