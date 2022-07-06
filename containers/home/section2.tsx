
import { Box, Link, Stack, styled, Typography } from "@mui/material";
import { datalabeling } from "googleapis/build/src/apis/datalabeling";
import { NextPage } from "next";
import { ComponentType, useState } from "react";
import { BOX_IMAGE, BOX_LIST_ITEM } from "../../constants/openIno";
// import { BOX_IMAGE, BOX_LIST_ITEM } from "../constants/openIno";
import FitnessFi from "./icons/fitnessFi.svg";
import Earth from "./icons/earth.svg";
import Shoes from "./icons/shoes.svg";
import Paw from "./icons/paw.svg";
import Smartwatch from "./icons/smartwatch.svg";

type itemType = {
	title: string
	content: string
	image: string
	icon: any
}
const Section2: NextPage = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const data: itemType[] = [
		{
			title: "FitnessFi",
			content: 'Start earning for doing Activities such as walking, running, cycling, swimming (upcoming), sleeping (upcoming) or more in different game modes',
			image: 'assets/sec2/fitnessfi.png',
			icon: FitnessFi
		},
		{
			title: "SocialFi",
			content: 'Checkin, draw amazing artworks on the map, generate content and inspire the world using beFITTER social media. Join challenges and clubs to unlock social tokens!',
			image: 'assets/sec2/socialfi.png',
			// icon: 'assets/icons/earth.svg'
			icon: Earth
		},
		{
			title: "Lease",
			content: 'Use the application daily with low to zero cost by renting an NFT. Utilize your inventory by using beFITTER advanced management tools!',
			image: 'assets/sec2/lease.png',
			// icon: 'assets/icons/shoes.svg'
			icon: Shoes
		},
		{
			title: "Pet",
			content: 'A totally exciting gamemode that users can own a pet! Take good care of your pets and they will fetch you bonus tokens when working out with you.',
			image: 'assets/sec2/pet.png',
			// icon: 'assets/icons/paw.svg'
			icon: Paw
		},
		{
			title: "Wearable",
			content: 'The first web3 application to be available on wearable aka Smartwatch or fitness tracker, making your activities much more convenient and accurate.',
			image: 'assets/sec2/wearable.png',
			// icon: 'assets/icons/smartwatch.svg'
			icon: Smartwatch
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
	console.log(data[activeIndex].image);

	return (
		<Wrap>
			{/* <BoxOpenImage><img src={BOX_IMAGE} /></BoxOpenImage> */}
			<Box display={'flex'} mb={4} alignItems="center" flexDirection={"column"}>

				<Typography
					fontSize={{ xs: 10, sm: 32 }}
					textTransform="uppercase"
					fontFamily='Electrofied'
					fontStyle={'italic'}
					fontWeight={800}
					color="#31373E"
					mb={0.5}
				>
					Make A healthy lifestyle
				</Typography>
				<Typography
					fontSize={{ xs: 15, sm: 50 }}
					textTransform="uppercase"
					fontFamily='Electrofied'
					fontStyle={'italic'}
					fontWeight={800}
					color="#FF6D24"
					mb={0.5}
				>
					irresistible
				</Typography>
				<Box display={'flex'}>

					<Typography
						typography={'span'}
						fontSize={{ xs: 10, sm: 16 }}
						fontWeight={500}
						color="#FF6D24"
						mb={0.5}
						textAlign="center"
					>
						beFITTER
					</Typography>
					<Typography typography={'span'}
						fontSize={{ xs: 10, sm: 16 }}
						fontWeight={500}
						color="#5A6178"
						mb={0.5}
						textAlign="center">’s ecosystem helps users improve mental & physical health,<br></br> gain achievements and still get monetary incentives.
					</Typography>
				</Box>
			</Box >
			<Box display={'flex'} alignItems={'center'}>
				<Box flex={1}>
					{
						data.map((item: itemType, index: number) => {
							const Icon = item.icon;
							return <Box mb={2} key={index} onClick={() => { setActiveIndex(index) }} sx={{ cursor: 'pointer' }}>
								<Box display="flex" justifyItems="center" alignItems={"center"}>
									<Icon style={{ transition: '.4s all', fill: activeIndex == index ? "#FF6D24" : "#898E9E" }} />
									<Typography sx={{ transition: '.4s all', color: activeIndex == index ? "#FF6D24" : "#31373E" }} fontWeight={500} fontSize={24}>{item.title}</Typography>
								</Box>
								<Box sx={{
									transition: '.4s all',
									...styleActiveContent(index)
								}}>
									<Typography mt={0.5} fontSize={16} color="#31373E">{item.content}</Typography>
								</Box>
							</Box>
						}
						)
					}
				</Box>
				<Box flex={1}>
					<img width={"100%"} src={data[activeIndex].image} alt="" />
				</Box>
			</Box >
		</Wrap >
	)
}

export default Section2;

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
const BoxItemBody = styled(Typography)({
	'&, & a': {
		fontSize: '16px',
		fontWeight: '500',
		color: '#31373E',
		textAlign: 'center',
		lineHeight: '1.4'
	},
	'& a': {
		textDecoration: 'underline',
	}
})