
import { ClaimService } from '../services/claim.service';

export const handleClaimBox = async (walletAddress: string, claimBoxContract: any, captchaToken: string) => {
  const AddressAmount: any = await ClaimService.getAmount(walletAddress, captchaToken)
  const claim = AddressAmount?.status ? await claimBoxContract.claim(walletAddress, AddressAmount.amount, AddressAmount.proof) : null;
  return claim
}

export const getClaimedBox = async (walletAddress: string, claimBoxContract: any) => {
  const dataClaim = await claimBoxContract?.getNumberOfClaimedItem(walletAddress);
  return dataClaim
}