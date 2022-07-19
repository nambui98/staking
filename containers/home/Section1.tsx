import { Box, Link, Stack, styled, Typography, useMediaQuery } from "@mui/material"
import React, { useEffect, useRef, useState } from "react";
import {
	videoSlides,
	BANNER,
	APP,
	CHALLENGE,
	NUMBER,
	WORKS,
	LIST_LOGO,
} from '../../constants/home';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import { TEXT_STYLE } from "../../styles/common/textStyles";
import CountdownClock from "../../components/sections/CountdownClock";
import CountdownClockNew from "../../components/sections/countdownClockNew";
import { PopupApp } from "./PopupApp";
import { HOME_LOGO } from "../../constants/header";

export interface IProps {
	handleStatusPopup: (status: boolean) => void;
	statusPopup: boolean
}

export const Section1: React.FC<IProps> = ({ handleStatusPopup, statusPopup }) => {
	const isMobile = useMediaQuery('(max-width:700px)');
	const [heightWindow, setHeightWindow] = useState<any>();
	const isMobile1140 = useMediaQuery('(max-width:1140px)');
	const isBigDesktop = useMediaQuery('(min-width:3200px)');
	const [indexActive, setIndexActive] = useState(0);
	const refSlide1 = useRef<any>(null);
	const refSlide2 = useRef<any>(null);
	const refSlide3 = useRef<any>(null);
	const refSlide4 = useRef<any>(null);
	const refSlide5 = useRef<any>(null);
	const data = videoSlides([
		refSlide1,
		refSlide2,
		refSlide3,
		refSlide4,
		refSlide5,
	]);

	useEffect(() => {
		refSlide1.current?.load();
		refSlide2.current?.load();
		refSlide3.current?.load();
		refSlide4.current?.load();
		refSlide5.current?.load();
	}, [isMobile, isBigDesktop]);

	useEffect(() => {
		setHeightWindow(window.innerHeight)
	}, [])
	return (
		<Wrap sx={{ height: heightWindow ? heightWindow : 'auto' }}>
			<Swiper
				autoplay={{
					delay: data[indexActive].unplayable ? 3000 : 6000,
					disableOnInteraction: false,
				}}
				effect={'fade'}
				modules={[Autoplay, EffectFade]}
				onSlideChange={(e) => {
					data[e.activeIndex].ref?.current?.play();
					setIndexActive(e.activeIndex);
				}}
				className="mySwiper"
			>
				{data.map((slide: any, index: number) => {
					return slide.unplayable ? (
						<SwiperSlide key={index}>
							<img
								src={isMobile && slide.mobileSrc ? slide.mobileSrc : slide.src}
								className="absolute"
								alt=""
							/>
							<Box sx={{ height: "122px", position: 'absolute', }}>

								<img src={'assets/logo/02.png'} alt="Logo" width={'auto'} />
							</Box>
						</SwiperSlide>
					) : (
						<SwiperSlide key={index}>
							<video
								id={`video${index}`}
								ref={slide.ref}
								autoPlay={index === 0}
								loop
								muted
								playsInline
								className="absolute"
							>
								<source
									src={isMobile ? slide.mobileSrc : isBigDesktop ? slide.bigDecktopSrc : slide.src}
									type='video/mp4; codecs="hvc1"'
								/>
								<source
									src={isMobile ? slide.mobileSrc : isBigDesktop ? slide.bigDecktopSrc : slide.src}
									type="video/webm"
								/>
							</video>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<Box sx={{
				position: 'fixed',
				bottom: 0,
				left: '50%',
				transform: 'translateX(-50%)',
				zIndex: '2',
				textAlign: 'center',
				maxWidth: '1120px',
				width: '100%',
			}}>
				<Box sx={{
					padding: '8px 0 0',
					background: 'linear-gradient(180deg, rgba(28, 30, 41, 0) 0%, #1C1E29 100%)',
					display: 'flex',
					flexWrap: 'wrap',
					alignItems: 'center',
					justifyContent: 'center',
					'@media (min-width: 768px)': {
						padding: '4px 0',
						background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 0.01%, rgba(255, 255, 255, 0.38) 50.82%, rgba(255, 255, 255, 0) 95.65%)'
					}
				}}>
					{LIST_LOGO?.map((item, index) => (
						<a href={item.url} key={index} target="_blank">
							<Exchanges key={index} ><img style={{
								width: index === 0 ? '65%' : index === 1 ? '80%' : index === 2 ? '70%' : index === 3 ? '93%' : index === 4 ? '85%' : '65%',
							}} src={item.image} /> <BoxLive><img src='assets/live.gif' /></BoxLive></Exchanges>
						</a>
					))}
				</Box>
			</Box>
			{/* <BoxCountDown>
				<Box sx={{
					'@media (min-width: 1024px)': {
						display: 'flex',
					},
					'@media (max-width: 1023px)': {
						marginTop: '-25px',
						marginRight: 'auto',
						marginBottom: '17px',
						paddingLeft: '8px',
						paddingRight: '8px',
					}
				}}>
					<TitleCountDown><img src={'assets/text-ido.png'} /></TitleCountDown>
					<CountdownClockNew endDate={'2022-07-15T13:00:00.000Z'} />
				</Box>
				<Box sx={{
					marginLeft: '60px',
					'@media (min-width: 1050px)': {
						marginLeft: '130px',
					},
					'& img': {
						marginRight: '30px',
						transition: '.3s all',
						'&:hover': {
							filter: 'drop-shadow(0px 0px 16px #FF6D24)'
						}
					},
					'& a:last-of-type img': {
						marginRight: '0 !important',
					},
					'@media (max-width: 1023px)': {
						display: 'flex',
						marginLeft: '0',
						alignItems: 'center',
						'& img': {
							maxWidth: '70px',
							marginRight: '16px'
						},
						'& img:first-of-type': {
							maxWidth: '80px'
						}
					}
				}}>
					<Typography sx={{
						marginBottom: '8px',
						...TEXT_STYLE(12, 500, '#ffffff'),
						'@media (max-width: 1023px)': {
							marginBottom: 0,
							marginRight: '12px'
						}
					}}>More info on</Typography>
					<Box sx={{
						display: "flex",
						alignItems: "center",
						'& a': {
							display: "inline-block",
						}
					}}>
						<a href="https://daomaker.com/company/befitter" target={'_blank'}><img src={'assets/dark/da2.png'} /></a>
						<a href="https://redkite.polkafoundry.com/#/buy-token/188" target={'_blank'}><img src={'assets/dark/rk2.png'} /></a>
						<a href="https://gamefi.org/igo/befitter-igo" target={'_blank'}><img src={'assets/dark/gf2.png'} /></a>
					</Box>
				</Box>
			</BoxCountDown> */}
		</Wrap>
	)
}

const Wrap = styled(Stack)({
	width: '100vw',
	position: 'relative',

})
const ButtonGetApp = styled(Box)({
	position: 'absolute',
	bottom: 80,
	width: 198,
	left: '50%',
	zIndex: 2,
	transform: 'translateX(-50%)',
	padding: '12px 16px',
	borderRadius: '12px',
	...TEXT_STYLE(20, 600, '#31373E'),
	background: '#FFFFFF',
	boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
	fontFamily: 'Electrofied',
	textTransform: 'uppercase',
	fontStyle: 'italic',
	color: '#FF8A50',
	cursor: 'pointer',
	marginRight: '0 !important'
})
const BoxCountDown = styled(Stack)({
	position: 'absolute',
	zIndex: 2,
	left: '50%',
	transform: 'translateX(-50%)',
	bottom: 0,
	background: 'linear-gradient(90deg, rgba(255, 109, 36, 0) 0%, rgba(255, 109, 36, 0.7) 11.11%, rgba(255, 109, 36, 0) 95.65%);',
	padding: 8,
	flexDirection: 'row',
	alignItems: 'center',
	width: '100%',
	maxWidth: 1120,
	justifyContent: 'center',
	'@media (max-width: 1023px)': {
		padding: '5.5px 8px',
		justifyContent: 'center',
		background: 'linear-gradient(90deg, rgba(255, 109, 36, 0) 0%, rgba(255, 109, 36, 0.34) 65.76%, rgba(255, 109, 36, 0) 95.65%)',
		flexDirection: 'column',
	}
})
const TitleCountDown = styled(Box)({
	...TEXT_STYLE(40, 700),
	marginRight: 14,
	lineHeight: 0,
	'@media (max-width: 1023px)': {
		marginRight: 'auto',
		'& img': {
			width: 90,
		}
	}
})
const Exchanges = styled(Box)({
	borderRadius: 24,
	background: '#151515',
	margin: '0 8px',
	padding: '10px 5px',
	width: 104,
	height: 40,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	lineHeight: 0,
	position: 'relative',
	marginBottom: 16,
	'& img': {
		width: '100%'
	},
	'@media (min-width: 768px)': {
		width: 144,
		height: 48,
		marginBottom: 0
	},
	'@media (min-width: 768px) and (max-width: 959px)': {
		marginBottom: 10
	}
})
const BoxLive = styled(Box)({
	position: 'absolute',
	right: 0,
	top: -19,
	'@media (min-width: 768px)': {
		right: -4,
		top: -13,
	}
})