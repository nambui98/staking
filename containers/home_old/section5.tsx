
import { Box, Stack, styled, Theme, Typography, useMediaQuery } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
// import { BOX_IMAGE, BOX_LIST_ITEM } from "../constants/openIno";
type itemType = {
	active: string
	inActive: string
	link: string
	title: string
}
const Section5: NextPage = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(4);
	const data: itemType[] = [
		{
			active: 'assets/partners/dao2.png',
			inActive: 'assets/partners/dao.png',
			link: 'https://daomaker.com/',
			title: 'Dao maker'
		},
		{
			active: 'assets/partners/icetea_labs2.png',
			inActive: 'assets/partners/icetea_labs.png',
			link: 'https://icetea.io/',
			title: 'icetea labs'
		},
		{
			active: 'assets/partners/redkite2.png',
			inActive: 'assets/partners/redkite.png',
			link: 'https://redkite.polkafoundry.com/',
			title: 'Redkite'
		},
		{
			active: 'assets/partners/gamefi2.png',
			inActive: 'assets/partners/gamefi.png',
			link: 'https://gamefi.org/',
			title: 'Gamefi'
		},
	];
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	return (
		<Wrap sx={{
			marginTop: { xs: '88px', sm: '0px' }
			// alignItems: { xs: "center", sm: 'normal' },
			// display: 'flex',
			// justifyContent: { xs: "center", sm: 'normal' },
		}}>
			{/* <BoxOpenImage><img src={BOX_IMAGE} /></BoxOpenImage> */}
			<Box display={'flex'} mb={4} alignItems="center" flexDirection={"column"} >
				<Box display={'flex'} mb={4}
					sx={{
						alignItems: "flex-end",
						justifyContent: { xs: "center", sm: 'normal' },
						flexWrap: { xs: "wrap", sm: 'nowrap' }
					}}
				>

					<Typography
						fontSize={{ xs: 32, sm: 40 }}
						textTransform="uppercase"
						fontFamily='Electrofied'
						fontStyle={'italic'}
						fontWeight={800}
						color="#FF6D24"
						width='100%'
						textAlign={'center'}

					>
						BACKERs
					</Typography>
					<Typography
						fontSize={{ xs: 25, sm: 30 }}
						textTransform="uppercase"
						fontFamily='Electrofied'
						fontStyle={'italic'}
						fontWeight={800}
						color="#31373E"
						mr={{ xs: 1, sm: 2 }}
						ml={{ xs: 1, sm: 2 }}
					>
						&
					</Typography>
					<Typography
						fontSize={{ xs: 32, sm: 40 }}
						textTransform="uppercase"
						fontFamily='Electrofied'
						fontStyle={'italic'}
						fontWeight={800}
						color="#FF6D24"

					>
						PARTNERs
					</Typography>
				</Box>

				<Box display={'flex'} alignItems={'center'} sx={
					{

						backgroundImage: { xs: 'none', sm: `url(assets/bg_sec5.png)` },
						// height: '100%',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
						height: { xs: '100%', sm: '128px' },
						width: '100%',
						pr: 4,
						pl: 4,
						flexDirection: { xs: 'column', sm: 'row' }
					}


				}>
					{
						data.map((item: itemType, index: number) => {
							return <a href={item.link} target="_blank" title={item.title} style={{
								cursor: "pointer",

							}} key={index} onMouseEnter={() => {

								setActiveIndex(index)

							}} onMouseLeave={() => {
								setActiveIndex(null)


							}}>
								<BoxImage p={{ xs: 2, sm: 4 }}>
									{
										activeIndex == index ?
											<img height={'48px'} src={item.active} />
											: <img height={'48px'} src={item.inActive} />
									}
								</BoxImage>
							</a>
						})
					}


				</Box >
			</Box >
		</Wrap >
	)
}

export default Section5;

const Wrap = styled(Stack)({
	padding: '0 16px',
	maxWidth: '1120px',
	margin: '29px auto 50px',

	// '@media (min-width: 560px)': {
	// 	margin: '29px auto 80px',
	// }
})

const BoxImage = styled(Box)({
	cursor: 'pointer'
})
const ListBox = styled(Stack)({
	justifyContent: 'space-between',
	flexDirection: 'row',
	flexWrap: 'wrap',
})
const BoxItem = styled(Box)({
	textAlign: 'center',
	width: '100%',
	marginBottom: '30px',
	'@media (min-width: 560px)': {
		width: 'calc(50% - 30px)',
	},
	'@media (min-width: 992px)': {
		width: 'calc(25% - 16px)',
		marginBottom: '0'
	},
	'& img': {
		width: '68%',
		'@media (min-width: 560px)': {
			width: '60%',
			marginBottom: '23px',
		},
		'@media (min-width: 992px)': {
			width: '100%',
		},
	}
})
const BoxItemBody = styled(Typography)({
	'&, & a': {
		fontSize: '16px',
		fontWeight: '500',
		color: '#31373E',
		textAlign: 'center',
		lineHeight: '1.4'
	},
	'& a': {
		textDecoration: 'underline',
	}
})