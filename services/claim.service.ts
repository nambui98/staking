import axios from "axios";

export const ClaimService = {
  getAmount: async (walletAddress: string, captchaToken: string, requireCaptcha: boolean) => {
    const res = await axios.post('/api/claim', {
      walletAddress: walletAddress,
      captchaToken: captchaToken,
      requireCaptcha: requireCaptcha
    })

    return res;
  }
}