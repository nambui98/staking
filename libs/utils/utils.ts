export const convertWalletAddress = (walletAddress: string, start: number, end: number) => {
  return walletAddress.slice(0, start) + '...' + walletAddress.slice(-end)
}

export const formatNumberWithCommas = (data: any) => {
	const tks = (data as any).toString()?.split('.');
	const formatNumber = tks[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + tks[1];

	if (tks?.length > 1) {
		return tks[1].length > 4 ? parseFloat(formatNumber).toFixed(4) : formatNumber;
	}
	else {
		return tks[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	}
}

export const formatMoney = (number: string, fixed?: number) => {
	console.log(number[number.length - 1]);
	var newValue = number;
	if (newValue[newValue.length - 1] === '.') {
		debugger
		newValue = parseFloat(newValue).toFixed(1)
	}
	console.log(parseFloat(newValue));
	// console.log(parseFloat(number).toLocaleString('en-US', { style: undefined, currency: undefined, maximumFractionDigits: fixed || 5 }))
	return parseFloat(newValue).toLocaleString('en-US', { style: undefined, currency: undefined, maximumFractionDigits: fixed || 5 })
}