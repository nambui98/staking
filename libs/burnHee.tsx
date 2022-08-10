import { ethers } from "ethers";
import { bftHeetoken, bftBurnHee } from "./contracts";

export const getAllowanceBurnHee = async (walletAddress: string, ethersSigner: any) => {
	const bftHeetokenContract = new ethers.Contract(bftHeetoken.address, bftHeetoken.abi, ethersSigner);
	const res = await bftHeetokenContract.allowance(walletAddress, bftBurnHee.address);
	const convertAllowance = parseFloat(ethers.utils.formatUnits(res));
	return convertAllowance;
}

export const approveBurnHee = async (price: string, ethersSigner: any) => {
	const bftHeetokenContract = new ethers.Contract(bftHeetoken.address, bftHeetoken.abi, ethersSigner);
	const parsePrice = ethers.utils.parseUnits(price)
	const res = await bftHeetokenContract.approve(bftBurnHee.address, parsePrice);
	return res.wait();
}

export const getBalanceMyHee = async (walletAccount: any, ethersSigner: any) => {
	const bftHeetokenContract = new ethers.Contract(bftHeetoken.address, bftHeetoken.abi, ethersSigner);
	const balance = await bftHeetokenContract.balanceOf(walletAccount)
	return ethers.utils.formatEther(balance)
};


export const getUserExchanges = async (walletAccount: any, ethersSigner: any) => {
	const bftBurnHeeContract = new ethers.Contract(bftBurnHee.address, bftBurnHee.abi, ethersSigner);
	const data = await bftBurnHeeContract.getUserExchanges(walletAccount);
	return data
};
export const getTotalTokenIn = async (ethersSigner: any) => {
	const bftBurnHeeContract = new ethers.Contract(bftBurnHee.address, bftBurnHee.abi, ethersSigner);
	const balance = await bftBurnHeeContract.getTotalTokenIn()
	return ethers.utils.formatEther(balance)
}
export const getUserTokenOut = async (walletAccount: any, ethersSigner: any) => {
	const bftBurnHeeContract = new ethers.Contract(bftBurnHee.address, bftBurnHee.abi, ethersSigner);
	const res = await bftBurnHeeContract.getUserTokenOut(walletAccount)
	return ethers.utils.formatUnits(res, 'wei');
}

export const exchangeHeeForFitterPass = async (number: string, ethersSigner: any) => {
	const bftBurnHeeContract = new ethers.Contract(bftBurnHee.address, bftBurnHee.abi, ethersSigner);
	const res = await bftBurnHeeContract.exchangeHeeForFitterPass(parseInt(number))
	return res.wait();
}

export const configBurnHEE = {
	exchange: 1500,
}