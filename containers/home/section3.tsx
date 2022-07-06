import { Box, Link, Stack, styled, Tabs, Typography, useMediaQuery } from "@mui/material";
import { datalabeling } from "googleapis/build/src/apis/datalabeling";
import { NextPage } from "next";
import { makeStyles } from "@mui/styles";
import { ComponentType, useState } from "react";
import { BOX_IMAGE, BOX_LIST_ITEM } from "../../constants/openIno";
// import { BOX_IMAGE, BOX_LIST_ITEM } from "../constants/openIno";
import FitnessFi from "./icons/fitnessFi.svg";
import Earth from "./icons/earth.svg";
import Shoes from "./icons/shoes.svg";
import Paw from "./icons/paw.svg";
import Smartwatch from "./icons/smartwatch.svg";
// Import Swiper React components
import Tab from '@mui/material/Tab';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { log } from "console";

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
	const {children, value, index, ...other} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{children}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles: any = makeStyles({
	indicator: {
		background: "radial-gradient(50% 50% at 50% 50%, #FF6D24 0%, rgba(255, 109, 36, 0) 100%);",
		// '&, &:before': {
		// 	position: "absolute",
		// 	bottom: 0,
		// 	// top: "0px",
		// 	background: "radial-gradient(50% 50% at 50% 50%, #FF6D24 0%, rgba(255, 109, 36, 0) 100%);",
		// },
		// '&:after': {
		// 	content: "aaa",
		// 	top: "0px",
		// 	background: "radial-gradient(50% 50% at 50% 50%, #FF6D24 0%, rgba(255, 109, 36, 0) 100%);",
		// },
	},
	// tabs: {
	// 	"& button[aria-selected='true']": {
	// 		border: "3px solid red"
	// 	}
	// }
});
const Section3: NextPage = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [slideActiveIndex, setSlideActiveIndex] = useState<number>(3);
	const [swiper, setSwiper] = useState(null);
	const isTablet = useMediaQuery('(max-width:1000px)');
	const isMobile = useMediaQuery('(max-width:599px)');
	const classes = useStyles();
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
	const styleActiveContent = (index: number) => {
		if (index == activeIndex) {
			return {
				height: "100%",
				opacity: 1
			}
		} else {
			return {
				height: 0,
				opacity: 0
			}
		}

	}

	console.log(data[activeIndex].image);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setActiveIndex(newValue);
	};
	const handleSwiper = (s: any) => {
		setSwiper(s);
	}
	const handleSlideChange = (s: any) => {
		setSlideActiveIndex(s.activeIndex);
	}
	return (
		<div style={{
			backgroundImage: `url(assets/bg_sec3.png)`,
			height: '100%',
			width: "100%",
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			// padding: '29px auto 50px',

		}}>

			<Wrap sx={{
				marginBottom: "0px !important",
				marginTop: "120px !important"
			}}>
				<Box sx={{
					display: "flex",
					justifyContent: "center",
					align: "center",
					mb: isTablet ? 2 : 5,
					paddingTop: isTablet ? 3 : 0,
				}}>
					{isMobile ? (
						<img height={"auto"} width={"auto"} src="assets/nfts_system_mobile.png"/>
					) : (
						<img height={"90px !important"} src="assets/nfts_system.png"/>
					)}

				</Box>
				<Box sx={{width: '100%'}}>
					<Box sx={{borderBottom: 1, borderColor: 'divider'}}>
						<Tabs className={classes.tabs}
									classes={{indicator: classes.indicator}} value={activeIndex} onChange={handleChange}
									aria-label="basic tabs example">
							<Tab sx={{
								height: "60px",
								transition: '.4s all',
								flex: '1',
								margin: isMobile ? "0 5px" : "0 30px",
								textShadow: '0 0 2px #fff',
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
								textShadow: '0 0 2px #fff',
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
								textShadow: '0 0 2px #fff',
								fontStyle: 'italic',
								fontFamily: 'Electrofied',
								fontSize: isMobile ? (activeIndex == 2 ? '20px' : '16px') : activeIndex == 2 ? '32px' : '25px',
								color: '#000'
							}} label="FITTER PASS" {...a11yProps(2)} />
						</Tabs>
					</Box>

				</Box>
			</Wrap>


			{
				data.map((item: itemType, index: number) => {
					return <TabPanel key={index} value={activeIndex} index={index}>

						<Box width={isMobile ? '85%' : 500} margin="auto" mt={5}>
							<Typography 
								// typography={'span'}
								fontSize={{ xs: 14, sm: 16 }}
								fontWeight={500}
								color="#fff"
								// mb={0.5}
								textAlign="center">
									{data[activeIndex].subtitle}
							</Typography>
						</Box>

						{item.typeContent == "image" ?
							<Box display="flex" mt={5} alignItems={"center"} justifyContent="center" px={isTablet ? 4 : 0}>
								<img src={item.content.toString()} alt={item.title}
										 style={{height: isTablet ? "auto" : "500px", width: isTablet ? "90%" : "auto"}}/>
							</Box>

							:
							<Swiper
								centeredSlides={true}
								autoplay={{
									delay: 2000,
									disableOnInteraction: false,
								}}
								onSwiper={(s) => handleSwiper(s)}
								onSlideChange={handleSlideChange}
								slidesPerView={isTablet ? isMobile ? 2 : 3 : 4}
								// initialSlide={slideActiveIndex}
								spaceBetween={isTablet ? isMobile ? 0 : 15 : 30}
								pagination={false}
								navigation={false}
								// showsPagination={false}
								modules={[Autoplay, Pagination, Navigation]}
								className="mySwiper"
								style={{height: isMobile ? "400px" : "500px"}}
							>
								{
									Array.isArray(item.content) &&
									item.content.map((e: contentType, index2: number) => {
										return <SwiperSlide key={index2 + "slide2"}>

												<Box sx={{cursor: 'pointer'}} onClick={() => {
													setSlideActiveIndex(index2)
												}}>
													<img style={{
														transition: '.4s all',
														transform: slideActiveIndex == index2 ? "scale(1)" : "scale(0.8)"
													}} src={slideActiveIndex == index2 ? e.active : e.inActive}/>
												</Box>
											</SwiperSlide>
									})
								}
							</Swiper>
						}
					</TabPanel>
				})
			}
		</div>
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
	margin: '29px auto 50px',
	'@media (min-width: 560px)': {
		margin: '29px auto 80px',
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
