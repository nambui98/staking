import type { NextPage } from 'next';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Autoplay, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import {
	Box,
	Container,
	Typography,
	Stack,
	InputBase,
	Button,
	IconButton,
	Icon,
	styled,
	useMediaQuery,
} from '@mui/material';

import styles from '../styles/Home.module.scss';
import HomeLayout from '../components/layouts/HomeLayout';
import { videoSlides, EVENT, SOCIAL } from '../constants/home';

const IconImage = styled('img')({
	display: 'flex',
	height: 'inherit',
	width: 'inherit',
});

const VideoSwiper: React.FC<any> = () => {
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
							src={(isMobile && slide.mobileSrc) || slide.src}
							className="absolute"
							alt=""
						/>
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
								src={(isMobile && slide.mobileSrc) || slide.src}
								type='video/mp4; codecs="hvc1"'
							/>
							<source
								src={(isMobile && slide.mobileSrc) || slide.src}
								type="video/webm"
							/>
						</video>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

const Event: React.FC<any> = ({ endDate }) => {
	const end = Date.parse(endDate);
	const _second = 1000;
	const _minute = _second * 60;
	const _hour = _minute * 60;
	const _day = _hour * 24;

	const [dayText, setDayText] = useState('');
	const [hrText, setHrText] = useState('');
	const [minText, setMinText] = useState('');
	const [secText, setSecText] = useState('');

	useEffect(() => {
		const counter = setInterval(() => {
			const distance = end - Date.now();
			if (distance < 0) {
				clearInterval(counter);
			} else {
				let days = Math.floor(distance / _day);
				let hrs = Math.floor((distance % _day) / _hour);
				let mins = Math.floor((distance % _hour) / _minute);
				let secs = Math.floor((distance % _minute) / _second);
				setDayText(days < 0 ? '' : days < 10 ? `0${days}` : `${days}`);
				setHrText(hrs < 0 ? '' : hrs < 10 ? `0${hrs}` : `${hrs}`);
				setMinText(mins < 0 ? '' : mins < 10 ? `0${mins}` : `${mins}`);
				setSecText(secs < 0 ? '' : secs < 10 ? `0${secs}` : `${secs}`);
			}
		}, 1000);
		return () => clearInterval(counter);
	}, []);

	return (
		<Box
			sx={{
				position: 'absolute',
				// height: parseFloat(`${windowHeight}`)/3,
				// width: parseFloat(`${windowHeight}`)/3 * 624/425,
				height: 425,
				width: 624,
				top: `${100 / 4}%`,
				left: 160,
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
						borderRadius: '16px',
						transform: 'skewX(-10deg)',
					}}
				/>
				<Box
					sx={{
						position: 'absolute',
						height: `${(210 / 425) * 100}%`,
						width: `${(109 / 624) * 100}%`,
						bottom: '5%',
						left: '-7.5%',
						backgroundImage: `url(assets/home/neon-stroke1.png)`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
					}}
				/>
				<Box
					sx={{
						position: 'absolute',
						height: `${(273 / 425) * 100}%`,
						width: `${(144 / 624) * 100}%`,
						top: '5%',
						right: '-7.5%',
						backgroundImage: `url(assets/home/neon-stroke2.png)`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
					}}
				/>
				<Stack
					alignItems="start"
					sx={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						top: 0,
						left: 0,
						px: 10,
					}}
				>
					<img src={EVENT.IMAGE} width={'70%'} height={'auto'} />
					<Typography
						fontStyle="italic"
						fontSize={20}
						color="#31373E"
						fontWeight={600}
						sx={{
							pr: 20,
							mt: 2,
						}}
					>
						{EVENT.DESC}
					</Typography>
					<Stack
						direction="row"
						spacing={1.5}
						mt={1.5}
						alignItems="center"
						justifyContent="start"
					>
						<Typography
							fontStyle="italic"
							fontSize={18}
							color="#31373E"
							fontWeight={500}
						>
							{EVENT.COUNTDOWN}
						</Typography>
						{[
							{ count: dayText, title: 'days' },
							{ count: hrText, title: 'hours' },
							{ count: minText, title: 'mins' },
							{ count: secText, title: 'secs' },
						].map(({ count, title }) => (
							<Stack
								key={title}
								alignItems="center"
								spacing={-1}
								sx={{
									pl: 1,
									pr: 1.5,
									pt: 1,
									pb: 2,
									border: '1px solid #31373E',
									borderRadius: '8px',
								}}
							>
								<Typography
									fontFamily="Electrofied"
									fontSize={24}
									fontStyle="italic"
									color="#31373E"
								>
									{count}
								</Typography>
								<Typography
									fontSize={14}
									fontStyle="italic"
									color="#31373E"
									fontWeight="bold"
								>
									{title}
								</Typography>
							</Stack>
						))}
					</Stack>
				</Stack>
				<Box
					sx={{
						position: 'absolute',
						bottom: '-7.5%',
						right: '2.5%',
					}}
				>
					<Link href={EVENT.BUTTON.href}>
						<Button
							endIcon={
								<Icon sx={{ width: 40, height: 40 }}>
									<IconImage src={EVENT.BUTTON.icon} />
								</Icon>
							}
							sx={{
								fontSize: 18,
								fontWeight: 600,
								color: '#FFF',
								background:
									'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
								borderRadius: '16px',
								boxShadow: 'none',
								px: 3,
								py: 2,
							}}
						>
							{EVENT.BUTTON.title}
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

const Social: React.FC<any> = () => (
	<Box
		sx={{
			position: 'absolute',
			// height: 425,
			// width: 624,
			bottom: 40,
			right: 66,
			zIndex: 99,
			pb: .5,
			backgroundImage: `url(assets/home/social_bg.png)`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'center right',
		}}
	>
		<Stack direction="row" spacing={2} alignItems="center" justifyContent="end" sx={{
			width: 655
		}}>
			<Typography fontSize={16} fontWeight={600} sx={{
				textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
			}}>Follow us on</Typography>
			{SOCIAL.map(({ icon, href }, idx) => (
				// <Link href={href} key={idx}>
				<Box component="a" href={href} key={idx} target="_blank">
					<Icon sx={{ cursor: 'pointer', width: 56, height: 48 }}>
						<IconImage src={icon} />
					</Icon>
				</Box>
				// </Link>
			))}
		</Stack>
	</Box>
)

const MobileEvent: React.FC<any> = () => {
	const isMobile = useMediaQuery('(max-width:600px)');
	return (
		<Box
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
				<img src={EVENT.IMAGE} width={isMobile ? 300 : 350} height={'auto'} />
				<Box
					sx={{
						position: 'absolute',
						top: -32,
					}}
				>
					<Link href={EVENT.BUTTON.href}>
						<IconButton>
							<Icon sx={{ width: 40, height: 40 }}>
								<IconImage src={EVENT.BUTTON.mobileIcon} />
							</Icon>
						</IconButton>
					</Link>
				</Box>
			</Stack>
		</Box>
	)
}

const Home: NextPage = () => {
	const [height, setHeight] = useState<string>();
	const isTablet = useMediaQuery('(max-width:960px)');

	const windowHeight = () => {
		setHeight(`${window.innerHeight}px`);
	};

	useEffect(() => {
		window.addEventListener('resize', windowHeight);
		windowHeight();
		return () => {
			window.removeEventListener('resize', () => {});
		};
	}, []);
	return (
		<HomeLayout>
			<Box
				sx={{
					height: height,
				}}
			>
				<VideoSwiper />
			</Box>
			{!isTablet && <Event endDate="2022-06-01" />}
			{!isTablet && <Social />}
			{isTablet && <MobileEvent />}
		</HomeLayout>
	);
};

export default Home;

// import type { NextPage } from 'next'
// import React, { ReactNode, useEffect, useRef, useState } from 'react'
// import Head from 'next/head'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { useMediaQuery } from 'react-responsive'
// import styles from '../styles/Home.module.scss'
// import { Pagination, Autoplay, EffectFade } from "swiper";
// import "swiper/css/bundle";
// import 'swiper/css';
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import { toast } from 'react-toastify';
// import dynamic from 'next/dynamic';
// const DynamicSwiper = dynamic(() => import('../components/swiper'), { ssr: false })
// enum typeSlide {
//   img = 1,
//   video = 2,
// }
// type slide = {
//   link: string,
//   linkMB?: string,
//   type: typeSlide,
//   ref?: any,
//   icon: string,
//   content: ReactNode
// }

// const Home: NextPage = () => {
//   const [indexActive, setIndexActive] = useState(0);
//   const [height, setHeight] = useState<string>();
//   const refSlide1 = useRef<any>(null);
//   const refSlide2 = useRef<any>(null);
//   const refSlide3 = useRef<any>(null);
//   const refSlide4 = useRef<any>(null);
//   const refSlide5 = useRef<any>(null);
//   const data = [
//     {
//       link: "/videos/walking.mp4",
//       type: typeSlide.video,
//       ref: refSlide1,
//       icon: "/images/walk.svg",
//       content: <>
//         <h1>Walking</h1>
//         <p>Starting your day with a short walk can
//           offer a number of health benefits & tokens.</p>
//       </>
//     },
//     {
//       link: "/videos/item4.mp4",
//       linkMB: "/videos/runMobile.mp4",
//       type: typeSlide.video,
//       ref: refSlide2,
//       icon: "/images/run.svg",
//       content: <><h1>Running</h1>
//         <p>Exercising with a friend is a great way to keep
//           you motivated. Let&apos;s jog and run and earn tokens.</p></>
//     },
//     {
//       link: "/videos/cycle.mp4",
//       linkMB: "/videos/cycleMobile.mp4",
//       type: typeSlide.video,
//       ref: refSlide3,
//       icon: "/images/cycle.svg",
//       content: <> <h1>Cycling</h1>
//         <p>Regular cycling provides numerous health benefits
//           as your heart, blood vessels and lungs all get a workout.</p></>
//     },
//     {
//       link: "/videos/item2.mp4",
//       type: typeSlide.video,
//       ref: refSlide4,
//       icon: "/images/draw.svg",
//       content: <>
//         <h1>Socializing</h1>
//         <p>Move, checkin and draw amazing artworks on the map.
//           Then share your proof of work-out and inspire the world!</p></>
//     },
//     {
//       link: "/images/item5.jpg",
//       linkMB: "/images/sleepMobile.png",
//       type: typeSlide.img,
//       icon: "/images/sleep.svg",
//       content: <><h1>Sleeping</h1>
//         <p>End your daily routine by a deep sleep.
//           We pay you to sleep scientifically.</p></>
//     }
//   ]
//   const windowHeight = () => {
//     console.log("aaaaaaaaaa");

//     setHeight(`${window.innerHeight}px`)
//   }
//   useEffect(() => {
//     window.addEventListener("resize", windowHeight)
//     windowHeight()
//     return () => {
//       window.removeEventListener('resize', () => { })
//     }
//   }, [])
//   return (
//     <div className={styles.container} style={{ height: height }}>
//       <Head>
//         <title>Befitter</title>
//         <meta name="description" content="In Befitter, your steps are worth more than you think -- exercising and moving outdoors
//   can now earn anyone tokens anytime, anywhere. We believe this simple design can nudge millions into healthier
//   lifestyles and bring them to the Web3 world." />
//         <meta property="og:title" content="Befitter is a Web3 lifestyle app with Social-Fi and Game-Fi elements" />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.befitter.io/" />
//         <meta property="og:image" content="https://befitter.io/images/item.png" />
//         <meta property="og:description" content="In Befitter, your steps are worth more than you think -- exercising and moving outdoors
//   can now earn anyone tokens anytime, anywhere. We believe this simple design can nudge millions into healthier
//   lifestyles and bring them to the Web3 world." />

//         <meta name="twitter:card" content="summary_large_image" />
//         <meta property="twitter:title" content="Befitter is a Web3 lifestyle app with Social-Fi and Game-Fi elements" />
//         <meta property="twitter:description" content="In Befitter, your steps are worth more than you think -- exercising and moving outdoors
//   can now earn anyone tokens anytime, anywhere. We believe this simple design can nudge millions into healthier
//   lifestyles and bring them to the Web3 world." />
//         <meta property="twitter:image" content="https://befitter.io/images/item.png" />
//       </Head>
//       <div className='mobile'>
//         <h1>Phone devices are not supported yet</h1>
//       </div>
//       <div className={styles.main}>

//         <div className={styles.wrapperContent}  >
//           <div style={{ transition: ".7s all cubic-bezier(.88,-0.68,.17,1.48)", transform: `translateY(-${indexActive * 20}%)` }}>
//             {
//               data.map((item: slide, index: number) => <div key={index} className={styles.content}>
//                 {item.content}
//               </div>)
//             }
//           </div>
//         </div>
//         <img src="/images/logomain.png" className={styles.logo} alt="" />
//         <button className={styles.button} onClick={() => {
//           toast('COMING SOON!', {
//             position: "top-center",
//             autoClose: 5000,
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         }}>PITCH DECK</button>
//         <DynamicSwiper indexActive={indexActive} setIndexActive={setIndexActive} data={data} />
//       </div>
//     </div>
//   )
// }

// export default Home
