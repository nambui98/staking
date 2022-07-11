import { Box, styled, Typography } from "@mui/material"
import { BUSINESS_IMAGE, BUSINESS_TOKEN } from "../../constants/business"
import { TEXT_STYLE } from "../../styles/common/textStyles"

export const Section5 = () => {
	return (
		<Wrap>
			<Box sx={flex}>
				<Title>
					{/* <Typography sx={{ background: 'linear-gradient(180deg, #8AFFC5 6.58%, #1DB167 80.6%)' }}>Health Token</Typography>
					<Typography>&</Typography> */}
					<Typography sx={{ background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)', textTransform: 'uppercase' }}>Profit Sharing</Typography>
				</Title>
				{/* <img src={BUSINESS_IMAGE.tokenDouble} /> */}
			</Box>
			<SubTitle>50% of beFITTER revenue, excluding the tokens in burning mechanism, would be circulated directly back to the ecosystem funds or used to buy back tokens. The tokens is used for profit sharing, dividing into different usages:</SubTitle>

			<Details sx={{ '& span': { color: '#FF6D24' }, lineHeight: { xs: "22px", md: "72px" }, marginTop: { xs: "32px", md: "80px" } }}>  <Typography sx={{ lineHeight: "64px" }}> <span style={{ color: '#FF6D24' }}>NFT Airdrop and Rewards pool</span> - replenish FitnessFi and SocialFi prize pool and NFT airdrop, enabling the incentive program to continue.</Typography></Details>

			<Details sx={{ '& span': { color: '#FF6D24' }, lineHeight: { xs: "22px", md: "72px" }, marginTop: { xs: "32px", md: "80px" } }}>  <Typography sx={{ lineHeight: "64px" }}> <span style={{ color: '#FF6D24' }}>Staking Fund </span> – $FIU holders that stake tokens in beFITTER hub or provide liquidity to DEX liquidity pools earn a staking yield. Check out the beFITTER staking Pool Roadmap here.</Typography></Details>
			<Details sx={{ '& span': { color: '#FF6D24' }, lineHeight: { xs: "22px", md: "72px" }, marginTop: { xs: "32px", md: "80px" } }}>  <Typography sx={{ lineHeight: "64px" }}> <span style={{ color: '#FF6D24' }}>Locking Liquidity</span> - contribution to the DEX liquidity pool, which is locked in 01 year, to increase the tradable liquidity and promote a healthy secondary market.</Typography></Details>
			<Details sx={{ '& span': { color: '#FF6D24' }, lineHeight: { xs: "22px", md: "72px" }, marginTop: { xs: "32px", md: "80px" } }}>  <Typography sx={{ lineHeight: "64px" }}> <span style={{ color: '#FF6D24' }}>Token Burning Events</span> – Burning events occur on a regular basis, initially set at once per quarter but subject to community vote.</Typography></Details>

		</Wrap>
	)
}

const flex = {
	display: 'flex', align: 'center', justifyContent: 'space-between'
}
const BorderGreen = styled(Box)({
	height: 3,
	background: 'radial-gradient(100% 6987211.78% at 100% 99.95%, rgba(29, 178, 104, 0) 0%, #1DB268 51.04%, rgba(29, 178, 104, 0) 100%)',
	width: '100%',
	marginLeft: 30
})
const BorderOrange = styled(Box)({
	height: 3,
	background: 'radial-gradient(100% 6987211.78% at 100% 99.95%, rgba(255, 109, 36, 0) 0%, #FF6D24 51.04%, rgba(255, 109, 36, 0) 100%)',
	width: '100%',
	marginLeft: 30
})
const Wrap = styled(Box)({
	paddingBottom: 40,
	backgroundImage: `url(assets/backgrounds/bg_sec5_bs.png)`,
	// height: '100%',
	backgroundPosition: 'bottom',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'contain',
	'@media (min-width: 768px)': {
		paddingBottom: 120
	}
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
		fontFamily: 'Electrofied',
	},
	'& p:nth-child(2)': {
		...TEXT_STYLE(16, 600, '#ffffff'),
		'@media (min-width: 768px)': {
			...TEXT_STYLE(48, 600, '#ffffff'),
		}
	}
})
const SubTitle = styled(Typography)({
	...TEXT_STYLE(20, 600),
	lineHeight: '72px',
	// marginBottom: 24,
	'@media (min-width: 768px)': {
		...TEXT_STYLE(48, 600),
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