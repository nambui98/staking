import React from 'react';
import Link from 'next/link';
import {
	Box,
	Container,
	Stack,
	Grid,
	Typography,
	InputBase,
	Button,
	Icon,
	IconButton,
	InputLabel,
	Theme,
	styled,
	useMediaQuery,
} from '@mui/material';
// import BounceIconButton from '../buttons/BounceIconButton';
import { SOCIAL } from '../../constants/common';
import BounceIconButton from '../../components/buttons/BounceIconButton';
import MainFooter from '../../components/footers/MainFooter';
import { TEXT_STYLE } from '../../styles/common/textStyles';

import AppStoreButtonNew from '../../components/buttons/AppStoreButtonNew';
import AppStoreButtonNew2 from '../../components/buttons/AppStoreButtonNew2';
import { IconImage } from '../../components/styled';
import { EMAIL, ICON } from '../../constants/footer';
const MenuItem = styled(Box)({
	// padding: '0px 12px',
	// borderRadius: '12px',
	// marginRight: 16,
	...TEXT_STYLE(14, 500, '#FFF'),
	fontFamily: 'BeVietnamPro',
	textTransform: 'uppercase',
	color: '#FFF',
	cursor: 'pointer',
	overflow: 'hidden',
	transition: 'all .4s',
	'& div': {
		transition: 'all .3s',
		'&:last-child': {
			opacity: 0,
			position: 'absolute',
		}

	},

	'&:hover div': {
		transform: "translateY(-100%)",
		color: '#FF6D24',
		'&:last-child': {
			opacity: 1,
		},
		'&:first-child': {
			opacity: 0,
		}
	},

})
const ButtonItem = styled(Grid)({
	'@media (max-width: 767px)': {
		paddingLeft: '0 !important',
		paddingTop: '0 !important',
		// width: 193,
		// marginBottom: 16,
		maxWidth: 'initial',
	}
})
export const APP = {
	POSTER: 'assets/home-app.png',
	SUBTITLE: 'Make healthy lifestyle',
	TITLE: 'irresistible',
	TITLE_BG: 'assets/backgrounds/home-app.png',
	DESC: 'beFITTER is a web3 fitnessfi and socialfi app that aims to build a healthier ecosystem helping users balance their life, improve mental & physical health, gain achievements and still get monetary incentives.',
	BUTTON: [
		{
			subtitle0: 'Coming soon',
			subtitle: 'Download on',
			title: 'App Store',
			icon: 'assets/icons/apple.svg',
			href: 'https://testflight.apple.com/join/7ZprWPng',
		},
		{
			subtitle0: 'Coming soon',
			subtitle: 'Download on',
			title: 'Google Play',
			icon: 'assets/logo/gplay.png',
			href: 'https://play.google.com/store/apps/details?id=io.befitter.app',
		},
		{
			subtitle0: 'Coming soon',
			subtitle: 'Download for',
			title: 'Wearable',
			icon: 'assets/logo/watch.svg',
			href: '',
		},
	],
};
const MAIN_FOOTER = [
	{ title: 'STAKING', link: '/staking' },
	{ title: 'HUB', link: 'https://hub.befitter.io/claim' },
	{ title: 'BUSINESS PAGE', link: '/business' },
	{ title: 'MANIFESTO', link: '' },
	{ title: 'WHITEPAPER', link: 'https://whitepaper.befitter.io/' },
]
const StayInTouch: React.FC<any> = ({ sxProps }) => {
	const isSm = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down('md')
	);

	return (

		<Stack
			justifyContent="center"
			alignItems="center"
			spacing={{ xs: 2, md: 3 }}

		// sx={{ background: '#F8F9FB', py: { xs: 5, md: 10 }, ...sxProps }}
		>
			<img src={'assets/logo/02.png'} alt="Logo" width={'226px'} style={{ marginBottom: "20px" }} />
			{/* <Typography
				fontSize={{ xs: 24, sm: 24 }}
				// fontStyle="italic"
				fontWeight="600"
				color="#fff"
				align="center"
				px={2}
			>
				Stay in touch with  <span className='text_gadient_primary'>beFITTER</span>
			</Typography> */}
			<Stack sx={{ display: 'flex', flexDirection: { xs: "column", sm: 'row' }, gap: { xs: 3, sm: 7 } }} alignItems="center">
				{MAIN_FOOTER?.map((item: any, index) => (
					<Link href={item.link}>
						<MenuItem key={index} onClick={() => { }}>
							<div>{item.title}</div>
							<div>{item.title}</div>
						</MenuItem></Link>
				))}
			</Stack>
			{
				!isSm && (
					<>

						<Stack direction="row" spacing={7} alignItems="center">
							{SOCIAL.map(({ icon, iconActive, href }, idx) => (
								<BounceIconButton
									key={idx}
									href={href}
									icon={icon}
									iconActive={iconActive}
								/>
							))}
						</Stack>

					</>
				)
			}

			{
				isSm && (

					<Grid container justifyContent="center" rowSpacing={1}>
						{SOCIAL.map(({ icon, iconActive, href }, idx) => (
							<Grid item xs={3} key={idx}>
								<Stack alignItems="center">
									<BounceIconButton
										href={href}
										icon={icon}
										iconActive={iconActive}

									/>
								</Stack>
							</Grid>
						))}
					</Grid>
				)
			}
			{/* <Grid container justifyContent="center" rowSpacing={1}>
				{SOCIAL.map(({ icon, iconActive, href }, idx) => (
					<Grid item xs={3} key={idx}>
						<Stack alignItems="center">
							<BounceIconButton
								href={href}
								icon={icon}
								iconActive={iconActive}

							/>
						</Stack>
					</Grid>
				))}
			</Grid> */}
			<Stack direction="row" spacing={{ xs: 0, sm: 7 }} sx={{ gap: 3 }} alignItems="center" justifyContent="center" flexWrap={"wrap"}>
				{APP.BUTTON.map((el, idx) => (
					<ButtonItem key={idx} item >
						<AppStoreButtonNew2
							background={idx === 2}
							disabled={!el.href}
							subtitle={el.href ? el.subtitle : el.subtitle0}
							title={el.title}
							icon={el.icon}
							href={el.href}
						/>
					</ButtonItem>
				))}
			</Stack>
		</Stack >
	);
};

const Section9: React.FC<any> = ({ sxProps }) => {

	return (
		<Box sx={{

			// background: '#F8F9FB',
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			position: 'relative',
			mt: {
				xs: '0', sm: '0px'
			}

		}}>
			<Box sx={{ position: 'relative', marginTop: 'auto', display: 'flex', justifyContent: 'center', marginBottom: { xs: 1, sm: '40px' }, mt: { xs: "24px", sm: "40px" }, columnGap: '20px' }}>
				{/* <Box sx={{
					height: '495px',
					// width: '100%',
					display: { xs: 'none', md: 'block' }
				}}>

					<img height={"100%"} style={{ objectFit: 'contain' }} width="100%" src="assets/sec9.png" />
				</Box> */}
				<StayInTouch />
			</Box >
			{/* <MainFooter /> */}
			<Box
				component={'footer'}
				sx={{
					position: 'relative',
				}}
			>
				<Container >
					<Box
						sx={{ width: '100%', height: 1.5, background: '#4E5472', mb: 2, mt: { xs: 2, sm: 0 } }}
					></Box>
					<Box display='flex' alignItems={"center"} flexDirection={{ xs: 'column', sm: 'row' }} rowGap={{ xs: 2, sm: 0 }} mb={3}>

						<Typography fontSize={14} color="#fff" mr={{ xs: '0px', sm: "auto" }}>
							Copyright @2022 beFITTER
						</Typography>
						<Box
							display={'flex'}
							alignItems="center"
							mr={2}
						>
							<Icon >
								<IconImage src={ICON.SMS} />
							</Icon>
							<Typography
								fontSize={16}
								color="#fff"
								// pt={.25}
								ml={1}
							>
								{EMAIL}
							</Typography>
						</Box>
						<Typography fontSize={16} color="#fff" >
							Contact support
						</Typography>
					</Box>
				</Container >
			</Box >
		</Box >

	)
}

export default Section9;
