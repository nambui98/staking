import { Box, styled, Typography, useMediaQuery } from "@mui/material"
import { BUSINESS_IMAGE, BUSINESS_TOKEN } from "../../constants/business"
import { TEXT_STYLE } from "../../styles/common/textStyles"

export const Section4 = () => {
	const isMobile = useMediaQuery('(max-width: 767px)');
	return (
		<Wrap>
			{
				isMobile ?
					<Box sx={{ ...flex, alignItems: 'center', flexWrap: "wrap", columnGap: "16px" }}>
						<Title >
							<Typography sx={{ background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)', textTransform: 'uppercase', fontFamily: 'Electrofied !important' }}>Burning</Typography>

						</Title>

						<Title>
							<Typography sx={{ background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)', textTransform: 'uppercase', fontFamily: 'Electrofied !important' }}>  mechanism</Typography>
						</Title>
						<img height={"280px"} src="assets/backgrounds/fire_sec4.png" />
					</Box> : <Box sx={{ ...flex, alignItems: 'center' }}>
						<Title>
							<Typography sx={{ background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)', textTransform: 'uppercase', fontFamily: 'Electrofied !important' }}>Burning</Typography>

						</Title>

						<img height={"560px"} src="assets/backgrounds/fire_sec4.png" />
						<Title>
							<Typography sx={{ background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)', textTransform: 'uppercase', fontFamily: 'Electrofied !important' }}>mechanism</Typography>
						</Title>
					</Box>
			}
			<SubTitle sx={{ fontSize: { xs: "20px", sm: '48px' }, lineHeight: { xs: "30px", sm: '72px' } }}>A portion of the revenue in tokens are permanently destroyed via token burning. This immediately reduces the total supply of tokens.</SubTitle>
			<Box sx={{ ...flex, justifyContent: "space-between", marginTop: { xs: "32px", md: "80px" }, flexDirection: { xs: "column", sm: "row" } }}>
				<Box>
					<Title sx={{}}>
						<Typography sx={{ background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)', textTransform: 'uppercase', fontWeight: "900", fontSize: { xm: "24px !important", sm: '48px !important' } }}>$FIU TOKEN</Typography>
					</Title>
					<TitleText sx={{ textTransform: 'uppercase', fontSize: { xm: "24px !important", sm: '32px !important' } }}></TitleText>
					<Details sx={{ '& span': { color: '#FF6D24' }, lineHeight: { xs: "22px", md: "64px" }, marginTop: { xs: "16px", md: "0px" } }}>  <Typography sx={{ lineHeight: { xs: "22px", sm: "64px" } }}>  25% Minting fee in $FIU </Typography></Details>
					<Details sx={{ '& span': { color: '#FF6D24' }, lineHeight: { xs: "22px", md: "64px" }, marginTop: { xs: "16px", md: "0px" } }}>  <Typography sx={{ lineHeight: { xs: "22px", sm: "64px" } }}>  25% Leveling up fee in $FIU </Typography></Details>
					<Details sx={{ '& span': { color: '#FF6D24' }, lineHeight: { xs: "22px", md: "64px" }, marginTop: { xs: "16px", md: "0px" } }}>  <Typography sx={{ lineHeight: { xs: "22px", sm: "64px" } }}>  25% Challenge rewards pool </Typography></Details>
					<Details sx={{ '& span': { color: '#FF6D24' }, lineHeight: { xs: "22px", md: "64px" }, marginTop: { xs: "16px", md: "0px" } }}>  <Typography sx={{ lineHeight: { xs: "22px", sm: "64px" } }}>  1% of NFT Renting Rewards </Typography></Details>
				</Box>
				<Box sx={{ alignSelf: { xs: 'flex-end', sm: "auto" }, mt: "24px", '& p': {textAlign: 'right'}}}>
					<Title>
						<Typography sx={{ background: 'linear-gradient(180deg, #8AFFC5 6.58%, #1DB167 80.6%)', textTransform: 'uppercase', fontWeight: "900", fontSize: { xm: "24px !important", sm: '48px !important' } }}>$HEE Token</Typography>
					</Title>
					<TitleText sx={{ textTransform: 'uppercase', fontSize: { xm: "24px !important", sm: '32px !important' } }}></TitleText>
					<Details sx={{ '& span': { color: '#FF6D24' }, lineHeight: { xs: "22px", md: "64px" }, marginTop: { xs: "16px", md: "0px" } }}>  <Typography sx={{ lineHeight: { xs: "22px", sm: "64px" } }}>  25% Minting fee in $HEE </Typography></Details>
					<Details sx={{ '& span': { color: '#FF6D24' }, lineHeight: { xs: "22px", md: "64px" }, marginTop: { xs: "16px", md: "0px" } }}>  <Typography sx={{ lineHeight: { xs: "22px", sm: "64px" } }}>  25% Leveling up fee in $HEE </Typography></Details>
					<Details sx={{ '& span': { color: '#FF6D24' }, lineHeight: { xs: "22px", md: "64px" }, marginTop: { xs: "16px", md: "0px" } }}>  <Typography sx={{ lineHeight: { xs: "22px", sm: "64px" } }}>  25% Repairing fee </Typography></Details>
				</Box>
			</Box>
		</Wrap >
	)
}

const flex = {
	display: 'flex', justifyContent: 'center',
}

const Wrap = styled(Box)({
	paddingBottom: 40,


	'@media (min-width: 768px)': {
		paddingBottom: 120
	}
})
const TitleText = styled(Typography)({
	background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	fontWeight: "900"
	// fontFamily: 'Electrofied',
})
const Title = styled(Box)({
	'& p': {
		...TEXT_STYLE(24, 700),
		'@media (min-width: 768px)': {
			...TEXT_STYLE(80, 700),
		}
	},
	'& p:first-of-type, & p:last-of-type': {
		'-webkit-background-clip': 'text',
		'-webkit-text-fill-color': 'transparent',
		// fontFamily: 'Electrofied',
	},
	'& p:nth-child(2)': {
		...TEXT_STYLE(16, 600, '#ffffff'),
		'@media (min-width: 768px)': {
			...TEXT_STYLE(48, 600, '#ffffff'),
		}
	}
})
const SubTitle = styled(Typography)({
	...TEXT_STYLE(20, 600, '#ffffff'),
	lineHeight: '72px',
	// marginBottom: 24,
	marginTop: 20,
	'@media (min-width: 768px)': {
		...TEXT_STYLE(48, 600, '#ffffff')
		// marginBottom: 80
	}
})
const Details = styled(Box)({
	'& p': {
		...TEXT_STYLE(16, 500, '#ffffff'),
		marginBottom: 4,
		'@media (min-width: 768px)': {
			...TEXT_STYLE(32, 500, '#ffffff'),
		}
	},
	'& span': {
		...TEXT_STYLE(16, 700, '#1DB268'),
		'@media (min-width: 768px)': {
			...TEXT_STYLE(32, 700, '#1DB268'),
		}
	}
})
const Body = styled(Box)({
	marginTop: 24,
	'@media (min-width: 768px)': {
		marginTop: 80
	},
	'& p': {
		...TEXT_STYLE(16, 500, '#ffffff'),
		'@media (min-width: 768px)': {
			...TEXT_STYLE(32, 500, '#ffffff'),
			marginBottom: 25,
		}
	}
})