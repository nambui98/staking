import React from 'react';
import {
	Box,
	Stack,
	Grid,
	Typography,
} from '@mui/material';

const NumberBox: React.FC<any> = ({ sxProps, icon, count, title }) => {
	return (
		<Box
			sx={{
				width: { xs: 430 * 0.8, sm: 430 },
				height: { xs: 122 * 0.8, sm: 122 },
				position: 'relative',
				...sxProps,
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					position: 'absolute',
				}}
			>
				<Box
					sx={{
						width: '100%',
						height: '100%',
						px: '3px',
						py: '3px',
						background: 'linear-gradient(88.32deg, #8C81F7 0%, #7669EC 100%)',
						borderRadius: '16px',
						// transform: 'matrix(0.98, 0, -0.18, 1, 0, 0)',
						transform: 'skewX(-20deg)',
						position: 'relative',
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							width: '6%',
							height: { xs: 122 * 0.8, sm: 122 },
							background:
								'radial-gradient(75% 75% at 21.87% 25%, #FFCC77 18.94%, #FF612F 89.59%)',
							borderRadius: '14px 0px 0px 14px',
							backdropFilter: 'blur(24px)',
							top: 0,
							left: 0,
						}}
					/>
					<Box
						sx={{
							width: '100%',
							height: '100%',
							background: '#FFF',
							borderRadius: '14px',
						}}
					/>
				</Box>
			</Box>
			<Grid
				container
				sx={{ position: 'relative', pt: 3, pl: { xs: 5, sm: 7 } }}
			>
				<Grid item xs={'auto'}>
					<Stack
						justifyContent="center"
						alignItems="center"
						sx={{ height: '100%' }}
						pr={{ xs: 0.5, sm: 1 }}
					>
						<img src={icon} alt={title} />
					</Stack>
				</Grid>
				<Grid item xs>
					<Typography
						variant="subtitle1"
						fontSize={{ xs: 24, sm: 32 }}
						color="#31373E"
					>
						{count}
					</Typography>
					<Typography
						fontSize={{ xs: 12, sm: 20 }}
						fontWeight={500}
						color="#5A6178"
					>
						{title}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default NumberBox;
