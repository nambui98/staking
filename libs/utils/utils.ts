export const convertWalletAddress = (walletAddress: string, start: number, end: number) => {
  return walletAddress.slice(0, start) + '...' + walletAddress.slice(-end)
}

export const formatNumberWithCommas = (data: any) => {
  const tks = '123124124124.234234123123'.toString()?.split('.');
  const formatNumber = tks[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '.' + tks[1];
  

  if (tks?.length > 1) {
    return tks[1].length > 4 ? parseFloat(formatNumber).toFixed(4) : formatNumber
  }
  else {
    return tks[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
}