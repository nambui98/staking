import React from 'react';
import {
	Box,
	Typography,
} from '@mui/material';
import { SECTION_TITLE_BG } from '../../constants/common';

const SectionTitle: React.FC<any> = ({
	sxProps,
	title,
	subtitle,
	swap = false,
}) => (
	<Box
		sx={{
			width: '100%',
			pt: 4.5,
			pb: 3,
			pl: 3,
			backgroundImage: `url(${SECTION_TITLE_BG})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'center left',
			...sxProps,
		}}
	>
		{!swap && (
			<Typography
				variant="subtitle1"
				fontSize={{ xs: 32, sm: 40 }}
				fontStyle="italic"
				color="#31373E"
				sx={{
					textTransform: 'uppercase',
					textShadow: '1px 1px 0 #FFF, 2px 2px 0 #31373E',
				}}
			>
				{subtitle}
			</Typography>
		)}
		<Typography
			variant="subtitle1"
			fontSize={{ xs: 42, sm: 64 }}
			fontStyle="italic"
			color="#FF6D24"
			sx={{
				textTransform: 'uppercase',
				textShadow: '1px 1px 0 #FFF, 2px 2px 0 #FF6D24',
			}}
		>
			{title}
		</Typography>
		{swap && (
			<Typography
				variant="subtitle1"
				fontSize={{ xs: 32, sm: 40 }}
				fontStyle="italic"
				color="#31373E"
				sx={{
					textTransform: 'uppercase',
					textShadow: '1px 1px 0 #FFF, 2px 2px 0 #31373E',
				}}
			>
				{subtitle}
			</Typography>
		)}
	</Box>
);

export default SectionTitle
