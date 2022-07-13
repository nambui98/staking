
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

type itemType = {
	title: string
	content: string
	image: string
	icon: any,
	iconMobile: any
}
const Section2Old: NextPage = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [auto, setAuto] = useState<boolean>(true);
	const isMobile = useMediaQuery('(max-width: 767px)');
	const data: itemType[] = [
		{
			title: "FitnessFi",
			content: 'Start earning for doing Activities such as walking, running, cycling, swimming (upcoming), sleeping (upcoming) or more in different game modes',
			image: 'assets/sec2/fitnessfi.png',
			icon: FitnessFi,
			iconMobile: FitnessFiMobile
		},
		{
			title: "SocialFi",
			content: 'Checkin, draw amazing artworks on the map, generate content and inspire the world using beFITTER social media. Join challenges and clubs to unlock social tokens!',
			image: 'assets/sec2/socialfi.png',
			// icon: 'assets/icons/earth.svg'
			icon: Earth,
			iconMobile: EarthMobile
		},
		{
			title: "Lease",
			content: 'Use the application daily with low to zero cost by renting an NFT. Utilize your inventory by using beFITTER advanced management tools!',
			image: 'assets/sec2/lease.png',
			// icon: 'assets/icons/shoes.svg'
			icon: Shoes,
			iconMobile: ShoesMobile
		},
		{
			title: "Pet",
			content: 'A totally exciting gamemode that users can own a pet! Take good care of your pets and they will fetch you bonus tokens when working out with you.',
			image: 'assets/sec2/pet.png',
			// icon: 'assets/icons/paw.svg'
			icon: Paw,
			iconMobile: PawMobile
		},
		{
			title: "Wearable",
			content: 'The first web3 application to be available on wearable aka Smartwatch or fitness tracker, making your activities much more convenient and accurate.',
			image: 'assets/sec2/wearable.png',
			// icon: 'assets/icons/smartwatch.svg'
			icon: Smartwatch,
			iconMobile: SmartwatchMobile
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
		// <Box height={"100%"}>

		<Wrap sx={{
			marginTop: '-50px',
			background: '#1C1E29'
		}}>
			{/* <BoxOpenImage><img src={BOX_IMAGE} /></BoxOpenImage> */}
			<Box display={'flex'} mb={{ xs: 2, md: 4 }} alignItems="center" flexDirection={"column"}>
			</Box >
			<Inner display={'flex'} alignItems={'center'}>
				<BoxIcon flex={1}>
					{
						data.map((item: itemType, index: number) => {
							const Icon = isMobile ? item.iconMobile : item.icon;
							return <BoxItemIcon mb={{ xs: 2, md: 2 }} key={index} sx={{ cursor: 'pointer' }} onClick={() => {
								setAuto(false)
								setTimeout(() => {
									setAuto(true)
								}, 5000);
								setActiveIndex(index)
							}} >
								<Box display="flex" justifyItems="center" alignItems={"center"} sx={{
									'@media (max-width: 767px)': {
										flexDirection: 'column',
									},
									cursor: 'pointer'
								}}>
									<Icon style={{
										transition: '.7s all',
										// opacity: activeIndex == index ? 1 : 0,
										fill: activeIndex == index ? "#FF6D24" : "#E9EAEF",

									}} />
									<Typography sx={{
										transition: '.4s all', color: activeIndex == index ? "#FF6D24" : "#E9EAEF",
										fontSize: activeIndex == index ? '24px' : '18px',
										marginLeft: 1,
										'@media (max-width: 767px)': {
											...TEXT_STYLE(14, 500),
											marginTop: '5px',

										}
									}} fontWeight={500}>{item.title}</Typography>
								</Box>
								{!isMobile && <Box sx={{
									transition: '.4s all',
									...styleActiveContent(index)
								}}>
									<Typography mt={0.5} fontSize={16} color="#E9EAEF" sx={{ zIndex: 0, pointerEvents: 'none' }} textAlign="left" lineHeight="20px">{item.content}</Typography>
								</Box>}
							</BoxItemIcon>
						}
						)
					}
				</BoxIcon>
				{isMobile && <Box sx={{
					transition: '.4s all',
					...styleActiveContent(activeIndex),
					marginBottom: '20px',
					marginTop: '5px'
				}}>
					<Typography mt={0.5} fontSize={14} color="#FFFFFF" >{data[activeIndex].content}</Typography>
				</Box>}

				<Box flex={1} sx={{ position: 'relative', height: '100%', width: '100%' }}>
					<BoxImage sx={{opacity: 0, marginBottom: '80px'}}>
						<img width={"100%"} src={'assets/sec2/fitnessfi.png'} alt="" />
					</BoxImage>
					{
						data.map((item: itemType, index: number) => {
							return <BoxImage sx={{
								position: 'absolute',
								top: 0,
								// transform: 'translateY(0)',
								transition: 'all .6s',
								opacity: index == activeIndex ? '1' : 0,
								background: '#1C1E29'
							}}>
								<img width={"100%"} src={item.image} alt="" />
							</BoxImage>
						})
					}

				</Box>
			</Inner >
		</Wrap >
		// </Box>
	)
}

export default Section2Old;

const BoxImage = styled(Box)({
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
	'@media (max-width: 767px)': {
		flexDirection: 'column'
	}
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

