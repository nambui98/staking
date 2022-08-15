import React, { useEffect, useState } from 'react'
import { StateStaking } from '../../const';
import { changeNetwork, useWalletContext } from '../../contexts/WalletContext';
import { getAllowanceStakingFiu, getBalanceFiuStaking, getCurrentProfit, getRemainingDelayTime, getStakingAmount, getStakingStatus, getTotalStakingToken, getUnstakeAmount, toClaimableTime } from '../staking';
type Props = {
	setIsLoading: Function;
	setStateContentInit: Function
};

export default function userStakingHook(props: Props) {
	const { setIsLoading, setStateContentInit } = props;

	const [balanceFiu, setBalanceFiu] = useState('');
	const [balanceSA, setBalanceSA] = useState('');
	const [balanceCP, setBalanceCP] = useState('');
	const [balanceUS, setBalanceUS] = useState('');
	const [claimableTime, setClaimableTime] = useState('');
	const [remainingDelayTime, setRemainingDelayTime] = useState('');
	const [totalStakingToken, setTotalStakingToken] = useState('');
	const [statusRow, setStatusRow] = useState('-');
	const [isEnable, setIsEnable] = useState<boolean>(false);
	const {
		setToggleActivePopup,
		walletAccount,
		ethersSigner,
		ethersProvider,
		chainIdIsSupported,
		provider,
		refresh,
	} = useWalletContext();

	const getAllowance = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			const allowance = await getAllowanceStakingFiu(
				walletAccount,
				ethersSigner
			);
			// setIsLoading(false);
			if (allowance > 0) {
				// setStateContentInit(StateStaking.EnablePool);
				setIsEnable(true);
				// setTabCurrent(1);
			} else {
				// setTabCurrent(0);
				setIsEnable(false);
			}
		} else {
			// setIsLoading(false);
		}
	};
	const getBalanceFiu = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			const balance = await getBalanceFiuStaking(walletAccount, ethersSigner);
			setBalanceFiu(balance);
		} else {
			setBalanceFiu('0');
			// setIsLoading(false);
		}
	};
	const getBalanceSA = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			debugger

			const balance = await getStakingAmount(walletAccount, ethersSigner);
			setBalanceSA(balance);
		} else {
			setBalanceSA('0');
			// setIsLoading(false);
		}
	};
	const getBalanceCP = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			const balance = await getCurrentProfit(walletAccount, ethersSigner);
			setBalanceCP(balance);
		} else {
			setBalanceCP('0');
			// setIsLoading(false);
		}
	};
	const getUnstakeA = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			const balance = await getUnstakeAmount(walletAccount, ethersSigner);

			setBalanceUS(balance);
		} else {
			setBalanceUS('0');
			// setIsLoading(false);
		}
	};
	const toClaimableT = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			const balance = await toClaimableTime(walletAccount, ethersSigner);
			setClaimableTime(balance);
		} else {
			// setIsLoading(false);
		}
	};
	const getRemainingDelayT = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			const balance = await getRemainingDelayTime(walletAccount, ethersSigner);
			setRemainingDelayTime(balance);
		} else {
		}
	};
	const getTotalStakingT = async () => {
		setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (ethersSigner) {
			const balance = await getTotalStakingToken(ethersSigner);
			setTotalStakingToken(balance);
		} else {
			setTotalStakingToken('0');
			setIsLoading(false);
		}
	};
	// const statusMap ={
	// 	0:'-',
	// 	1:'STAKING',
	// }
	const getStakingS = async () => {
		setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (ethersSigner && walletAccount) {
			const status = await getStakingStatus(walletAccount, ethersSigner);
			if (parseInt(status) === 0) {
				setStatusRow('-');
			} else if (parseInt(status) === 1) {
				setStatusRow('STAKING');
			} else {
				setStatusRow('UNSTAKED');
			}
			// debugger
			// setStatusRow('STAKING')
		} else {
			setStatusRow('-');
		}
	};
	const getAll = async () => {
		setIsLoading(true);
		await Promise.all([
			// getStakingS(),
			getAllowance(),
			getBalanceFiu(),
			getBalanceSA(),
			getBalanceCP(),
			getUnstakeA(),
			toClaimableT(),
			getRemainingDelayT(),
		]);
		setIsLoading(false);
	};
	useEffect(() => {
		getAll();
		getTotalStakingT();
	}, [walletAccount, refresh, ethersSigner]);
	console.log(balanceUS);
	useEffect(() => {
		if (parseFloat(balanceSA) > 0 || parseFloat(balanceUS) > 0 || parseFloat(balanceCP) > 0) {
			setStateContentInit(StateStaking.Staked);
		} else {
			if (isEnable) {
				setStateContentInit(StateStaking.StakeProcess);
			} else {
				setStatusRow('-');
				setStateContentInit(StateStaking.EnablePool);
			}
		}
	}, [
		balanceFiu,
		balanceSA,
		balanceCP,
		balanceUS,
		claimableTime,
		walletAccount,
	]);

	return {
		balanceFiu,
		balanceSA,
		balanceCP,
		balanceUS,
		isEnable,
		totalStakingToken,
		claimableTime,
		remainingDelayTime,
		statusRow
	}
}
