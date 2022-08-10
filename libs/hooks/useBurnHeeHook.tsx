import React, { useEffect, useState } from 'react'
import { StateBurnHEE } from '../../const';
import { changeNetwork, useWalletContext } from '../../contexts/WalletContext';
import { getAllowanceBurnHee, getBalanceMyHee, getTotalTokenIn, getUserExchanges, getUserTokenOut } from '../burnHee';
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
	id: number,
	numberOfPass: number,
	timestamp: number | string,
	tokenAmount: number,
}
export default function userBurnHeeHook(props: Props) {
	const { setIsLoading, setStateContent } = props;
	const [isApprovedBurn, setIsApprovedBurn] = useState<boolean>(false);
	const [allowance, setAllowance] = useState<number>(0);

	const [balanceHee, setBalanceHee] = useState('');
	const [statusRow, setStatusRow] = useState('-');
	const [dataMyBurned, setDataMyBurned] = useState<row[]>();
	const [totalInPool, setTotalInPool] = useState("0");
	const [earned, setEarned] = useState("0");
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
			const allowance = await getAllowanceBurnHee(
				walletAccount,
				ethersSigner
			);
			if (allowance > 0) {
				debugger
				setIsApprovedBurn(true);
				setAllowance(allowance);

			} else {
				setIsApprovedBurn(false);
				setAllowance(0);
			}
		} else {
		}
	};
	const getHistoriesBurnHee = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			const data = await getUserExchanges(
				walletAccount,
				ethersSigner
			);
			setDataMyBurned(convertData(data));
			if (data.length > 0) {
				setStateContent(StateBurnHEE.HeeExchangeHistories);
			}
		} else {
		}
	};
	const getBalanceTotalInPool = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (ethersSigner) {
			const data = await getTotalTokenIn(ethersSigner);
			setTotalInPool(data);
		} else {
			setTotalInPool('0');
		}

	};
	const getFitterPassEarned = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (ethersSigner && walletAccount) {
			const data = await getUserTokenOut(walletAccount, ethersSigner);
			setEarned(data);
		} else {
			setEarned('0')
		}

	};
	const getBalanceHee = async () => {
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount && ethersSigner) {
			const balance = await getBalanceMyHee(walletAccount, ethersSigner);
			setBalanceHee(balance);
		} else {
			setBalanceHee('0');
		}
	};
	const getAll = async () => {
		setIsLoading(true);
		await Promise.all([
			getAllowance(),
			getHistoriesBurnHee(),
			getBalanceTotalInPool(),
			getFitterPassEarned(),
			getBalanceHee()
		]);
		setIsLoading(false);
	};
	useEffect(() => {
		getAll();

	}, [walletAccount, refresh, ethersSigner]);
	useEffect(() => {
		if (walletAccount) {
			setStateContent(StateBurnHEE.HeeExchangeFill);
		} else {
			setStateContent(StateBurnHEE.HeeExchange);
		}
	}, [walletAccount])

	return {
		isApprovedBurn,
		dataMyBurned,
		totalInPool,
		balanceHee,
		earned,
		allowance
	}
}

