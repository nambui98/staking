import axios from "axios";

export const ClaimService = {
  getAmount: async (walletAddress: string, captchaToken: string) => {
    // const res = await fetch("/api/claim", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     walletAddress: walletAddress,
    //     captchaToken: captchaToken,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    const res = await axios.post('/api/claim', {
      walletAddress: walletAddress,
      captchaToken: captchaToken,
    })

    return res.data;
  }
}