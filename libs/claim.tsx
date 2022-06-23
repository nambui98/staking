
import { ClaimService } from '../services/claim.service';

export const handleClaimBox = async (walletAddress: string, claimBoxContract: any, AddressAmount: any) => {
  const claim = await claimBoxContract.claim(walletAddress, AddressAmount.amount, AddressAmount.proof);
  return claim
}

export const getClaimedBox = async (walletAddress: string, claimBoxContract: any) => {
  const dataClaim = await claimBoxContract?.getNumberOfClaimedItem(walletAddress);
  return dataClaim
}