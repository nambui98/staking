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
	FOUNDED,
	TEAM,
	ROADMAP,
} from '../constants/home';
import { IconImage } from '../components/styled';
import {
	IconButtonBounceUpOnHover,
	AppStoreButton,
} from '../components/buttons';
import {
	SocialSection,
	SectionTitle,
	CountdownClock,
	NumberBox,
} from '../components/sections';

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
					<img src={BANNER.IMAGE} width={'70%'} height={'auto'} />
					<Stack
						direction="row"
						spacing={1.5}
						mt={1.5}
						alignItems="center"
						justifyContent="end"
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
				backgroundImage: !maxWidthLg
					? `url(${BANNER.SOCIAL.BG})`
					: 'none',
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
					<IconButtonBounceUpOnHover
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
				<img src={BANNER.IMAGE} width={isMobile ? 300 : 350} height={'auto'} />
				<Box
					sx={{
						position: 'absolute',
						top: -32,
					}}
				>
					<Link href={BANNER.BUTTON.href}>
						<IconButton>
							<Icon sx={{ width: 40, height: 40 }}>
								<IconImage src={BANNER.BUTTON.mobileIcon} />
							</Icon>
						</IconButton>
					</Link>
				</Box>
			</Stack>
		</Box>
	);
};

const AppSection: React.FC<any> = ({ sxProps }) => {
	const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	return (
		<Container sx={{ ...sxProps }}>
			<Grid container>
				<Grid item xs={12} md={4}>
					{!isMd && (
						<Box
							sx={{
								width: '100%',
								height: 0,
								pt: `${(470 / 448) * 100}%`,
								backgroundImage: `url(${APP.POSTER})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover',
							}}
						/>
					)}
				</Grid>
				<Grid item xs>
					<Stack
						px={{ xs: 0, sm: 2, md: 4 }}
						justifyContent="center"
						sx={{ height: '100%' }}
					>
						<Typography
							variant="subtitle1"
							fontSize={{ xs: 32, sm: 40 }}
							fontStyle="italic"
							color="#31373E"
							sx={{
								textTransform: 'uppercase',
								textShadow: '1px 1px 0 #FFF, 2px 2px 0 #31373E',
							}}
						>
							{APP.SUBTITLE}
						</Typography>
						<Box
							sx={{
								maxWidth: 'fit-content',
								pr: { xs: 0, md: '3.5%' },
								backgroundImage: { xs: 'none', md: `url(${APP.TITLE_BG})` },
								backgroundRepeat: 'no-repeat',
								backgroundSize: '80%',
								backgroundPosition: 'bottom right',
							}}
						>
							<Typography
								variant="subtitle1"
								component="span"
								fontSize={{ xs: 42, sm: 64 }}
								fontStyle="italic"
								color="#FF6D24"
								sx={{
									textTransform: 'uppercase',
									textShadow: '1px 1px 0 #FFF, 2px 2px 0 #FF6D24',
								}}
							>
								{APP.TITLE}
							</Typography>
						</Box>
						<Typography
							fontSize={{ xs: 16, sm: 18 }}
							fontWeight={500}
							color="#5A6178"
							lineHeight={1.5}
							my={3}
						>
							{APP.DESC}
						</Typography>
						{isMd && (
							<Box
								sx={{
									width: '90%',
									height: 0,
									pt: `${(470 / 448) * 100}%`,
									backgroundImage: `url(${APP.POSTER})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'contain',
								}}
							/>
						)}
						<Grid container spacing={2}>
							{APP.BUTTON.map((el, idx) => (
								<Grid key={idx} item xs={6} lg={4}>
									<AppStoreButton
										disabled={!el.href}
										subtitle={el.href ? el.subtitle : el.subtitle0}
										title={el.title}
										icon={el.icon}
										href={el.href}
									/>
								</Grid>
							))}
						</Grid>
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

const ChallengeSection: React.FC<any> = ({ sxProps }) => {
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	return (
		<Stack
			alignItems="center"
			sx={{
				position: 'relative',
				pt: 8,
				overflow: 'hidden',
				backgroundImage: { xs: `url(${CHALLENGE.BG})`, md: 'none' },
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'center',
			}}
		>
			{!isSm && (
				<Box
					sx={{
						position: 'relative',
						width: '100%',
						minWidth: 1920,
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							top: 190,
							left: '11%',
						}}
					>
						<img src={CHALLENGE.BG_ITEM1} width={'auto'}></img>
					</Box>
					<Box
						sx={{
							position: 'absolute',
							top: 0,
							right: 0,
						}}
					>
						<img src={CHALLENGE.BG_ITEM5} width={'auto'}></img>
					</Box>
					<Box
						sx={{
							position: 'absolute',
							top: -62,
							right: `${25}%`,
						}}
					>
						<img src={CHALLENGE.BG_ITEM2} width={'auto'}></img>
					</Box>
					<Box
						sx={{
							position: 'absolute',
							top: 40,
							right: `${21.5}%`,
						}}
					>
						<img src={CHALLENGE.BG_ITEM3} width={'auto'}></img>
					</Box>
				</Box>
			)}
			<Container sx={{ position: 'relative' }}>
				<Stack alignItems={{ xs: 'center', md: 'start' }} spacing={1}>
					<img
						src={CHALLENGE.BG_TITLE}
						alt=""
						width={isXs ? '100%' : 'auto'}
						height={'auto'}
					/>
					<img
						src={CHALLENGE.BG_SUBTITLE}
						alt=""
						width={isXs ? '80%' : 'auto'}
						height={'auto'}
					/>
					<Typography
						fontSize={{ xs: 16, sm: 18 }}
						fontWeight={500}
						color="#5A6178"
						lineHeight={1.5}
						sx={{
							pt: 3,
							pb: { xs: 3, md: 7 },
							maxWidth: 545,
						}}
					>
						{CHALLENGE.DESC}
					</Typography>
					<Typography
						fontSize={{ xs: 24, sm: 24 }}
						fontWeight={700}
						color="#31373E"
						sx={{
							textAlign: { xs: 'center', md: 'left' },
						}}
					>
						{CHALLENGE.REGISTER.DESC}
					</Typography>
					<Stack
						direction={{ xs: 'column-reverse', md: 'row' }}
						alignItems={{ xs: 'center', md: 'start' }}
						spacing={4.5}
						sx={{ width: '100%', pt: 2, pb: 25 }}
					>
						<Link href={CHALLENGE.REGISTER.BUTTON.href}>
							<Button
								endIcon={
									<Icon sx={{ width: 40, height: 40 }}>
										<IconImage src={CHALLENGE.REGISTER.BUTTON.icon} />
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
									px: 3.5,
									py: 2,
									maxHeight: 72,
								}}
							>
								{CHALLENGE.REGISTER.BUTTON.title}
							</Button>
						</Link>
						<Box>
							<Typography
								fontStyle="italic"
								fontSize={18}
								color="#31373E"
								fontWeight={500}
								sx={{
									textAlign: { xs: 'center', md: 'left' },
								}}
							>
								{BANNER.COUNTDOWN}
							</Typography>
							<CountdownClock />
						</Box>
					</Stack>
				</Stack>
			</Container>
		</Stack>
	);
};

const NumberSection: React.FC<any> = ({ sxProps }) => {
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

	return (
		<Stack
			alignItems="center"
			sx={{
				position: 'relative',
				overflow: 'hidden',
				...sxProps,
			}}
		>
			{!isSm && (
				<Box
					sx={{
						position: 'relative',
						width: '100%',
						minWidth: 1920,
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							top: 557,
							left: 0,
						}}
					>
						<img src={NUMBER.BG_ITEM} width={'auto'}></img>
					</Box>
				</Box>
			)}
			<Container sx={{ position: 'relative' }}>
				<SectionTitle title={NUMBER.TITLE} subtitle={NUMBER.SUBTITLE} />
				<Grid container mt={7}>
					<Grid item xs={12} md={5}>
						<Stack
							justifyContent="center"
							alignItems="center"
							sx={{ height: '100%' }}
						>
							<Box
								sx={{
									width: { xs: '75%', sm: '50%', md: '100%' },
									height: 0,
									pt: {
										xs: `${(352 / 449) * 75}%`,
										sm: `${(352 / 449) * 50}%`,
										md: `${(352 / 449) * 100}%`,
									},
									backgroundImage: `url(${NUMBER.POSTER})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
								}}
							/>
						</Stack>
					</Grid>
					<Grid item xs={12} md={7}>
						<Stack
							spacing={5}
							pl={{ md: 12, lg: 24 }}
							pt={{ xs: 4, md: 0 }}
							alignItems={{ xs: 'center', md: 'start' }}
						>
							{NUMBER.ITEMS.map((el, idx) => (
								<NumberBox
									key={idx}
									icon={el.icon}
									count={el.count}
									title={el.title}
								/>
							))}
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Stack>
	);
};

const HowItWorks: React.FC<any> = ({ sxProps }) => {
	const [activeIndex, setActiveIndex] = React.useState<number>(0);
	function handleSlideChange(e: any) {
		console.log(e.activeIndex);
		setActiveIndex(e.activeIndex);
	}
	return (
		<Container
			sx={{
				'& .swiper-pagination-bullets.swiper-pagination-horizontal': {
					width: { xs: '100%', md: 'unset' },
					bottom: { xs: 0, md: '8%' },
					left: { xs: 0, md: '65%' },
				},
				'& .swiper-pagination-bullet': {
					width: 12,
					height: 12,
					border: '2px solid #FF6D24',
					background: '#fff',
				},
				'& .swiper-pagination-bullet-active': {
					background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
				},
				...sxProps,
			}}
		>
			<SectionTitle
				title={WORKS.TITLE}
				subtitle={WORKS.SUBTITLE}
				sxProps={{
					mb: 7,
				}}
			/>
			<Swiper
				autoplay={{
					delay: 6000,
					disableOnInteraction: false,
				}}
				effect={'fade'}
				pagination={{ clickable: true }}
				modules={[Autoplay, EffectFade, Pagination]}
				onSlideChange={handleSlideChange}
				className="mySwiper"
			>
				{WORKS.SLIDES.map((el, idx) => (
					<SwiperSlide key={idx}>
						<Box
							sx={{
								position: 'relative',
								width: '100%',
								px: { xs: 0, md: 5 },
							}}
						>
							<Box
								sx={{
									height: 0,
									width: '100%',
									pt: `${(732 / 1173) * 100}%`,
									backgroundImage: `url(${el.image})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'contain',
									backgroundPosition: 'left center',
								}}
							/>
							<Box
								sx={{
									position: { xs: 'unset', md: 'absolute' },
									right: { xs: 'unset', md: el.right },
									bottom: { xs: 'unset', md: el.bottom },
									pt: { xs: 3, md: 0 },
									pb: { xs: 5, md: 0 },
									animation: activeIndex === idx ? 'shake .25s linear' : 'none',
									'@keyframes shake': {
										'0%,100%': { transform: `translateX(0)` },
										'30%': { transform: 'translateX(-50px)' },
										'60%': { transform: 'translateX(50px)' },
										'90%': { transform: 'translateX(-50px)' },
									},
								}}
							>
								<Typography
									variant="subtitle1"
									fontSize={{
										xs: 20,
										sm: 24,
										md: el.subtitleSize - 8,
										lg: el.subtitleSize,
									}}
									fontStyle="italic"
									color="#31373E"
									sx={{
										textTransform: 'uppercase',
										textAlign: { xs: 'center', md: 'left' },
									}}
								>
									{el.subtitle}
									{el.icon && (
										<Icon
											sx={{
												width: { xs: 12, md: 32 },
												height: { xs: 12, md: 32 },
												mb: { xs: 1, md: 3 },
												ml: { xs: 0.25, md: 1 },
											}}
										>
											<IconImage src={el.icon} />
										</Icon>
									)}
								</Typography>
								<Typography
									variant="subtitle1"
									fontSize={{
										xs: 24,
										sm: 32,
										md: el.titleSize - 8,
										lg: el.titleSize,
									}}
									fontStyle="italic"
									color="#FF6D24"
									sx={{
										textTransform: 'uppercase',
										textAlign: { xs: 'center', md: 'left' },
										textShadow: {
											xs: '1px 1px 0 #FFF, 2px 2px 0 #FF6D24',
											md: '3px 3px 0 #FFF, 4px 4px 0 #FF6D24',
										},
									}}
								>
									{el.title}
								</Typography>
							</Box>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
};

const FoundedBy: React.FC<any> = ({ sxProps }) => {
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	return (
		<Box
			sx={{
				position: 'relative',
				width: { xs: '100%', md: '90%', xl: '80%' },
				mx: 'auto',
				background: { xs: '#F8F9FB', md: 'none' },
				...sxProps,
			}}
		>
			<Box
				sx={{
					display: { xs: 'none', md: 'block' },
					position: 'absolute',
					height: 550,
					width: '100%',
					background: '#F8F9FB',
					borderRadius: '24px',
					transform: 'skewX(-10deg)',
				}}
			/>
			<Container sx={{ position: 'relative', py: 5 }}>
				<SectionTitle
					title={FOUNDED.TITLE}
					subtitle={FOUNDED.SUBTITLE}
					swap={true}
				/>
				<Grid container spacing={5}>
					<Grid item xs={12} md={5}>
						<Stack
							spacing={2}
							mt={3}
							alignItems={{ xs: 'center', md: 'start' }}
						>
							<img
								src={FOUNDED.ICETEA}
								width={isXs ? '100%' : isSm ? '75%' : 'auto'}
							/>
							<Stack direction="row" alignItems="center" spacing={2}>
								<Typography fontSize={24} fontWeight={500} color="#5A6178">
									Creator of
								</Typography>
								<img src={FOUNDED.GAMEFI} width={'auto'} />
							</Stack>
						</Stack>
					</Grid>
					<Grid item xs={12} md={7}>
						<Stack
							spacing={3}
							sx={{
								pt: 5,
								pr: 0,
								backgroundImage: `url(${FOUNDED.BG})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'contain',
								backgroundPosition: 'top right',
							}}
						>
							{FOUNDED.ITEMS.map((text, idx) => (
								<Typography
									key={idx}
									fontSize={{ xs: 16, sm: 22 }}
									fontWeight={500}
									color="#5A6178"
								>
									<Icon sx={{ mr: 2 }}>
										<IconImage src={FOUNDED.LIST_ITEM} />
									</Icon>
									{text}
								</Typography>
							))}
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

const Team: React.FC<any> = ({ sxProps }) => {
	return (
		<Container sx={{ ...sxProps }}>
			<SectionTitle
				title={TEAM.TITLE}
				subtitle={TEAM.SUBTITLE}
				sxProps={{ mb: 7 }}
			/>
			<Grid container spacing={4} rowSpacing={6}>
				{TEAM.ITEMS.map(({ name, role, desc, image }, idx) => (
					<Grid key={idx} item xs={12} md={6}>
						<Grid container spacing={2}>
							<Grid item xs={6} sm={4} sx={{ mx: 'auto' }}>
								<Box
									sx={{
										width: '100%',
										height: 0,
										pt: `${(160 / 174) * 100}%`,
										backgroundImage: `url(${image})`,
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
									}}
								/>
							</Grid>
							<Grid item xs={12} sm={8}>
								<Typography
									fontSize={24}
									fontWeight={700}
									color="#31373E"
									sx={{
										textAlign: { xs: 'center', sm: 'left' },
									}}
								>
									{name}
								</Typography>
								<Typography
									variant="subtitle1"
									fontSize={14}
									fontStyle="italic"
									sx={{
										mt: 1,
										mb: 3,
										textAlign: { xs: 'center', sm: 'left' },
										textTransform: 'uppercase',
										background:
											'linear-gradient(270deg, #FF5C35 3.42%, #FF612F 98.2%)',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										backgroundClip: 'text',
										textFillColor: 'transparent',
									}}
								>
									{role}
								</Typography>
								<Typography fontSize={14} fontWeight={500} lineHeight={1.5} color="#5A6178">
									{desc}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

const Milestone: React.FC<any> = ({ sxProps, title, items }) => {
	return (
		<Box>
			<Box sx={{
				background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
				padding: '2px',
				width: 'max-content',
			}}>
				<Box sx={{
					background: '#FFF',
					p: .5,
					width: 'max-content',
				}}>
					<Typography fontSize={{ xs: 20, sm: 24, md: 18, lg: 24 }} fontWeight={700} color="#31373E">{title}</Typography>
				</Box>
			</Box>
			<Box sx={{ pl: 2, mt: 1 }}>
				{items.map((text: string, idx: number) => (
					<Stack key={idx} direction="row" spacing={1} sx={{mb: 1}}>
						<Icon sx={{ 
							width: {xs: 14, sm: 14*1.25, md: 14, lg: 14*1.25}, 
							height: {xs: 12, sm: 12*1.25, md: 12, lg: 12*1.25}, 
						}}>
							<IconImage src={ROADMAP.ICON_LIST} />
						</Icon>
						<Typography
							fontSize={{ xs: 16, sm: 18, md: 14, lg: 18 }}
							fontWeight={400}
							lineHeight="23px"
							color="#5A6178"
							mb={1}
						>
							{text.split('\n').map((el, idx) => (
								<span key={idx}>
									{el}
									<br />
								</span>
							))}
						</Typography>
					</Stack>
					
				))}
			</Box>
		</Box>
	)
};

const Roadmap: React.FC<any> = () => {
	return (
		<Stack
			alignItems="center"
			sx={{
				position: 'relative',
				overflow: 'hidden',
				height: 895,
			}}
		>
			<Container sx={{ position: 'relative' }}>
				<SectionTitle
					title={ROADMAP.TITLE}
					subtitle={ROADMAP.SUBTITLE}
				/>
			</Container>
			<Box sx={{
				position: 'absolute',
				backgroundImage: `url(${ROADMAP.MAP})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: { md: 1920*0.8, lg: 1920 },
				height: { md: 895*0.8, lg: 895 },
			}}/>
			<Box sx={{
				position: 'absolute',
				backgroundImage: `url(${ROADMAP.ROAD})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: { md: 1020*0.8, lg: 1020 },
				height: { md: 325*0.8, lg: 325 },
				top: { md: 329*0.8, lg: 329 },
				ml: { md: `${29*0.8}px`, lg: `${29}px` },
			}}/>
			{ROADMAP.MILESTONES.map((el, idx) => (
				<Box key={idx} sx={{
					position: 'absolute',
					top: { md: el.top*0.8, lg: el.top },
					ml: { md: `${el.ml*0.8}px`, lg: `${el.ml}px` },
				}}>
					<Milestone title={el.title} items={el.items} />
				</Box>
			))}
		</Stack>
	)
}

const RoadmapMobile: React.FC<any> = ({ sxProps }) => {
	return (
		<Container sx={{ ...sxProps }}>
			<SectionTitle
				title={ROADMAP.TITLE}
				subtitle={ROADMAP.SUBTITLE}
			/>
			<Grid container spacing={3} mt={5}>
				{ROADMAP.MILESTONES.map((el, idx) => (
					<Grid item key={idx} xs={12} sm={6}>
						<Milestone  title={el.title} items={el.items} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
};

const Home: NextPage = () => {
	const [height, setHeight] = useState<number>();
	const isSm = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down('md')
	);

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
	return (
		<HomeLayout sxProps={{ background: '#fff' }}>
			<Box
				sx={{
					height: height,
					position: 'relative',
				}}
			>
				<BannerSwiper />
				{!isSm && <BannerSocial />}
				{!isSm && <BannerEvent />}
				{isSm && <MobileBannerEvent />}
			</Box>
			<AppSection sxProps={{ py: 8 }} />
			{/* <ChallengeSection /> */}
			{/* <NumberSection sxProps={{ pb: 15 }} /> */}
			<HowItWorks sxProps={{ pb: 15 }} />
			<FoundedBy sxProps={{ mb: 15 }} />
			<Team sxProps={{ mb: 15 }} />
			{isSm ? <RoadmapMobile sxProps={{ mb: 10 }} /> : <Roadmap />}
			<SocialSection />
		</HomeLayout>
	);
};

export default Home;

// const Event: React.FC<any> = ({ endDate }) => {
// 	const end = Date.parse(endDate);
// 	const _second = 1000;
// 	const _minute = _second * 60;
// 	const _hour = _minute * 60;
// 	const _day = _hour * 24;

// 	const [dayText, setDayText] = useState('');
// 	const [hrText, setHrText] = useState('');
// 	const [minText, setMinText] = useState('');
// 	const [secText, setSecText] = useState('');

// 	useEffect(() => {
// 		const counter = setInterval(() => {
// 			const distance = end - Date.now();
// 			if (distance < 0) {
// 				clearInterval(counter);
// 			} else {
// 				let days = Math.floor(distance / _day);
// 				let hrs = Math.floor((distance % _day) / _hour);
// 				let mins = Math.floor((distance % _hour) / _minute);
// 				let secs = Math.floor((distance % _minute) / _second);
// 				setDayText(days < 0 ? '' : days < 10 ? `0${days}` : `${days}`);
// 				setHrText(hrs < 0 ? '' : hrs < 10 ? `0${hrs}` : `${hrs}`);
// 				setMinText(mins < 0 ? '' : mins < 10 ? `0${mins}` : `${mins}`);
// 				setSecText(secs < 0 ? '' : secs < 10 ? `0${secs}` : `${secs}`);
// 			}
// 		}, 1000);
// 		return () => clearInterval(counter);
// 	}, []);

// 	return (
// 		<Box
// 			sx={{
// 				position: 'absolute',
// 				// height: parseFloat(`${windowHeight}`)/3,
// 				// width: parseFloat(`${windowHeight}`)/3 * 624/425,
// 				height: 425,
// 				width: 624,
// 				top: `${100 / 4}%`,
// 				left: 160,
// 				zIndex: 99,
// 			}}
// 		>
// 			<Box
// 				sx={{
// 					width: '100%',
// 					height: '100%',
// 					position: 'relative',
// 				}}
// 			>
// 				<Box
// 					sx={{
// 						width: '100%',
// 						height: '100%',
// 						background: 'rgba(255, 255, 255, 0.4)',
// 						backdropFilter: 'blur(40px)',
// 						borderRadius: '16px',
// 						transform: 'skewX(-10deg)',
// 					}}
// 				/>
// 				<Box
// 					sx={{
// 						position: 'absolute',
// 						height: `${(210 / 425) * 100}%`,
// 						width: `${(109 / 624) * 100}%`,
// 						bottom: '5%',
// 						left: '-7.5%',
// 						backgroundImage: `url(assets/home/neon-stroke1.png)`,
// 						backgroundRepeat: 'no-repeat',
// 						backgroundSize: 'contain',
// 					}}
// 				/>
// 				<Box
// 					sx={{
// 						position: 'absolute',
// 						height: `${(273 / 425) * 100}%`,
// 						width: `${(144 / 624) * 100}%`,
// 						top: '5%',
// 						right: '-7.5%',
// 						backgroundImage: `url(assets/home/neon-stroke2.png)`,
// 						backgroundRepeat: 'no-repeat',
// 						backgroundSize: 'contain',
// 					}}
// 				/>
// 				<Stack
// 					alignItems="start"
// 					sx={{
// 						position: 'absolute',
// 						width: '100%',
// 						height: '100%',
// 						top: 0,
// 						left: 0,
// 						px: 10,
// 					}}
// 				>
// 					<img src={BANNER.IMAGE} width={'70%'} height={'auto'} />
// 					<Typography
// 						fontStyle="italic"
// 						fontSize={20}
// 						color="#31373E"
// 						fontWeight={600}
// 						sx={{
// 							pr: 20,
// 							mt: 2,
// 						}}
// 					>
// 						{BANNER.DESC}
// 					</Typography>
// 					<Stack
// 						direction="row"
// 						spacing={1.5}
// 						mt={1.5}
// 						alignItems="center"
// 						justifyContent="start"
// 					>
// 						<Typography
// 							fontStyle="italic"
// 							fontSize={18}
// 							color="#31373E"
// 							fontWeight={500}
// 						>
// 							{BANNER.COUNTDOWN}
// 						</Typography>
// 						{[
// 							{ count: dayText, title: 'days' },
// 							{ count: hrText, title: 'hours' },
// 							{ count: minText, title: 'mins' },
// 							{ count: secText, title: 'secs' },
// 						].map(({ count, title }) => (
// 							<Stack
// 								key={title}
// 								alignItems="center"
// 								spacing={-1}
// 								sx={{
// 									pl: 1,
// 									pr: 1.5,
// 									pt: 1,
// 									pb: 2,
// 									border: '1px solid #31373E',
// 									borderRadius: '8px',
// 								}}
// 							>
// 								<Typography
// 									fontFamily="Electrofied"
// 									fontSize={24}
// 									fontStyle="italic"
// 									color="#31373E"
// 								>
// 									{count}
// 								</Typography>
// 								<Typography
// 									fontSize={14}
// 									fontStyle="italic"
// 									color="#31373E"
// 									fontWeight="bold"
// 								>
// 									{title}
// 								</Typography>
// 							</Stack>
// 						))}
// 					</Stack>
// 				</Stack>
// 				<Box
// 					sx={{
// 						position: 'absolute',
// 						bottom: '-7.5%',
// 						right: '2.5%',
// 					}}
// 				>
// 					<Link href={BANNER.BUTTON.href}>
// 						<Button
// 							endIcon={
// 								<Icon sx={{ width: 40, height: 40 }}>
// 									<IconImage src={BANNER.BUTTON.icon} />
// 								</Icon>
// 							}
// 							sx={{
// 								fontSize: 18,
// 								fontWeight: 600,
// 								color: '#FFF',
// 								background:
// 									'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
// 								borderRadius: '16px',
// 								boxShadow: 'none',
// 								px: 3,
// 								py: 2,
// 							}}
// 						>
// 							{BANNER.BUTTON.title}
// 						</Button>
// 					</Link>
// 				</Box>
// 			</Box>
// 		</Box>
// 	);
// };

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
