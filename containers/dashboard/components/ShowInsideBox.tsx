import Dialog from '@mui/material/Dialog';

import {
	Backdrop,
	Box,
	Button,
	CircularProgress,
	InputAdornment,
	Stack,
	styled,
	TextField,
	Typography,
	useMediaQuery,
	Icon,
} from '@mui/material';

import { IconImage } from '../../../components/styled';

const listShoe = [
	{
		icon: 'assets/icons/iconic.svg',
		name: 'Iconic Shoe',
		des: '40% chance',
		linear:
			'linear-gradient(90deg, rgba(255, 111, 97, 0) 0%, #FF6F61 53.12%, rgba(255, 111, 97, 0) 100%)',
	},
	{
		icon: 'assets/icons/rare.svg',
		name: 'Rare Shoe',
		des: '50% chance',
		linear:
			'linear-gradient(90deg, rgba(255, 200, 58, 0) 0%, #FFC83A 53.12%, rgba(255, 200, 58, 0) 100%)',
	},
	{
		icon: 'assets/icons/standard.svg',
		name: 'Standard Shoe',
		des: '10% chance',
		linear:
			'linear-gradient(90deg, rgba(167, 172, 184, 0) 0%, #A7ACB8 53.12%, rgba(167, 172, 184, 0) 100%)',
	},
];
const listShoeM = [
	{
		icon: 'assets/icons/iconic.svg',
		name: 'Iconic Shoe',
		des: '0% chance',
		linear:
			'linear-gradient(90deg, rgba(255, 111, 97, 0) 0%, #FF6F61 53.12%, rgba(255, 111, 97, 0) 100%)',
	},
	{
		icon: 'assets/icons/rare.svg',
		name: 'Rare Shoe',
		des: '90% chance',
		linear:
			'linear-gradient(90deg, rgba(255, 200, 58, 0) 0%, #FFC83A 53.12%, rgba(255, 200, 58, 0) 100%)',
	},
	{
		icon: 'assets/icons/standard.svg',
		name: 'Standard Shoe',
		des: '10% chance',
		linear:
			'linear-gradient(90deg, rgba(167, 172, 184, 0) 0%, #A7ACB8 53.12%, rgba(167, 172, 184, 0) 100%)',
	},
];

export default function ShowInsideBox(props: {
	status: boolean;
	setShowInsideBox: Function;
}) {
	const { status, setShowInsideBox } = props;

	return (
		<Dialog
			sx={borderRadius}
			onClose={() => {
				setShowInsideBox(false);
			}}
			open={status}
		>
			<Wrap>
				<Box
					onClick={() => {
						setShowInsideBox(false);
					}}
					sx={{
						position: 'absolute',
						right: '18px',
						cursor: 'pointer',
					}}
				>
					<img src={'assets/icons/close.svg'} />
				</Box>
				<Box
					sx={{
						color: '#31373E',
						fontSize: '16px',
						lineHeight: '22px',
						fontWeight: '600',
						textAlign: 'center',
						mt: '8px',
						fontFamily: 'BeVietnamPro',
					}}
				>
					What's inside the box?
				</Box>
				<Box
					sx={{
						display: 'flex',
						mt: '24px',
						'@media (max-width: 767px)': {
							flexDirection: 'column',
						},
					}}
				>
					<BoxSwap sx={{ mr: '24px' }}>
						<TitleSwap>Gold Mystery Box</TitleSwap>
						<img src="assets/icons/asset 021.svg" alt="" />
						<BoxContainer>
							{listShoe.map((item, index) => (
								<BoxMystery key={index} linear={item.linear}>
									<Icon>
										<IconImage src={item.icon} />
									</Icon>
									<Box sx={{ textAlign: 'left', ml: '18px' }}>
										<TitleSwap
											sx={{
												marginBottom: 0,
											}}
										>
											{item.name}
										</TitleSwap>
										<Details>{item.des}</Details>
									</Box>
								</BoxMystery>
							))}
						</BoxContainer>
					</BoxSwap>
					<BoxSwap
						sx={{ mr: '24px', '@media (max-width: 767px)': { mt: '30px' } }}
					>
						<TitleSwap>Diamond Mystery Box</TitleSwap>
						<img src="assets/icons/2 9.svg" alt="" />
						<BoxContainer>
							{listShoeM.map((item, index) => (
								<BoxMystery key={index} linear={item.linear}>
									<Icon>
										<IconImage src={item.icon} />
									</Icon>
									<Box sx={{ textAlign: 'left', ml: '18px' }}>
										<TitleSwap
											sx={{
												marginBottom: 0,
											}}
										>
											{item.name}
										</TitleSwap>
										<Details>{item.des}</Details>
									</Box>
								</BoxMystery>
							))}
						</BoxContainer>
					</BoxSwap>
				</Box>
			</Wrap>
		</Dialog>
	);
}

const Wrap = styled(Stack)({
	position: 'relative',
	padding: '16px',
	overflowY: 'auto',
	overflowX: 'hidden',
	width: 'calc(100vw - 32px)',
	height: 'calc(100vh - 32px)',
	'@media (min-width: 650px)': {
		width: '544px',
		height: '400px',
	},
});

const TitleSwap = styled(Typography)({
	fontSize: '14px',
	fontWeight: '600',
	lineHight: '22px',
	color: '#31373E',
	marginBottom: '24px',
});

const BoxSwap = styled(Box)({
	textAlign: 'center',
	margin: '0 0 0 8px',
	width: '232px',
	minWidth: '232px',
	height: '60px',
	'@media (max-width: 767px)': {
		width: '100%',
		height: '100%',
		margin: '0 8px 0 0',
	},
});

const BoxContainer = styled(Box)({
	marginTop: '16px',
});

const BoxMystery = styled(Box)((props: { linear: string }) => ({
	display: 'flex',
	height: '60px',
	alignItems: 'center',
	position: 'relative',
	'&:before': {
		position: 'absolute',
		background: props.linear,
		opacity: '0.3',
		inset: 0,
		content: '""',
	},
}));

const borderRadius = {
	'& .MuiDialog-paper': {
		borderRadius: '16px',
		margin: '0 !important',
		overflow: 'visible',
	},
};

const Details = styled(Typography)({
	background: 'linear-gradient(180deg, #FF8A50 2.08%, #FF6D24 66.9%)',
	'-webkit-background-clip': 'text',
	'-webkit-text-fill-color': 'transparent',
	'background-clip': 'text',
	'text-fill-color': 'transparent',
	fontSize: '12px',
	fontWeight: '600',
	lineHight: '18px',
	marginTop: '4px',
});
