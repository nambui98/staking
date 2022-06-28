import { ethers } from "ethers";

export const PurchaseBox = async (shopContract: any, boxType: string, tokenAddress: string) => {
  const res = await shopContract.purchaseBoxByToken(boxType, tokenAddress);
  return res;
}
export const getBoxPrice = async (shopContract: any, boxType: string, tokenAddress: string) => {
  const res = await shopContract?.getBoxPrice(boxType, tokenAddress);
  return res;
}

export const getAllowance = async (walletAddress: string) => {
  // const res = await busdContract.allowance(walletAddress, shopContractAddress);
  // return res;
}

export const approvePurchase = async (busdContract: any, shopContractAddress: string, walletAddress: string) => {
  // const res = await busdContract.approve(beFitterShop.address, '0x0aa87bee538000');
}