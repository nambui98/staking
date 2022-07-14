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
		<Container sx={{
			...sxProps, mb: { xs: '70px', sm: '0px' }, position: 'relative',
			'@media (min-width: 768px)': {
				marginBottom: '120px'
			}
		}}>
			{/* <SectionTitle
				title={TEAM.TITLE}
				subtitle={TEAM.SUBTITLE}
				sxProps={{ mb: 7 }}
			/> */}


			<Box data-aos-offset="1800"

				data-aos-duration="1000" data-aos="zoom-in" sx={{ position: 'absolute', inset: 0, top: '0px' }}>
				<img width={"100%"} src={`assets/sec6/bg.png`} style={{ objectFit: "cover" }} alt="" />
			</Box>

			<Box display={'flex'} mt={{ xs: '0px', sm: '0px' }} mb={{ xs: 5, sm: 10 }} alignItems="center" justifyContent="center"  >

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
				position: 'relative',
				'@media (max-width: 767px)': {
					marginLeft: '0 !important',
					width: '100% !important',
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
								position: 'relative',
							},
							'&:hover': {
								'& .team-body p:last-of-type': {
									height: '100px',
									opacity: 1,
									'@media (max-width: 767px)': {
										height: 'auto',
									}
								},
								'@media (min-width: 768px)': {
									'& .team-avatar': {
										transform: 'rotate(170deg)'
									},
									'& .team-avatar img': {
										transform: 'rotate(-170deg)'
									}
								}
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
										backgroundImage: `url(assets/dark/neon-orange-5.png)`,
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
										backgroundPosition: "center",
										padding: "25px",
										transition: '.4s all'
									}}
									className="team-avatar"
								>
									<img width="100%" height="100%" style={{ objectFit: "contain", transition: '.4s all' }} src={image} />
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
								<Box className="team-body" width={"fit-content"} sx={{
									overflow: 'hidden',
									'& p:last-of-type': {
										transition: '.4s all',										
										opacity: 0,
										'@media (min-width: 768px)': {
											height: 0,
										}
									}
								}}>
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
											mb: '10px',
											textTransform: 'uppercase',
											background:
												'linear-gradient(270deg, #FF5C35 3.42%, #FF612F 98.2%)',
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent',
											backgroundClip: 'text',
											textFillColor: 'transparent',
											textAlign: idx === 0 || idx === 2 ? 'right' : 'left',
											'@media (max-width: 767px)': {
												marginBottom: '0 !important',
												textAlign: 'left',
											}
										}}
									>
										{role}
									</Typography>
									<Typography
										fontSize={14}
										fontWeight={500}
										lineHeight={1.5}
										color="#fff"
										sx={{
											'@media (min-width: 768px)': {
												textAlign: idx === 0 || idx === 2 ? 'right' : 'left'
											},
											'@media (max-width: 767px)': {
												position: 'absolute',
												left: 0,
												top: '50%',
												transform: 'translateY(-50%)',
												opacity: 0,
												background: 'rgba(28, 30, 41, 0.9)',
												padding: '8px'
											}
										}}
									>
										{desc}
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Container >
	);
};

export default Section6;
