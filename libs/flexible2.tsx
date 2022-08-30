import { ethers } from "ethers";
import { bftBusdToken, bftShop, bftFiuTokenStaking, beFITTERPassStaking, beFITTERFlexible2, beFITTERStakeUserError } from "./contracts";


export const getAllowanceStakingFiu = async (walletAddress: string, ethersSigner: any) => {
	const bftFiuTokenStakingContract = new ethers.Contract(bftFiuTokenStaking.address, bftFiuTokenStaking.abi, ethersSigner);
	const res = await bftFiuTokenStakingContract.allowance(walletAddress, beFITTERFlexible2.address);
	const convertAllowance = parseFloat(ethers.utils.formatUnits(res));
	debugger
	return convertAllowance;
}

export const approveFlexible2 = async (ethersSigner: any) => {
	const bftFiuTokenStakingContract = new ethers.Contract(bftFiuTokenStaking.address, bftFiuTokenStaking.abi, ethersSigner);
	const parsePrice = ethers.constants.MaxUint256;
	const res = await bftFiuTokenStakingContract.approve(beFITTERFlexible2.address, parsePrice);
	return res;
}

export const getBalanceFiuStaking = async (walletAccount: any, ethersSigner: any) => {
	const bftFiuTokenStakingContract = new ethers.Contract(bftFiuTokenStaking.address, bftFiuTokenStaking.abi, ethersSigner);

	const balance = await bftFiuTokenStakingContract.balanceOf(walletAccount)
	return ethers.utils.formatEther(balance)
};

export const getBalancePass = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERPassStakingContract = new ethers.Contract(beFITTERPassStaking.address, beFITTERPassStaking.abi, ethersSigner);
	const balance = await beFITTERPassStakingContract.balanceOf(walletAccount)
	return ethers.utils.formatEther(balance)
}
export const getStakingAmount = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERFlexible2Contract = new ethers.Contract(beFITTERFlexible2.address, beFITTERFlexible2.abi, ethersSigner);
	const balance = await beFITTERFlexible2Contract.getStakingAmount(walletAccount)
	return ethers.utils.formatEther(balance)
}
export const getCurrentProfit = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERFlexible2Contract = new ethers.Contract(beFITTERFlexible2.address, beFITTERFlexible2.abi, ethersSigner);
	const balance = await beFITTERFlexible2Contract.getCurrentProfit(walletAccount)
	// debugger
	return ethers.utils.formatUnits(balance, 'wei');
}
export const getUnstakeAmount = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERFlexible2Contract = new ethers.Contract(beFITTERFlexible2.address, beFITTERFlexible2.abi, ethersSigner);
	const balance = await beFITTERFlexible2Contract.getUnstakeAmount(walletAccount)
	return ethers.utils.formatEther(balance)
}


export const stakeFlexible2 = async (price: string, ethersSigner: any) => {
	const beFITTERFlexible2Contract = new ethers.Contract(beFITTERFlexible2.address, beFITTERFlexible2.abi, ethersSigner);
	const parsePrice = ethers.utils.parseUnits(price)
	const res = await beFITTERFlexible2Contract.stake(parsePrice)
	return res;
}
export const unStakeFlexible2 = async (price: string, ethersSigner: any) => {
	const beFITTERFlexible2Contract = new ethers.Contract(beFITTERFlexible2.address, beFITTERFlexible2.abi, ethersSigner);
	const parsePrice = ethers.utils.parseUnits(price)
	const res = await beFITTERFlexible2Contract.unstake(parsePrice)

	return res.wait();
}

export const toClaimableTime = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERFlexible2Contract = new ethers.Contract(beFITTERFlexible2.address, beFITTERFlexible2.abi, ethersSigner);
	const balance = await beFITTERFlexible2Contract.getClaimableTime(walletAccount)
	// debugger
	return ethers.utils.formatUnits(balance, 'wei');
}
export const getRemainingDelayTime = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERFlexible2Contract = new ethers.Contract(beFITTERFlexible2.address, beFITTERFlexible2.abi, ethersSigner);
	const balance = await beFITTERFlexible2Contract.getRemainingDelayTime(walletAccount)
	// debugger
	return ethers.utils.formatUnits(balance, 'wei');
}
export const withDrawFlexible2 = async (ethersSigner: any) => {
	const beFITTERFlexible2Contract = new ethers.Contract(beFITTERFlexible2.address, beFITTERFlexible2.abi, ethersSigner);
	const res = await beFITTERFlexible2Contract.withdrawStakingToken();
	return res;
}
export const claimRewardFlexible2 = async (ethersSigner: any) => {
	const beFITTERFlexible2Contract = new ethers.Contract(beFITTERFlexible2.address, beFITTERFlexible2.abi, ethersSigner);
	const res = await beFITTERFlexible2Contract.claimReward();
	return res;
}
export const getTotalStakingToken = async (ethersSigner: any) => {
	const beFITTERFlexible2Contract = new ethers.Contract(beFITTERFlexible2.address, beFITTERFlexible2.abi, ethersSigner);
	const balance = await beFITTERFlexible2Contract.getTotalStakingToken();
	return ethers.utils.formatEther(balance)
}
export const getStakingStatus = async (walletAccount: any, ethersSigner: any) => {
	const beFITTERFlexible2Contract = new ethers.Contract(beFITTERFlexible2.address, beFITTERFlexible2.abi, ethersSigner);
	const balance = await beFITTERFlexible2Contract.getStakingStatus(walletAccount)
	console.log("aaaa" + ethers.utils.formatUnits(balance, 'wei'));
	return ethers.utils.formatUnits(balance, 'wei');

}




export const walletError = ""