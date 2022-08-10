import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react'
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton'
import { StateBurnHEE } from '../../../const';
import { useWalletContext } from '../../../contexts/WalletContext';

type Props = {

}

const HeeExchange = (props: Props) => {
	const { setToggleActivePopup, walletAccount, ethersSigner, ethersProvider } = useWalletContext();
	return (
		<>
			<Item>
				<TitleItem>TOTAL AMOUNT</TitleItem>
				<ValueItem>Unlimited</ValueItem>
			</Item>
			<Item>
				<TitleItem >START TIME JOIN</TitleItem>
				<ValueItem>00:00 UTC 10/08/2022</ValueItem>
			</Item>
			<Item>
				<TitleItem >End time JOIN</TitleItem>
				<ValueItem>00:00 UTC 19/08/2022</ValueItem>
			</Item>
			<Item>
				<TitleItem >required amount (min)</TitleItem>
				<ValueItem>-</ValueItem>
			</Item>
			<Item>
				<TitleItem >required amount (max)</TitleItem>
				<ValueItem>-</ValueItem>
			</Item>
			<Item>
				<TitleItem >REWARD</TitleItem>
				<ValueItem>
					Fitter Pass
				</ValueItem>
			</Item>
			<Box mt="auto" width={"100%"} sx={{ paddingTop: "16px", borderTop: "1px solid #E9EAEF" }}>
				<MarketplaceButton customStyle={{ width: "100%" }} title={"Connect Wallet"} handleOnClick={() => { setToggleActivePopup(true) }} />
			</Box>
		</>
	)
}
const Item = styled(Box)({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginTop: "25px"
})
const TitleItem = styled(Typography)({
	fontSize: "12px",
	color: "#898E9E",
	fontWeight: "500",
	lineHeight: "18px",
	textTransform: "uppercase"
})
const ValueItem = styled(Typography)({
	fontSize: "12px",
	color: "#31373E",
	fontWeight: "500",
	lineHeight: "18px"
})
export default HeeExchange