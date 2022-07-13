import { Box, Stack, styled, Tabs, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NextPage } from "next";
import { useState } from "react";
import Tab from '@mui/material/Tab';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
type contentType = {
	active: string
	inActive: string
}
type itemType = {
	title: string
	subtitle: string
	content: string | contentType[]
	typeContent: string
	image: string

}

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<Box
			sx={{
				height: "100%",
				transition: 'all ease .6s',
				opacity: value !== index ? '0' : '1',
				position: 'absolute',
				inset: '0'
			}}

			role="tabpanel"
			// hidden={false}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{children}
		</Box>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const Section3: NextPage = () => {
	const [activeIndex, setActiveIndex] = useState<number>(1);
	const [slideActiveIndex, setSlideActiveIndex] = useState<number>(3);
	const [swiper, setSwiper] = useState(null);
	const isTablet = useMediaQuery('(max-width:1000px)');
	const isNestHub = useMediaQuery('(max-height:800px)');
	const isMobile = useMediaQuery('(max-width:599px)');
	const isBigDesktop = useMediaQuery('(min-width:3000px)');
	const data: itemType[] = [
		{
			title: "PETS",
			subtitle: 'Virtual pets are the perfect work-out companion that helps activities be more fun and enhance your earning potential.',
			typeContent: 'image',
			content: 'assets/sec3_pets.png',
			image: 'assets/sec2/fitnessfi.png',
		},
		{
			title: "SHOES",
			subtitle: 'Shoe is the primary NFT asset in beFITTER, and is required in order to Walk, Run, Cycle in all game modes.',
			image: 'assets/sec2/socialfi.png',
			typeContent: 'slider',
			content: [
				{
					active: 'assets/shoes_v2/L01.png',
					inActive: 'assets/shoes_v2/D01.png'
				},
				{
					active: 'assets/shoes_v2/L02.png',
					inActive: 'assets/shoes_v2/D02.png'
				},
				{
					active: 'assets/shoes_v2/L03.png',
					inActive: 'assets/shoes_v2/D03.png'
				},
				{
					active: 'assets/shoes_v2/L04.png',
					inActive: 'assets/shoes_v2/D04.png'
				},
				{
					active: 'assets/shoes_v2/L05.png',
					inActive: 'assets/shoes_v2/D05.png'
				},
				{
					active: 'assets/shoes_v2/L06.png',
					inActive: 'assets/shoes_v2/D06.png'
				},
				{
					active: 'assets/shoes_v2/L07.png',
					inActive: 'assets/shoes_v2/D07.png'
				},
				{
					active: 'assets/shoes_v2/L08.png',
					inActive: 'assets/shoes_v2/D08.png'
				},
				{
					active: 'assets/shoes_v2/L09.png',
					inActive: 'assets/shoes_v2/D09.png'
				},
				{
					active: 'assets/shoes_v2/L10.png',
					inActive: 'assets/shoes_v2/D10.png'
				},
				{
					active: 'assets/shoes_v2/L11.png',
					inActive: 'assets/shoes_v2/D11.png'
				},
				{
					active: 'assets/shoes_v2/L12.png',
					inActive: 'assets/shoes_v2/D12.png'
				},
				{
					active: 'assets/shoes_v2/L13.png',
					inActive: 'assets/shoes_v2/D13.png'
				},
				{
					active: 'assets/shoes_v2/L14.png',
					inActive: 'assets/shoes_v2/D14.png'
				},
				{
					active: 'assets/shoes_v2/L15.png',
					inActive: 'assets/shoes_v2/D15.png'
				},
				{
					active: 'assets/shoes_v2/L16.png',
					inActive: 'assets/shoes_v2/D16.png'
				},
				{
					active: 'assets/shoes_v2/L17.png',
					inActive: 'assets/shoes_v2/D17.png'
				},
				{
					active: 'assets/shoes_v2/L18.png',
					inActive: 'assets/shoes_v2/D18.png'
				},
				{
					active: 'assets/shoes_v2/L19.png',
					inActive: 'assets/shoes_v2/D19.png'
				},
				{
					active: 'assets/shoes_v2/L20.png',
					inActive: 'assets/shoes_v2/D20.png'
				},
				{
					active: 'assets/shoes_v2/L21.png',
					inActive: 'assets/shoes_v2/D21.png'
				},
				{
					active: 'assets/shoes_v2/L22.png',
					inActive: 'assets/shoes_v2/D22.png'
				},
				{
					active: 'assets/shoes_v2/L23.png',
					inActive: 'assets/shoes_v2/D23.png'
				},
				{
					active: 'assets/shoes_v2/L24.png',
					inActive: 'assets/shoes_v2/D24.png'
				},
				{
					active: 'assets/shoes_v2/L25.png',
					inActive: 'assets/shoes_v2/D25.png'
				},
				{
					active: 'assets/shoes_v2/L26.png',
					inActive: 'assets/shoes_v2/D26.png'
				},
			],
		},
		{
			title: "FITTER PASS",
			subtitle: 'Earn Fitterpass to get whitelisted in exclusive events, features and other perks in beFITTER ecosystem, for example, skip cooldown when minting NFTs.',
			image: 'assets/sec2/lease.png',
			typeContent: 'image',
			content: 'assets/sec3_pass.png',
		},

	]

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setActiveIndex(newValue);
	};
	const handleSwiper = (s: any) => {
		setSwiper(s);
	}
	const handleSlideChange = (s: any) => {
		console.log(s.activeIndex)
		setSlideActiveIndex(s.activeIndex);
	}

	return (
		<Box sx={{
			// backgroundImage: `url(assets/bg_sec3.png)`,
			backgroundColor: '#151515',
			height: '100%',
			width: "100%",
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			overflow: 'hidden',
			// padding: '29px auto 50px',
			marginTop: { xs: '0px', sm: 20 }
		}}>

			<Wrap sx={{
				marginBottom: "0px !important",
				marginTop: { xs: '0px', sm: 10 }
			}}>
				<Box sx={{
					display: "flex",
					justifyContent: "center",
					align: "center",
					mb: isTablet ? 2 : 5,
					paddingTop: isTablet ? 3 : 0,
				}}>
					{isMobile ? (
						<img height={"auto"} width={"auto"} src="assets/nfts_system_mobile.png" />
					) : (
						<img height={"90px !important"} src="assets/nfts_system.png" />
					)}

				</Box>
				<Box sx={{ width: '100%' }}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs TabIndicatorProps={{
							sx: {
								background: "radial-gradient(50% 50% at 50% 50%, #FF6D24 0%, rgba(255, 109, 36, 0) 100%);",
								'&:before': {
									content: '""',
									height: '100%',
									width: '100%',
									position: 'absolute',
									background: "radial-gradient(50% 50% at 50% 50%, #FF6D24 0%, rgba(255, 109, 36, 0) 100%);",
									top: '-55px'
								}
							}
						}}
							value={activeIndex} onChange={handleChange}
							aria-label="basic tabs example">
							<Tab sx={{
								height: "60px",
								transition: '.4s all',
								flex: '1',
								margin: isMobile ? "0 5px" : "0 30px",
								WebkitTextStroke: '0.5px #fff',
								zIndex: 1,
								// WebkitTextFillColor: '#000',
								// textShadow: '0 0 2px #fff',
								// 						-webkit-text-stroke: 1px black;
								// -webkit-text-fill-color: white;
								fontStyle: 'italic',
								fontFamily: 'Electrofied',
								fontSize: isMobile ? (activeIndex == 0 ? '20px' : '16px') : activeIndex == 0 ? '32px' : '25px',
								color: '#000'
							}} label="PETS" {...a11yProps(0)} />
							<Tab sx={{
								height: "60px",
								transition: '.4s all',
								flex: '1',
								margin: isMobile ? "0 5px" : "0 30px",
								WebkitTextStroke: '0.5px #fff',
								// textShadow: '0 0 2px #fff',
								zIndex: 1,
								fontStyle: 'italic',
								fontFamily: 'Electrofied',
								fontSize: isMobile ? (activeIndex == 1 ? '20px' : '16px') : activeIndex == 1 ? '32px' : '25px',
								color: '#000'
							}} label="SHOES" {...a11yProps(1)} />
							<Tab sx={{
								height: "60px",
								transition: '.4s all',
								flex: '1',
								margin: isMobile ? "0 5px" : "0 30px",
								WebkitTextStroke: '0.5px #fff',
								// textShadow: '0 0 2px #fff',
								fontStyle: 'italic',
								zIndex: 1,
								fontFamily: 'Electrofied',
								fontSize: isMobile ? (activeIndex == 2 ? '20px' : '16px') : activeIndex == 2 ? '32px' : '25px',
								color: '#000'
							}} label="FITTER PASS" {...a11yProps(2)} />
						</Tabs>
					</Box>

				</Box>
			</Wrap>
			<Box sx={{
				position: 'relative', height: "60%",


			}}>
				{
					activeIndex == 1 && [
						<Box sx={{

							position: 'absolute',
							top: "calc(50% + 70px)",
							left: "50%",
							transform: 'translate(-50%, -50%)'
						}}>
							<img width={"100%"} src="assets/dark/neon-orange.png" alt="" />

						</Box>,
						<Box sx={{

							position: 'absolute',
							top: "calc(50% + 70px)",
							left: "50%",
							transform: 'translate(-50%, -50%)'
						}}>

							<img width={"100%"} src="assets/dark/neon-orange1.png" alt="" />
						</Box>
					]
				}

				{
					data.map((item: itemType, index: number) => {
						return <TabPanel key={index} value={activeIndex} index={index} >

							<Box width={isMobile ? '85%' : 500} margin="auto" mt={5}  >
								<Typography
									// typography={'span'}
									fontSize={{ xs: 14, sm: 16 }}
									fontWeight={500}
									color="#fff"
									lineHeight="22px"
									sx={{
										transition: 'all .8s',
										opacity: activeIndex !== index ? '0' : '1',
									}}
									// mb={0.5}
									textAlign="center">
									{item.subtitle}
								</Typography>
							</Box>
							<Box data-aos-offset="1000"

								data-aos-duration="1000" data-aos="fade-right" sx={{ position: "absolute", zIndex: 0, bottom: "0", transform: "translate(-50%, -50%)", left: "0px" }}>
								<img width={"100%"} src={`assets/sec3/bg_left.png`} style={{ objectFit: "cover" }} alt="" />
							</Box>
							<Box data-aos-offset="1000"
								data-aos-duration="1000" data-aos="fade-left" sx={{ position: "absolute", zIndex: 0, bottom: "0", transform: "translate(-50%, -50%)", right: "0px" }}>
								<img width={"100%"} src={`assets/sec3/bg_right.png`} style={{ objectFit: "cover" }} alt="" />
							</Box>

							{item.typeContent == "image" ?
								<Box display="flex" mt={5} alignItems={"center"} justifyContent="center" px={isTablet ? 4 : 0}>
									<img src={item.content.toString()} alt={item.title}
										style={{ height: isTablet ? "auto" : "500px", width: isTablet ? "90%" : "auto" }} />
								</Box>
								:
								// <Box sx={{ height: { xs: '50%', sm: '40%' }, width: '100%' }}>

								<Swiper
									centeredSlides={true}
									loop={true}
									grabCursor={true}
									autoplay={{
										delay: 2000,
										disableOnInteraction: false,
									}}
									onSwiper={(s) => handleSwiper(s)}
									onSlideChange={handleSlideChange}
									slideToClickedSlide={false}
									slidesPerView={isTablet ? isMobile ? 2 : 3 : 5}
									spaceBetween={isTablet ? isMobile ? 0 : 15 : 100}
									pagination={false}
									navigation={false}
									modules={[Autoplay, Pagination, Navigation]}
									className="mySwiper"
									style={{ marginTop: isTablet || isNestHub || isMobile ? "0px" : "0px", width: '100%' }}
								>
									{
										Array.isArray(item.content) &&
										item.content.map((e: contentType, index2: number) => {
											return <SwiperSlide key={index2 + "slide2"} style={{ display: "flex", alignItems: "center" }}>

												<Box sx={{
													// cursor: 'pointer', 
													position: 'relative', height: "100%",
													width: "100%",

												}} onClick={() => {
													// setSlideActiveIndex(index2 + (isTablet ? isMobile ? 2 : 3 : 5))
												}}>

													<Box sx={{
														transition: '.8s all',
														position: 'absolute',
														// height: "100%",
														// width: "100%",
														inset: 0,
														bottom: "20px"
													}}>

														<img style={{
															transition: '.7s all',
															objectFit: 'contain',
															position: 'absolute',
															inset: '0',

															opacity: slideActiveIndex == index2 + (isTablet ? isMobile ? 2 : 3 : 5) ? "1" : "0",
															transform: slideActiveIndex == index2 + (isTablet ? isMobile ? 2 : 3 : 5) ? (isMobile || isBigDesktop ? "scale(1)" : "scale(1.3)") : (isMobile || isBigDesktop ? "scale(0.5)" : "scale(0.8)")
														}} src={e.active} />
														<img style={{
															transition: '.7s all',
															objectFit: 'contain',
															position: 'absolute',
															inset: '0',
															opacity: slideActiveIndex == index2 + (isTablet ? isMobile ? 2 : 3 : 5) ? "0" : "1",
															transform: slideActiveIndex == index2 + (isTablet ? isMobile ? 2 : 3 : 5) ? (isMobile || isBigDesktop ? "scale(1)" : "scale(1.3)") : (isMobile || isBigDesktop ? "scale(0.5)" : "scale(0.8)")
														}} src={e.inActive} />
													</Box>
												</Box>
											</SwiperSlide>
										})
									}
								</Swiper>
								// </Box>
							}

						</TabPanel>
					})
				}
			</Box>

		</Box>
	)
}

export default Section3;

const TabsBox = styled(Tabs)({
	//And This is for the color of the text ↓
	// '.MuiTab-textColorPrimary.Mui-selected': {
	// 	// color: var(--darkGreen)!important;
	// },

	// //this is for changing the span or bottom border ↓
	// '.PrivateTabIndicator-colorPrimary-4': {
	// 	background: 'radial-gradient(50% 50% at 50% 50%, #FF6D24 0%, rgba(255, 109, 36, 0) 100%)'
	// 	// background - color: var(--darkGreen)!important;
	// }
	"& button": {
		padding: 5 // the size of the border
	},
	"& button[aria-selected='true']": {
		position: "relative",

		"&:before": {
			content: '""',
			position: "absolute",
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // border color
			zIndex: 0
		},

		"& > *": { zIndex: 0 },
		"& > .MuiTab-wrapper": {
			// background: "#fff",
			height: "100%"
		}
	}
})
const Wrap = styled(Stack)({
	padding: '0 16px',
	maxWidth: '1120px',
	margin: '0px auto 50px',
	paddingTop: "65px",
	'@media (max-width: 767px)': {
		paddingTop: "24px",
	}
})

const BoxOpenImage = styled(Box)({
	margin: '0 auto 56px',
	'@media (min-width: 560px)': {
		margin: '0 auto 86px',
	},
	'& img': {
		width: '100%',
	}
})
const ListBox = styled(Stack)({
	justifyContent: 'space-between',
	flexDirection: 'row',
	flexWrap: 'wrap',
})
const BoxItem = styled(Box)({
	textAlign: 'center',
	width: '100%',
	marginBottom: '30px',
	'@media (min-width: 560px)': {
		width: 'calc(50% - 30px)',
	},
	'@media (min-width: 992px)': {
		width: 'calc(25% - 16px)',
		marginBottom: '0'
	},
	'& img': {
		width: '68%',
		'@media (min-width: 560px)': {
			width: '60%',
			marginBottom: '23px',
		},
		'@media (min-width: 992px)': {
			width: '100%',
		},
	}
})
