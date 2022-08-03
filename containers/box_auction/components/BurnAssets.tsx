import { Box, styled, Typography, Button, InputBase } from '@mui/material';
import { useState, useRef } from 'react';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { BoxAuction } from '../../../const';

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
				<ValueItem>23 Fitter Passes</ValueItem>
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
				sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}
			>
				<InputBase
					sx={{
						border: '1px solid #E9EAEF',
						borderRadius: '4px',
						background: '#F8F9FB',
						height: '34px',
						'& .css-yz9k0d-MuiInputBase-input': {
							textAlign: 'right',
							padding: '8px 12px',
						},
					}}
					defaultValue={count}
					value={count}
				/>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						ml: '8px',
						mb: '4px',
					}}
				>
					<Button
						sx={{
							backgroundColor: '#D9F2FD',
							borderRadius: '4px',
							minWidth: '32px',
							width: '32px',
							mb: '2px',
							boxShadow: 'none',
							height: '16px',
						}}
					>
						<img src="images/arrow-up.svg" alt="arrow-up" />
					</Button>
					<Button
						sx={{
							backgroundColor: '#D9F2FD',
							borderRadius: '4px',
							minWidth: '32px',
							boxShadow: 'none',
							width: '32px',
							height: '16px',
						}}
					>
						<img
							style={{ transform: 'rotate(180deg)' }}
							src="images/arrow-up.svg"
							alt="arrow-up"
						/>
					</Button>
				</Box>
			</Box>
			<Button
				sx={{
					backgroundColor: '#D9F2FD',
					borderRadius: '4px',
					width: '32px',
					boxShadow: 'none',
					color: '#55C8FC',
					fontSize: '12px',
					marginLeft: '205px',
					padding: '4px 8px',
				}}
			>
				All
			</Button>

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
