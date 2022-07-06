import { ethers } from "ethers";
import { bftBusdToken, bftShop } from "./contracts";

export const getBoxPrice = async (boxType: string, ethersSigner: any) => {
  const shopContract = new ethers.Contract(bftShop.address, bftShop.abi, ethersSigner);
  const res = await shopContract.getBoxPrice(boxType, bftBusdToken.address);
  const convertPrice = parseFloat(ethers.utils.formatUnits(res));
  return convertPrice;
}

export const getAllowance = async (walletAddress: string, ethersSigner: any) => {
  const busdContract = new ethers.Contract(bftBusdToken.address, bftBusdToken.abi, ethersSigner);
  const res = await busdContract.allowance(walletAddress, bftShop.address);
  const convertAllowance = parseFloat(ethers.utils.formatUnits(res));
  return convertAllowance;
}

export const approvePurchase = async (price: string, ethersSigner: any) => {
  const busdContract = new ethers.Contract(bftBusdToken.address, bftBusdToken.abi, ethersSigner);
  const parsePrice = ethers.utils.parseUnits(price)
  const res = await busdContract.approve(bftShop.address, parsePrice);
  return res;
}
export const purchaseBox = async (boxType: string, ethersSigner: any) => {
  const shopContract = new ethers.Contract(bftShop.address, bftShop.abi, ethersSigner);
  const res = await shopContract.purchaseBoxByToken(boxType, bftBusdToken.address);
  return res;
}