import { useEffect, useState } from 'react';
import { BoxAuction } from '../../const';
import { changeNetwork, useWalletContext } from '../../contexts/WalletContext';
import { balanceOf, getBalanceFP, getNumberOfFP, isApprovedForAll, isRegistered } from '../burn';
type Props = {
	setIsLoading: Function;
	setStateContentInit: Function
};

export default function userBurnHook(props: Props) {
	const { setIsLoading, setStateContentInit } = props;

	const [totalStake, setTotalStake] = useState('');
	const [balanceFT, setBalanceFT] = useState('');
	const [numberBurned, setNumberBurned] = useState('');
	const [statusRow, setStatusRow] = useState('-');
	const [isEnable, setIsEnable] = useState<boolean>(false);
	const {
		walletAccount,
		ethersSigner,
		chainIdIsSupported,
		provider,
		refresh,
	} = useWalletContext();

	const isApprovedGet = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount) {
			const isApproved = await isApprovedForAll(
				walletAccount,
				ethersSigner
			);
			if (isApproved) {
				setIsEnable(true);
			} else {
				setIsEnable(false);
			}
		}
	};
	const isRegisteredGet = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount) {
			const checkIsRegistered = await isRegistered(
				walletAccount,
				ethersSigner
			);
			if (checkIsRegistered) {
				setStatusRow('Joined')
				setStateContentInit(BoxAuction.BurnAssets)
			} else {
				setStateContentInit(BoxAuction.AssetsEvent)
				setStatusRow('Not join yet')
			}
		}
	};
	const totalStakeGet = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount) {
			const balance = await balanceOf(ethersSigner);
			setTotalStake(balance);
		} else {
			setTotalStake('0');
		}
	};
	const getBalanceFitterPass = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount) {
			const balance = await getBalanceFP(walletAccount, ethersSigner);
			setBalanceFT(balance);
		} else {
			setBalanceFT('0');
		}
	};
	const getNumberOfFitterPass = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount) {
			const balance = await getNumberOfFP(walletAccount, ethersSigner);
			setNumberBurned(balance);
		} else {
			setNumberBurned('0');
		}
	};

	const getAll = async () => {
		setIsLoading(true);
		await Promise.all([
			isApprovedGet(),
			isRegisteredGet(),
			getBalanceFitterPass(),
			getNumberOfFitterPass(),
		]);
		setIsLoading(false);
	};
	useEffect(() => {
		totalStakeGet();
		getAll();
	}, [walletAccount, refresh, ethersSigner]);

	return {
		totalStake,
		balanceFT,
		numberBurned,
		isEnable,
		statusRow
	}
}
