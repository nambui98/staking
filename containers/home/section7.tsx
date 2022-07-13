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

const Section7: React.FC<any> = ({ sxProps }) => {
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	return (
		<Container sx={{ ...sxProps, mt: 16, paddingBottom: "22px" }}>
			{/* <SectionTitle
				title={TEAM.TITLE}
				subtitle={TEAM.SUBTITLE}
				sxProps={{ mb: 7 }}
			/> */}
			<Box display={'flex'} mt={{ xs: '88px', sm: '0px' }} mb={{ xs: 3, sm: 5 }} alignItems="center" justifyContent="center">

				<Typography
					fontSize={{ xs: 32, sm: 56 }}
					textTransform="uppercase"
					fontFamily='Electrofied'
					fontStyle={'italic'}
					fontWeight={800}
					color="#FF6D24"
					textAlign="center"
					sx={{
						'@media (max-width: 767px)': {
							
						}}}
				>
					ADVISORS
				</Typography>

			</Box>
			{
				isSm ?
					<Box display={'flex'} sx={{ flexDirection: { xs: "column", sm: 'row' }, justifyContent: "space-between" }}>

						<Box sx={{ flexDirection: { xs: "column", sm: 'row' }, position: "relative", width: { xs: "100%", sm: "320px" }, paddingBottom: '10px',
						'@media (max-width: 767px)': {
							marginBottom: '20px'
						} }}>
							<Box position="absolute" sx={{ inset: 0, zIndex: 0 }}>
								<img width={"100%"} height={"100%"} src={isSm ? "assets/dark/sec7_3.png" : "assets/dark/sec7_2.png"} />
							</Box>
							<Box sx={{
								display: "flex",
								justifyContent: "flex-start",
								alignItems: "center",

								flexDirection: "row",
								// position: "relative",
							}}>

								<Box sx={{ width: { xs: "104px", sm: '100%' }, padding: "3px", position: "relative" }}>

									<img width={"100%"} src="assets/partners/icetealabs_director.png" />
									<Box sx={{ position: "absolute", bottom: "0px", right: "0px", width: { xs: '24px', sm: '48px' } }}>

										<img width={"100%"} src="assets/symbol.png" />
									</Box>
								</Box>
								<Typography
									fontSize={{ xs: 24, sm: 24 }}
									textTransform="uppercase"
									fontWeight={700}
									color="#31373E"
									textAlign="left"
									zIndex={2}
									ml={{ xs: 2, sm: "16px" }}
									mt={{ xs: "0px", sm: 2 }}
								>
									THI TRUONG
								</Typography>
							</Box>
							<Box sx={{
								display: "flex",
								width: "100%",
								// justifyContent: "flex-start",
								alignItems: "center",
								padding: "0 16px",
								flexDirection: "column",
							}}>


								<Typography sx={{
									color: "#5A6178",
									fontWeight: "500",
									fontSize: { xs: "13px", sm: '16px' },
									mt: { xs: 1, sm: 5 },
									// mr: "-100px",
									lineHeight: '22px',
									zIndex: 2
								}}>
									Thi is the founder of <span style={{ color: '#55C8FC' }} >
										Icetea Labs
									</span> , the company behind Red Kite Launchpad and GameFi.org gaming hub. He is also the incubator, advisor or investor of a couple of blockchain projects such as Faraland, NFTrade, The Unfettered…
								</Typography>
								{/* <br /> */}
								<Typography sx={{
									color: "#5A6178",
									fontWeight: "500",
									fontSize: { xs: "13px", sm: '16px' },
									mb: { xs: 3, sm: '0px' },
									mt: 2,
									lineHeight: '22px',
									zIndex: 2
								}}>
									Before founding Icetea Labs, Thi worked for Kyber Network and FPT Software.
								</Typography>
							</Box>
							<Box zIndex={2} >


							</Box>

						</Box>
						<Box sx={{ flexDirection: { xs: "column", sm: 'row' }, mt: 5, position: "relative", width: { xs: "100%", sm: "320px" }, paddingBottom: '10px',
						'@media (max-width: 1440px)': {
							marginTop: '0 !important'
						}
					 }}>
							<Box position="absolute" sx={{ inset: 0, zIndex: 0 }}>
								<img width={"100%"} height={"100%"} src={isSm ? "assets/dark/sec7_3.png" : "assets/dark/sec7_2.png"} />
							</Box>
							<Box sx={{
								display: "flex",
								justifyContent: "flex-start",
								alignItems: "center",

								flexDirection: "row",
								// position: "relative",
							}}>

								<Box sx={{ width: { xs: "104px", sm: '100%' }, padding: "3px", position: "relative" }}>

									<img width={"100%"} src="assets/partners/dao_director.png" />
									<Box sx={{ position: "absolute", bottom: "0px", right: "0px", width: { xs: '24px', sm: '48px' } }}>

										<img width={"100%"} src="assets/symbol.png" />
									</Box>
								</Box>
								<Typography
									fontSize={{ xs: 24, sm: 24 }}
									textTransform="uppercase"
									fontWeight={700}
									color="#31373E"
									textAlign="left"
									zIndex={2}
									ml={{ xs: 2, sm: "16px" }}
									mt={{ xs: "0px", sm: 2 }}
								>
									HATU SHEIKH
								</Typography>
							</Box>
							<Box sx={{
								display: "flex",
								width: "100%",
								// justifyContent: "flex-start",
								alignItems: "center",
								padding: "0 16px",
								flexDirection: "column",
							}}>


								<Typography sx={{
									color: "#5A6178",
									fontWeight: "500",
									fontSize: { xs: "13px", sm: '16px' },
									mt: { xs: 1, sm: 5 },
									lineHeight: '22px',
									zIndex: { xs: 1, sm: 0 }
								}}>
									Hatu is the co-founder, chief marketing, and strategy in <span style={{ color: '#55C8FC' }} >
										Dao Maker
									</span>. He defines himself as an analyst with the business intuition necessary to analyze opportunities for growth.
								</Typography>
								<br />
								<Typography sx={{
									color: "#5A6178",
									fontWeight: "500",
									fontSize: { xs: "13px", sm: '16px' },
									mb: { xs: 3, sm: '0px' },
									lineHeight: '22px',
									zIndex: 2
								}}>
									Before co-founding Dao Maker, he had years of experience in analytical roles, marketing, management, and entrepreneurial ventures.
								</Typography>
							</Box>

						</Box>

					</Box> :
					<Box display={'flex'} justifyContent="space-evenly" sx={{ flexDirection: { xs: "column", sm: 'row' } }}>

						<Box sx={{ flexDirection: { xs: "column", sm: 'row' }, width: { xs: "100%", sm: "320px" } }}>
							<Box sx={{
								display: "flex",
								justifyContent: "flex-start",
								flexDirection: { xs: "row", sm: "column" },
								position: "relative",
							}}>
								<Box position="absolute" sx={{ inset: 0 }}>
									<img width={"100%"} src={isSm ? "assets/dark/sec7_3.png" : "assets/dark/sec7_2.png"} />
								</Box>
								<Box sx={{ width: { xs: "104px", sm: '100%' }, padding: "3px", position: "relative" }}>

									<img width={"100%"} src="assets/partners/icetealabs_director.png" />
									<Box sx={{ position: "absolute", bottom: "0px", right: "0px", transform: 'translate(50%, 50%)', width: { xs: '24px', sm: '48px' } }}>

										<img width={"100%"} src="assets/symbol.png" />
									</Box>
								</Box>
								<Typography
									fontSize={{ xs: 24, sm: 24 }}
									textTransform="uppercase"
									fontWeight={700}
									color="#31373E"
									textAlign="left"
									zIndex={2}
									ml={{ xs: 2, sm: "16px" }}
									mt={{ xs: "0px", sm: 2 }}
								// sx={{ width: { xs: "104px", sm: '100%' } }}
								>
									THI TRUONG
								</Typography>
							</Box>
							<Typography sx={{
								color: "#5A6178",
								fontWeight: "500",
								fontSize: { xs: "13px", sm: '16px' },
								mt: { xs: 1, sm: 5 },
								mr: "-100px",
								lineHeight: '22px'

							}}>
								Thi is the founder of <span style={{ color: '#55C8FC' }} >
									Icetea Labs
								</span> , the company behind Red Kite Launchpad and GameFi.org gaming hub. He is also the incubator, advisor or investor of a couple of blockchain projects such as Faraland, NFTrade, The Unfettered…
							</Typography>
							<br />
							<Typography sx={{
								color: "#5A6178",
								fontWeight: "500",
								fontSize: { xs: "13px", sm: '16px' },
								mb: { xs: 3, sm: '0px' },
								lineHeight: '22px'
							}}>
								Before founding Icetea Labs, Thi worked for Kyber Network and FPT Software.
							</Typography>

						</Box>
						<Box sx={{ flexDirection: { xs: "column", sm: 'row' }, width: { xs: "100%", sm: "320px" } }}>
							<Box sx={{
								display: "flex",
								justifyContent: "flex-start",
								flexDirection: { xs: "row", sm: "column" },
								position: "relative",
							}}>
								<Box position="absolute" sx={{ inset: 0 }}>
									{/* <img width={"100%"} src="assets/dark/sec7_2.png" /> */}
									<img width={"100%"} src={isSm ? "assets/dark/sec7_3.png" : "assets/dark/sec7_2.png"} />
								</Box>
								<Box sx={{ width: { xs: "104px", sm: '100%' }, position: "relative", padding: "3px", }}>

									<img width={"100%"} src="assets/partners/dao_director.png" />
									<Box sx={{ position: "absolute", bottom: "0px", right: "0px", transform: 'translate(50%, 50%)', width: { xs: '24px', sm: '48px' } }}>

										<img width={"100%"} src="assets/symbol.png" />
									</Box>
								</Box>

								<Typography
									fontSize={{ xs: 24, sm: 24 }}
									textTransform="uppercase"
									fontWeight={700}
									color="#31373E"
									textAlign="left"
									ml={{ xs: 2, sm: "16px" }}
									mt={{ xs: "0px", sm: 2 }}
									zIndex={2}
								// sx={{ width: { xs: "104px", sm: '100%' } }}
								>
									HATU SHEIKH
								</Typography>
							</Box>
							<Typography sx={{
								color: "#5A6178",
								fontWeight: "500",
								fontSize: { xs: "13px", sm: '16px' },
								mt: { xs: 1, sm: 5 },
								lineHeight: '22px',
								mr: "-100px",
								zIndex: { xs: 1, sm: 0 }
							}}>
								Hatu is the co-founder, chief marketing, and strategy in <span style={{ color: '#55C8FC' }} >
									Dao Maker
								</span>. He defines himself as an analyst with the business intuition necessary to analyze opportunities for growth.
							</Typography>
							<br />
							<Typography sx={{
								color: "#5A6178",
								fontWeight: "500",
								fontSize: { xs: "13px", sm: '16px' },
								mb: { xs: 3, sm: '0px' },
								lineHeight: '22px'
							}}>
								Before co-founding Dao Maker, he had years of experience in analytical roles, marketing, management, and entrepreneurial ventures.
							</Typography>

						</Box>
					</Box>
			}
		</Container >
	);
};

export default Section7;
