import type { NextPage } from 'next';
import React, { useState, useEffect, useRef } from 'react';
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
	Link,
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
import HomeLayoutNew from '../components/layouts/HomeLayoutNew';
import { TEXT_STYLE } from '../styles/common/textStyles';
import { LoginTicket } from 'google-auth-library';
import Section8 from '../containers/home/section8';
import Section4 from '../containers/home/section4';
import Section9 from '../containers/home/section9';
import TokenLitepaper from '../containers/litePaper/Token';

const Banner: React.FC<any> = ({ isXs }) => (
	<Stack
		justifyContent="center"
		alignItems="center"
		sx={{
			position: 'relative',
			overflow: 'hidden',
			height: { xs: 260, sm: 610 },
			marginTop: { xs: '64px', sm: '76px' }
		}}
	>
		<Box
			sx={{
				position: 'absolute',
				backgroundImage: `url(${BANNER})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'center',
				width: { xs: '100%', sm: 1920 },
				height: { xs: '100%', sm: '100%' },
			}}
		/>
		<Stack alignItems="center" sx={{
			position: 'relative', px: '10%',
			'& img': {
				maxWidth: '305px',
				'@media (min-width: 768px)': {
					maxWidth: '760px'
				}
			}
		}}>
			<img src={TITLE} width={isXs ? '100%' : 'auto'} />
			{/* <img src={isXs ? TITLE_MOBILE : TITLE} width={'auto'}/> */}
		</Stack>
	</Stack>
);

const Token: React.FC<any> = ({ sxProps }) => {
	return (
		<Container sx={{
			maxWidth: '1728px !important', margin: '40px auto 20px', '@media (min-width: 768px)': {
				margin: '60px auto',
			}
		}}>
			<Box sx={{
				display: 'flex',
				'@media (max-width: 1279px)': {
					flexDirection: 'column',
				}
			}}>
				<Box sx={{
					display: 'flex',
					alignItems: 'center',
					'& img': {
						width: '100%',
						maxWidth: '343px',
						margin: 'auto'
					},
					'@media (min-width: 768px)': {
						marginRight: '80px',
						'& img': {
							maxWidth: 'unset',
							width: 'unset',
						},
					}
				}}>
					<img src={'assets/title-token-lp.png'} />
				</Box>
				<Box>
					<Stack
						justifyContent="center"
						sx={{ height: '100%' }}
					>
						<Typography
							fontSize={{ xs: 16, sm: 32 }}
							fontWeight={600}
							color="#ffffff"
							lineHeight={1.5}
							sx={{
								'& span': {
									color: '#FF6D24'
								},
								'@media (max-width: 1279px)': {
									marginTop: '24px'
								}
							}}
						>
							<span>beFitter</span> {TOKEN.DESC}
						</Typography>
					</Stack>
				</Box>
			</Box>
			<Stack >
				<Typography
					fontSize={{ xs: 16, sm: 32 }}
					fontWeight={600}
					color="#ffffff"
					lineHeight={1.5}
					sx={{
						margin: '40px 0 80px',
						'@media (max-width: 767px)': {
							margin: '24px 0'
						}
					}}
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
								sx={{
									'& span': {
										color: '#ffffff'
									}
								}}
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
			<Box mt={{ xs: 0, sm: 6, lg: 0 }}>
				<Typography
					fontSize={{ xs: 16, md: 32 }}
					fontWeight={600}
					color="#ffffff"
				>
					Rent/<span style={{ color: '#0ECC93' }}>Buy</span>
				</Typography>
				<Typography
					fontSize={{ xs: 8, md: 16 }}
					fontWeight={500}
					color="#ffffff"
					mt={{ xs: 1, md: 2 }}
				>
					(Rent: Fixed Rent & Share Profits)
				</Typography>
			</Box>
		</Container>
	);
};

const Mission: React.FC<any> = ({ sxProps }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Container sx={{
				position: 'relative',
				maxWidth: '1728px !important',
				margin: '20px auto',
				'@media (min-width: 768px)': {
					margin: '60px auto',
				}
			}}>
				<Box sx={{
					textAlign: 'center',
					'& p': {
						...TEXT_STYLE(24, 700, '#FF6D24'),
						fontFamily: 'Electrofied',
						fontStyle: 'italic',
						'& span': {
							...TEXT_STYLE(16, 700, '#ffffff'),
							marginRight: '5px'
						},
						'@media (min-width: 768px)': {
							...TEXT_STYLE(80, 700, '#FF6D24'),
							'& span': {
								...TEXT_STYLE(48, 700, '#ffffff'),
								marginRight: '10px'
							},
						}
					}
				}}>
					<Typography>{MISSION.SUBTITLE}</Typography>
					<Typography><span>&</span>{MISSION.TITLE}</Typography>
				</Box>
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
					<Grid item xs sx={{
						display: 'flex',
						alignItems: 'center'
					}}>
						<Box
							mt={{ xs: 2, md: 0 }}
						>
							<Typography
								fontSize={{ xs: 16, sm: 32 }}
								fontWeight={500}
								color="#ffffff"
								lineHeight={1.5}
							>
								{MISSION.DESC1}
							</Typography>
						</Box>
					</Grid>
				</Grid>
				<Grid
					container
					mt={'23px'}
					flexDirection={{ xs: 'column-reverse', md: 'row' }}
				>
					<Grid item xs>
						<Stack
							justifyContent={{ xs: 'center', md: 'flex-end' }}
							sx={{ height: '100%' }}
							mt={{ xs: 2, md: 0 }}
						>
							<Typography
								fontSize={{ xs: 16, sm: 32 }}
								fontWeight={500}
								color="#ffffff"
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
		</Box>
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
			}}
		>
			<Container sx={{
				position: 'relative', maxWidth: '1728px !important',
				margin: '20px auto',
				'@media (min-width: 768px)': {
					margin: '20px auto 60px',
				}
			}}>
				<Box sx={{
					textAlign: 'center',
					'& p': {
						...TEXT_STYLE(24, 700, '#FF6D24'),
						fontFamily: 'Electrofied',
						fontStyle: 'italic',

						'& span': {
							...TEXT_STYLE(24, 700, '#FF6D24'),
						},
						'@media (min-width: 768px)': {
							...TEXT_STYLE(80, 700, '#FF6D24'),
							display: 'flex',
							flexDirection: 'column',
							'& span': {
								...TEXT_STYLE(48, 700, '#ffffff'),
								marginTop: '-10px'
							},
						}
					}
				}}>
					<Typography>{GAME.SUBTITLE} <span>{GAME.TITLE}</span></Typography>
				</Box>
				<Typography
					fontSize={{ xs: 16, sm: 32 }}
					fontWeight={500}
					color="#ffffff"
					mt={{ xs: 3, sm: 10 }}
					mb={{ xs: 5, sm: 10 }}
					textAlign="center"
				>
					{GAME.DESC}
				</Typography>
				<Grid container spacing={3} rowSpacing={{ xs: 9, lg: 3 }} sx={{
					maxWidth: '1120px', margin: 'auto',
					width: '100% !important'
				}}>
					{GAME.ITEMS.map((el, idx) => (
						<Grid key={idx} item xs={12} sm={6} lg={3} sx={{
							'@media (max-width: 767px)': {
								paddingLeft: '0 !important',
								paddingTop: '40px !important'
							}
						}}>
							<Stack alignItems="center">
								<Box
									sx={{
										position: 'relative',
										width: 250,
									}}
								>
									{el.borderColor ? (
										<Box
											sx={{
												width: '100%',
											}}
										/>
									) : (
										<Box
											sx={{
												width: '100%',
											}}
										/>
									)}
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center'
										}}
									>
										<img src={el.image} width="auto" height="auto" />
									</Box>
									<Box
										sx={{
											textAlign: 'center'
										}}
									>
										<Box
											fontSize={{ xs: 28, sm: 28 }}
											mb={{ xs: 1, sm: 3 }}
											mt={{ xs: idx === 2 || idx === 3 ? 6 : 2, sm: 8 }}

											sx={{
												textTransform: 'uppercase',
												fontWeight: '600',
												color: "#ffffff",
												alignIten: "center",
												position: "relative",

											}}
										>
											{el.badge && (
												<Box
													sx={{
														position: 'absolute',
														bottom: '100%',
														left: '0',
														lineHeight: 0
													}}
												>
													<img src={el.badge} width="auto" height="auto" />
												</Box>
											)}
											<img src={el.title} />
										</Box>
										<Typography
											fontSize={{ xs: 16, sm: 20 }}
											fontWeight={500}
											lineHeight={1.5}
											color="#ffffff"
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
			}}
		>
			<Container sx={{
				position: 'relative', maxWidth: '1728px !important',
				margin: '20px auto',
				'@media (min-width: 768px)': {
					margin: '60px auto',
				}
			}}>
				<Box sx={{
					textAlign: 'center',
					'& p': {
						...TEXT_STYLE(24, 700, '#FF6D24'),
						fontFamily: 'Electrofied',
						fontStyle: 'italic',
						display: 'flex',
						flexDirection: 'column',

						'& span': {
							...TEXT_STYLE(16, 700, '#ffffff'),
						},
						'@media (min-width: 768px)': {
							...TEXT_STYLE(80, 700, '#FF6D24'),
							'& span': {
								...TEXT_STYLE(48, 700, '#ffffff'),
								marginTop: '-10px'
							},
						}
					}
				}}>
					<Typography>{BUSINESS.TITLE} <span>{BUSINESS.SUBTITLE}</span></Typography>
				</Box>
				<Box
					mt={{ xs: 3, sm: 10 }}
					sx={{
						textAlign: 'center',
						...TEXT_STYLE(20, 600, '#ffffff'),
						'& a': {
							color: '#FF6D24',
							textDecoration: 'underline'
						},
						'@media (min-width: 768px)': {
							...TEXT_STYLE(32, 600, '#ffffff'),
						}
					}}
				>{BUSINESS.BODY} <Link href={'/business'}>Business Page</Link></Box>
			</Container>
		</Stack>
	);
};

const Charity: React.FC<any> = ({ sxProps }) => (
	<Container sx={{
		maxWidth: '1728px !important',
		margin: '20px auto',
		'@media (min-width: 768px)': {
			margin: '60px auto',
		}
	}}>
		<Box sx={{
			textAlign: 'center',
			'& p': {
				...TEXT_STYLE(24, 700, '#FF6D24'),
				fontFamily: 'Electrofied',
				fontStyle: 'italic',
				display: 'flex',
				flexDirection: 'column',

				'& span': {
					...TEXT_STYLE(16, 700, '#ffffff'),
				},
				'@media (min-width: 768px)': {
					...TEXT_STYLE(80, 700, '#FF6D24'),
					'& span': {
						...TEXT_STYLE(48, 700, '#ffffff'),
						marginTop: '-10px'
					},
				}
			}
		}}>
			<Typography>{CHARITY.TITLE} <span>{CHARITY.SUBTITLE}</span></Typography>
		</Box>
		<Typography
			fontSize={{ xs: 20, sm: 32 }}
			fontWeight={500}
			lineHeight={1.5}
			color="#ffffff"
			my={5}
			mt={{ xs: 3, sm: 5 }}
			px={3}
		>
			{CHARITY.DESC}
		</Typography>
		<Stack spacing={6}>
			{CHARITY.ITEMS.map((el, idx) => (
				<Stack key={idx}>
					<Stack direction="row" alignItems="center" spacing={1} mb={2} sx={{
						'@media (max-width: 767px)': {
							display: 'flex',
							flexDirection: 'column',
							'& img': {
								marginBottom: '16px'
							}
						}
					}}>
						<img src={el.icon} width="auto" height="auto" />
						<Typography
							variant="subtitle1"
							fontSize={{ xs: 24, md: 40 }}
							color="#ffffff"
							textAlign={{ xs: 'center', md: 'left' }}
						>
							{el.title}
						</Typography>
					</Stack>
					<Typography
						fontSize={{ xs: 16, sm: 32 }}
						fontWeight={500}
						lineHeight={1.5}
						color="#ffffff"
					>
						{el.desc}
					</Typography>
				</Stack>
			))}
		</Stack>
	</Container>
);

const LitePaper: NextPage = () => {
	const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
	const [height, setHeight] = useState<number>();

	const windowHeightListener = () => {
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		windowHeightListener();
	}, []);

	return (
		<HomeLayoutNew sxProps={{ background: '#1E1E1E' }} headerLandingPage={true}>
			<Banner isXs={isXs} />
			<Token />
			<Mission />
			<Game />
			<Business />
			<Charity />
			<Box sx={{
				height: { xs: "auto", sm: height },
				position: 'relative',
				'@media (min-width: 960px)': {
					maxHeight: '800px'
				}
			}}>
				<TokenLitepaper />
			</Box >

			<Section8 />
			<Box sx={{
				backgroundColor: "#151515",
				position: 'relative',
			}} key={"9"}>
				<Section9 />
			</Box>
		</HomeLayoutNew>
	);
};

export default LitePaper;
