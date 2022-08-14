import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { StateBurnHEE } from '../../../const';
import { useWalletContext } from '../../../contexts/WalletContext';
import Paper from '@mui/material/Paper';

type Props = {};

const HeeExchange = (props: Props) => {
	const { setToggleActivePopup, walletAccount, ethersSigner, ethersProvider } =
		useWalletContext();
	return (
		<Item>
			<ItemBox sx={{ mt: '0 !important' }}>
				<TitleItem>TOTAL AMOUNT</TitleItem>
				<ValueItem>Unlimited</ValueItem>
			</ItemBox>
			<ItemBox>
				<TitleItem>START TIME JOIN</TitleItem>
				<ValueItem>10:00 UTC 10/08/2022</ValueItem>
			</ItemBox>
			<ItemBox>
				<TitleItem>End time JOIN</TitleItem>
				<ValueItem>10:00 UTC 19/08/2022</ValueItem>
			</ItemBox>
			<ItemBox>
				<TitleItem>required amount (min)</TitleItem>
				<ValueItem>-</ValueItem>
			</ItemBox>
			<ItemBox>
				<TitleItem>required amount (max)</TitleItem>
				<ValueItem>-</ValueItem>
			</ItemBox>
			<ItemBox>
				<TitleItem>REWARD</TitleItem>
				<ValueItem>Fitter Pass</ValueItem>
			</ItemBox>
			<Box
				mt="auto"
				width={'100%'}
				sx={{ paddingTop: '16px', borderTop: '1px solid #E9EAEF' }}
			>
				{walletAccount ? (
					<MarketplaceButton
						customStyle={{ width: '100%' }}
						disabled={true}
						title={'Connect Wallet'}
					/>
				) : (
					<MarketplaceButton
						customStyle={{ width: '100%' }}
						title={'Connect Wallet'}
						handleOnClick={() => {
							setToggleActivePopup(true);
						}}
					/>
				)}
			</Box>
		</Item>
	);
};
const ItemBox = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginTop: '25px',
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

const Item = styled(Paper)(({ theme }) => ({
	textAlign: 'center',
	width: '360px',
	boxShadow: 'none',
	display: 'flex',
	flexDirection: 'column',
	padding: '16px',
	borderRight: '1px solid #E9EAEF',
	'@media (max-width: 768px)': {
		width: '100%',
		marginBottom: '40px',
		borderBottom: '1px solid #E9EAEF',
		borderLeft: '1px solid #E9EAEF',
		height: '350px',
	},
}));

export default HeeExchange;
