import type { NextPage } from 'next';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {
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
	styled,
} from '@mui/material';

import styles from '../styles/Home.module.scss';
import HomeLayout from '../components/layouts/HomeLayout';
import {
	videoSlides,
	BANNER,
	APP,
	CHALLENGE,
	NUMBER,
	WORKS,
} from '../constants/home';
import { IconImage } from '../components/styled';
import BounceIconButton from '../components/buttons/BounceIconButton';
import AppStoreButton from '../components/buttons/AppStoreButton';
import SectionTitle from '../components/sections/SectionTitle';
import NumberBox from '../components/sections/NumberBox';
import CountdownClock from '../components/sections/CountdownClock';
import FoundedBy from '../components/sections/FoundedBy';
import Team from '../components/sections/Team';
import Roadmap from '../components/sections/Roadmap';
import StayInTouch from '../components/sections/StayInTouch';
import OpenIno from '../components/pageComponent/home/openIno';
import HomeLayoutNew from '../components/layouts/HomeLayoutNew_old';
import ReactFullpage from '@fullpage/react-fullpage';
import MainFooter from '../components/footers/MainFooter';
import Section2 from '../containers/home/section2';
import Section3 from '../containers/home/section3';
import Section4 from '../containers/home/section4';
import { Section1 } from '../containers/home/Section1';
import Section5 from '../containers/home/section5';
import Section6 from '../containers/home/section6';
import Section7 from '../containers/home/section7';
import Section8 from '../containers/home/section8';
import { PopupApp } from '../containers/home/PopupApp';
import Section9 from '../containers/home/section9';
import { Box } from '@mui/system';
import AOS from "aos";
import "aos/dist/aos.css";
import { ParallaxBanner } from 'react-scroll-parallax';
const Home: NextPage = () => {
	const [height, setHeight] = useState<number>();
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const [statusPopup, setStatusPopup] = useState(false);
	const [currentPage, setCurrentPage] = useState('1');
	const isMobile767 = useMediaQuery('(max-width: 767px)');
	const isMobile991 = useMediaQuery('(max-width: 991px)');

	const windowHeightListener = () => {
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	useEffect(() => {
		windowHeightListener();
		// setTimeout(() => {
		// 	windowHeightListener();
		// }, 100);
		// window.addEventListener('resize', windowHeightListener);
		// return () => {
		// 	window.removeEventListener('resize', windowHeightListener);
		// };
	}, []);
	console.log(height);
	const SECTIONS = [
		<Box
			key={"1"}

			sx={{
				height: height,
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Section1 statusPopup={statusPopup} handleStatusPopup={setStatusPopup} />
		</Box>,
		<Box sx={{
			// height: { xs: height, sm: '100%' },
			display: { sx: 'block', sm: 'flex' }, alignItems: 'center'

			// position: 'relative',
		}} key={"2"} >
			<Section2 />
		</Box >
		,
		<Box sx={{
			height: height,
			position: 'relative',
			'@media (min-width: 3000px)': {
				// paddingTop: "24px",
				height: "1200px"
			}
		}} key={"3"}>
			<Section3 />
		</Box>
		,
		<Box key={"4"} sx={{

			height: { xs: "auto", sm: height },
			position: 'relative',
		}}>
			<Section4 />
		</Box >,
		<Box key={"5"} sx={{
			height: isMobile991 ? 'auto' : height,

			position: 'relative',
			display: "flex",
			alignItems: "center",
			// backgroundImage: 'url(assets/sec5/bg.png)',
			// backgroundPosition: 'top left',
			// backgroundSize: 'contain',
			// backgroundRepeat: 'no-repeat',
		}}>

			<Section5 />
		</Box>,
		<Box key={"6"} sx={{
			'@media (min-width: 768px)': {
				marginTop: '-200px'
			}
		}}>
			{/* <Box data-aos-offset="600"

				data-aos-duration="1000" data-aos="fade-left" sx={{ position: 'absolute', right: 0, top: "30%" }}>
				<img width={"100%"} src={`assets/sec4/bg_right.png`} style={{ objectFit: "cover" }} alt="" />
			</Box> */}
			<Section6 />
		</Box>,
		<Box key={"7"}
			height="100vh"
		// sx={{ 
		// 	backgroundImage: { xs: "transparent", sm: `url(assets/dark/sec7.png)` }, backgroundRepeat: "no-repeat", backgroundPosition: "bottom", paddingTop: "1px" }}
		>
			{isMobile767 ? <Section7 /> : <ParallaxBanner
				style={{ height: "100%" }}
				layers={[
					{ image: 'assets/dark/sec7_5.png', style: { backgroundRepeat: "no-repeat", inset: "100px 0px", backgroundSize: "contain", backgroundPosition: "0px 0px" }, speed: 40, },
					{ image: 'assets/dark/sec7_4.png', style: { backgroundRepeat: "no-repeat", inset: "550px 0px", backgroundPosition: "bottom", backgroundSize: "cover", height: "306px" } },
					{
						children: [
						]
					}
				]}
				className="aspect-[2/1]"
			>
				<Section7 />
			</ParallaxBanner>}
		</Box>,
		<Box key={"8"} >
			<Section8 />
		</Box>,
		<Box sx={{
			backgroundColor: "#151515",
			position: 'relative',
		}} key={"9"}>
			<Section9 />
		</Box>
	]
	const isMobile = useMediaQuery('(max-width:599px)');
	return (
		<HomeLayoutNew sxProps={{ background: '#151515' }} headerLandingPage={true} currentPage={currentPage}>
			{SECTIONS}


			<PopupApp statusPopup={statusPopup} handleToggleStatusPopup={setStatusPopup} />
		</HomeLayoutNew>
	);
};

export default Home;
