import React, { useEffect, useState } from 'react'
import { StateBurnHEE } from '../../const';
import { changeNetwork, useWalletContext } from '../../contexts/WalletContext';
import { getAllowanceBurnHee, getBalanceMyHee, getBalanceTotalInPool, getHistoriesBurnHee } from '../burnHee';
type Props = {
	setIsLoading: Function;
	setStateContent: Function
};
export function convertData(data: any[]) {
	const newData = data.map((item: any) => {
		const objItem: any = {};
		const keys = Object.keys(item);
		for (let i = 0; i < keys.length; i++) {
			let value;
			if (isNaN(parseInt(keys[i]))) {
				if (typeof item[keys[i]] !== "string") {
					value = parseInt(item[keys[i]]._hex);
				} else {
					value = item[keys[i]];
				}
				objItem[keys[i]] = value;
			}
		}
		return objItem;
	})
	return newData;
}

export const convertBigNumber = (number: any) => {
	if (Math.abs(number) < 1.0) {
		var e = parseInt(number.toString().split('e-')[1]);
		if (e) {
			number *= Math.pow(10, e - 1);
			number = '0.' + (new Array(e)).join('0') + number.toString().substring(2);
		}
	} else {
		var e = parseInt(number.toString().split('+')[1]);
		if (e > 20) {
			e -= 20;
			number /= Math.pow(10, e);
			number += (new Array(e + 1)).join('0');
		}
	}
	return number.toString();
}
export type row = {
	sId: number,
	lockedTime: number,
	numberOfBlocks: number,
	stakingTime: number | string,
	tokenAmount: number,
	fpNum: number,
	withdrawn: number
}
export default function userBurnHeeHook(props: Props) {
	const { setIsLoading, setStateContent } = props;
	const [isApproved, setIsApproved] = useState<boolean>(false);

	const [balanceHee, setBalanceHee] = useState('');
	const [statusRow, setStatusRow] = useState('-');
	const [dataMyBurn, setDataMyBurn] = useState<row[]>();
	const [totalInPool, setTotalInPool] = useState("0");
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
		if (walletAccount) {
			const allowance = await getAllowanceBurnHee(
				walletAccount,
				ethersSigner
			);
			console.log(allowance);
			// debugger
			if (allowance > 0) {
				setIsApproved(true);
			} else {
				setIsApproved(false);
			}
		} else {
		}
	};
	const getAllUserS = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount) {
			const data = await getHistoriesBurnHee(
				walletAccount,
				ethersSigner
			);
			setDataMyBurn(convertData(data));
			console.log(convertData(data));
			// debugger
			if (data.length > 0) {
				setStateContent(StateBurnHEE.HeeExchangeHistories);
			}
		} else {
		}
	};
	const getBalance = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (ethersSigner) {
			const data = await getBalanceTotalInPool(
				ethersSigner
			);
			setTotalInPool(data);
		}

	};
	const getBalanceHee = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount) {
			const balance = await getBalanceMyHee(walletAccount, ethersSigner);
			setBalanceHee(balance);
		} else {
			setBalanceHee('0');
			// setIsLoading(false);
		}
	};
	const getAll = async () => {
		setIsLoading(true);
		await Promise.all([
			// getAllowance(),
			// getAllUserS(),
			// getBalance(),
			getBalanceHee()
		]);
		setIsLoading(false);
	};
	useEffect(() => {
		getAll();
	}, [walletAccount, refresh, ethersSigner]);

	// useEffect(() => {
	// 	if (walletAccount) {
	// 		setStateContent(StateBurnHEE.HeeExchangeFill)
	// 	} else {
	// 		setStateContent(StateBurnHEE.HeeExchange)
	// 	}
	// }, [
	// 	walletAccount,

	// ]);

	return {
		isApproved,
		dataMyBurn,
		totalInPool,
		balanceHee
	}
}

