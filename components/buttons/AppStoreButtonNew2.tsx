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
const AppStoreButtonNew2: React.FC<any> = ({
	disabled = false,
	title,
	subtitle,
	icon,
	href = '#',
	background
}) => (
	<Button
		disabled={disabled}
		href={href}
		sx={{
			height: "55px",
			width: '100%',
			background: 'transparent',
			border: '2px solid #E9EAEF',
			borderRadius: '16px',
			boxShadow: 'none',

			textTransform: 'none',
			px: 2,
			py: { xs: 2.5, sm: 2.5 },
			'&:hover': {
				background: '#b4b4b44b',
				boxShadow: 'none',
			},
			'&.Mui-disabled': {
				// background: background ? '#E9EAEF' : '#ffffff',
			},
			paddingTop: '12px !important',
			paddingBottom: '12px !important',
		}}
	>
		<Grid container justifyContent={'center'} alignItems={'center'}>
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
						fontSize={{ xs: 10, sm: 12 }}
						fontWeight={500}
						color="#fff"
						mb={0.5}
					>
						{subtitle}
					</Typography>
					<Typography
						fontSize={{ xs: 14, sm: 14 }}
						fontWeight={600}
						color={disabled ? "#898E9E" : "#fff"}
					>
						{title}
					</Typography>
				</Stack>
			</Grid>
		</Grid>
	</Button>
);

export default AppStoreButtonNew2;
