import { ethers } from "ethers";
import { bftFiuToken, bftShoeItem, bftWallet } from "./contracts";

export const handleApprove = async (price: string, ethersSigner: any, abiDetail: any, type?: 'token' | 'box' | 'shoes') => {
  const Contract = new ethers.Contract(abiDetail.address, abiDetail.abi, ethersSigner);
  const parsePrice = (type === 'box' || type === 'shoes') ? price : ethers.utils.parseUnits(price)
  const res = await Contract.approve(bftWallet.address, parsePrice);
  return res;
}

export const getAllowance = async (walletAddress: string, ethersSigner: any, abiDetail: any) => {
  const Contract = new ethers.Contract(abiDetail.address, abiDetail.abi, ethersSigner);
  const res = await Contract.allowance(walletAddress, bftWallet.address);
  const convertAllowance = parseFloat(ethers.utils.formatUnits(res));
  return convertAllowance;
}

export const handleDeposit = async (ethersSigner: any, tokenAddress: string, amount: string, email: string, type: 'token' | 'box' | 'shoes', boxId?: string) => {
  const walletContract = new ethers.Contract(bftWallet.address, bftWallet.abi, ethersSigner);
  const parsePrice = (type === 'box' || type === 'shoes') && boxId ? boxId : ethers.utils.parseUnits(amount)
  const res = await type === 'token' ? walletContract.depositToken(tokenAddress, parsePrice, email) : walletContract.depositItem(tokenAddress, parsePrice, email);
  return res;
}

export const handleDepositBnb = async (ethersSigner: any, email: string, amount: string) => {
  const walletContract = new ethers.Contract(bftWallet.address, bftWallet.abi, ethersSigner);
  const res = await walletContract.depositBNB(email, {value: ethers.utils.parseUnits(amount, 18)});
  return res;
}

export const getBalanceShoes = async (ethersSigner: any, walletAccount: string) => {
  const shoesContract = new ethers.Contract(bftShoeItem.address, bftShoeItem.abi, ethersSigner);
  const res = await shoesContract.balanceOf(walletAccount);
  return res;
}

export const getListShoes = async (ethersSigner: any, walletAccount: string) => {
  const shoesContract = new ethers.Contract(bftShoeItem.address, bftShoeItem.abi, ethersSigner);
  const res = await shoesContract.getOwnedTokens(walletAccount);
  return res;
}