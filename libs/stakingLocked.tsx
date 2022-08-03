import { ethers } from "ethers";
import { bftFiuTokenStaking, beFITTERStakeStaking, beFITTERlockedPool } from "./contracts";

export const approveStakingLocked = async (price: string, ethersSigner: any) => {
	const bftFiuTokenStakingContract = new ethers.Contract(bftFiuTokenStaking.address, bftFiuTokenStaking.abi, ethersSigner);
	const parsePrice = ethers.utils.parseUnits(price)
	const res = await bftFiuTokenStakingContract.approve(beFITTERlockedPool.address, parsePrice);
	return res.wait();
}


export const getAllUserStaking = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERlockedPoolContract = new ethers.Contract(beFITTERlockedPool.address, beFITTERlockedPool.abi, ethersSigner);
	const data = await beFITTERlockedPoolContract.getAllUserStaking(walletAccount);
	debugger
	return data
};
export const getMinimalStakingTime = async (blockNum: string, lockedTime: string, ethersSigner: any) => {
	const beFITTERlockedPoolContract = new ethers.Contract(beFITTERlockedPool.address, beFITTERlockedPool.abi, ethersSigner);
	const day = await beFITTERlockedPoolContract.getMinimalStakingTime(parseInt(blockNum), parseInt(lockedTime));
	return ethers.utils.formatUnits(day, 'wei');

}


export const stakeLocked = async (blockNum: string,
	lockedTime: string, ethersSigner: any) => {
	const beFITTERlockedPoolContract = new ethers.Contract(beFITTERlockedPool.address, beFITTERlockedPool.abi, ethersSigner);
	const res = await beFITTERlockedPoolContract.stake(parseInt(blockNum), parseInt(lockedTime))
	return res.wait();
}

export const getWithdrawableTime = async (stakeId: string, ethersSigner: any) => {
	const beFITTERlockedPoolContract = new ethers.Contract(beFITTERlockedPool.address, beFITTERlockedPool.abi, ethersSigner);
	const parseStakeId = ethers.utils.parseUnits(stakeId)
	const balance = await beFITTERlockedPoolContract.getWithdrawableTime(parseStakeId)
	// debugger
	return ethers.utils.formatUnits(balance, 'wei');
}
export const withDrawLocked = async (stakeId: number, ethersSigner: any) => {
	const beFITTERlockedPoolContract = new ethers.Contract(beFITTERlockedPool.address, beFITTERlockedPool.abi, ethersSigner);
	const res = await beFITTERlockedPoolContract.withdraw(stakeId)
	return res.wait();
}
export const getAllowanceStakingLocked = async (walletAddress: string, ethersSigner: any) => {
	const bftFiuTokenStakingContract = new ethers.Contract(bftFiuTokenStaking.address, bftFiuTokenStaking.abi, ethersSigner);
	const res = await bftFiuTokenStakingContract.allowance(walletAddress, beFITTERlockedPool.address);
	const convertAllowance = parseFloat(ethers.utils.formatUnits(res));
	return convertAllowance;
}

export const getBalanceLocked = async (ethersSigner: any) => {
	const beFITTERPassStakingContract = new ethers.Contract(bftFiuTokenStaking.address, bftFiuTokenStaking.abi, ethersSigner);
	const balance = await beFITTERPassStakingContract.balanceOf(beFITTERlockedPool.address)
	return ethers.utils.formatEther(balance)
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