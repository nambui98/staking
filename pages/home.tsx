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
	Box,
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
import HomeLayoutNew from '../components/layouts/HomeLayoutNew';
import ReactFullpage from '@fullpage/react-fullpage';
import MainFooter from '../components/footers/MainFooter';
import Section2 from '../containers/home/section2';
import Section3 from '../containers/home/section3';
import Section4 from '../containers/home/section4';
import { Section1 } from '../containers/home/Section1';
// import "./styles.css";
const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;
const BannerSwiper: React.FC<any> = () => {
	const isMobile = useMediaQuery('(max-width:700px)');
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
		// videoRef.current?.load();
		refSlide1.current?.load();
		refSlide2.current?.load();
		refSlide3.current?.load();
		refSlide4.current?.load();
		refSlide5.current?.load();
	}, [isMobile]);

	return (
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
					</SwiperSlide>
				) : (
					<SwiperSlide key={index}>
						<video
							// key={isMobile && slide.mobileSrc ? slide.mobileSrc : slide.src}
							id={`video${index}`}
							ref={slide.ref}
							autoPlay={index === 0}
							loop
							muted
							playsInline
							className="absolute"
						>
							<source
								src={isMobile && slide.mobileSrc ? slide.mobileSrc : slide.src}
								type='video/mp4; codecs="hvc1"'
							/>
							<source
								src={isMobile && slide.mobileSrc ? slide.mobileSrc : slide.src}
								type="video/webm"
							/>
						</video>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

const BannerEvent: React.FC<any> = () => {
	const ButtonLeaderboard = styled(Box)({
		cursor: 'pointer',
		position: 'absolute',
		bottom: 35,
		right: -35
	})
	return (
		<Box
			sx={{
				position: 'absolute',
				height: 425 - 160,
				width: 624,
				bottom: 0,
				left: 80,
				zIndex: 99,
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					position: 'relative',
				}}
			>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						background: 'rgba(255, 255, 255, 0.4)',
						backdropFilter: 'blur(40px)',
						borderRadius: '16px 16px 0px 0px',
						transform: 'skewX(-10deg)',
					}}
				/>
				<Stack
					alignItems="start"
					sx={{
						position: 'absolute',
						width: '100%',
						height: 'calc(100%-8px)',
						top: 8,
						left: 0,
						pl: 8,
						pr: 12,
					}}
				>
					<Box>
						{/* <img src={BANNER.IMAGECUP} width={'25%'} height={'auto'} style={{zIndex: 2, position: 'relative'}} /> */}
						<img src={BANNER.IMAGE} width={'100%'} height={'auto'} style={{ marginTop: 5 }} />
					</Box>
					<Stack
						direction="row"
						spacing={1.5}
						mt={1.5}
						alignItems="center"
						justifyContent="start"
						sx={{ width: '100%' }}
					>
						<Typography
							fontStyle="italic"
							fontSize={18}
							color="#31373E"
							fontWeight={500}
						>
							{BANNER.COUNTDOWN}
						</Typography>
						<CountdownClock />
					</Stack>
				</Stack>
				<Box
					sx={{
						position: 'absolute',
						top: 16,
						right: 0,
					}}
				>
					<Link href={BANNER.BUTTON.href}>
						<IconButton
							sx={{
								background: '#FFE2D3',
								borderRadius: '40px',
								px: 2,
								py: 2,
								'&:hover': {
									background: '#FFE2D3',
									borderRadius: '24px',
									transition: 'all ease 1s',
									animation: 'blink 1s linear',
								},
								'@keyframes blink': {
									'0%': { boxShadow: 'none' },
									'50%': {
										boxShadow:
											'rgba(255, 109, 36, 0.5) -8px -8px 8px, rgba(255, 109, 36, 0.5) 0px -8px 4px, rgba(255, 109, 36, 0.5) 4px 0px 4px, rgba(255, 109, 36, 0.5) -8px 0px 4px',
									},
									'100%': { boxShadow: 'none' },
								},
							}}
						>
							<Icon>
								<IconImage src={BANNER.BUTTON.icon} />
							</Icon>
						</IconButton>
					</Link>
				</Box>
			</Box>
			<ButtonLeaderboard><Link href={BANNER.BUTTON_LEADERBOARD.href}><img src={BANNER.BUTTON_LEADERBOARD.title} /></Link></ButtonLeaderboard>
		</Box>
	);
};

const BannerSocial: React.FC<any> = () => {
	const maxWidthLg = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down('lg')
	);

	return (
		<Box
			sx={{
				position: 'absolute',
				bottom: 40,
				right: 66,
				zIndex: 99,
				backgroundImage: !maxWidthLg ? `url(${BANNER.SOCIAL.BG})` : 'none',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'center right',
			}}
		>
			<Stack
				direction={{ xs: 'column', lg: 'row' }}
				spacing={{ xs: 1, lg: 4 }}
				alignItems={{ xs: 'end', lg: 'center' }}
				justifyContent="end"
				sx={{
					width: 655,
					pt: 1.5,
					pb: 1,
				}}
			>
				{!maxWidthLg && (
					<Typography
						fontSize={16}
						fontWeight={600}
						color="#fff"
						sx={{
							textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
							mb: 0.5,
						}}
					>
						Follow us on
					</Typography>
				)}
				{BANNER.SOCIAL.ITEMS.map(({ icon, iconActive, href }, idx) => (
					<BounceIconButton
						key={idx}
						href={href}
						icon={icon}
						iconActive={iconActive}
					/>
				))}
			</Stack>
		</Box>
	);
};

const MobileBannerEvent: React.FC<any> = () => {
	const ButtonLeaderboard = styled(Box)({
		cursor: 'pointer',
	})
	const isMobile = useMediaQuery('(max-width:600px)');
	return (
		<Link href={BANNER.BUTTON.href}>
			<Box
				component={'a'}
				sx={{
					position: 'absolute',
					width: '100%',
					bottom: 0,
					left: 0,
					zIndex: 99,
				}}
			>
				<Stack
					// justifyContent="center"
					alignItems="center"
					sx={{
						width: '100%',
						height: '100%',
						position: 'relative',
						py: 4,
						background: 'rgba(255, 255, 255, 0.4)',
						backdropFilter: 'blur(40px)',
					}}
				>
					<Box sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
						{/* <img src={BANNER.IMAGECUP} width={isMobile ? '90px' : '150px'} height={'auto'} style={{zIndex: 2, position: 'relative'}} /> */}
						<img
							src={BANNER.IMAGE}
							width={isMobile ? 300 : 350}
							height={'auto'}
						/>
					</Box>
					<ButtonLeaderboard><Link href={BANNER.BUTTON_LEADERBOARD.href}><img src={BANNER.BUTTON_LEADERBOARD.title} /></Link></ButtonLeaderboard>
					<Box
						sx={{
							position: 'absolute',
							top: -32,
						}}
					>
						{/* <Link href={BANNER.BUTTON.href}> */}
						<IconButton>
							<Icon sx={{ width: 40, height: 40 }}>
								<IconImage src={BANNER.BUTTON.mobileIcon} />
							</Icon>
						</IconButton>
						{/* </Link> */}
					</Box>
				</Stack>
			</Box>
		</Link>
	);
};



// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
	/*
	 * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
	 */
};

const originalColors = [
	"#ff5f45",
	"#0798ec",
	"#fc6c7c",
	"#435b71",
	"orange",
	"blue",
	"purple",
	"yellow"
];
const Home: NextPage = () => {
	const [height, setHeight] = useState<number>();
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

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
		console.log("onLeave", { origin, destination, direction });
		// arguments are mapped in order of fullpage.js callback arguments do something
		// with the event
	}
	const SECTIONS = [
		<Box
			className={SEL}
			sx={{
				height: height,
				position: 'relative',
			}}
		>
			<Section1 />
		</Box>,
		<Box className={SEL}>
			<Section2 />
		</Box>
		,
		<Box className={SEL}>
			<Section3 />
		</Box>
		,
		<Box className={SEL}>
			<Section4 />
		</Box>,
		<Box className={SEL}>
			<FoundedBy className={SEL} sxProps={{ mb: 15 }} />
			<MainFooter />
		</Box>,


		// <div className={SEL}>
		// 	<h3>4</h3>
		// </div>
	]
	return (
		<HomeLayoutNew sxProps={{ background: '#fff' }} headerLandingPage={true}>
			<ReactFullpage
				debug /* Debug logging */
				// Required when using extensions
				pluginWrapper={pluginWrapper}
				// fullpage options
				licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
				navigation
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



		</HomeLayoutNew>
	);
};

export default Home;
