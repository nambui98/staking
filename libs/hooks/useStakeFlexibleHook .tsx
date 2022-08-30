import React, { useEffect, useState } from 'react'
import { StateStaking } from '../../const';
import { changeNetwork, useWalletContext } from '../../contexts/WalletContext';
import { getAllowanceStakingFiu, getBalanceFiuStaking, getCurrentProfit, getRemainingDelayTime, getStakingAmount, getStakingStatus, getTotalStakingToken, getUnstakeAmount, toClaimableTime, walletError } from '../flexible2';
type Props = {
	setIsLoading: Function;
	setStateContentInitFlexible2: Function
};

export default function useStakeFlexibleHook(props: Props) {
	const { setIsLoading, setStateContentInitFlexible2 } = props;

	const [balanceFiuFlexible2, setBalanceFiuFlexible2] = useState('');
	const [balanceSAFlexible2, setBalanceSAFlexible2] = useState('');
	const [balanceCPFlexible2, setBalanceCPFlexible2] = useState('');
	const [balanceUSFlexible2, setBalanceUSFlexible2] = useState('');
	const [claimableTimeFlexible2, setClaimableTimeFlexible2] = useState('');
	const [remainingDelayTimeFlexible2, setRemainingDelayTimeFlexible2] = useState('');
	const [totalStakingTokenFlexible2, setTotalStakingTokenFlexible2] = useState('');
	const [statusRowFlexible2, setStatusRowFlexible2] = useState('-');
	const [isEnableFlexible2, setIsEnableFlexible2] = useState<boolean>(false);
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
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			const allowance = await getAllowanceStakingFiu(
				walletAccount,
				ethersSigner
			);
			debugger
			if (allowance > 0) {
				setIsEnableFlexible2(true);
			} else {
				setIsEnableFlexible2(false);
			}
		} else {
		}
	};
	const getBalanceFiu = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			const balance = await getBalanceFiuStaking(walletAccount, ethersSigner);
			setBalanceFiuFlexible2(balance);
		} else {
			setBalanceFiuFlexible2('0');
		}
	};
	const getBalanceSA = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			let balance = await getStakingAmount(walletAccount, ethersSigner);
			setBalanceSAFlexible2(balance);
		} else {
			setBalanceSAFlexible2('0');
		}
	};
	const getBalanceCP = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			let balance = await getCurrentProfit(walletAccount, ethersSigner);

			setBalanceCPFlexible2(balance);
		} else {
			setBalanceCPFlexible2('0');
		}
	};
	const getUnstakeA = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			let balance = await getUnstakeAmount(walletAccount, ethersSigner);

			setBalanceUSFlexible2(balance);
		} else {
			setBalanceUSFlexible2('0');
		}
	};
	const toClaimableT = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			let balance = await toClaimableTime(walletAccount, ethersSigner);

			setClaimableTimeFlexible2(balance);
		} else {
		}
	};
	const getRemainingDelayT = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			let balance = await getRemainingDelayTime(walletAccount, ethersSigner);

			setRemainingDelayTimeFlexible2(balance);
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
			setTotalStakingTokenFlexible2(balance);
		} else {
			setTotalStakingTokenFlexible2('0');
			setIsLoading(false);
		}
	};
	const getStakingS = async () => {
		setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (ethersSigner && walletAccount) {
			let status = await getStakingStatus(walletAccount, ethersSigner);
			debugger
			if (parseInt(status) === 0) {
				setStatusRowFlexible2('-');
			} else if (parseInt(status) === 1) {
				setStatusRowFlexible2('STAKING');
			} else {
				setStatusRowFlexible2('UNSTAKED');
			}
		} else {
			setStatusRowFlexible2('-');
		}
	};
	const getAll = async () => {
		setIsLoading(true);
		await Promise.all([
			getStakingS(),
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

	useEffect(() => {
		if (parseFloat(balanceSAFlexible2) > 0 || parseFloat(balanceUSFlexible2) > 0 || parseFloat(balanceCPFlexible2) > 0) {
			setStateContentInitFlexible2(StateStaking.Staked);
		} else {
			debugger
			if (isEnableFlexible2) {
				setStateContentInitFlexible2(StateStaking.StakeProcess);
			} else {
				setStatusRowFlexible2('-');
				setStateContentInitFlexible2(StateStaking.EnablePool);
			}
		}
	}, [
		balanceFiuFlexible2,
		balanceSAFlexible2,
		balanceCPFlexible2,
		balanceUSFlexible2,
		claimableTimeFlexible2,
		walletAccount,
		isEnableFlexible2
	]);

	return {
		balanceFiuFlexible2,
		balanceSAFlexible2,
		balanceCPFlexible2,
		balanceUSFlexible2,
		isEnableFlexible2,
		totalStakingTokenFlexible2,
		claimableTimeFlexible2,
		remainingDelayTimeFlexible2,
		statusRowFlexible2,
	}
}
