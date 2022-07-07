import React from 'react';
import {
	Box,
	Container,
	Grid,
	Stack,
	Typography,
	InputBase,
	Button,
	IconButton,
	Icon,
	Theme,
	useMediaQuery,
} from '@mui/material';
import { TEAM } from '../../constants/common';

const Section6: React.FC<any> = ({ sxProps }) => {
	return (
		<Container sx={{ ...sxProps, mb: { xs: '88px', sm: '0px' } }}>
			{/* <SectionTitle
				title={TEAM.TITLE}
				subtitle={TEAM.SUBTITLE}
				sxProps={{ mb: 7 }}
			/> */}
			<Box display={'flex'} mt={{ xs: '88px', sm: '0px' }} mb={{ xs: 5, sm: 10 }} alignItems="center" justifyContent="center">

				<Typography
					fontSize={{ xs: 20, sm: 56 }}
					textTransform="uppercase"
					fontFamily='Electrofied'
					fontStyle={'italic'}
					fontWeight={800}
					color="#FF6D24"
					textAlign="center"
				>
					OUR TEAM
				</Typography>

			</Box>
			<Grid container spacing={4} rowSpacing={6}>
				{TEAM.ITEMS.map(({ name, role, desc, image }, idx) => (
					<Grid key={idx} item xs={12} md={6}>
						<Grid container spacing={2}>
							<Grid item xs={6} sm={4} sx={{ mx: 'auto' }}>
								<Box
									sx={{
										width: '100%',
										height: 0,
										pt: `${(160 / 174) * 100}%`,
										backgroundImage: `url(${image})`,
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
									}}
								/>
							</Grid>
							<Grid item xs={12} sm={8}>
								<Typography
									fontSize={24}
									fontWeight={700}
									color="#31373E"
									sx={{
										textAlign: { xs: 'center', sm: 'left' },
									}}
								>
									{name}
								</Typography>
								<Typography
									variant="subtitle1"
									fontSize={14}
									fontStyle="italic"
									sx={{
										mt: 1,
										mb: 3,
										textAlign: { xs: 'center', sm: 'left' },
										textTransform: 'uppercase',
										background:
											'linear-gradient(270deg, #FF5C35 3.42%, #FF612F 98.2%)',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										backgroundClip: 'text',
										textFillColor: 'transparent',
									}}
								>
									{role}
								</Typography>
								<Typography
									fontSize={14}
									fontWeight={500}
									lineHeight={1.5}
									color="#5A6178"
								>
									{desc}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Container >
	);
};

export default Section6;
