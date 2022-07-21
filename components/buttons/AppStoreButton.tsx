import React from 'react';
import { Stack, Grid, Button, Typography } from '@mui/material';

export interface AppStoreButtonProps {
	disabled: boolean;
	title: string;
	subtitle: string;
	icon: string;
	href?: string;
}

// const AppStoreButton: React.FC<AppStoreButtonProps> = ({
const AppStoreButton: React.FC<any> = ({
	disabled = false,
	title,
	subtitle,
	icon,
	href = '#',
}) => (
	<Button
		disabled={disabled}
		href={href}
		sx={{
			width: '100%',
			// width: 193,
			// height: 72,
			background: '#fff',
			border: '2px solid #E9EAEF',
			borderRadius: '16px',
			boxShadow: 'none',
			textTransform: 'none',
			px: 0.5,
			py: { xs: 2.5, sm: 2.5 },
			'&:hover': {
				background: '#FFE2D3',
				boxShadow: 'none',
				border: '2px solid #FF8A50',
			},
			'&.Mui-disabled': {
				background: '#E9EAEF',
			},
		}}
	>
		<Grid container justifyContent={'center'}>
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
			<Grid item xs={'auto'}>
				<Stack alignItems="flex-start">
					<Typography
						fontSize={{ xs: 10, sm: 14 }}
						fontWeight={500}
						color="#5A6178"
						mb={0.5}
					>
						{subtitle}
					</Typography>
					<Typography
						fontSize={{ xs: 14, sm: 20 }}
						fontWeight={600}
						color="#5A6178"
					>
						{title}
					</Typography>
				</Stack>
			</Grid>
		</Grid>
	</Button>
);

export default AppStoreButton;
