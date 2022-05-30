import React from 'react';
import Link from 'next/link';
import { Box, Stack, Grid, Button, Typography, Icon } from '@mui/material';
import { IconImage } from './styled';

export const AppStoreButton: React.FC<any> = ({
	disabled = false,
	title,
	subtitle,
	icon,
	href = '#',
}) => (
	<Button
		disabled={disabled}
		href="#"
		sx={{
			width: '100%',
			// width: 193,
			// height: 72,
			background: '#fff',
			border: '2px solid #E9EAEF',
			borderRadius: '16px',
			boxShadow: 'none',
			textTransform: 'none',
			px: .5,
			py: { xs: 2.5, sm: 2.5 },
			'&:hover': {
				background: '#FFE2D3',
				boxShadow: 'none',
				border: '2px solid #FF8A50',
			},
			'&.Mui-disabled': {
				background: '#E9EAEF',
			}
		}}
	>
		<Grid container justifyContent={"center"}>
			<Grid item xs={'auto'}>
				<Stack justifyContent="center" alignItems="center" sx={{height: '100%'}} pr={{xs: .5, sm: 1}}>
					<img src={icon} alt={title} />
				</Stack>
			</Grid>
			<Grid item xs={'auto'}>
				<Typography fontSize={{xs: 10, sm: 14}} fontWeight={500} color="#5A6178" mb={.5}>
					{subtitle}
				</Typography>
				<Typography fontSize={{xs: 14, sm: 20}} fontWeight={600} color="#5A6178">
					{title}
				</Typography>
			</Grid>
		</Grid>
	</Button>
);

export const IconButtonBounceUpOnHover: React.FC<any> = ({
	icon,
	iconActive,
	href = '#',
	width = 40,
	height = 40,
}) => (
	<Stack
		component="a"
		alignItems="center"
		href={href}
		target="_blank"
		sx={{
			borderRadius: '12px',
			py: 0.5,
			'&:hover': {
				'& span': {
					background: `url(${iconActive}) no-repeat center`,
					transition: '.3s all cubic-bezier(0.7, -0.4, 0.4, 1.4)',
					transform: `translateY(-8px)`,
				},
				'& div': {
					opacity: 0.8,
				},
			},
		}}
	>
		<Box
			component={'span'}
			sx={{
				cursor: 'pointer',
				width: width + 2,
				height: height + 2,
				background: `url(${icon}) no-repeat center`,
			}}
		></Box>
		<Box
			sx={{
				mt: 0.5,
				width: 32,
				height: 4,
				background: '#31373E',
				opacity: 0,
				filter: 'blur(8px)',
			}}
		></Box>
	</Stack>
);
