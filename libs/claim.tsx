
import { ethers } from 'ethers';
import { bftBox, bftClaimToken, bftShop } from './contracts';

export const handleClaimBox = async (walletAddress: string, claimBoxContract: any, AddressAmount: any) => {
  const claim = await claimBoxContract.claim(walletAddress, AddressAmount.amount, AddressAmount.proof);
  return claim
}

export const getClaimedBox = async (walletAddress: string, claimBoxContract: any) => {
  const dataClaim = await claimBoxContract?.getNumberOfClaimedItem(walletAddress);
  return dataClaim
}

export const getOwnedBox = async (walletAddress: string, ethersSigner: any) => {
  const getOwnedBoxContract = await new ethers.Contract(bftBox.address, bftBox.abi, ethersSigner);
  const listBoxId = await getOwnedBoxContract.getOwnedTokens(walletAddress)
  return listBoxId;
}

export const getBoxType = (boxId: any, boxContract: any) => {
  const boxType = boxContract.getBoxType(boxId);
  return boxType;
}

export const getAvailableBox = async (boxType: string, ethersSigner: any) => {
  const shopContract = await new ethers.Contract(bftShop.address, bftShop.abi, ethersSigner)
  const totalBox = await shopContract.getAvailableBox(boxType);
  return totalBox;
}

export const handleClaimToken = async (walletAddress: string, AddressAmount: any, ethersSigner: any) => {
  const claimTokenContract = new ethers.Contract(bftClaimToken.address, bftClaimToken.abi, ethersSigner)
  const res = await claimTokenContract.claim(walletAddress, AddressAmount.amount, AddressAmount.proof)
  return res;
}

export const getClaimedToken = async (walletAddress: string, ethersSigner: any) => {
  const claimTokenContract = new ethers.Contract(bftClaimToken.address, bftClaimToken.abi, ethersSigner)
  const res = await claimTokenContract.getReleasedTokenAmount(walletAddress);
  return res
}