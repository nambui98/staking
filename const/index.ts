export const RECAPTCHA_SITE_KEY = '6Lc275cgAAAAAAHHwNMoAh448YXBi-jz3AeS-4A9';
export enum StateStaking {
	EnablePool,
	EnableSuccess,
	StakeProcess,
	Staked,
	StakedTimeEnd,
	ClaimConfirm,
	UnstakeWarrning,
	Unstake,
	UnstakedSuccess,
	UnstakeAgain,
	WithDraw,
	WithDrawWarning,
	TransactionHistory,
	Success,
	Error,
}


export enum StateStakingLocked {
	Locked,
	LockedApprove,
	LockedStakeProcess,
	LockedList,
	LockedUnstake,
	WithDraw,
	Success,
	Error,

}
export enum BoxAuction {
	EnablePool,
	AssetsEvent,
	BurnAssets,
	Burned,
	Success,
	Error,
}
export enum StateBurnHEE {
	HeeExchange,
	HeeExchangeFill,
	HeeExchangeHistories,
	Success,
	Error,

}