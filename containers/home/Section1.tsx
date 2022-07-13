import { Box, Stack, styled, Typography, useMediaQuery } from "@mui/material"
import React, { useEffect, useRef, useState } from "react";
import {
	videoSlides,
	BANNER,
	APP,
	CHALLENGE,
	NUMBER,
	WORKS,
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
	return (
		<Wrap>
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
							{/* <Box sx={{ height: "122px", position: 'absolute', }}>

								<img src={'assets/logo/02.png'} alt="Logo" width={'auto'} />
							</Box> */}
						</SwiperSlide>
					);
				})}
			</Swiper>
			{isMobile1140 && <ButtonGetApp onClick={() => handleStatusPopup(true)}>GET THE APP</ButtonGetApp>}
			<BoxCountDown>
				<TitleCountDown><img src={'assets/text-ido.png'} /></TitleCountDown>
				<CountdownClockNew endDate={'2022-07-15T13:00:00.000Z'} />
			</BoxCountDown>
		</Wrap>
	)
}

const Wrap = styled(Stack)({
	width: '100vw',
	height: '100vh',
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
	'@media (max-width: 767px)': {
		flexDirection: 'column',
		padding: '5.5px 8px',
		justifyContent: 'center',
		background: 'linear-gradient(90deg, rgba(255, 109, 36, 0) 0%, rgba(255, 109, 36, 0.7) 65.76%, rgba(255, 109, 36, 0) 95.65%)'
	}
})
const TitleCountDown = styled(Box)({
	...TEXT_STYLE(40, 700),
	marginRight: 14,
	lineHeight: 0,
	'@media (max-width: 767px)': {
		marginRight: 'auto',
		marginLeft: 30,
		'& img': {
			width: 90,
		}
	}
})