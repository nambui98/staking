import type { NextPage } from 'next';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
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
	styled,
	useMediaQuery,
} from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import MainLayout from '../components/layouts/MainLayout';
import { IconImage } from '../components/styled';
import SectionTitle from '../components/sections/SectionTitle';
import FoundedBy from '../components/sections/FoundedBy';
import Team from '../components/sections/Team';
import Roadmap from '../components/sections/Roadmap';
import StayInTouch from '../components/sections/StayInTouch';
import AppStoreButton from '../components/buttons/AppStoreButton';
import {
	TITLE,
	TITLE_MOBILE,
	BANNER,
	TOKEN,
	MISSION,
	APP,
	GAME,
	BUSINESS,
	CHARITY,
	THE_TOKEN,
} from '../constants/litePaper';
import HomeLayout from '../components/layouts/HomeLayout';

const Banner: React.FC<any> = ({ isXs }) => (
	<Stack
		justifyContent="center"
		alignItems="center"
		sx={{
			position: 'relative',
			overflow: 'hidden',
			height: { xs: 569 * 0.6, sm: 569 },
		}}
	>
		<Box
			sx={{
				position: 'absolute',
				backgroundImage: `url(${BANNER})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'center',
				width: { xs: 1920 * 0.6, sm: 1920 },
				height: { xs: 569 * 0.6, sm: 569 },
			}}
		/>
		<Stack alignItems="center" sx={{ position: 'relative', px: '10%' }}>
			<img src={TITLE} width={isXs ? '100%' : 'auto'} />
			{/* <img src={isXs ? TITLE_MOBILE : TITLE} width={'auto'}/> */}
		</Stack>
	</Stack>
);

const Token: React.FC<any> = ({ sxProps }) => {
	return (
		<Container sx={{ ...sxProps }}>
			<Grid container>
				<Grid item xs={12} md={4}>
					<Box
						sx={{
							width: { xs: '80%', sm: '70%', md: '100%' },
							height: 0,
							pt: {
								xs: `${(470 / 448) * 80}%`,
								sm: `${(470 / 448) * 70}%`,
								md: `${(470 / 448) * 100}%`,
							},
							mx: 'auto',
							backgroundImage: `url(${TOKEN.POSTER})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
						}}
					/>
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
							{TOKEN.SUBTITLE}
						</Typography>
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
							{TOKEN.TITLE}
						</Typography>
						<Typography
							fontSize={{ xs: 16, sm: 18 }}
							fontWeight={500}
							color="#5A6178"
							lineHeight={1.5}
							my={3}
						>
							{TOKEN.DESC}
						</Typography>
					</Stack>
				</Grid>
			</Grid>
			<Stack px={{ xs: 0, sm: 2, md: 4 }}>
				<Typography
					fontSize={{ xs: 16, sm: 18 }}
					fontWeight={500}
					color="#5A6178"
					lineHeight={1.5}
					my={3}
				>
					{TOKEN.TOKEN_DESC}
				</Typography>
			</Stack>
			<Stack
				direction={{ xs: 'column', sm: 'row', md: 'column', lg: 'row' }}
				alignItems="center"
				justifyContent="center"
				sx={{
					transform: { xs: `scale(${360 / 888})`, md: 'none' },
					my: { xs: -20, sm: -10, md: 0 },
				}}
			>
				<Box>
					<img src={TOKEN.NFT_IMG} width="auto" height="auto" />
				</Box>
				<Box
					sx={{
						ml: -8,
						position: 'relative',
					}}
				>
					<img src={TOKEN.TOKEN_IMG} width="auto" height="auto" />
					{TOKEN.CONTENT.map((el, idx) => (
						<Box
							key={idx}
							sx={{
								position: 'absolute',
								top: el.top,
								left: el.left,
							}}
						>
							<Typography
								fontStyle="italic"
								fontWeight={el.title.weight || 500}
								fontSize={el.title.size || 24}
								color={el.title.color || '#FFF'}
								align="center"
							>
								{el.title.text.split('\n').map((el, idx) => (
									<span key={idx}>
										{el}
										<br />
									</span>
								))}
							</Typography>
							{el.sub && (
								<Typography
									fontStyle="italic"
									fontWeight={500}
									fontSize={el.sub.size || 24}
									color={'#FFF'}
								>
									{el.sub.text}
								</Typography>
							)}
						</Box>
					))}
				</Box>
			</Stack>
			<Box mt={{ xs: 3, sm: 6, lg: 0 }}>
				<Typography
					fontSize={{ xs: 24, md: 32 }}
					fontWeight={600}
					color="#31373E"
				>
					Rent/<span style={{ color: '#0ECC93' }}>Buy</span>
				</Typography>
				<Typography
					fontSize={{ xs: 12, md: 16 }}
					fontWeight={500}
					color="#31373E"
					mt={2}
				>
					(Rent: Fixed Rent & Share Profits)
				</Typography>
			</Box>
			<Stack
				justifyContent="center"
				alignItems={{ xs: 'center', lg: 'flex-end' }}
				sx={{
					py: 5,
					px: { xs: 6, sm: 2 },
					backgroundImage: `url(${TOKEN.UNLOCK_BG})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'right',
				}}
			>
				<Typography
					fontSize={{ xs: 18, md: 24 }}
					fontWeight={500}
					color="#FFF"
					sx={{
						mr: { xs: 0, lg: '20%' },
					}}
				>
					{TOKEN.UNLOCK_TITLE}
				</Typography>
			</Stack>
		</Container>
	);
};

const Mission: React.FC<any> = ({ sxProps }) => {
	return (
		<Stack
			alignItems="center"
			sx={{
				position: 'relative',
				overflow: 'hidden',
				...sxProps,
			}}
		>
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
						top: 280,
						left: 0,
					}}
				>
					<img src={MISSION.BG} width={'auto'} height={'auto'} />
				</Box>
				<Box
					sx={{
						position: 'absolute',
						top: 224,
						left: 374,
					}}
				>
					<img src={MISSION.BG1} width={'auto'} height={'auto'} />
				</Box>
			</Box>
			<Container sx={{ position: 'relative' }}>
				<SectionTitle title={MISSION.TITLE} subtitle={MISSION.SUBTITLE} />
				<Grid container mt={5}>
					<Grid item xs={12} md={5}>
						<Stack justifyContent="center" alignItems="center" px={2}>
							<Box
								sx={{
									width: '100%',
									maxWidth: 420,
								}}
							>
								<img src={MISSION.IMAGE1} width={'100%'} height={'auto'} />
							</Box>
						</Stack>
					</Grid>
					<Grid item xs>
						<Box
							sx={{
								pt: { xs: 2, sm: 4 },
								pr: { xs: 3, sm: 6 },
								backgroundImage: `url(${MISSION.BG2})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'contain',
								backgroundPosition: 'top right',
							}}
						>
							<Typography
								fontSize={{ xs: 20, sm: 28 }}
								fontWeight={500}
								color="#5A6178"
								lineHeight={1.5}
							>
								{MISSION.DESC1}
							</Typography>
						</Box>
					</Grid>
				</Grid>
				<Grid
					container
					mt={5}
					flexDirection={{ xs: 'column-reverse', md: 'row' }}
				>
					<Grid item xs>
						<Stack
							justifyContent={{ xs: 'center', md: 'flex-end' }}
							sx={{ height: '100%' }}
						>
							<Typography
								fontSize={{ xs: 20, sm: 28 }}
								fontWeight={500}
								color="#5A6178"
								lineHeight={1.5}
							>
								{MISSION.DESC2}
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={12} md={5}>
						<Stack justifyContent="center" alignItems="center" px={2}>
							<Box
								sx={{
									width: '100%',
									maxWidth: 352,
								}}
							>
								<img src={MISSION.IMAGE2} width={'100%'} height={'auto'} />
							</Box>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Stack>
	);
};

const App: React.FC<any> = ({ sxProps }) => {
	return (
		<Stack
			alignItems="center"
			sx={{
				position: 'relative',
				overflow: 'hidden',
				...sxProps,
			}}
		>
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
						top: 0,
						left: 0,
					}}
				>
					<img src={APP.BG} width="auto" height="auto" />
				</Box>
			</Box>
			<Container sx={{ position: 'relative' }}>
				<Grid container>
					<Grid item xs={12} md={5}>
						<Stack justifyContent="center" alignItems="center" px={2}>
							<Box
								sx={{
									width: '100%',
									maxWidth: 420,
								}}
							>
								<img src={APP.POSTER} width={'100%'} height={'auto'} />
							</Box>
						</Stack>
					</Grid>
					<Grid item xs>
						<Stack
							justifyContent="center"
							sx={{
								height: '100%',
							}}
						>
							<Stack
								alignItems={{ xs: 'center', md: 'flex-start' }}
								justifyContent="center"
								mb={5}
							>
								<Box
									sx={{
										width: '100%',
										maxWidth: 551,
									}}
								>
									<img src={APP.TITLE} width={'100%'} height={'auto'} />
								</Box>
							</Stack>
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
		</Stack>
	);
};

const Game: React.FC<any> = ({ sxProps }) => {
	return (
		<Stack
			alignItems="center"
			sx={{
				position: 'relative',
				overflow: 'hidden',
				...sxProps,
			}}
		>
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
						top: 455,
						right: 0,
						display: { xs: 'none', lg: 'block' },
					}}
				>
					<img src={GAME.BG} width="auto" height="auto" />
				</Box>
			</Box>
			<Container sx={{ position: 'relative', pb: { md: 21 } }}>
				<SectionTitle title={GAME.TITLE} subtitle={GAME.SUBTITLE} swap={true} />
				<Typography
					fontSize={{ xs: 20, sm: 28 }}
					fontWeight={500}
					color="#5A6178"
					mt={5}
					mb={10}
				>
					{GAME.DESC}
				</Typography>
				<Grid container spacing={3} rowSpacing={{ xs: 9, lg: 3 }}>
					{GAME.ITEMS.map((el, idx) => (
						<Grid key={idx} item xs={12} sm={6} lg={3}>
							<Stack alignItems="center">
								<Box
									sx={{
										position: 'relative',
										width: 250,
										// width: '100%',
										// maxWidth: 250,
										// height: 0,
										// pt: `${360/250*100}%`,
									}}
								>
									{el.borderColor ? (
										<Box
											sx={{
												width: '100%',
												height: 360,
												backgroundColor: 'rgba(255,255,255,0.5)',
												backdropFilter: 'blur(24px)',
												transform: 'matrix(0.98, 0, -0.18, 1, 0, 0)',
												borderRadius: '40px',
												border: `${el.borderSize} solid ${el.borderColor}`,
											}}
										/>
									) : (
										<Box
											sx={{
												width: '100%',
												height: 360,
												backgroundColor: 'rgba(255,255,255,0.5)',
												backdropFilter: 'blur(24px)',
												transform: 'matrix(0.98, 0, -0.18, 1, 0, 0)',
												borderRadius: '40px',
												border: `${el.borderSize} solid`,
												borderImage: el.borderImage,
												borderImageSlice: 1,
												borderWidth: el.borderSize,
											}}
										/>
									)}
									{/* <Box
									sx={{
										width: '100%',
										height: 360,
										background: el.borderImage || el.borderColor,
										p: el.borderSize,
										borderRadius: '40px',
										transform: 'matrix(0.98, 0, -0.18, 1, 0, 0)',
									}}
								>
									<Box
										sx={{
											width: '100%',
											height: '100%',
											borderRadius: '38px',
											// backgroundColor: 'rgba(255,255,255,0.5)',
											backgroundColor: 'rgba(255,255,255,1)',
											backdropFilter: 'blur(24px)',
										}}
									/>
								</Box> */}
									{el.badge && (
										<Box
											sx={{
												position: 'absolute',
												top: '35%',
												left: '2%',
											}}
										>
											<img src={el.badge} width="auto" height="auto" />
										</Box>
									)}
									<Box
										sx={{
											position: 'absolute',
											top: el.top,
											left: `${el.left}%`,
										}}
									>
										<img src={el.image} width="auto" height="auto" />
									</Box>
									<Box
										sx={{
											position: 'absolute',
											top: '50%',
											left: '-5%',
											px: 3,
										}}
									>
										<Typography
											fontSize={24}
											fontWeight={600}
											color="#31373E"
											align="center"
											mb={1}
										>
											{el.title}
										</Typography>
										<Typography
											fontSize={16}
											fontWeight={500}
											lineHeight={1.5}
											color="#5A6178"
											align="center"
										>
											{el.desc}
										</Typography>
									</Box>
								</Box>
							</Stack>
						</Grid>
					))}
				</Grid>
			</Container>
		</Stack>
	);
};

const Business: React.FC<any> = ({ sxProps }) => {
	return (
		<Stack
			alignItems="center"
			sx={{
				position: 'relative',
				overflow: 'hidden',
				...sxProps,
			}}
		>
			<Container sx={{ position: 'relative' }}>
				<SectionTitle
					title={BUSINESS.TITLE}
					subtitle={BUSINESS.SUBTITLE}
					swap={true}
				/>
				<Stack spacing={3} mt={4} px={3}>
					<Typography
						variant="subtitle1"
						fontSize={{ xs: 24, sm: 32 }}
						fontStyle="italic"
						color="#31373E"
						sx={{
							textTransform: 'uppercase',
							textShadow: '1px 1px 0 #FFF, 2px 2px 0 #31373E',
						}}
					>
						{BUSINESS.FLOW.TITLE}
					</Typography>
					<Typography
						fontSize={{ xs: 18, sm: 24 }}
						fontWeight={500}
						lineHeight={1.5}
						color="#5A6178"
					>
						{BUSINESS.FLOW.DESC}
					</Typography>
					<Stack>
						{BUSINESS.FLOW.ITEMS.map((el, idx) => (
							<Grid
								container
								key={idx}
								spacing={3}
								sx={{
									borderBottom:
										idx < BUSINESS.FLOW.ITEMS.length - 1
											? '1px solid #E9EAEF'
											: 'none',
									py: 3,
								}}
							>
								<Grid item xs={12} sm={4}>
									<Stack direction="row" alignItems="flex-start" spacing={2}>
										<Icon sx={{ width: 12, height: 12, mt: 1 }}>
											<IconImage src={el.icon} />
										</Icon>
										<Typography
											fontSize={{ xs: 16, sm: 20 }}
											fontWeight={600}
											lineHeight={1.5}
											color="#31373E"
										>
											{el.title}
										</Typography>
									</Stack>
								</Grid>
								<Grid item xs>
									<Typography
										fontSize={{ xs: 14, sm: 20 }}
										fontWeight={500}
										lineHeight={1.5}
										color="#5A6178"
									>
										{el.desc}
									</Typography>
								</Grid>
							</Grid>
						))}
					</Stack>
					<Typography
						variant="subtitle1"
						fontSize={{ xs: 24, sm: 32 }}
						fontStyle="italic"
						color="#31373E"
						sx={{
							textTransform: 'uppercase',
							textShadow: '1px 1px 0 #FFF, 2px 2px 0 #31373E',
							pt: 5,
							pb: 0,
						}}
					>
						{BUSINESS.SUSTAINABILITY.TITLE}
					</Typography>
					<Stack spacing={5} pb={10}>
						{BUSINESS.SUSTAINABILITY.DESC.map((el, idx) => (
							<Typography
								key={idx}
								fontSize={{ xs: 18, sm: 24 }}
								fontWeight={500}
								lineHeight={1.5}
								color="#5A6178"
							>
								{el}
							</Typography>
						))}
					</Stack>
				</Stack>
			</Container>
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
						bottom: 0,
						left: 0,
						display: { xs: 'none', lg: 'block' },
					}}
				>
					<img src={BUSINESS.BG} width="auto" height="auto" />
				</Box>
			</Box>
		</Stack>
	);
};

const Charity: React.FC<any> = ({ sxProps }) => (
	<Container sx={{ ...sxProps }}>
		<SectionTitle
			title={CHARITY.TITLE}
			subtitle={CHARITY.SUBTITLE}
			swap={true}
		/>
		<Typography
			fontSize={{ xs: 18, sm: 24 }}
			fontWeight={500}
			lineHeight={1.5}
			color="#5A6178"
			my={5}
			px={3}
		>
			{CHARITY.DESC}
		</Typography>
		<Stack spacing={6} px={3}>
			{CHARITY.ITEMS.map((el, idx) => (
				<Stack key={idx}>
					<Stack direction="row" alignItems="center" spacing={1} mb={2}>
						<img src={el.icon} width="auto" height="auto" />
						<Typography
							variant="subtitle1"
							fontSize={{ xs: 18, md: 24 }}
							fontStyle="italic"
							color="#31373E"
						>
							{el.title}
						</Typography>
					</Stack>
					<Typography
						fontSize={{ xs: 14, sm: 20 }}
						fontWeight={500}
						lineHeight={1.5}
						color="#5A6178"
					>
						{el.desc}
					</Typography>
				</Stack>
			))}
		</Stack>
	</Container>
);

const PieChart: React.FC<any> = ({ sxProps, isXs }) => {
	return (
		<ReactEcharts
			style={{ height: '500px', width: '100%' }}
			option={{
				// title: {
				// 	text: "某站点用户访问来源",
				// 	subtext: "纯属虚构",
				// 	x: "center"
				// },
				tooltip: {
					show: true,
					trigger: 'item',
					// formatter: "{a} <br/>{b} : {c} ({d}%)",
					formatter: '{b} {d}%',
					textStyle: {
						fontSize: isXs ? 10 : 14,
						fontFamily: 'BeVietnamPro',
					},
				},
				legend: {
					show: isXs,
					orient: 'horizontal',
					bottom: 0,
					data: THE_TOKEN.DISTRIBUTION.PIE.data.map((el) => el.name),
				},
				series: [
					{
						// name: "访问来源",
						type: 'pie',
						radius: ['55%', '90%'],
						center: ['50%', '50%'],
						animationDuration: 5000,
						data: THE_TOKEN.DISTRIBUTION.PIE.data,
						avoidLabelOverlap: true,
						bottom: '25%',
						label: {
							show: !isXs,
							position: 'outside',
							alignTo: 'none',
							formatter: '{b} {d}%',
							// formatter: '{name|{b}}\n{time|{c}%}',
							minMargin: 5,
							edgeDistance: 5,
							textStyle: {
								fontSize: isXs ? 10 : 16,
								fontFamily: 'BeVietnamPro',
								color: '#5A6178',
							},
						},
						labelLine: {
							show: false,
							length: 5,
							length2: 0,
							maxSurfaceAngle: 80,
						},
						itemStyle: {
							borderColor: '#fff',
							borderWidth: 1,
							emphasis: {
								label: {
									show: false,
									fontSize: 18,
									fontWeight: 600,
									fontFamily: 'BeVietnamPro',
								},
								// shadowBlur: 10,
								// shadowOffsetX: 0,
								// shadowColor: "rgba(0, 0, 0, 0.5)"
							},
						},
					},
				],
				color: THE_TOKEN.DISTRIBUTION.PIE.color,
			}}
		/>
	);
};

const StackAreaChart: React.FC<any> = ({ sxProps, isXs }) => {
	return (
		<ReactEcharts
			style={{
				height: isXs ? '500px' : '800px',
				width: '100%',
				// fontFamily: 'BeVietnamPro',
				// fontWeight: 500,
				// fontSize: 16,
			}}
			option={{
				tooltip: {
					show: true,
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						axis: 'auto',
						label: {
							backgroundColor: '#6a7985',
						},
					},
					position: function (
						pos: any,
						params: any,
						dom: any,
						rect: any,
						size: any
					) {
						// tooltip will be fixed on the right if mouse hovering on the left,
						// and on the left if hovering on the right.
						var obj: any = {};
						obj[['top', 'bottom'][+(pos[1] < size.viewSize[1] / 2)]] = 5;
						obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
						return obj;
					},
					textStyle: {
						fontSize: 10,
					},
				},
				grid: {
					left: isXs ? '3%' : 0,
					right: isXs ? '4%' : 0,
					bottom: isXs ? '22%' : '7%',
					containLabel: true,
				},
				legend: {
					show: true,
					orient: 'horizontal',
					bottom: 0,
					data: THE_TOKEN.DISTRIBUTION.STACK.series.map((el) => el.name),
					textStyle: {
						// fontFamily: 'BeVietnamPro',
					},
				},
				xAxis: [
					{
						type: 'category',
						boundaryGap: false,
						data: THE_TOKEN.DISTRIBUTION.STACK.X,
					},
				],
				yAxis: [
					{
						type: 'value',
					},
				],
				series: THE_TOKEN.DISTRIBUTION.STACK.series.map((el, idx) => ({
					name: el.name,
					smooth: true,
					type: 'line',
					stack: 'Total',
					areaStyle: {},
					// emphasis: {
					// 	focus: 'series',
					// },
					data: el.data,
					showSymbol: false,
					label: {
						fontFamily: 'BeVietnamPro',
						fontWeight: 500,
						fontSize: isXs ? 14 : 16,
					},
				})),
				color: THE_TOKEN.DISTRIBUTION.STACK.color,
			}}
		/>
	);
};

const TheToken: React.FC<any> = ({ sxProps, isXs }) => (
	<Container sx={{ ...sxProps }}>
		<SectionTitle title={THE_TOKEN.TITLE} subtitle={THE_TOKEN.SUBTITLE} />
		<Grid container mt={5} rowSpacing={5}>
			<Grid item xs={12} md={6}>
				<Stack alignItems="flex-start">
					<Box
						sx={{
							width: '100%',
							maxWidth: 479,
							position: 'relative',
						}}
					>
						<Box
							sx={{
								display: { xs: 'none', md: 'block' },
								position: 'absolute',
								top: 100,
								left: 50,
							}}
						>
							<img src={THE_TOKEN.FIU.BG} width="auto" height="auto" />
						</Box>
						<Stack alignItems="flex-start">
							<img src={THE_TOKEN.FIU.TITLE} width="auto" height="auto" />
							<Typography
								variant="subtitle1"
								fontSize={{ xs: 12, md: 16 }}
								fontStyle="italic"
								color="#31373E"
							>
								{THE_TOKEN.FIU.SUBTITLE}
							</Typography>
						</Stack>
						<Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
							<img src={THE_TOKEN.FIU.IMG} width="auto" height="auto" />
						</Stack>
					</Box>
					<Stack spacing={3} mt={3}>
						{THE_TOKEN.FIU.ITEMS.map((el, idx) => (
							<Box key={idx}>
								<Typography
									variant="subtitle1"
									fontSize={30}
									fontStyle="italic"
									sx={{
										mb: 2,
										textTransform: 'uppercase',
										background:
											'radial-gradient(75% 75% at 21.87% 25%, #FFCC77 18.94%, #FF612F 89.59%)',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										backgroundClip: 'text',
										textFillColor: 'transparent',
									}}
								>
									{el.title}
								</Typography>
								<Stack spacing={1}>
									{el.items.map((text, idx) => (
										<Typography
											key={idx}
											fontSize={{ xs: 14, sm: 20 }}
											fontWeight={500}
											color="#A7ACB8"
										>
											{text}
										</Typography>
									))}
								</Stack>
							</Box>
						))}
					</Stack>
				</Stack>
			</Grid>
			<Grid item xs={12} md={6}>
				<Stack alignItems="flex-end">
					<Box
						sx={{
							width: '100%',
							maxWidth: 414,
							position: 'relative',
						}}
					>
						<Box
							sx={{
								display: { xs: 'none', md: 'block' },
								position: 'absolute',
								top: 95,
								right: 65,
							}}
						>
							<img src={THE_TOKEN.HEE.BG} width="auto" height="auto" />
						</Box>
						<Stack alignItems="flex-end">
							<img src={THE_TOKEN.HEE.TITLE} width="auto" height="auto" />
							<Typography
								variant="subtitle1"
								fontSize={{ xs: 12, md: 16 }}
								fontStyle="italic"
								color="#31373E"
							>
								{THE_TOKEN.HEE.SUBTITLE}
							</Typography>
						</Stack>
						<Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
							<img src={THE_TOKEN.HEE.IMG} width="auto" height="auto" />
						</Stack>
					</Box>
					<Stack spacing={3} mt={3}>
						{THE_TOKEN.HEE.ITEMS.map((el, idx) => (
							<Box key={idx}>
								<Typography
									variant="subtitle1"
									fontSize={30}
									fontStyle="italic"
									align="right"
									sx={{
										pr: 1,
										mb: 2,
										textTransform: 'uppercase',
										background:
											'linear-gradient(180deg, #8AFFC5 6.58%, #1DB167 80.6%)',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										backgroundClip: 'text',
										textFillColor: 'transparent',
									}}
								>
									{el.title}
								</Typography>
								<Stack spacing={1} alignItems="flex-end">
									{el.items.map((text, idx) => (
										<Typography
											key={idx}
											fontSize={{ xs: 14, sm: 20 }}
											fontWeight={500}
											color="#A7ACB8"
										>
											{text}
										</Typography>
									))}
								</Stack>
							</Box>
						))}
					</Stack>
				</Stack>
			</Grid>
		</Grid>
		<Typography
			variant="subtitle1"
			fontSize={{ xs: 24, sm: 32 }}
			fontStyle="italic"
			color="#31373E"
			sx={{
				mt: 10,
				mb: 5,
				textTransform: 'uppercase',
				textShadow: '1px 1px 0 #FFF, 2px 2px 0 #31373E',
			}}
		>
			{THE_TOKEN.DISTRIBUTION.TITLE}
		</Typography>
		<Stack justifyContent="center">
			<PieChart isXs={isXs} />
		</Stack>
		<Stack justifyContent="center">
			<StackAreaChart isXs={isXs} />
		</Stack>
	</Container>
);

const LitePaper: NextPage = () => {
	const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	return (
		<HomeLayout sxProps={{ background: '#fff' }} headerLandingPage={true}>
			<Banner isXs={isXs} />
			<Token sxProps={{ my: 15 }} />
			<Mission sxProps={{ my: 15 }} />
			<Game sxProps={{ my: 15 }} />
			<Business sxProps={{ my: 15 }} />
			<Charity sxProps={{ my: 15 }} />
			<TheToken sxProps={{ my: 15 }} isXs={isXs} />
			<Roadmap />
			<FoundedBy sxProps={{ mb: 15 }} />
			<Team sxProps={{ mb: 15 }} />
			<App sxProps={{ mb: 15 }} />
			<StayInTouch />
		</HomeLayout>
	);
};

export default LitePaper;
