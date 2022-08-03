import { Box, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import React, { useState } from 'react';
import { MarketplaceButton } from '../../../components/buttons/MarketplaceButton';
import { BoxAuction } from '../../../const';
import { useWalletContext } from '../../../contexts/WalletContext';
import { setApprovalForAll } from '../../../libs/burn';

type Props = {
	setStateContent: Function;
	setIsLoading: Function;
	handleClickError: Function;
	handleClickSuccess: Function;
	// setStateContentInit: Function;
	stateContent: BoxAuction | null;
};

export const EnablePool = (props: Props) => {
	const { setStateContent, stateContent, setIsLoading, handleClickSuccess, handleClickError } = props;
	const { setToggleActivePopup, walletAccount, ethersSigner, ethersProvider, setRefresh, refresh } =
		useWalletContext();

	const handleApprove = async () => {
		setIsLoading(true);
		try {
			const res = await setApprovalForAll(ethersSigner);
			setIsLoading(false)
			if (res?.status) {
				setRefresh(!refresh)
				setStateContent(BoxAuction.AssetsEvent);
			}
		} catch (error: any) {
			const message = error.reason || 'Something went wrong, please try again';
			setIsLoading(false);
			handleClickError({
				titleError: message,
				functionError: () => {
					setStateContent(BoxAuction.EnablePool);
				},
				stateContentNew: BoxAuction.Error,
			});
		}
	};
	return (
		<>
			<ItemRow sx={{ mt: '0 !important' }}>
				<TitleItem>TOTAL AMOUNT</TitleItem>
				<ValueItem>Unlimited</ValueItem>
			</ItemRow>
			<ItemRow>
				<TitleItem>START TIME JOIN</TitleItem>
				<ValueItem>16:00 UTC 19/07/2022</ValueItem>
			</ItemRow>
			<ItemRow>
				<TitleItem>End time JOIN</TitleItem>
				<ValueItem>16:00 UTC 03/08/2022</ValueItem>
			</ItemRow>
			<ItemRow>
				<TitleItem>stake amount (min)</TitleItem>
				<ValueItem>4000 FIU/1 person</ValueItem>
			</ItemRow>
			<ItemRow>
				<TitleItem>stake amount (mAX)</TitleItem>
				<ValueItem>-</ValueItem>
			</ItemRow>
			<ItemRow>
				<TitleItem>REWARD</TitleItem>
				<ValueItem>Fitter Pass</ValueItem>
			</ItemRow>
			<Box
				mt="auto"
				width={'100%'}
				sx={{ paddingTop: '16px', borderTop: '1px solid #E9EAEF' }}
			>
				{walletAccount ? (
					<MarketplaceButton
						customStyle={{ width: '100%' }}
						title={stateContent ? 'Approved' : 'Approve'}
						handleOnClick={handleApprove}
						disabled={stateContent ? true : false}
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
