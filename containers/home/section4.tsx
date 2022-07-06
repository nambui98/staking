
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
const Section4: NextPage = () => {



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

				</Box>
				<Box flex={1}>
					{/* <img width={"100%"} src={data[activeIndex].image} alt="" /> */}
				</Box>
			</Box >
		</Wrap >
	)
}

export default Section4;

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