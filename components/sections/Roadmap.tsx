import React from 'react';
import {
	Box,
	Container,
	Grid,
	Stack,
	Typography,
	Icon,
	Theme,
	useMediaQuery,
} from '@mui/material';
import SectionTitle from './SectionTitle';
import { ROADMAP } from '../../constants/common';
import { IconImage } from '../styled';

const Milestone: React.FC<any> = ({ sxProps, title, items }) => {
	return (
		<Box>
			<Box sx={{
				background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
				padding: '2px',
				width: 'max-content',
			}}>
				<Box sx={{
					background: '#FFF',
					p: .5,
					width: 'max-content',
				}}>
					<Typography fontSize={{ xs: 20, sm: 24, md: 18, lg: 24 }} fontWeight={700} color="#31373E">{title}</Typography>
				</Box>
			</Box>
			<Box sx={{ pl: 2, mt: 1 }}>
				{items.map((text: string, idx: number) => (
					<Stack key={idx} direction="row" spacing={1} sx={{mb: 1}}>
						<Icon sx={{ 
							width: {xs: 14, sm: 14*1.25, md: 14, lg: 14*1.25}, 
							height: {xs: 12, sm: 12*1.25, md: 12, lg: 12*1.25}, 
						}}>
							<IconImage src={ROADMAP.ICON_LIST} />
						</Icon>
						<Typography
							fontSize={{ xs: 16, sm: 18, md: 14, lg: 18 }}
							fontWeight={400}
							lineHeight="23px"
							color="#5A6178"
							mb={1}
						>
							{text.split('\n').map((el, idx) => (
								<span key={idx}>
									{el}
									<br />
								</span>
							))}
						</Typography>
					</Stack>
					
				))}
			</Box>
		</Box>
	)
};

const RoadmapDesktop: React.FC<any> = () => {
	return (
		<Stack
			alignItems="center"
			sx={{
				position: 'relative',
				overflow: 'hidden',
				height: 895,
			}}
		>
			<Container sx={{ position: 'relative' }}>
				<SectionTitle
					title={ROADMAP.TITLE}
					subtitle={ROADMAP.SUBTITLE}
				/>
			</Container>
			<Box sx={{
				position: 'absolute',
				backgroundImage: `url(${ROADMAP.MAP})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: { md: 1920*0.8, lg: 1920 },
				height: { md: 895*0.8, lg: 895 },
			}}/>
			<Box sx={{
				position: 'absolute',
				backgroundImage: `url(${ROADMAP.ROAD})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: { md: 1020*0.8, lg: 1020 },
				height: { md: 325*0.8, lg: 325 },
				top: { md: 329*0.8, lg: 329 },
				ml: { md: `${29*0.8}px`, lg: `${29}px` },
			}}/>
			{ROADMAP.MILESTONES.map((el, idx) => (
				<Box key={idx} sx={{
					position: 'absolute',
					top: { md: el.top*0.8, lg: el.top },
					ml: { md: `${el.ml*0.8}px`, lg: `${el.ml}px` },
				}}>
					<Milestone title={el.title} items={el.items} />
				</Box>
			))}
		</Stack>
	)
}

const RoadmapMobile: React.FC<any> = () => {
	return (
		<Container sx={{ mb: 10 }}>
			<SectionTitle
				title={ROADMAP.TITLE}
				subtitle={ROADMAP.SUBTITLE}
			/>
			<Grid container spacing={3} mt={5}>
				{ROADMAP.MILESTONES.map((el, idx) => (
					<Grid item key={idx} xs={12} sm={6}>
						<Milestone  title={el.title} items={el.items} />
					</Grid>
				))}
			</Grid>
		</Container>
	)
};

const Roadmap: React.FC<any> = ({ sxProps }) => {
	const isSm = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down('md')
	);

	return isSm ? <RoadmapMobile /> : <RoadmapDesktop />;
};

export default Roadmap;
