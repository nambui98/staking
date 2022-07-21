import { ethers } from "ethers";
import { bftBusdToken, bftShop, bftFiuTokenStaking, beFITTERPassStaking, beFITTERStakeStaking } from "./contracts";

export const getBoxPrice = async (boxType: string, ethersSigner: any) => {
	const shopContract = new ethers.Contract(bftShop.address, bftShop.abi, ethersSigner);
	const res = await shopContract.getBoxPrice(boxType, bftBusdToken.address);
	const convertPrice = parseFloat(ethers.utils.formatUnits(res));
	return convertPrice;
}

export const getAllowanceStakingFiu = async (walletAddress: string, ethersSigner: any) => {
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
export const purchaseBox = async (boxType: string, ethersSigner: any) => {
	const shopContract = new ethers.Contract(bftShop.address, bftShop.abi, ethersSigner);
	const res = await shopContract.purchaseBoxByToken(boxType, bftBusdToken.address);
	return res;
}
export const getBalanceFiuStaking = async (walletAccount: any, ethersSigner: any) => {
	const bftFiuTokenStakingContract = new ethers.Contract(bftFiuTokenStaking.address, bftFiuTokenStaking.abi, ethersSigner);

	const balance = await bftFiuTokenStakingContract.balanceOf(walletAccount)
	return ethers.utils.formatEther(balance)
};
export const getBalanceStaked = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const balance = await beFITTERStakeStakingContract.balanceOf(walletAccount)
	return ethers.utils.formatEther(balance)
};
export const getBalancePass = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERPassStakingContract = new ethers.Contract(beFITTERPassStaking.address, beFITTERPassStaking.abi, ethersSigner);
	const balance = await beFITTERPassStakingContract.balanceOf(walletAccount)
	return ethers.utils.formatEther(balance)
}
export const getStakingAmount = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const balance = await beFITTERStakeStakingContract.getStakingAmount(walletAccount)
	return ethers.utils.formatEther(balance)
}
export const getCurrentProfit = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const balance = await beFITTERStakeStakingContract.getCurrentProfit(walletAccount)
	// debugger
	return ethers.utils.formatUnits(balance, 'wei');
}
export const getUnstakeAmount = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const balance = await beFITTERStakeStakingContract.getUnstakeAmount(walletAccount)
	return ethers.utils.formatEther(balance)
}

export const stake = async (price: string, ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const parsePrice = ethers.utils.parseUnits(price)
	const res = await beFITTERStakeStakingContract.stake(parsePrice)
	return res;
}
export const unStake = async (price: string, ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const parsePrice = ethers.utils.parseUnits(price)
	const res = await beFITTERStakeStakingContract.unstake(parsePrice)
	return res;
}
export const toClaimableTime = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const balance = await beFITTERStakeStakingContract.getClaimableTime(walletAccount)
	// debugger
	return ethers.utils.formatUnits(balance, 'wei');
}
export const getRemainingDelayTime = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const balance = await beFITTERStakeStakingContract.getRemainingDelayTime(walletAccount)
	// debugger
	return ethers.utils.formatUnits(balance, 'wei');
}
export const withDraw = async (ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const res = await beFITTERStakeStakingContract.withdrawStakingToken();
	return res;
}
export const claimReward = async (ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const res = await beFITTERStakeStakingContract.claimReward();
	return res;
}
export const getTotalStakingToken = async (ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const balance = await beFITTERStakeStakingContract.getTotalStakingToken();
	return ethers.utils.formatEther(balance)
}
export const getStakingStatus = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERStakeStakingContract = new ethers.Contract(beFITTERStakeStaking.address, beFITTERStakeStaking.abi, ethersSigner);
	const balance = await beFITTERStakeStakingContract.getStakingStatus(walletAccount)
	console.log("aaaa" + ethers.utils.formatUnits(balance, 'wei'));
	return ethers.utils.formatUnits(balance, 'wei');

}