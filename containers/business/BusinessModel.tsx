import { Box, Stack, styled, Typography, useMediaQuery } from '@mui/material';
import { BUSINESS_IMAGE, BUSINESS_MODEL } from '../../constants/business';
import { TEXT_STYLE } from '../../styles/common/textStyles';

export const BusinessModel = () => {
	const isMobile = useMediaQuery('(max-width: 767px)');
	return (
		<Wrap>
			<BoxTop>
				<Subtitle>BEFITTER</Subtitle>
				<Title>{BUSINESS_MODEL.title}</Title>
				{!isMobile && <Intro>{BUSINESS_MODEL.intro}</Intro>}
			</BoxTop>
			<BoxItem>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'flex-start',
					}}
				>
					<Box>
						{BUSINESS_MODEL.body1?.map((item, index) => (
							<Item sx={item1} key={index}>
								{item}
							</Item>
						))}
					</Box>
					{!isMobile && (
						<Item sx={itemImage1}>
							<img src={BUSINESS_IMAGE.shoeDouble} />
						</Item>
					)}
				</Box>
				<Item
					sx={{
						margin: '24px 0',
						'@media (min-width: 768px)': {
							margin: '80px 0',
						},
					}}
				>
					{BUSINESS_MODEL.body2}
				</Item>
				{isMobile && (
					<Item sx={{ ...itemImage1, marginBottom: '40px' }}>
						<img src={BUSINESS_IMAGE.shoeDouble} />
					</Item>
				)}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						'@media (max-width: 767px)': {
							flexDirection: 'row-reverse',
						},
					}}
				>
					{!isMobile && (
						<Item sx={itemImage2}>
							<img src={BUSINESS_IMAGE.logoOrange} />
						</Item>
					)}
					<Box>
						{BUSINESS_MODEL.body3?.map((item, index) => (
							<Item key={index} sx={item2}>
								{item}{' '}
								{index === 1 && isMobile && (
									<img
										style={{ width: '138px' }}
										src={BUSINESS_IMAGE.logoOrange}
									/>
								)}
							</Item>
						))}
					</Box>
				</Box>
			</BoxItem>
		</Wrap>
	);
};

const Wrap = styled(Box)({
	marginBottom: 40,
	'@media (min-width: 768px)': {
		marginBottom: 120,
	},
	img: {
		width: '100%',
	},
});

const item1 = {
	width: '100%',
	'@media (min-width: 768px)': {
		paddingRight: '78px',
	},
};
const item2 = {
	width: '100%',
	'@media (min-width: 768px)': {},
};
const itemImage1 = {
	width: '100%',
	'@media (min-width: 768px)': {
		'& img': {},
	},
};
const itemImage2 = {
	width: '100%',
	'@media (min-width: 768px)': {
		'& img': {},
	},
};
const Title = styled(Typography)({
	...TEXT_STYLE(24, 700, '#FF6D24'),
	fontFamily: 'Electrofied',
	'@media (min-width: 768px)': {
		...TEXT_STYLE(80, 700, '#FF6D24'),
	},
});
const Subtitle = styled(Typography)({
	...TEXT_STYLE(16, 700, '#ffffff'),
	'@media (min-width: 768px)': {
		...TEXT_STYLE(48, 700, '#ffffff'),
	},
});
const Intro = styled(Typography)({
	...TEXT_STYLE(48, 600, '#ffffff'),
	fontFamily: 'BeVietnamPro !important',
	fontStyle: 'normal !important',
});
const BoxTop = styled(Box)({
	marginBottom: 16,
	'@media (min-width: 768px)': {
		marginBottom: 76,
	},
	'& p': {
		fontFamily: 'Electrofied',
		fontStyle: 'italic',
	},
});
const BoxItem = styled(Box)({
	flexWrap: 'wrap',
	display: 'flex',
	'& p': {
		lineHeight: '22px',
		'@media (min-width: 768px)': {
			lineHeight: '64px',
		},
	},
});
const Item = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	// marginBottom: 24,
	// '@media (min-width: 768px)': {
	//   marginBottom: 80
	// },
	'& span': {
		color: '#FF6D24',
	},
	'& p': {
		...TEXT_STYLE(16, 500, '#ffffff'),
		'@media (min-width: 768px)': {
			...TEXT_STYLE(32, 500, '#ffffff'),
		},
	},
});
