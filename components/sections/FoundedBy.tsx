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
import { IconImage } from '../styled';
import { FOUNDED } from '../../constants/common';

const FoundedBy: React.FC<any> = ({ sxProps }) => {
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const isXs = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

	return (
		<Box
			sx={{
				position: 'relative',
				width: { xs: '100%', md: '90%', xl: '80%' },
				mx: 'auto',
				background: { xs: '#F8F9FB', md: 'none' },
				...sxProps,
			}}
		>
			<Box
				sx={{
					display: { xs: 'none', md: 'block' },
					position: 'absolute',
					height: 550,
					width: '100%',
					background: '#F8F9FB',
					borderRadius: '24px',
					transform: 'skewX(-10deg)',
				}}
			/>
			<Container sx={{ position: 'relative', py: 5 }}>
				<SectionTitle
					title={FOUNDED.TITLE}
					subtitle={FOUNDED.SUBTITLE}
					swap={true}
				/>
				<Grid container spacing={5}>
					<Grid item xs={12} md={5}>
						<Stack
							spacing={2}
							mt={3}
							alignItems={{ xs: 'center', md: 'start' }}
						>
							<img
								src={FOUNDED.ICETEA}
								width={isXs ? '100%' : isSm ? '75%' : 'auto'}
							/>
							<Stack direction="row" alignItems="center" spacing={2}>
								<Typography fontSize={24} fontWeight={500} color="#5A6178">
									Creator of
								</Typography>
								<img src={FOUNDED.GAMEFI} width={'auto'} />
							</Stack>
						</Stack>
					</Grid>
					<Grid item xs={12} md={7}>
						<Stack
							spacing={3}
							sx={{
								pt: 5,
								pr: 0,
								backgroundImage: `url(${FOUNDED.BG})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'contain',
								backgroundPosition: 'top right',
							}}
						>
							{FOUNDED.ITEMS.map((text, idx) => (
								<Typography
									key={idx}
									fontSize={{ xs: 16, sm: 22 }}
									fontWeight={500}
									color="#5A6178"
								>
									<Icon sx={{ mr: 2 }}>
										<IconImage src={FOUNDED.LIST_ITEM} />
									</Icon>
									{text}
								</Typography>
							))}
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default FoundedBy;
