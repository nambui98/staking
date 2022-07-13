import React, { useEffect } from 'react';
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
// import AOS from "aos";
// import "aos/dist/aos.css";
import { TEAM } from '../../constants/common';

const Section6: React.FC<any> = ({ sxProps }) => {
	// useEffect(() => {
	// 	AOS.init();
	// 	AOS.refresh();
	// }, []);
	return (
		<Container sx={{ ...sxProps, mb: { xs: '88px', sm: '0px' }, position: 'relative' }}>
			{/* <SectionTitle
				title={TEAM.TITLE}
				subtitle={TEAM.SUBTITLE}
				sxProps={{ mb: 7 }}
			/> */}


			<Box data-aos-offset="1800"

				data-aos-duration="1000" data-aos="zoom-in" sx={{ position: 'absolute', inset: 0, top: '0px' }}>
				<img width={"100%"} src={`assets/sec6/bg.png`} style={{ objectFit: "cover" }} alt="" />
			</Box>

			<Box display={'flex'} mt={{ xs: '80px', sm: '0px' }} mb={{ xs: 5, sm: 10 }} alignItems="center" justifyContent="center">

				<Typography
					fontSize={{ xs: 32, sm: 56 }}
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
			<Grid container spacing={4} rowSpacing={6} sx={{
				'@media (max-width: 767px)': {
					marginLeft: '0 !important',
					width: '100% !important'
				}
			}}>
				{TEAM.ITEMS.map(({ name, role, desc, image }, idx) => (
					<Grid key={idx} item xs={12} md={6} sx={{
						'@media (max-width: 767px)': {
							paddingLeft: '0 !important',
							paddingRight: '0 !important',
							paddingTop: '40px !important'
						}
					}}>
						<Grid container spacing={2} flexDirection={idx % 2 === 1 ? "row" : "row-reverse"} sx={{
							'@media (max-width: 767px)': {
								flexDirection: 'row !important',
								width: '100% !important',
								marginLeft: '0 !important',
							}
						}}>
							<Grid item xs={6} sm={4} sx={{
								mx: 'auto', '@media (max-width: 767px)': {
									paddingLeft: '0 !important',
									paddingTop: '0px !important',
									flexBasis: 'unset !important',
									marginLeft: 'unset !important',
									marginRight: 'unset !important',
								}
							}}>
								<Box
									sx={{
										width: '100%',
										height: "100%",
										// pt: `${(160 / 174) * 100}%`,
										backgroundImage: `url(assets/dark/neon-orange-5.png)`,
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
										backgroundPosition: "center",
										padding: "25px"
									}}
								>
									<img width="100%" height="100%" style={{ objectFit: "contain" }} src={image} />
								</Box>
							</Grid>
							<Grid item xs={12} sm={8} sx={idx % 2 !== 1 ? {
								display: 'flex',
								justifyContent: 'end',
								alignItems: 'center',
								'@media (max-width: 767px)': {
									paddingLeft: '0 !important',
									paddingTop: '0 !important',
									flexBasis: 'unset !important',
									width: 'unset !important',
									maxWidth: '143px !important',
								}

							} : {
								display: 'flex', alignItems: 'center', '@media (max-width: 767px)': {
									paddingLeft: '0 !important',
									paddingTop: '0 !important',
									flexBasis: 'unset !important',
									width: 'unset !important',
									maxWidth: '143px !important',
								}
							}}>
								<Box width={"fit-content"} >

									<Typography
										fontSize={24}
										fontWeight={700}
										color="#fff"
										textAlign="right"
										sx={{
											textAlign: { xs: 'center', sm: idx % 2 === 1 ? 'left' : 'right' },
											'@media (max-width: 767px)': {
												textAlign: 'left',
											}
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
											'@media (max-width: 767px)':  {
												marginBottom: '0 !important',
												textAlign: 'left',
											}
										}}
									>
										{role}
									</Typography>
								</Box>
								{/* <Typography
									fontSize={14}
									fontWeight={500}
									lineHeight={1.5}
									color="#5A6178"
								>
									{desc}
								</Typography> */}
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Container >
	);
};

export default Section6;
