import { useState } from 'react';

import Box from '@mui/system/Box';
import { CheckboxMarketplace } from '../../checkbox/CheckboxMarketplace';
import { BoxProps, styled, Typography } from '@mui/material';
import { TEXT_STYLE } from '../../../styles/common/textStyles';

const data = [
	{
		shoeImage: 'assets/shoes/imageSuccess.png',
		shoeId: '#R224206',
		rarity: 's',
		shoeType: 'daily',
		level: 2,
		condition: 89,
		shoeMint: 1,
		durability: 10,
		support: 20,
		luck: 30,
		range: 100,
		energy: 100
	},
	{
		shoeImage: 'assets/shoes/imageSuccess.png',
		shoeId: '#R224205',
		rarity: 's',
		shoeType: 'daily',
		level: 2,
		condition: 89,
		shoeMint: 2,
		durability: 1,
		support: 1,
		luck: 1,
		range: 1,
		energy: 100
	},
	{
		shoeImage: 'assets/shoes/imageSuccess.png',
		shoeId: '#R224204',
		rarity: 's',
		shoeType: 'daily',
		level: 2,
		condition: 89,
		shoeMint: 3,
		durability: 1,
		support: 1,
		luck: 1,
		range: 1,
		energy: 100
	}
]

interface IProps {
	shoeChoose: string
	setShoeChoose: (id: string) => any
}

export const BoxShoes: React.FC<IProps> = ({ shoeChoose, setShoeChoose }) => {
	const [check, setCheck] = useState<number>(0);

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
				<Item key={index} active={item.shoeId === shoeChoose}>
					<ItemLeft>
						<BoxImage>
							<img src={item.shoeImage} />
							<BoxCheckBox onClick={() => setShoeChoose(shoeChoose === item.shoeId ? '' : item.shoeId)}>
								<CheckboxMarketplace type='green' label='1' active={item.shoeId === shoeChoose} /></BoxCheckBox>
						</BoxImage>
						<ShoeInfo sx={{ marginLeft: '16px' }}>
							<ShoeId>{item.shoeId}</ShoeId>
							<Box sx={{ display: 'flex' }}><ShoeType>{item.shoeType}</ShoeType><ShowRarity>{item.rarity}</ShowRarity></Box>
						</ShoeInfo>
					</ItemLeft>
					<ItemRight>
						<Box>
							<ShoeDetailsItem>
								<img src="assets/icons/triangle.svg" style={{ float: 'left', marginRight: 10 }} />
								<Box><Typography>Level</Typography><Typography>{item.level}</Typography></Box>
							</ShoeDetailsItem>
							<ShoeDetailsItem>
								<img src="assets/icons/shieldGreen.svg" style={{ float: 'left', marginRight: 12 }} />
								<Box><Typography>Condition</Typography><Typography>{item.condition}%</Typography></Box>
							</ShoeDetailsItem>
							<ShoeDetailsItem>
								<img src={`assets/icons/shoeMint${checkImageMint(item.shoeMint)}.svg`} style={{ float: 'left', marginRight: 8 }} />
								<Box><Typography>Shoe Mint</Typography><Typography>{item.shoeMint}/7</Typography>
								</Box>
							</ShoeDetailsItem>
						</Box>

						<Box sx={{ flex: 1 }}>
							<AttrItem>
								<img src="assets/icons/batteryFull.svg" />
								<AttrValue>{item.energy}</AttrValue>
							</AttrItem>
							<AttrItem>
								<img src="assets/icons/shieldTick.svg" />
								<Process process={`${item.durability}%`}></Process>
								<AttrValue>{item.durability}</AttrValue>
							</AttrItem>
							<AttrItem>
								<img src="assets/icons/settingOrange.svg" />
								<Process process={`${item.support}%`}></Process>
								<AttrValue>{item.support}</AttrValue>
							</AttrItem>
							<AttrItem>
								<img src="assets/icons/magicStar.svg" />
								<Process process={`${item.luck}%`}></Process>
								<AttrValue>{item.luck}</AttrValue>
							</AttrItem>
							<AttrItem>
								<img src="assets/icons/routeSquare.svg" />
								<Process process={`${item.range}%`}></Process>
								<AttrValue>{item.range}</AttrValue>
							</AttrItem>
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
	paddingRight: 10,
	'@media (min-width: 768px)': {
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
}))

const ItemLeft = styled(Box)({
	display: 'flex',
	marginRight: 90
})

const ItemRight = styled(Box)({
	display: 'flex',
	flex: '1'
})
const BoxImage = styled(Box)({
	position: 'relative',
	'& img': {
		width: 124
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
	...TEXT_STYLE(16, 700, '#31373E'),
	marginBottom: 8
})
const ShoeDetailsItem = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	marginRight: 80,
	marginBottom: 8,
	'& img': {
		maxWidth: 26
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
	}
})
const AttrItem = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: '8px',
	alignItems: 'center',
})
const AttrValue = styled(Typography)({
	...TEXT_STYLE(12, 500, '#5A6178'),
	marginLeft: 16
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