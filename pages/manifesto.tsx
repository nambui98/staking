import { Box, BoxProps, Container, styled, Typography } from '@mui/material';
import HomeLayoutNew from '../components/layouts/HomeLayoutNew';
import { Banner } from '../containers/business/Banner';
import { BusinessModel } from '../containers/business/BusinessModel';
import { Intro } from '../containers/business/Intro';
import { Section4 } from '../containers/business/Section4';
import { Section5 } from '../containers/business/Section5';
import { Token } from '../containers/business/Token';
import { TEXT_STYLE } from '../styles/common/textStyles';

const Business = () => {
	return (
		<HomeLayoutNew
			sxProps={{ background: '#111021' }}
			headerLandingPage={true}
			customWhite={true}
		>
			<Box
				sx={{
					position: 'relative',
				}}
			>
				<Banner
					customStyle={{
						'& video': {
							// maxHeight: '960px',
						},
					}}
				/>
				<Box
					sx={{
						width: '100%',
						maxWidth: '1668px',
						padding: '0 24px',
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						'& p': {
							...TEXT_STYLE(56, 700, '#FFFFFF'),
							fontStyle: 'italic',
							fontFamily: 'Electrofied',
						},
						'& span': {
							color: '#FF6D24',
							textShadow: '0px 0px 24px #FF6D24',
							filter: 'blur(1px)',
							textTransform: 'uppercase',
						},
						'@media (min-width: 1280px)': {
							'& p': {
								...TEXT_STYLE(120, 700, '#FFFFFF'),
							},
						},
					}}
				>
					<Typography
						sx={{
							...TEXT_STYLE(24, 700, '#FFFFFF'),
							'@media (min-width: 1280px)': {
								...TEXT_STYLE(56, 700, '#FFFFFF'),
							},
						}}
					>
						beFITTER
					</Typography>
					<Typography>
						We <span>Energize</span> People
					</Typography>
				</Box>
			</Box>

			<Container sx={{ maxWidth: { xl: 1680 + 48 } }}>
				<TitleSection>
					We <span>inspire people</span> to stay healthy
				</TitleSection>
				<BoxTextImage>
					<Typography
						mr={{ xs: 0, md: 15 }}
						sx={{
							maxWidth: '1014px',
						}}
					>
						Fitness apps are not something new. However, opening one and letting
						it track the outdoor activities simply cannot satisfy many health
						fanatics. There could be more of it. Instead of just running in
						circles and getting bored in a minute or two, people can stay on
						track for much longer thanks to a fitness app that monetizes every
						single step they take. Working out, with <span>beFITTER</span>’s
						core element - fitnessfi, is now a lot more enjoyable as the folks
						cherish a bigger ambition. <span>It’s keeping fit to earn.</span>
					</Typography>
					<Box>
						<img src={'assets/manifesto-1.png'} />
					</Box>
				</BoxTextImage>
				<BoxTextImage
					sx={{
						marginTop: '24px !important',
					}}
				>
					<Typography>
						Don’t get us wrong, the earning aspect here doesn’t just refer to
						the monetary benefit. It’s the social benefit that we also aim for.
						beFITTER encourages regular exercise to tackle the problem of
						obesity and an unhealthy lifestyle, and more importantly, the lack
						of in-person interaction. What could be more tempting than getting
						out there, being adventurous, and making new friends via{' '}
						<span>beFITTER’s Socialfi</span> feature, and still reaping some
						well-deserved rewards? At the end of the day, we provide
						considerable benefits financially and socially to inspire our
						community to live their lives to the fullest.
					</Typography>
				</BoxTextImage>
				<TitleSection>
					We create <span>a sustainable economy</span>
				</TitleSection>
				<BoxTextImage
					sx={{
						marginTop: '24px !important',
					}}
				>
					<Typography>
						Inflation is the process by which a currency like a dollar loses
						value over time. Like in the traditional economy, we don’t think
						that inflation with cryptocurrency or NFTs is always bad. At low,
						stable levels (especially at the beginning when apps have to attract
						early adopters), it encourages people to buy, thereby stimulating
						economic growth. fullest.
					</Typography>
				</BoxTextImage>
				<BoxTextImage>
					<Typography
						mr={{ xs: 0, md: 5 }}
						mt={{ xs: 0, md: 10 }}
						sx={{
							maxWidth: '1033px',
						}}
					>
						However, compared to the real world economy where central banks can
						print as much money as they want, sometimes for political reasons,
						there is a hard cap in place with beFITTER governance{' '}
						<span style={{ color: '#FF6D24' }}>$FIU</span> token. Regarding the{' '}
						<span style={{ color: '#1DB268' }}>$HEE</span> token, even though it
						has unlimited supplies, The beFITTER protocol has disinflationary
						measures that slow the rate of inflation over time. The main one is
						the burning mechanism that is transparently published in our{' '}
						<span>Business Paper.</span>
					</Typography>
					<BoxImage xsWidth={212} mdWidth={567} isMt>
						<img src={'assets/manifesto-2.png'} />
					</BoxImage>
				</BoxTextImage>
				<BoxTextImage>
					<Typography mt={{ xs: 3, md: 10 }}>
						Above all, beFITTER makes FitnessFi rewards sustainable via
						SocialFi. While monetary rewards attract people to get started, it's
						the variety of social experiences that make them stay. Compete with
						friends, learn from fitness idols, or train effectively with live
						sessions of global sports champions!
					</Typography>
				</BoxTextImage>
				<TitleSection>
					We go <span>carbon negative</span>
				</TitleSection>
				<BoxTextImage>
					<Typography mt={{ xs: 0, md: 1 }}>
						Being responsible citizens, we sat down and thought about a business
						model that not only makes us stand out in the market but also
						directly contributes to society.
					</Typography>
				</BoxTextImage>
				<BoxTextImage
					sx={{
						'@media (min-width: 768px)': {
							marginRight: '120px',
						},
					}}
				>
					<Typography mt={{ xs: 3, md: 20 }} mb={{ xs: 4 }}>
						A legitimate question to ask is: What if we can combine boosting
						people’s well-being with reducing the amount of carbon emitted?
						There are a bunch of great ways to repay our planet Earth including
						planting or reusing, yet the best alternative is to offset the
						carbon footprint. Yes, curb it before it’s even born.
					</Typography>
					<BoxImage xsWidth={343} mdWidth={450}>
						<img src={'assets/manifesto-3.png'} />
					</BoxImage>
				</BoxTextImage>
				<BoxTextImage>
					<Typography mt={{ xs: 4, md: 10 }}>
						This motto substantially directs how we do things. By pursuing the
						green way of living our lives, we steadily touch up our product to
						make it engaging to mass users, including the non-crypto community.
						Since everyone can choose to walk, run, or cycle instead of driving
						a vehicle, everyone can earn a profit with our app, gain more
						health, and eventually discharge less greenhouse gas to the
						environment. beFITTER prides itself on fueling people to serve the
						good cause.
					</Typography>
				</BoxTextImage>
				<TitleSection sx={{ margin: '80px 0 24px' }}>
					We respect your <span>data privacy</span>
				</TitleSection>
				<BoxTextImage>
					<Typography>
						What keeps us up at night is users’ concern about their data
						privacy. We acknowledge that information privacy is a fundamental
						right of individuals. Many even consider data secrecy the most
						serious consumer protection issue, as there is a growing number of
						cyber hacking cases that caused enormous and irreparable damage to
						the victims.
					</Typography>
				</BoxTextImage>
				<BoxTextImage>
					<BoxImage mt={{ xs: 3, md: 10 }} xsWidth={260} mdWidth={416}>
						<img src={'assets/manifesto-4.png'} />
					</BoxImage>
					<Typography mt={{ xs: 3, md: 10 }} ml={{ md: 5 }}>
						Been there, done that. We are consumers ourselves, and we insist on
						keeping our personal information private, too. Consequently, we the
						development team are determined to make every attempt to ensure the
						data shared by our users is only used for its intended purpose.
						Similar to how we aim at a sustainable economy and an everlasting
						rapport with our community, we are committed to protecting your
						data, at all costs.
					</Typography>
				</BoxTextImage>
				<TitleSection sx={{ margin: '80px 0 24px' }}>
					We prioritize <span>our community</span>
				</TitleSection>
				<BoxTextImage>
					<Typography>
						40+ people behind this project have the routine of reflecting on how
						we can elevate community engagement, from in-app experience to
						social media communication. The ultimate goal is to keep the fire
						alive among those who already love us, and among those who will
						sooner or later find us and stay with us.
					</Typography>
				</BoxTextImage>
				<BoxTextImage>
					<Typography mt={{ xs: 3, md: 10 }}>
						We’ve witnessed dozens of projects down because of not winning trust
						from their communities. beFITTER, on the other hand, is confident
						not to make the same mistake because we assembled some of the best
						talents in town who bring sanity into the game. We have you by our
						side because we’ve put in an excellent performance. It’s not an
						exaggeration. It’s a fact. The future is bright for us as we will
						continue to conquer new heights. And we are not going to trade our
						community for anything. That’s our spirit!
					</Typography>
				</BoxTextImage>
				<BoxTextImage>
					<Typography mt={{ xs: 3, md: 10 }} mb={{ xs: 3, md: 10 }}>
						We’ve witnessed dozens of projects down because of not winning trust
						from their communities. beFITTER, on the other hand, is confident
						not to make the same mistake because we assembled some of the best
						talents in town who bring sanity into the game. We have you by our
						side because we’ve put in an excellent performance. It’s not an
						exaggeration. It’s a fact. The future is bright for us as we will
						continue to conquer new heights. And we are not going to trade our
						community for anything. That’s our spirit!
					</Typography>
				</BoxTextImage>
				<BoxTextImage sx={{ justifyContent: 'center' }}>
					<BoxImage xsWidth={343} mdWidth={797}>
						<img src={'assets/manifesto-5.png'} />
					</BoxImage>
				</BoxTextImage>
			</Container>
		</HomeLayoutNew>
	);
};

export default Business;

type textImageProps = BoxProps & {
	imageLeft?: boolean;
};

type widthImage = {
	xsWidth?: number;
	mdWidth?: number;
	isMt?: boolean;
};
const BoxTextImage = styled(Box)((props: textImageProps) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	'& p': {
		...TEXT_STYLE(16, 500, '#F8F9FB'),
	},
	'& span': {
		color: '#FF6D24',
	},
	'& img': {
		// margin: '24px 0',
	},
	'@media (min-width: 768px)': {
		flexDirection: props.imageLeft ? 'row-reverse' : 'row',
		alignItems: 'flex-start',
		'& p': {
			...TEXT_STYLE(32, 600, '#F8F9FB'),
		},
		margin: '0',
	},
}));

const TitleSection = styled(Box)({
	...TEXT_STYLE(20, 600, '#F8F9FB'),
	margin: '40px 0 24px',
	'& span': {
		color: '#FF6D24',
	},
	'@media (min-width: 768px)': {
		...TEXT_STYLE(48, 600, '#F8F9FB'),
		margin: '120px 0 16px',
	},
});

const BoxImage = styled(Box)((props: widthImage) => ({
	'& img': {
		width: props.xsWidth,
		marginTop: props.isMt && '24px',
		'@media (min-width: 768px)': {
			width: props.mdWidth,
			marginTop: props.isMt && '80px',
		},
	},
}));
