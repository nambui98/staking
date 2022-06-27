export const PurchaseBox = async (shopContract: any, boxType: string, tokenAddress: string) => {
  const res = await shopContract.purchaseBoxByToken(boxType, tokenAddress);
  return res;
}
export const getBoxPrice = async (shopContract: any, boxType: string, tokenAddress: string) => {
  const res = await shopContract?.getBoxPrice(boxType, tokenAddress);
  return res;
}