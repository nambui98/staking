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
// import "./styles.css";
const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;
// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
	/*
	 * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
	 */
};

const Home: NextPage = () => {
	const [height, setHeight] = useState<number>();
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const [statusPopup, setStatusPopup] = useState(false);
	const [currentPage, setCurrentPage] = useState('1');

	const windowHeightListener = () => {
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		windowHeightListener();
		setTimeout(() => {
			windowHeightListener();
		}, 100);
		window.addEventListener('resize', windowHeightListener);
		return () => {
			window.removeEventListener('resize', windowHeightListener);
		};
	}, []);
	const onLeave = (origin: any, destination: any, direction: any) => {
		setCurrentPage(destination.anchor)
	}
	const SECTIONS = [
		<Box
			key={"1"}
			className={SEL}
			sx={{
				height: height,
				position: 'relative',
			}}
		>
			<Section1 statusPopup={statusPopup} handleStatusPopup={setStatusPopup} />
		</Box>,
		<Box sx={{
			height: { xs: height, sm: '100%' },
			display: { sx: 'block', sm: 'flex' }, alignItems: 'center'

			// position: 'relative',
		}} className={SEL} key={"2"} >
			<Section2 />
		</Box >
		,
		<Box sx={{

			height: { xs: height, sm: '100%' },
			position: 'relative',
		}} className={SEL} key={"3"}>
			<Section3 />
		</Box>
		,
		<Box className={SEL} key={"4"}>
			<Section4 />
		</Box>,
		<Box className={SEL} key={"5"}>
			<Section5 />
		</Box>,
		<Box className={SEL} key={"6"}>
			<Section6 />
		</Box>,
		<Box className={SEL} key={"7"}>
			<Section7 />
		</Box>,
		<Box className={SEL} key={"8"}>
			<Section8 />

		</Box>,
		<Box sx={{

			height: { xs: height, sm: '100%' },
			position: 'relative',
		}} className={SEL} key={"9"}>
			<Section9 />
		</Box>,
	]
	const isMobile = useMediaQuery('(max-width:599px)');
	return (
		<HomeLayoutNew sxProps={{ background: '#fff' }} headerLandingPage={true} currentPage={currentPage}>
			{
				isMobile ? SECTIONS :
					<ReactFullpage
						// debug /* Debug logging */
						// Required when using extensions
						pluginWrapper={pluginWrapper}

						// fullpage options
						// licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
						// navigation
						anchors={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
						sectionSelector={SECTION_SEL}
						onLeave={onLeave}
						// sectionsColor={[...originalColors]}
						render={(comp) => (
							<ReactFullpage.Wrapper>
								{SECTIONS}
							</ReactFullpage.Wrapper>
						)}
					/>
			}

			<PopupApp statusPopup={statusPopup} handleToggleStatusPopup={setStatusPopup} />
		</HomeLayoutNew>
	);
};

export default Home;
