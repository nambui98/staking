
import { ethers } from 'ethers';
import { beFITTERPassStaking, bftBox, bftClaimFitterPass, bftClaimToken, bftShop } from './contracts';

export const handleClaimBox = async (walletAddress: string, ethersSigner: any, contractInfo: any, AddressAmount: any) => {
  const contract = new ethers.Contract(contractInfo.address, contractInfo.abi, ethersSigner);
  const claim = await contract.claim(walletAddress, AddressAmount.amount, AddressAmount.proof);
  return claim
}

export const getClaimedBox = async (walletAddress: string, ethersSigner: any, contractInfo: any) => {
  const contract = new ethers.Contract(contractInfo.address, contractInfo.abi, ethersSigner)
  const dataClaim = await contract?.getNumberOfClaimedItem(walletAddress);
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

export const handleClaimToken = async (walletAddress: string, AddressAmount: any, ethersSigner: any, contractClaim: string) => {
  const claimTokenContract = new ethers.Contract(contractClaim, bftClaimToken.abi, ethersSigner)
  const res = await claimTokenContract.claim(walletAddress, AddressAmount.amount, AddressAmount.proof)
  return res;
}

export const getClaimedToken = async (walletAddress: string, ethersSigner: any, contractClaim: string) => {
  const claimTokenContract = new ethers.Contract(contractClaim, bftClaimToken.abi, ethersSigner)
  const res = await claimTokenContract.getReleasedTokenAmount(walletAddress);
  return res
}

export const checkClaimedToken = async (walletAddress: string, ethersSigner: any, contractClaim: string) => {
  const claimTokenContract = new ethers.Contract(contractClaim, bftClaimToken.abi, ethersSigner)
  const res = await claimTokenContract.getClaimableAmount(walletAddress)
  return res
}

export const getLockedOf = async (walletAddress: string, ethersSigner: any, contractClaim: string) => {
  const claimTokenContract = new ethers.Contract(contractClaim, bftClaimToken.abi, ethersSigner)
  const res = await claimTokenContract.lockedOf(walletAddress)
  return res
}

export const getOwnedFitterPass = async (walletAddress: string, ethersSigner: any) => {
  const contract = new ethers.Contract(beFITTERPassStaking.address, beFITTERPassStaking.abi, ethersSigner);
  const balance = await contract.balanceOf(walletAddress, '0')
  const formatBalance = ethers.utils.formatUnits(balance, 'wei')
  return formatBalance;
}

export const getClaimedFitterPass = async (walletAddress: string, ethersSigner: any, contractInfo: any) => {
  const contract = new ethers.Contract(contractInfo.address, contractInfo.abi, ethersSigner);
  const dataClaim = await contract?.getNumberOfClaimedItem(walletAddress);
  return dataClaim
}

export const handleClaimFitterPass = async (walletAddress: string, ethersSigner: any, AddressAmount: any, contractInfo: any) => {
  const contract = new ethers.Contract(contractInfo.address, contractInfo.abi, ethersSigner);
  const claim = await contract.claim(walletAddress, AddressAmount.amount, AddressAmount.proof);
  return claim
}