import axios from "axios";

export const ClaimService = {
  getAmount: async (walletAddress: string, captchaToken: string) => {
    const res = await axios.post('/api/claim', {
      walletAddress: walletAddress,
      captchaToken: captchaToken,
    })

    return res;
  }
}