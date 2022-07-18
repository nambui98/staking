export const convertWalletAddress = (walletAddress: string, start: number, end: number) => {
  return walletAddress.slice(0, start) + '...' + walletAddress.slice(-end)
}

export const formatNumberWithCommas = (data: any) => {
  const tks = (data as any).toString()?.split('.');
  
  if (tks?.length > 1) {
    return tks[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + tks[1];
  }
  else {
    return tks[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}