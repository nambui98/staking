import axios from "axios";

export const ClaimService = {
  getAmount: async (walletAddress: string, captchaToken: string, round: string, requireCaptcha: boolean) => {
    const res = await axios.post('/api/claim', {
      walletAddress: walletAddress,
      captchaToken: captchaToken,
      round: round,
      requireCaptcha: requireCaptcha
    })

    return res;
  }
}