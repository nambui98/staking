import { ethers } from "ethers";
import { bftFiuToken, bftWallet } from "./contracts";

export const handleApprove = async (price: string, ethersSigner: any, abiDetail: any) => {
  const Contract = new ethers.Contract(abiDetail.address, abiDetail.abi, ethersSigner);
  const parsePrice = ethers.utils.parseUnits(price)
  const res = await Contract.approve(bftWallet.address, parsePrice);
  return res;
}

export const getAllowance = async (walletAddress: string, ethersSigner: any, abiDetail: any) => {
  const Contract = new ethers.Contract(abiDetail.address, abiDetail.abi, ethersSigner);
  const res = await Contract.allowance(walletAddress, bftWallet.address);
  const convertAllowance = parseFloat(ethers.utils.formatUnits(res));
  return convertAllowance;
}

export const handleDeposit = async (ethersSigner: any, tokenAddress: string, amount: string, email: string, type: 'token' | 'box', boxId?: string) => {
  const walletContract = new ethers.Contract(bftWallet.address, bftWallet.abi, ethersSigner);
  const parsePrice = type === 'box' && boxId ? ethers.utils.parseUnits(boxId) : ethers.utils.parseUnits(amount)
  console.log(email, type, boxId)
  const res = await type === 'token' ? walletContract.depositToken(tokenAddress, parsePrice, email) : walletContract.depositItem(tokenAddress, parsePrice, email);
  return res;
}