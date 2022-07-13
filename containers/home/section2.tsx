
import { Box, Link, Stack, styled, Typography, useMediaQuery } from "@mui/material";
import { datalabeling } from "googleapis/build/src/apis/datalabeling";
import { NextPage } from "next";
import { ComponentType, useEffect, useState } from "react";
import { BOX_IMAGE, BOX_LIST_ITEM } from "../../constants/openIno";
// import { BOX_IMAGE, BOX_LIST_ITEM } from "../constants/openIno";
import FitnessFi from "./icons/fitnessFi.svg";
import Earth from "./icons/earth.svg";
import Shoes from "./icons/shoes.svg";
import Paw from "./icons/paw.svg";
import Smartwatch from "./icons/smartwatch.svg";
import FitnessFiMobile from "./icons/fitnessFi-mobile.svg";
import EarthMobile from "./icons/earth-mobile.svg";
import ShoesMobile from "./icons/shoes-mobile.svg";
import PawMobile from "./icons/paw-mobile.svg";
import SmartwatchMobile from "./icons/smartwatch-mobile.svg";
import { TEXT_STYLE } from "../../styles/common/textStyles";
import Section2Old from "../home_old/section2";

type itemType = {
	title: string
	content: string
	image: string
	icon: any,
	iconMobile: any,
	top: String,
	left: String,
}
const Section2: NextPage = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [auto, setAuto] = useState<boolean>(true);
	const isMobile = useMediaQuery('(max-width: 767px)');
	const data: itemType[] = [
		{
			title: "FitnessFi",
			content: 'Start earning for doing Activities such as walking, running, cycling, swimming (upcoming), sleeping (upcoming) or more in different game modes',
			image: 'assets/sec2/fitnessfi.png',
			icon: FitnessFi,
			iconMobile: FitnessFiMobile,
			top: "calc(50% - 60px)", left: "-20px"
		},
		{
			title: "SocialFi",
			content: 'Checkin, draw amazing artworks on the map, generate content and inspire the world using beFITTER social media. Join challenges and clubs to unlock social tokens!',
			image: 'assets/sec2/socialfi.png',
			// icon: 'assets/icons/earth.svg'
			icon: Earth,
			iconMobile: EarthMobile,
			top: "72%", left: "7%"
		},
		{
			title: "Lease",
			content: 'Use the application daily with low to zero cost by renting an NFT. Utilize your inventory by using beFITTER advanced management tools!',
			image: 'assets/sec2/lease.png',
			// icon: 'assets/icons/shoes.svg'
			icon: Shoes,
			iconMobile: ShoesMobile,
			top: "92%", left: "32%"
		},
		{
			title: "Pet",
			content: 'A totally exciting gamemode that users can own a pet! Take good care of your pets and they will fetch you bonus tokens when working out with you.',
			image: 'assets/sec2/pet.png',
			// icon: 'assets/icons/paw.svg'
			icon: Paw,
			iconMobile: PawMobile,
			top: "87%", left: "70%"
		},
		{
			title: "Wearable",
			content: 'The first web3 application to be available on wearable aka Smartwatch or fitness tracker, making your activities much more convenient and accurate.',
			image: 'assets/sec2/wearable.png',
			// icon: 'assets/icons/smartwatch.svg'
			icon: Smartwatch,
			iconMobile: SmartwatchMobile,
			top: "66%", left: "87%"
		},
	]
	const styleActiveContent = (index: number) => {
		if (index == activeIndex) {
			return {
				height: "60px",
				opacity: 1
			}
		} else {
			return {
				height: "0px",
				opacity: 0
			}
		}

	}
	let intervalId: any;
	useEffect(() => {
		if (auto) {

			intervalId = setInterval(() => {
				setActiveIndex(prevActiveIndex => {
					if (prevActiveIndex < 4 && prevActiveIndex != null) {
						return prevActiveIndex + 1;
					} else {
						return 0;
					}
				});
			}, 5000);
		}

		return () => clearInterval(intervalId);
	}, [auto]);

	return (
		<Box height={"100%"} width={"100%"} mt={10}>
			<Box position="relative" sx={{ background: "url(assets/dark/bg_sec2.png)", backgroundRepeat: "no-repeat", backgroundPosition: { xs: "0px 100px", sm: "0px 160px" }, mb: { xs: 5, sm: 0 } }}>
				{/* <Box sx={{

					position: 'absolute',
					bottom: "100px",
					// inset: 0
					// top: "calc(50% + 70px)",
					// left: "50%",
					// transform: 'translate(-50%, -50%)'
				}}>
					<img width={"100%"} src="assets/dark/bg_sec2.png" alt="" />

				</Box> */}
				<Wrap sx={{ zIndex: 1 }}>
					{/* <BoxOpenImage><img src={BOX_IMAGE} /></BoxOpenImage> */}
					<BoxTitle>
						<Box display={'flex'} flexDirection={"column"} alignItems="flex-start" sx={{

						}}>
							<Typography
								fontSize={{ xs: 24, sm: 24 }}
								textTransform="uppercase"
								fontFamily='Electrofied'
								fontStyle={'italic'}
								fontWeight={800}
								color="#fff"
								mb={0.5}
								textAlign="left"
								sx={{
									'@media (max-width: 767px)': {
										fontSize: '19px',
										marginBottom: '-5px'
									}
								}}
							>
								Make A healthy lifestyle
							</Typography>
							<Typography
								fontSize={{ xs: 24, sm: 50 }}
								textTransform="uppercase"
								fontFamily='Electrofied'
								fontStyle={'italic'}
								fontWeight={800}
								color="#FF6D24"
								mb={0.5}
								sx={{
									'@media (max-width: 767px)': {
										fontSize: '32px'
									}
								}}
							>
								irresistible
							</Typography>
							<Typography
								fontSize={{ xs: 16, sm: 20 }}
								fontWeight={500}
								color="#5A6178"
								lineHeight="40px"
								textTransform={"uppercase"}
								textAlign="left"
								mt={4}
								sx={{
									'@media (max-width: 767px)': {
										marginTop: '75px',
										lineHeight: '24px'
									}
								}}
							><span style={{ color: '#FF8A50' }}>beFITTER’s</span>  ecosystem helps users improve mental & physical health, gain achievements and still get monetary incentives.</Typography>

						</Box>
						<Box sx={{
							backgroundColor: "#1C1E29",
							borderRadius: "50%",
							position: 'relative',
							// padding: "20px",
							'@media (min-width: 768px)': {
								'& img': {
									minWidth: 384,
									height: 384,
									objectFit: 'cover'
								}
							},
							'@media (max-width: 767px)': {
								marginTop: '60px',
								'& img': {
									width: 240,
									height: 240,
									objectFit: 'cover'
								}
							}
						}}>
							<img src={'assets/dark/neon-orange-6.png'} alt="Logo" width={'auto'} />
							<img style={{ position: 'absolute', inset: 0, transform: 'scale(1.1)', objectFit: 'cover' }} src={'assets/dark/bg_sec1.1.png'} alt="Logo" width={'auto'} />
						</Box>
					</BoxTitle>
				</Wrap >
			</Box>
			{isMobile ? <Section2Old /> : <Wrap sx={{
				marginTop: '-16%',
				position: "relative",
			}}>
				<img width={"100%"} src={`assets/sec2/${activeIndex}.png`} style={{ objectFit: "cover", zIndex: 1 }} alt="" />
				<Box data-aos-offset="100"
					data-aos-duration="600" data-aos="fade-right" sx={{ position: "absolute", zIndex: 0, top: "30%", transform: "translate(-50%, -50%)", right: "100px" }}>
					<img width={"100%"} src={`assets/sec2/bieucam1.png`} style={{ objectFit: "cover" }} alt="" />
				</Box>
				<Box data-aos-offset="100"
					data-aos-duration="600" data-aos="fade-left" sx={{ position: "absolute", zIndex: 0, bottom: "0px", transform: "translate(-50%, -50%)", left: "-100px" }}>
					<img width={"100%"} src={`assets/sec2/bieucam2.png`} style={{ objectFit: "cover" }} alt="" />
				</Box>
				<Box data-aos-offset="100"
					data-aos-duration="600" data-aos="fade-right" sx={{ position: "absolute", zIndex: 0, bottom: "-100px", transform: "translate(-50%, -50%)", right: "0px" }}>
					<img width={"100%"} src={`assets/sec2/bieucam3.png`} style={{ objectFit: "cover" }} alt="" />
				</Box>
				{

					data.map((item: itemType, index: number) => {
						const Icon = isMobile ? item.iconMobile : item.icon;
						return <BoxItemWrapper
							key={index}
							sx={{ top: item.top.toString(), left: item.left.toString(), zIndex: 1 }}
							// sx={{ cursor: 'pointer', position: 'absolute', inset: 0, top: item.top, left: item.left }} 
							onClick={() => {
								setAuto(false)
								setTimeout(() => {
									setAuto(true)
								}, 5000);
								setActiveIndex(index)
							}} >

							<Icon style={{
								transition: '.7s all',
								fill: activeIndex == index ? "#FF6D24" : "#E9EAEF",
							}} />
							<Typography sx={{
								transition: '.4s all', color: activeIndex == index ? "#FF6D24" : "#E9EAEF",
								fontSize: activeIndex == index ? '24px' : '18px',
								// marginLeft: 1,
								'@media (max-width: 767px)': {
									...TEXT_STYLE(14, 500),
									marginTop: '5px',

								}
							}} fontWeight={500}>{item.title}</Typography>

						</BoxItemWrapper>
					})
				}
				{
					data.map((item: itemType, index: number) => {
						return <Box sx={{
							position: 'absolute',
							top: '50%',
							left: "50%",
							transform: 'translate(-50%, -40%)',
							transition: 'all .6s',
							opacity: index == activeIndex ? '1' : 0,
							height: "404px"
						}}>
							<img height={"100%"} src={item.image} alt="" />
							<Box sx={{
								transition: '.4s all',
								...styleActiveContent(activeIndex),
								marginBottom: '20px',
								marginTop: '24px'
							}}>
								<Typography mt={0.5} fontSize={14} color="#fff" lineHeight={"24px"}>{item.content}</Typography>
							</Box>
						</Box>
					})
				}
			</Wrap>}
		</Box>
	)
}

export default Section2;

const BoxTitle = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	'@media (max-width: 991px)': {
		flexDirection: 'column',
		marginTop: 23
	}
})
const BoxItemWrapper = styled(Box)({
	cursor: 'pointer', position: 'absolute',
})
const BoxItem = styled(Box)({
	// position: "absolute",
	// width: "200px",
	// height: "200px"
	// top: "-60px",
	// left: "40px",
	// transform: "translateX(50%)",
	// '@media (max-width: 767px)': {
	// 	marginTop: 16
	// }
})
const BoxItemIcon = styled(Box)({
	'@media (max-width: 767px)': {
		marginRight: 24
	}
})
const Inner = styled(Box)({
	// '@media (max-width: 767px)': {
	// 	flexDirection: 'column'
	// }
})
const BoxIcon = styled(Box)({
	'@media (max-width: 767px)': {
		display: 'flex',
		width: 'calc(100vw - 32px)',
		overflow: 'auto',
	}
})
const Wrap = styled(Stack)({
	padding: '0 16px',
	maxWidth: '1120px',
	margin: '0px auto 0px auto',
	// overflow: 'hidden',
	// paddingTop: '65px',
	textAlign: 'center',
	'@media (min-width: 448px)': {
		// margin: '64px auto 50px',
	},
	'@media (min-width: 560px)': {
		// margin: '29px auto 80px',
	}
})

