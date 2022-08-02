import React, { useEffect, useState } from 'react'
import { StateStaking, StateStakingLocked } from '../../const';
import { changeNetwork, useWalletContext } from '../../contexts/WalletContext';
import { getAllowanceStakingFiu, } from '../staking';
import { getAllowanceStakingLocked, getAllUserStaking } from '../stakingLocked';
type Props = {
	setIsLoading: Function;
	setStateContentInitLocked: Function
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
	fpNum: number
}
export default function lockedHook(props: Props) {
	const { setIsLoading, setStateContentInitLocked } = props;
	const [statusRow, setStatusRow] = useState('-');
	const [dataMyStakingLock, setDataMyStakingLock] = useState<row[]>();
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
		if (walletAccount) {
			const allowance = await getAllowanceStakingLocked(
				walletAccount,
				ethersSigner
			);
			// setIsLoading(false);
			console.log(allowance);
			debugger
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
	const getAllUserS = async () => {
		// setIsLoading(true);
		if (!chainIdIsSupported) {
			await changeNetwork(provider);
		}
		if (walletAccount) {
			const data = await getAllUserStaking(
				walletAccount,
				ethersSigner
			);
			setDataMyStakingLock(convertData(data));
			console.log(convertData(data));
			debugger
			if (data.length > 0) {
				setStateContentInitLocked(StateStakingLocked.LockedList);
			}
		} else {
			// setIsLoading(false);
		}
	};
	const getAll = async () => {
		setIsLoading(true);
		await Promise.all([
			getAllowance(),
			getAllUserS()
		]);
		setIsLoading(false);
	};
	useEffect(() => {
		getAll();
	}, [walletAccount, refresh, ethersSigner]);
	useEffect(() => {
		if (walletAccount) {
			setStateContentInitLocked(StateStakingLocked.LockedStakeProcess)
		} else {
			setStateContentInitLocked(StateStakingLocked.Locked)
		}
	}, [
		walletAccount,
	]);

	return {
		isEnable,
		dataMyStakingLock
	}
}

