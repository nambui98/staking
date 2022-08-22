import {
	Backdrop,
	Box,
	CircularProgress,
	Stack,
	styled,
	Tooltip,
	Typography,
} from '@mui/material';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import {
	BOX_DETAILS,
	FITTER_PASS,
	ICON,
} from '../../../constants/assetsWallet';
import { useWalletContext } from '../../../contexts/WalletContext';
import { getBoxType, getOwnedBox } from '../../../libs/claim';
import { bftBox } from '../../../libs/contracts';
import { convertWalletAddress } from '../../../libs/utils/utils';
import { TEXT_STYLE } from '../../../styles/common/textStyles';
import { BoxEmpty } from './BoxEmpty';

interface IProps {
	fitterPassBalance: number;
}

export const FitterPassTab: React.FC<IProps> = ({ fitterPassBalance }) => {
	const { walletAccount, ethersSigner } = useWalletContext();
	const [listBoxType, setListBoxType] = useState<any[]>();
	const [statusLoading, setStatusLoading] = useState<boolean>(false);

	console.log('eiwruuyewq', fitterPassBalance);

	return (
		<Wrap sx={fitterPassBalance > 0 ? {} : { maxHeight: 'initial !important' }}>
			{fitterPassBalance > 0 ? (
				// Array.apply(null, Array(fitterPassBalance))?.map((item, index) => (
				// 	<Item key={index}>
				// 		<img src={FITTER_PASS.image} />
				// 		<Title>
				// 			<Typography>{FITTER_PASS.title}</Typography>
				// 			{/* <Typography>{index + 1}</Typography> */}
				// 		</Title>
				// 	</Item>
				// ))
				<Box>
					<Item>
						<Box>
							<img src={FITTER_PASS.image} alt="" width="100%" />{' '}
						</Box>
						<Title>
							{' '}
							<Typography sx={{ color: '#31373E' }}>
								You have &nbsp;
								<span style={{ color: '#FF6D24', display: 'inline-block' }}>
									{fitterPassBalance} Fitter Pass
								</span>{' '}
								, enter amount below to send to Spending
							</Typography>{' '}
						</Title>{' '}
					</Item>
				</Box>
			) : (
				<BoxEmpty icon={ICON.fitterPass} emptyText={'no fitter pass'} />
			)}
			<Backdrop
				sx={{
					color: '#FF6D24',
					zIndex: (theme) => theme.zIndex.drawer + 1,
					backgroundColor: 'transparent',
				}}
				open={statusLoading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Wrap>
	);
};

const Wrap = styled(Stack)({
	color: '#31373E',
	marginTop: 16,
	maxHeight: 288,
	overflow: 'auto',
	'@media (min-width: 768px)': {
		maxHeight: 465,
		minHeight: 222,
		marginTop: 0,
		'&::-webkit-scrollbar': {
			width: 4,
		},
		'&::-webkit-scrollbar-track': {
			background: '#E9EAEF',
			borderRadius: 10,
		},
		'&::-webkit-scrollbar-thumb': {
			background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
			borderRadius: 10,
		},
		'&::-webkit-scrollbar-thumb:hover': {
			background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
		},
	},
});
const Item = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	padding: '8px 16px',
	flexDirection: 'column',
	borderRadius: 16,
	marginBottom: 8,
	'&:last-of-type': {
		marginBottom: 0,
	},
	'&:hover': {
		// background: '#E9EAEF',
	},
});
const Title = styled(Box)({
	marginLeft: 16,
	marginTop: 24,
	'& p:nth-of-type(1)': {
		...TEXT_STYLE(16, 500),
		'@media (min-width: 830px)': {
			minWidth: 172,
		},
	},
	'& p:nth-of-type(2)': {
		...TEXT_STYLE(12, 500),
		color: '#5A6178',
	},
});
const Star = styled(Box)({
	width: 32,
	height: 32,
	backgroundImage: `url(${ICON.starGray})`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',

	'&:hover': {
		backgroundImage: `url(${ICON.starYellow})`,
	},
});
const BoxTooltip = styled(Box)({
	marginLeft: 'auto',
	'@media (min-width: 830px)': {
		marginLeft: 132,
	},
});
const BodyTooltip = styled(Box)({});
const TooltipItem = styled(Box)({
	marginBottom: 8,
	display: 'flex',
	alignItems: 'center',
	'&:last-of-type': {
		marginBottom: 0,
	},
	'& p:first-of-type': {
		...TEXT_STYLE(12, 500, '#ffffff'),
	},
	'& p:last-of-type': {
		...TEXT_STYLE(12, 600, '#ffffff'),
		marginLeft: 'auto',
	},
	'& img': {
		width: 22.5,
	},
	'& > div': {
		marginRight: 8,
		width: 24,
		height: 24,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
