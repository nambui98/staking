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
			spacing={{ xs: 2, md: 6 }}

		// sx={{ background: '#F8F9FB', py: { xs: 5, md: 10 }, ...sxProps }}
		>
			<Typography
				fontSize={{ xs: 24, sm: 24 }}
				// fontStyle="italic"
				fontWeight="600"
				color="#5A6178"
				align="center"
				px={2}
			>
				Stay in touch with  <span className='text_gadient_primary'>beFITTER</span>
			</Typography>
			{!isSm && (
				<Stack direction="row" spacing={7} alignItems="center">
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
				<Grid container justifyContent="center" rowSpacing={1}>
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
			position: 'relative',
			mt: {
				xs: '0', sm: '0px'
			}

		}}>
			<Box sx={{ position: 'relative', marginTop: 'auto', display: 'flex', justifyContent: 'center', marginBottom: { xs: 1, sm: '80px' }, columnGap: '20px' }}>
				<Box sx={{
					height: '495px',
					// width: '100%',
					display: { xs: 'none', md: 'block' }
				}}>

					<img height={"100%"} style={{ objectFit: 'contain' }} width="100%" src="assets/sec9.png" />
				</Box>
				<StayInTouch />
			</Box >
			<MainFooter />
		</Box >

	)
}

export default Section9;
