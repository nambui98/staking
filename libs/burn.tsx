import { ethers } from "ethers";
import { bftFiuTokenStaking, beFITTERlockedPool, beFITTERPassStaking, beFITTERBurningEvent } from "./contracts";

export const setApprovalForAll = async (ethersSigner: any) => {
	const beFITTERPassStakingContract = new ethers.Contract(beFITTERPassStaking.address, beFITTERPassStaking.abi, ethersSigner);
	const res = await beFITTERPassStakingContract.setApprovalForAll(beFITTERBurningEvent.address, false);
	return res.wait();
}


export const isApprovedForAll = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERPassStakingContract = new ethers.Contract(beFITTERPassStaking.address, beFITTERPassStaking.abi, ethersSigner);
	const data = await beFITTERPassStakingContract.isApprovedForAll(walletAccount, beFITTERBurningEvent.address);
	debugger
	return data
};
export const register = async (ethersSigner: any) => {
	const beFITTERBurningEventContract = new ethers.Contract(beFITTERBurningEvent.address, beFITTERBurningEvent.abi, ethersSigner);
	const data = await beFITTERBurningEventContract.register();
	debugger
	return data
};
export const isRegistered = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERBurningEventContract = new ethers.Contract(beFITTERBurningEvent.address, beFITTERBurningEvent.abi, ethersSigner);
	const data = await beFITTERBurningEventContract.isRegistered(walletAccount);
	debugger
	return data
};
export const addFitterPass = async (value: string, ethersSigner: any) => {
	const beFITTERBurningEventContract = new ethers.Contract(beFITTERBurningEvent.address, beFITTERBurningEvent.abi, ethersSigner);
	const data = await beFITTERBurningEventContract.addFitterPass(parseInt(value));
	debugger
	return data
};


// export const getMinimalStakingTime = async (blockNum: string, lockedTime: string, ethersSigner: any) => {
// 	const beFITTERlockedPoolContract = new ethers.Contract(beFITTERlockedPool.address, beFITTERlockedPool.abi, ethersSigner);
// 	const day = await beFITTERlockedPoolContract.getMinimalStakingTime(parseInt(blockNum), parseInt(lockedTime));
// 	return ethers.utils.formatUnits(day, 'wei');

// }


// export const stakeLocked = async (blockNum: string,
// 	lockedTime: string, ethersSigner: any) => {
// 	const beFITTERlockedPoolContract = new ethers.Contract(beFITTERlockedPool.address, beFITTERlockedPool.abi, ethersSigner);
// 	const res = await beFITTERlockedPoolContract.stake(parseInt(blockNum), parseInt(lockedTime))
// 	return res.wait();
// }

// export const getWithdrawableTime = async (stakeId: string, ethersSigner: any) => {
// 	const beFITTERlockedPoolContract = new ethers.Contract(beFITTERlockedPool.address, beFITTERlockedPool.abi, ethersSigner);
// 	const parseStakeId = ethers.utils.parseUnits(stakeId)
// 	const balance = await beFITTERlockedPoolContract.getWithdrawableTime(parseStakeId)
// 	// debugger
// 	return ethers.utils.formatUnits(balance, 'wei');
// }
// export const withDrawLocked = async (stakeId: number, ethersSigner: any) => {
// 	const beFITTERlockedPoolContract = new ethers.Contract(beFITTERlockedPool.address, beFITTERlockedPool.abi, ethersSigner);
// 	const res = await beFITTERlockedPoolContract.withdraw(stakeId)
// 	return res.wait();
// }
// export const getAllowanceStakingLocked = async (walletAddress: string, ethersSigner: any) => {
// 	const bftFiuTokenStakingContract = new ethers.Contract(bftFiuTokenStaking.address, bftFiuTokenStaking.abi, ethersSigner);
// 	const res = await bftFiuTokenStakingContract.allowance(walletAddress, beFITTERlockedPool.address);
// 	const convertAllowance = parseFloat(ethers.utils.formatUnits(res));
// 	return convertAllowance;
// }

export const balanceOf = async (ethersSigner: any) => {
	const beFITTERPassStakingContract = new ethers.Contract(bftFiuTokenStaking.address, bftFiuTokenStaking.abi, ethersSigner);
	const balance = await beFITTERPassStakingContract.balanceOf(beFITTERBurningEvent.address)
	debugger
	return ethers.utils.formatEther(balance)
}
export const getBalanceFP = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERPassStakingContract = new ethers.Contract(beFITTERPassStaking.address, beFITTERPassStaking.abi, ethersSigner);
	const balance = await beFITTERPassStakingContract.balanceOf(walletAccount, 0)
	// debugger
	return ethers.utils.formatUnits(balance, 'wei');
}
export const getNumberOfFP = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERBurningEventContract = new ethers.Contract(beFITTERBurningEvent.address, beFITTERBurningEvent.abi, ethersSigner);
	const balance = await beFITTERBurningEventContract.getNumberOfFitterPass(walletAccount)
	// debugger
	return ethers.utils.formatUnits(balance, 'wei');
}
export const configStakingLocked = {
	valueTokenBlock: 40000,
	valueEstimated: 0.8,
	minWithDrawTime: 3,
	maxWithDrawTime: 30,
	maxEarningPass: 31,
	blockNum: 8,
	minLockedTime: 3,
	delayTime: 7,
}