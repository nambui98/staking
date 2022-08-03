import { useState } from 'react';

import Box from '@mui/system/Box';
import { CheckboxMarketplace } from '../../checkbox/CheckboxMarketplace';
import { BoxProps, styled, Typography, useMediaQuery } from '@mui/material';
import { TEXT_STYLE } from '../../../styles/common/textStyles';

const data = [
	{
		"id": "daf73f74-0706-11ed-a133-56000410d61b",
		"playerUserId": "ff5146a8-daa6-11ec-88f3-560003c6fce7",
		"name": null,
		"description": null,
		"imageLink": "https://cdn.befitter.io/nft/1-1-8-1-3-5-1-3.png",
		"modelLink": "https://cdn.befitter.io/shoes_trans/?type=1&top-form=1&top-color=8&bot-form=1&bot-color=3&mid-form=1&mid-form2=3&mid-color=5",
		"type": "SHOES",
		"info": {
			"luck": 8,
			"rare": 1,
			"type": "Daily",
			"level": 5,
			"range": 17,
			"minted": 1,
			"midForm": 1,
			"midType": 3,
			"support": 16,
			"topForm": 1,
			"baseLuck": 8,
			"midColor": 5,
			"topColor": 8,
			"baseRange": 17,
			"condition": 100,
			"bottomForm": 1,
			"durability": 10,
			"baseSupport": 16,
			"bottomColor": 3,
			"energyBonus": 0,
			"mintMaximum": 7,
			"upLevelPoints": 12,
			"baseDurability": 10
		},
		"equipped": false,
		"parent0": "bb233990-06ad-11ed-ad5e-acde48001122",
		"parent1": "bb238062-06ad-11ed-ad5e-acde48001122",
		"tokenId": 5019,
		"status": "INTERNAL",
		"progressTime": null,
		"progressTimeLeft": null,
		"mintCoolDownTimeLeft": null,
		"createdAt": "2022-07-19T02:02:34.316390Z",
		"updatedAt": "2022-07-19T02:02:34.316390Z",
		"lastSell": null,
		"internalStatus": "normal",
		"parent": null,
		"children": null,
		"sellingPriceAmount": null
	},
	{
		"id": "daf73f74-0706-11ed-a133-56000410d61b",
		"playerUserId": "ff5146a8-daa6-11ec-88f3-560003c6fce7",
		"name": null,
		"description": null,
		"imageLink": "https://cdn.befitter.io/nft/1-1-8-1-3-5-1-3.png",
		"modelLink": "https://cdn.befitter.io/shoes_trans/?type=1&top-form=1&top-color=8&bot-form=1&bot-color=3&mid-form=1&mid-form2=3&mid-color=5",
		"type": "SHOES",
		"info": {
			"luck": 8,
			"rare": 1,
			"type": "Daily",
			"level": 5,
			"range": 17,
			"minted": 1,
			"midForm": 1,
			"midType": 3,
			"support": 16,
			"topForm": 1,
			"baseLuck": 8,
			"midColor": 5,
			"topColor": 8,
			"baseRange": 17,
			"condition": 100,
			"bottomForm": 1,
			"durability": 10,
			"baseSupport": 16,
			"bottomColor": 3,
			"energyBonus": 0,
			"mintMaximum": 7,
			"upLevelPoints": 12,
			"baseDurability": 10
		},
		"equipped": false,
		"parent0": "bb233990-06ad-11ed-ad5e-acde48001122",
		"parent1": "bb238062-06ad-11ed-ad5e-acde48001122",
		"tokenId": 5012,
		"status": "INTERNAL",
		"progressTime": null,
		"progressTimeLeft": null,
		"mintCoolDownTimeLeft": null,
		"createdAt": "2022-07-19T02:02:34.316390Z",
		"updatedAt": "2022-07-19T02:02:34.316390Z",
		"lastSell": null,
		"internalStatus": "normal",
		"parent": null,
		"children": null,
		"sellingPriceAmount": null
	},
	{
		"id": "daf73f74-0706-11ed-a133-56000410d61b",
		"playerUserId": "ff5146a8-daa6-11ec-88f3-560003c6fce7",
		"name": null,
		"description": null,
		"imageLink": "https://cdn.befitter.io/nft/1-1-8-1-3-5-1-3.png",
		"modelLink": "https://cdn.befitter.io/shoes_trans/?type=1&top-form=1&top-color=8&bot-form=1&bot-color=3&mid-form=1&mid-form2=3&mid-color=5",
		"type": "SHOES",
		"info": {
			"luck": 8,
			"rare": 1,
			"type": "Daily",
			"level": 5,
			"range": 17,
			"minted": 1,
			"midForm": 1,
			"midType": 3,
			"support": 16,
			"topForm": 1,
			"baseLuck": 8,
			"midColor": 5,
			"topColor": 8,
			"baseRange": 17,
			"condition": 100,
			"bottomForm": 1,
			"durability": 10,
			"baseSupport": 16,
			"bottomColor": 3,
			"energyBonus": 0,
			"mintMaximum": 7,
			"upLevelPoints": 12,
			"baseDurability": 10
		},
		"equipped": false,
		"parent0": "bb233990-06ad-11ed-ad5e-acde48001122",
		"parent1": "bb238062-06ad-11ed-ad5e-acde48001122",
		"tokenId": 5012,
		"status": "INTERNAL",
		"progressTime": null,
		"progressTimeLeft": null,
		"mintCoolDownTimeLeft": null,
		"createdAt": "2022-07-19T02:02:34.316390Z",
		"updatedAt": "2022-07-19T02:02:34.316390Z",
		"lastSell": null,
		"internalStatus": "normal",
		"parent": null,
		"children": null,
		"sellingPriceAmount": null
	},
	{
		"id": "daf73f74-0706-11ed-a133-56000410d61b",
		"playerUserId": "ff5146a8-daa6-11ec-88f3-560003c6fce7",
		"name": null,
		"description": null,
		"imageLink": "https://cdn.befitter.io/nft/1-1-8-1-3-5-1-3.png",
		"modelLink": "https://cdn.befitter.io/shoes_trans/?type=1&top-form=1&top-color=8&bot-form=1&bot-color=3&mid-form=1&mid-form2=3&mid-color=5",
		"type": "SHOES",
		"info": {
			"luck": 8,
			"rare": 1,
			"type": "Daily",
			"level": 5,
			"range": 17,
			"minted": 1,
			"midForm": 1,
			"midType": 3,
			"support": 16,
			"topForm": 1,
			"baseLuck": 8,
			"midColor": 5,
			"topColor": 8,
			"baseRange": 17,
			"condition": 100,
			"bottomForm": 1,
			"durability": 10,
			"baseSupport": 16,
			"bottomColor": 3,
			"energyBonus": 0,
			"mintMaximum": 7,
			"upLevelPoints": 12,
			"baseDurability": 10
		},
		"equipped": false,
		"parent0": "bb233990-06ad-11ed-ad5e-acde48001122",
		"parent1": "bb238062-06ad-11ed-ad5e-acde48001122",
		"tokenId": 5012,
		"status": "INTERNAL",
		"progressTime": null,
		"progressTimeLeft": null,
		"mintCoolDownTimeLeft": null,
		"createdAt": "2022-07-19T02:02:34.316390Z",
		"updatedAt": "2022-07-19T02:02:34.316390Z",
		"lastSell": null,
		"internalStatus": "normal",
		"parent": null,
		"children": null,
		"sellingPriceAmount": null
	}
]

interface IProps {
	shoeChoose: string
	setShoeChoose: (id: string) => any
	listShoes: any[]
}

export const BoxShoes: React.FC<IProps> = ({ shoeChoose, setShoeChoose, listShoes }) => {
	const isMobile1024 = useMediaQuery('(max-width: 1023px)')

	const checkImageMint = (mint: number) => {
		switch (mint) {
			case 0: return ''
			case 1: return '1'
			case 2: return '2'
			case 3: return '3'
			case 4: return '4'
			case 5: return '5'
			case 6: return '6'
			case 7: return '7'
		}
	}

	return (
		<Wrap>
			{data?.map((item, index) => (
				!isMobile1024 ? <Item key={index} active={item.tokenId.toString() === shoeChoose}>
					<ItemLeft>
						<BoxImage>
							<img src={item.imageLink} />
							<BoxCheckBox onClick={() => setShoeChoose(shoeChoose === item.tokenId.toString() ? '' : item.tokenId.toString())}>
								<CheckboxMarketplace type='green' label='1' active={item.tokenId.toString() === shoeChoose} /></BoxCheckBox>
						</BoxImage>
						<ShoeInfo sx={{ marginLeft: '16px' }}>
							<ShoeId>#{item.tokenId.toString()}</ShoeId>
							<Box sx={{ display: 'flex' }}><ShoeType>{item?.info?.type}</ShoeType><ShowRarity>{item.info?.rare === 1 ? 'S' : item.info?.rare === 2 ? 'R' : 'I'}</ShowRarity></Box>
						</ShoeInfo>
					</ItemLeft>
					<ItemRight>
						<Box>
							<ShoeDetailsItem>
								<img src="assets/icons/triangle.svg" style={{ float: 'left', marginRight: 10 }} />
								<Box><Typography>Level</Typography><Typography>{item.info?.level}</Typography></Box>
							</ShoeDetailsItem>
							<ShoeDetailsItem>
								<img src="assets/icons/shieldGreen.svg" style={{ float: 'left', marginRight: 12 }} />
								<Box><Typography>Condition</Typography><Typography>{item.info?.condition}%</Typography></Box>
							</ShoeDetailsItem>
							<ShoeDetailsItem>
								<img src={`assets/icons/shoeMint${checkImageMint(item.info?.minted)}.svg`} style={{ float: 'left', marginRight: 8 }} />
								<Box><Typography>Shoe Mint</Typography><Typography>{item.info?.minted}/7</Typography>
								</Box>
							</ShoeDetailsItem>
						</Box>

						<Box sx={{ flex: 1 }}>
							<AttrItem><img src="assets/icons/batteryFull.svg" /><AttrValue>{item.info?.energyBonus}</AttrValue></AttrItem>
							<AttrItem><img src="assets/icons/shieldTick.svg" /><Process process={`${item.info?.durability}%`}></Process><AttrValue>{item.info?.durability}</AttrValue></AttrItem>
							<AttrItem><img src="assets/icons/settingOrange.svg" /><Process process={`${item.info?.support}%`}></Process><AttrValue>{item.info?.support}</AttrValue></AttrItem>
							<AttrItem><img src="assets/icons/magicStar.svg" /><Process process={`${item.info?.luck}%`}></Process><AttrValue>{item.info?.luck}</AttrValue></AttrItem>
							<AttrItem><img src="assets/icons/routeSquare.svg" /><Process process={`${item.info?.range}%`}></Process><AttrValue>{item.info?.range}</AttrValue></AttrItem>
						</Box>
					</ItemRight>
				</Item> :
					<Item key={index} active={item.tokenId.toString() === shoeChoose} onClick={() => setShoeChoose(shoeChoose === item.tokenId.toString() ? '' : item.tokenId.toString())}>
						<ItemLeft>
							<BoxImage>
								<img src={item.imageLink} />
							</BoxImage>
							<ShoeId>#{item.tokenId.toString()}</ShoeId>
						</ItemLeft>
						<ItemRight>
							<Box sx={{ display: 'flex', marginBottom: isMobile1024 ? '8px' : 0 }}>
								<ShoeType>{item?.info?.type}</ShoeType><ShowRarity>{item.info?.rare === 1 ? 'S' : item.info?.rare === 2 ? 'R' : 'I'}</ShowRarity>
							</Box>
							<Box>
								<ShoeDetailsItem>
									<img src="assets/icons/triangle.svg" style={{ float: 'left'}} />
									<Box><Typography>{item.info?.level}</Typography></Box>
								</ShoeDetailsItem>
								<ShoeDetailsItem>
									<img src="assets/icons/shieldGreen.svg" style={{ float: 'left'}} />
									<Box><Typography>{item.info?.condition}%</Typography></Box>
								</ShoeDetailsItem>
								<ShoeDetailsItem>
									<img src={`assets/icons/shoeMint${checkImageMint(item.info?.minted)}.svg`} style={{ float: 'left'}} />
									<Box><Typography>{item.info?.minted}/7</Typography>
									</Box>
								</ShoeDetailsItem>
							</Box>
							<Box sx={{ flex: 1 }}>
								<AttrItem><img src="assets/icons/batteryFull.svg" /><AttrValue>{item.info?.energyBonus}</AttrValue></AttrItem>
								<AttrItem><img src="assets/icons/shieldTick.svg" /><AttrValue>{item.info?.durability}</AttrValue></AttrItem>
								<AttrItem><img src="assets/icons/settingOrange.svg" /><AttrValue>{item.info?.support}</AttrValue></AttrItem>
								<AttrItem><img src="assets/icons/magicStar.svg" /><AttrValue>{item.info?.luck}</AttrValue></AttrItem>
								<AttrItem><img src="assets/icons/routeSquare.svg" /><AttrValue>{item.info?.range}</AttrValue></AttrItem>
							</Box>
						</ItemRight>
					</Item>

			))}
		</Wrap>
	);
}

const Wrap = styled(Box)({
	maxHeight: 465,
	overflow: 'auto',
	marginTop: 8,
	'@media (min-width: 768px)': {
		marginTop: 0,
		paddingRight: 10,
		'&::-webkit-scrollbar': {
			width: 4,
		},
		'&::-webkit-scrollbar-track': {
			background: '#E9EAEF',
			borderRadius: 10
		},
		'&::-webkit-scrollbar-thumb': {
			background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
			borderRadius: 10
		},
		'&::-webkit-scrollbar-thumb:hover': {
			background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)'
		}
	}
})

type itemProps = BoxProps & {
	active: boolean
}
const Item = styled(Box)((props: itemProps) => ({
	display: 'flex',
	marginBottom: 16,
	padding: '17px',
	background: props.active ? '#FFE2D3' : 'transparent',
	borderRadius: 16,
	'@media (max-width: 1023px)': {
		alignItems: 'center',
	},
	'@media (max-width: 767px)': {
		padding: 8,
	}
}))

const ItemLeft = styled(Box)({
	'@media (min-width: 1024px)': {
		display: 'flex',
		marginRight: 90,
	}
})

const ItemRight = styled(Box)({
	'@media (min-width: 1024px)': {
		display: 'flex',
		flex: '1',
	},
	'@media (max-width: 1023px)': {
		marginLeft: 'auto',
		'& > div': {
			display: 'flex',
			justifyContent: 'right'
		}
	}
})
const BoxImage = styled(Box)({
	position: 'relative',
	'& img': {
		width: 72,
		'@media (min-width: 768px)': {
			width: 124
		}
	}
})
const BoxCheckBox = styled(Box)({
	position: 'absolute',
	top: 0,
	left: 0,
	width: 26,
	height: 26,
	cursor: 'pointer',
})
const ShoeInfo = styled(Box)({

})
const ShoeType = styled(Typography)({
	...TEXT_STYLE(14, 600, '#FFF'),
	padding: '4px 12px',
	borderRadius: '12px',
	backgroundColor: '#FF6D24',
	marginRight: '8px',
	textTransform: 'capitalize',
})
const ShowRarity = styled(Typography)({
	...TEXT_STYLE(14, 700, '#fff'),
	padding: '4px 10px',
	backgroundColor: '#FF6F61',
	fontStyle: 'italic',
	borderRadius: 12,
	textDecoration: 'underline',
})
const ShoeId = styled(Typography)({
	...TEXT_STYLE(14, 700, '#31373E'),
	'@media (min-width: 1024px)': {
		...TEXT_STYLE(16, 700, '#31373E'),
		marginBottom: 8,
	}
})
const ShoeDetailsItem = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	marginBottom: 8,
	marginRight: 8,
	'& img': {
		marginRight: 4,
		maxWidth: 26,
		'@media (min-width: 1024px)': {
			marginRight: 8
		}
	},
	'& div': {
		'& p:first-of-type': {
			...TEXT_STYLE(12, 500, '#5A6178'),
			lineHeight: '18px',
		},
		'& p:last-of-type': {
			...TEXT_STYLE(14, 700, '#31373E'),
			lineHeight: '20px',
		}
	},
	'@media (min-width: 1024px)': {
		marginRight: 80,
	}
})
const AttrItem = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: '8px',
	alignItems: 'center',
	'@media (max-width: 1023px)': {
		alignItems: 'center',
		marginRight: 8,
		'&:last-of-type': {
			marginRight: 0
		}
	}
})
const AttrValue = styled(Typography)({
	...TEXT_STYLE(12, 500, '#5A6178'),
	marginLeft: 4,
	lineHeight: 0,
	'@media (min-width: 1024px)': {
		marginLeft: 16,
		lineHeight: '20px'
	}
})
type processProps = BoxProps & {
	process: string
}
const Process = styled(Box)((props: processProps) => ({
	height: '4px',
	background: '#FF6D24',
	width: props.process,
	margin: '0 auto 0 16px',
	borderRadius: '2px',
}))