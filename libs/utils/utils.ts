export const convertWalletAddress = (walletAddress: string, start: number, end: number) => {
  return walletAddress.slice(0, start) + '...' + walletAddress.slice(-end)
}