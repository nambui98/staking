import axios from "axios";

export const ClaimService = {
  getAmount: async (walletAddress: string, captchaToken: string, round: string, requireCaptcha: boolean, rank?: any) => {
    const res = await axios.post('/api/claim', {
      walletAddress: walletAddress,
      captchaToken: captchaToken,
      round: round,
      requireCaptcha: requireCaptcha,
      rank: rank
    })

    return res;
  }
}