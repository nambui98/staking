import { ethers } from "ethers";
import { bftBusdToken, bftShop, bftFiuTokenStaking, beFITTERPassStaking, beFITTERStakeStaking, bftHeetoken } from "./contracts";

export const getAllowanceBurnHee = async (walletAddress: string, ethersSigner: any) => {
	const bftFiuTokenStakingContract = new ethers.Contract(bftFiuTokenStaking.address, bftFiuTokenStaking.abi, ethersSigner);
	const res = await bftFiuTokenStakingContract.allowance(walletAddress, beFITTERStakeStaking.address);
	const convertAllowance = parseFloat(ethers.utils.formatUnits(res));
	return convertAllowance;
}

export const approveStakingFiu = async (ethersSigner: any) => {
	const bftFiuTokenStakingContract = new ethers.Contract(bftFiuTokenStaking.address, bftFiuTokenStaking.abi, ethersSigner);
	const parsePrice = ethers.constants.MaxUint256;
	const res = await bftFiuTokenStakingContract.approve(beFITTERStakeStaking.address, parsePrice);
	return res;
}

export const getBalanceMyHee = async (walletAccount: any, ethersSigner: any) => {
	const bftHeetokenContract = new ethers.Contract(bftHeetoken.address, bftHeetoken.abi, ethersSigner);
	const balance = await bftHeetokenContract.balanceOf(walletAccount)
	return ethers.utils.formatEther(balance)
};


export const getHistoriesBurnHee = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERlockedPoolContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const data = await beFITTERlockedPoolContract.getAllUserStaking(walletAccount);
	return data
};
export const getBalanceTotalInPool = async (ethersSigner: any) => {
	const beFITTERPassStakingContract = new ethers.Contract(bftFiuTokenStaking.address, bftFiuTokenStaking.abi, ethersSigner);
	const balance = await beFITTERPassStakingContract.balanceOf(bftFiuTokenStaking.address)
	return ethers.utils.formatEther(balance)
}

export const exchangeFitterPass = async (price: string, ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const parsePrice = ethers.utils.parseUnits(price)
	const res = await beFITTERStakeStakingContract.exchangeFitterPass(parsePrice)
	return res.wait();
}