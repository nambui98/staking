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
                ...TEXT_STYLE(120, 700, '#FFFFFF')
              },
            }
					}}
				>
					<Typography sx={{
            ...TEXT_STYLE(24, 700, '#FFFFFF'),
            '@media (min-width: 1280px)': {
              ...TEXT_STYLE(56, 700, '#FFFFFF')
            }
          }}>beFITTER</Typography>
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
					<Typography mr={{ xs: 0, md: 15 }}>
						Fitness apps are not something new. However, opening one and letting
						it track the outdoor activities simply cannot satisfy many health
						fanatics. There could be more of it. Instead of just running in
						circles and getting bored in a minute or two, people can stay on
						track for much longer thanks to a fitness app that monetizes every
						single step they take. Working out, with <span>beFITTER</span>’s core element -
						fitnessfi, is now a lot more enjoyable as the folks cherish a bigger
						ambition. <span>It’s keeping fit to earn.</span>
					</Typography>
          <Box>
            <img src={'assets/manifesto-1.png'} />
          </Box>
				</BoxTextImage>
			</Container>
		</HomeLayoutNew>
	);
};

export default Business;

type textImageProps = BoxProps & {
	imageLeft?: boolean;
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
    margin: '24px 0'
  },
	'@media (min-width: 768px)': {
		flexDirection: props.imageLeft ? 'row-reverse' : 'row',
		alignItems: 'flex-start',
		'& p': {
			...TEXT_STYLE(32, 600, '#F8F9FB'),
		},
    margin: '0'
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
