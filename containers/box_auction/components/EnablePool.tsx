import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import React, { useState } from 'react';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { BoxAuction } from '../../../const';
import { MARKETPLACE_ICON } from '../../../constants/marketplace';
import { useWalletContext } from '../../../contexts/WalletContext';
import { setApprovalForAll } from '../../../libs/burn';

type Props = {
	setStateContent: Function;
	setIsLoading: Function;
	handleClickError: Function;
	handleClickSuccess: Function;
	// setStateContentInit: Function;
	stateContent: BoxAuction | null;
	isApproved: boolean;
};

export const EnablePool = (props: Props) => {
	const { setStateContent, setIsLoading, handleClickSuccess, handleClickError, isApproved } = props;
	const [error, setError] = useState<string>('')
	const { setToggleActivePopup, walletAccount, ethersSigner, setRefresh, refresh } =
		useWalletContext();

	const handleApprove = async () => {
		setIsLoading(true);
		try {
			const res = await setApprovalForAll(ethersSigner);
			setIsLoading(false)
			if (res?.status) {
				setError("")
				setRefresh(!refresh)
				setStateContent(BoxAuction.AssetsEvent);
			}
		} catch (error: any) {
			const message = error.reason || 'Something went wrong, please try again';
			setIsLoading(false);
			setError(message)
		}
	};
	if (error) {
		return <Box height={"100%"}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					height: 'calc(100% - 56px)'
				}}
			>
				<Box sx={{ textAlign: 'center' }}>
					<Box>
						<img src={MARKETPLACE_ICON.CLOSE_ICON} alt="" />
					</Box>
					<Typography fontSize={14} color="#31373E" fontWeight={500} mt="28px">
						{error}
					</Typography>
				</Box>
			</Box>
			<MarketplaceButton
				customStyle={{ width: '100%', mt: 'auto' }}
				title={'Try again'}
				handleOnClick={() => setError('')}
			/>
		</Box>
	}
	return (
		<>
			<ItemRow sx={{ mt: '0 !important' }}>
				<TitleItem>TOTAL AMOUNT</TitleItem>
				<ValueItem>Unlimited</ValueItem>
			</ItemRow>
			<ItemRow>
				<TitleItem>START TIME JOIN</TitleItem>
				<ValueItem>09:00 06/08/2022</ValueItem>
			</ItemRow>
			<ItemRow>
				<TitleItem>End time JOIN</TitleItem>
				<ValueItem>09:00 12/08/2022</ValueItem>
			</ItemRow>
			<ItemRow>
				<TitleItem>stake amount (min)</TitleItem>
				<ValueItem>-</ValueItem>
			</ItemRow>
			<ItemRow>
				<TitleItem>stake amount (mAX)</TitleItem>
				<ValueItem>-</ValueItem>
			</ItemRow>
			<ItemRow>
				<TitleItem>REWARD</TitleItem>
				<ValueItem>Mystery Box</ValueItem>
			</ItemRow>
			<Box
				mt="auto"
				width={'100%'}
				sx={{ paddingTop: '16px', borderTop: '1px solid #E9EAEF' }}
			>
				{walletAccount ? (
					<MarketplaceButton
						customStyle={{ width: '100%' }}
						title={isApproved ? 'Approved' : 'Approve'}
						handleOnClick={handleApprove}
						disabled={isApproved ? true : false}
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
		</>
	);
};

const ItemRow = styled(Box)({
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
