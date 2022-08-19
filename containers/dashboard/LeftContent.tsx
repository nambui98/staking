import styled from '@emotion/styled';
import { Box, Container, Stack, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'
import Countdown from '../../components/sections/Countdown';

type Props = {}

export default function LeftContent({ }: Props) {
	const data = [
		{
			image: "assets/imageBoxAuction.png",
			link: '/burn',
			endTime: '2022-08-19T09:00:00.000Z'
		},
		{
			image: "assets/imageBoxBurnHee.png",
			link: '/burn',
			endTime: '2022-08-19T10:00:00.000Z'
		},
	]
	return (
		<Wrap>
			<GroupItem>
				<Title >
					ONGOING EVENT
				</Title>
				{
					data.map((item, index) => (
						<Item key={index}>
							<Event href={item.link} >
								<a>
									<img src={item.image} width={"100%"} alt="" />
								</a>
							</Event>
							<CountDownWrap>
								Event end in: <Countdown endDate={item.endTime} />
							</CountDownWrap>
						</Item>
					))
				}
			</GroupItem>
		</Wrap>
	)
}
const Wrap = styled(Stack)({});
const GroupItem = styled(Box)({

})
const Item = styled(Box)({
	marginTop: "16px",
	// marginBottom: "16px",
	marginBottom: "40px",
	position: 'relative'
})
const CountDownWrap = styled(Box)({
	position: 'absolute',
	backgroundColor: '#FFC83A',
	color: "#000",
	fontWeight: '500',
	bottom: '-21px',
	right: '20px',
	padding: '4px 8px',
	borderRadius: '0px 0px 4px 4px'
})
const Event = styled(Link)({
	width: "100%",
});
const Title = styled(Typography)({
	fontWeight: '600',
	fontSize: '20px',
	color: '#31373E',
	'@media (max-width: 767px)': {
		fontSize: '16px'
	}
})
// const Item = styled(Box)({
// 	position: "relative",
// 	padding: "1em 1.8em",
// 	outline: "none",
// 	border: "1px solid #303030",
// 	background: "#fff",
// 	color: "#ae00ff",
// 	textTransform: "uppercase",
// 	letterSpacing: "2px",
// 	fontSize: "15px",
// 	overflow: "hidden",
// 	transition: "0.2s",
// 	borderRadius: "20px",
// 	cursor: "pointer",
// 	fontWeight: "bold",
// 	'& span': {
// 		position: 'absolute',
// 		'&:nth-child(1)': {
// 			top: '0',
// 			left: '-100%',
// 			width: '100%',
// 			height: '2px',
// 			background: 'linear - gradient(90deg, transparent, #ae00ff)'
// 		},
// 		'&:nth-child(3)': {
// 			bottom: '0',
// 			right: '-100%',
// 			width: '100%',
// 			height: '2px',
// 			background: 'linear-gradient(90deg, transparent, #001eff)'
// 		},
// 		'&:nth-child(2)': {
// 			top: '-100%',
// 			right: '0',
// 			width: '2px',
// 			height: '100%',
// 			background: 'linear-gradient(180deg, transparent, #ae00ff)'
// 		},
// 		'&:nth-child(4)': {
// 			bottom: '-100%',
// 			left: '0',
// 			width: '2px',
// 			height: '100%',
// 			background: 'linear-gradient(360deg, transparent, #001eff)'
// 		}
// 	},
// 	'&:hover': {
// 		boxShadow: '0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff',
// 		transitionDelay: '0.6s',
// 		'& span:nth-child(1)': {
// 			left: '100 %',
// 			transition: '0.7s'
// 		},
// 		'& span:nth-child(3)': {
// 			right: '100%',
// 			transition: '0.7s',
// 			transitionDelay: '0.35s'
// 		},
// 		'& span:nth-child(2)': {
// 			top: '100%',
// 			transition: '0.7s',
// 			transitionDelay: '0.17s'
// 		},
// 		'& span:nth-child(4)': {
// 			bottom: '100%',
// 			transition: '0.7s',
// 			transitionDelay: '0.52s'
// 		},
// 	},
// 	'&:active': {
// 		// background: '#ae00af',
// 		background: 'linear-gradient(to top right, #ae00af, #001eff)',
// 		color: '#bfbfbf',
// 		boxShadow: '0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff',
// 		transition: '0.1s',
// 		'&span:nth-child(1) span:nth-child(2) span:nth-child(2) span:nth-child(2) ': {
// 			transition: 'none',
// 			transitionDelay: 'none'
// 		}
// 	}

// });