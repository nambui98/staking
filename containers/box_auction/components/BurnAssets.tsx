import { Box, styled, Typography, Button, InputBase, TextField } from '@mui/material';
import { useState, useRef } from 'react';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { BoxAuction } from '../../../const';
import ArrowUp from '../../staking/components/stakingLocked/icons/arrow_up.svg';
import ArrowDown from '../../staking/components/stakingLocked/icons/arrow_down.svg';
import { TEXT_STYLE } from '../../../styles/common/textStyles';
type Props = {
	setStateContent: Function;
	// setIsLoading: Function;
	// handleClickError: Function;
	// setStateContentInit: Function;
	stateContent: BoxAuction | null;
};

export function BurnAssets(props: Props) {
	const { setStateContent, stateContent } = props;
	let [count, setCount] = useState<number>(1);

	const handleEnable = () => {
		setStateContent(BoxAuction.Burned);
	};

	return (
		<Box
			sx={{
				'@media (min-width: 650px)': {
					width: '422px',
					height: '375px',
					padding: '16px',
				},
				display: 'flex',
				flexDirection: 'column',
				fontFamily: 'BeVietnamPro',
				borderLeft: '1px solid #E9EAEF',
			}}
		>
			<Item sx={{ mt: '0 !important' }}>
				<TitleItem>YOU CURRENT ASSETS</TitleItem>
				<ValueItem fontWeight={'600 !important'}>23 Fitter Passes</ValueItem>
			</Item>
			<Box
				sx={{
					textAlign: 'center',
					fontSize: '12px',
					color: '#5A6178',
					fontWeight: '500',
					textTransform: 'uppercase',
					lineHeight: '18px',
					margin: '24px 0 16px 0',
				}}
			>
				number of Fitter pass(es) you want to burn:
			</Box>
			<Box
				sx={{ justifyContent: 'center', display: 'flex', alignItems: 'flex-start' }}
			>
				<Box>

					<ValueItem sx={{ pointerEvents: "none" }}>
						<InputCustom value={1} placeholder="" />
					</ValueItem>
					<ButtonCustom
						sx={{
							width: "32px ",
							height: "24px",
							marginLeft: "auto",
							mt: '4px',
							fontWeight: "400",
							fontSize: "12px"
						}}
						variant="text"
					>
						All
					</ButtonCustom>
				</Box>

				<Box sx={{ marginLeft: '8px' }}>
					<ButtonCustom variant="text" >
						<ArrowUp />
					</ButtonCustom>
					<ButtonCustom variant="text" sx={{ mt: "2px" }} >
						<ArrowDown />
					</ButtonCustom>
				</Box>
			</Box>


			<Box sx={{ display: 'flex', mt: '16px' }}>
				<img src="images/info-circle.svg" alt="info-circle" />
				<span
					style={{
						fontSize: '10px',
						lineHeight: '16px',
						fontWeight: '500',
						color: '#FF6D24',
						marginLeft: '10px',
					}}
				>
					The amount you spent decides your rank compared to others. The higher
					the rank is, the higher the probability of winning good prize.{' '}
				</span>
			</Box>

			<Box
				mt="auto"
				width={'100%'}
				sx={{
					paddingTop: '16px',
					borderTop: '1px solid #E9EAEF',
				}}
			>
				<MarketplaceButton
					customStyle={{ width: '100%' }}
					title={'Confirm'}
					handleOnClick={handleEnable}
				/>
			</Box>
		</Box>
	);
}
const ButtonCustom = styled(Button)({
	color: '#55C8FC',
	background: ' #D9F2FD',
	borderRadius: '4px',
	padding: '0px !important',
	minWidth: '32px !important',
	height: '16px',
	border: 'none',
	textTransform: 'none',
	display: "flex",
	alignItems: 'center',
	justifyContent: 'center',
	'&>svg': {
		pointerEvents: "none",
		stroke: "#55C8FC",
	},
	'&:hover': {
		background: ' #d0edfa !important',
	},
	'&:disabled': {
		background: '#E9EAEF',
		'&>svg': {
			stroke: "#A7ACB8"
		}
	}
});
const Item = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
});

const TitleItem = styled(Typography)({
	fontSize: '12px',
	color: '#898E9E',
	fontWeight: '500',
	lineHeight: '18px',
	textTransform: 'uppercase',
});
const ValueItem = styled(Typography)({
	fontSize: '12px',
	color: '#31373E',
	fontWeight: '500',
	lineHeight: '18px',
});
const InputCustom = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		padding: '8px 16px',
		background: '#F8F9FB',
		borderRadius: 4,
		width: '160px',
		height: 34,
		flex: 1,
		border: '1px solid #E9EAEF',
	},
	'& input': {
		padding: 0,
		textAlign: 'right',
		...TEXT_STYLE(12, 500, '#31373E'),
	},
	'& fieldset': { display: 'none' },
	'@media (max-width: 767px)': {
		width: '100%',
		'& .MuiOutlinedInput-root': {
			width: '100%',
			height: 35,
		},
	},
});