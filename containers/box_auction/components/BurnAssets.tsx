import { Box, styled, Typography, Button, InputBase, TextField, useMediaQuery } from '@mui/material';
import { useState, useRef } from 'react';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { BoxAuction } from '../../../const';
import ArrowUp from '../../staking/components/stakingLocked/icons/arrow_up.svg';
import ArrowDown from '../../staking/components/stakingLocked/icons/arrow_down.svg';
import { TEXT_STYLE } from '../../../styles/common/textStyles';
import { addFitterPass } from '../../../libs/burn';
import { useWalletContext } from '../../../contexts/WalletContext';
type Props = {
	setStateContent: Function;
	setIsLoading: Function;
	handleClickSuccess: Function;
	handleClickError: Function;
	stateContent: BoxAuction | null;
	balanceFT: string
};

export function BurnAssets(props: Props) {
	const { setStateContent, stateContent, balanceFT, setIsLoading, handleClickSuccess, handleClickError } = props;
	const { ethersSigner, ethersProvider, setRefresh, refresh } = useWalletContext();
	const [burnNumber, setBurnNumber] = useState<number>(1);
	const handleConfirm = async () => {
		setIsLoading(true);
		try {
			const res = await addFitterPass(burnNumber, ethersSigner);
			setIsLoading(false)
			if (res?.status) {
				setRefresh(!refresh)
				handleClickSuccess({
					titleSuccess: 'Confirmed successfully!',
					functionSuccess: () => {
						setStateContent(BoxAuction.Burned);
					},
					stateContentNew: BoxAuction.Success,
				});
			}
		} catch (error: any) {
			const message = error.reason || 'Something went wrong, please try again';
			setIsLoading(false);
			handleClickError({
				titleError: message,
				functionError: () => {
					setStateContent(BoxAuction.BurnAssets);
				},
				stateContentNew: BoxAuction.Error,
			});
		}
	};
	const isMobile = useMediaQuery('(max-width: 767px)');

	return (
		<Box
			sx={{
				width: "100%",
				'@media (min-width: 650px)': {
					width: '422px',
					height: '100%',
					padding: '0 16px',
				},
				display: 'flex',
				flexDirection: 'column',
				fontFamily: 'BeVietnamPro',
				// borderLeft: '1px solid #E9EAEF',
				borderLeft: isMobile ? 0 : '1px solid #E9EAEF',
			}}
		>
			<Item sx={{ mt: '0 !important' }}>
				<TitleItem>YOU CURRENT ASSETS</TitleItem>
				<ValueItem fontWeight={'600 !important'}>{balanceFT} Fitter Passes</ValueItem>
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

					<ValueItem>
						<InputCustom type="number" inputProps={{ min: 4, max: 10 }} value={burnNumber} onChange={(e) => {
							if (parseInt(e.target.value) > parseInt(balanceFT)) {
								setBurnNumber(parseInt(balanceFT));
							} else if (parseInt(e.target.value) < 1 || e.target.value.trim() === '') {
								setBurnNumber(1)
							} else {

								setBurnNumber(parseInt(e.target.value))
							}
							// if (parseInt(e.target.value) > parseInt(balanceFT)) {
							// 	setBurnNumber(parseInt(balanceFT));
							// } else {
							// }
						}} placeholder="" />
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
						onClick={() => setBurnNumber(parseInt(balanceFT))}
					>
						All
					</ButtonCustom>
				</Box>

				<Box sx={{ marginLeft: '8px' }}>
					<ButtonCustom variant="text" disabled={burnNumber === parseInt(balanceFT)} onClick={() => setBurnNumber((preV) => (preV = preV > parseInt(balanceFT) - 1 ? parseInt(balanceFT) : (preV += 1)))}>
						<ArrowUp />
					</ButtonCustom>
					<ButtonCustom variant="text" disabled={burnNumber === 1} onClick={() => setBurnNumber((preV) => (preV = preV < 2 ? 1 : (preV -= 1)))} sx={{ mt: "2px" }} >
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
					The amount you spent decides your rank compared to others. <br />The higher
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
					disabled={burnNumber ? false : true}
					title={'Confirm'}
					handleOnClick={handleConfirm}
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
		'&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
			// webkitAppearance: 'none',
			' -webkit-appearance': 'none',
			//  - webkit - appearance: none;
			margin: 0
		}
	},
	'& fieldset': { display: 'none' },
	'@media (max-width: 767px)': {
		width: '100%',
		'& .MuiOutlinedInput-root': {
			width: '100px',
			height: 35,
		},
	},
});