import { useState } from 'react';

import Box from '@mui/system/Box';
import { CheckboxMarketplace } from '../../checkbox/CheckboxMarketplace';
import { BoxProps, styled, Typography, useMediaQuery } from '@mui/material';
import { TEXT_STYLE } from '../../../styles/common/textStyles';
import { BoxEmpty } from './BoxEmpty';
import { ICON } from '../../../constants/assetsWallet';
import { formatMoney } from '../../../libs/utils/utils';

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

	console.log(listShoes)

	return (
		<Wrap sx={{ maxHeight: listShoes?.length ? '465px' : 'auto' }}>
			{listShoes?.length ? listShoes?.map((item, index) => item ? (

				!isMobile1024 ? <Item key={index} active={`${item.tokenId}` === shoeChoose}>
					<ItemLeft>
						<BoxImage>
							<img src={item.imageLink} />
							<BoxCheckBox onClick={() => setShoeChoose(shoeChoose === `${item.tokenId}` ? '' : `${item.tokenId}`)}>
								<CheckboxMarketplace type='green' label='1' active={`${item.tokenId}` === shoeChoose} /></BoxCheckBox>
						</BoxImage>
						<ShoeInfo sx={{ marginLeft: '16px' }}>
							<ShoeId>#{`${item.tokenId}`}</ShoeId>
							<Box sx={{ display: 'flex' }}><ShoeType>{item?.info?.type}</ShoeType><ShowRarity>{item.info?.rare === 1 ? 'S' : item.info?.rare === 2 ? 'R' : 'I'}</ShowRarity></Box>
						</ShoeInfo>
					</ItemLeft>
					<ItemRight>
						<Box sx={{ minWidth: '126px' }}>
							<ShoeDetailsItem>
								<img src="assets/icons/triangle.svg" style={{ float: 'left' }} />
								<Box><Typography>Level</Typography><Typography>{item.info?.level}</Typography></Box>
							</ShoeDetailsItem>
							<ShoeDetailsItem>
								<img src="assets/icons/shieldGreen.svg" style={{ float: 'left' }} />
								<Box><Typography>Condition</Typography><Typography>{formatMoney(item.info?.condition, 0)}%</Typography></Box>
							</ShoeDetailsItem>
							<ShoeDetailsItem>
								<img src={`assets/icons/shoeMint${checkImageMint(item.info?.minted)}.svg`} style={{ float: 'left' }} />
								<Box><Typography>Shoe Mint</Typography><Typography>{item.info?.minted}/7</Typography>
								</Box>
							</ShoeDetailsItem>
						</Box>

						<BoxAttr>
							<AttrItem><img src="assets/icons/batteryFull.svg" /><AttrValue>{item.info?.energyBonus}</AttrValue></AttrItem>
							<AttrItem><img src="assets/icons/shieldTick.svg" /><Process process={`${item.info?.durability}%`}></Process><AttrValue>{item.info?.durability}</AttrValue></AttrItem>
							<AttrItem><img src="assets/icons/settingOrange.svg" /><Process process={`${item.info?.support}%`}></Process><AttrValue>{item.info?.support}</AttrValue></AttrItem>
							<AttrItem><img src="assets/icons/magicStar.svg" /><Process process={`${item.info?.luck}%`}></Process><AttrValue>{item.info?.luck}</AttrValue></AttrItem>
							<AttrItem><img src="assets/icons/routeSquare.svg" /><Process process={`${item.info?.range}%`}></Process><AttrValue>{item.info?.range}</AttrValue></AttrItem>
						</BoxAttr>
					</ItemRight>
				</Item> :
					<Item key={index} active={`${item.tokenId}` === shoeChoose} onClick={() => setShoeChoose(shoeChoose === `${item.tokenId}` ? '' : `${item.tokenId}`)}>
						<ItemLeft>
							<BoxImage>
								<img src={item.imageLink} />
							</BoxImage>
							<ShoeId>#{`${item.tokenId}`}</ShoeId>
						</ItemLeft>
						<ItemRight>
							<Box sx={{ display: 'flex', marginBottom: isMobile1024 ? '8px' : 0 }}>
								<ShoeType>{item?.info?.type}</ShoeType><ShowRarity>{item.info?.rare === 1 ? 'S' : item.info?.rare === 2 ? 'R' : 'I'}</ShowRarity>
							</Box>
							<Box>
								<ShoeDetailsItem>
									<img src="assets/icons/triangle.svg" style={{ float: 'left' }} />
									<Box><Typography>{item.info?.level}</Typography></Box>
								</ShoeDetailsItem>
								<ShoeDetailsItem>
									<img src="assets/icons/shieldGreen.svg" style={{ float: 'left' }} />
									<Box><Typography>{formatMoney(item.info?.condition, 0)}%</Typography></Box>
								</ShoeDetailsItem>
								<ShoeDetailsItem>
									<img src={`assets/icons/shoeMint${checkImageMint(item.info?.minted)}.svg`} style={{ float: 'left' }} />
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

			) : null) : <BoxEmpty icon={ICON.shoe} emptyText={'no shoes'} />}
		</Wrap>
	);
}

const Wrap = styled(Box)({
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

const BoxAttr = styled(Box)({
	marginLeft: 'auto',
	width: '100%',
	maxWidth: 241
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
			width: 150
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
		// marginRight: 80,
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