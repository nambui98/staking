//prod
import bfBox from '../abi/BeFitterBox.json';
import bfClaimBox from '../abi/BeFitterClaim.json';
import bfHeeToken from '../abi/BFHeeToken.json';
import bfFiuToken from '../abi/BeFITTERToken.json';
import bfShoeItem from '../abi/BFShoeItem.json';
import bfBusdToken from '../abi/BeFitterBusd.json';
import bfShop from '../abi/BeFitterShop.json';
import bfWallet from '../abi/BeFitterWallet.json'
import beFITTERTokenStaking from '../abi/BeFITTERToken.json';
import beFitterPass from '../abi/BeFitterPass.json';
import beFitterStake from '../abi/BeFitterStaking.json';
import bfClaimToken from '../abi/BeFitterClaimFiu.json';
import bfClaimFitterPass from '../abi/FitterPassGiveAway.json'
import bfFlexible2 from '../abi/StakeFiuEarnFitterPass.json'
//dev
import bflockedPool from '../abi/FitterPassLockedPool.json';
import bfBurningEvent from '../abi/FitterPassBurningEvent.json';

//dev
import bfBoxDev from '../abiDev/BeFitterBox.json';
import bfClaimBoxDev from '../abiDev/BeFitterClaim.json';
import bfHeeTokenDev from '../abiDev/BFHeeToken.json';
import bfFiuTokenDev from '../abiDev/BFFiuToken.json';
import bfShoeItemDev from '../abiDev/BFShoeItem.json';
import bfWalletDev from '../abiDev/BeFitterWallet.json'
import ExchangeHeeForFitterPassDev from '../abiDev/ExchangeHeeForFitterPass.json'
import bfClaimFitterPassDev from '../abiDev/BeFitterClaim.json';

//contract
import { CONTRACT_PROD } from './contract/prod';
import { CONTRACT_DEV } from './contract/dev';
import { ENVIRONMENT_SWITCH } from './common';

interface Map {
	[key: string]: any;
}

const addresses: Map = {
	['prod']: CONTRACT_PROD,
	['dev']: CONTRACT_DEV,
}

const address = addresses[ENVIRONMENT_SWITCH];

export const bftBox = { address: address.bFBox, abi: bfBox.abi }
export const bftClaimGamefi = { address: address.bFclaimBoxGamefi, abi: bfClaimBox.abi }
export const bftHeetoken = { address: address.bFheeToken, abi: bfHeeToken.abi }
export const bftFiuToken = { address: address.bFfiuToken, abi: bfFiuToken.abi }
export const bftShoeItem = { address: address.bFshoeItem, abi: bfShoeItem.abi }
export const bftClaimEnjin = { address: address.bFclaimEnjin, abi: bfClaimBox.abi }
export const bftBusdToken = { address: address.bFBusdToken, abi: bfBusdToken.abi }
export const bftShop = { address: address.bFShop, abi: bfShop.abi }
export const bftClaimAlphaBeta = { address: address.bFclaimAlphaBeta, abi: bfClaimBox.abi }
export const bftClaimAlphaBeta2 = { address: address.bFclaimAlphaBeta2, abi: bfClaimBox.abi }
export const bftClaimOther = { address: address.bFclaimOther, abi: bfClaimBox.abi }
export const bftFiuTokenStaking = { address: address.beFITTERTokenStaking, abi: beFITTERTokenStaking.abi }
export const beFITTERPassStaking = { address: address.beFITTERPassStaking, abi: beFitterPass.abi }
export const beFITTERStakeStaking = { address: address.beFITTERStakeStaking, abi: beFitterStake.abi }
export const bftClaimToken = { address: address.bFclaimToken, abi: bfClaimToken.abi }
export const bftWallet = { address: address.bFWallet, abi: bfWallet.abi }
export const beFITTERlockedPool = { address: address.beFITTERlockedPool, abi: bflockedPool.abi }
export const bftClaimTokenAirdrop = { address: address.bFclaimTokenAirdrop, abi: bfClaimToken.abi }
export const beFITTERBurningEvent = { address: address.beFITTERBurningEvent, abi: bfBurningEvent.abi }
export const bftClaimFitterPass = { address: address.bFclaimFitterPass, abi: bfClaimFitterPass.abi }
export const bftBurnHee = { address: address.burnHeeAddress, abi: ExchangeHeeForFitterPassDev.abi }
export const beFITTERStakeUserError = { address: address.beFITTERStakeUserError, abi: beFitterStake.abi }
export const bftClaimBoxEventRewardDiamond = { address: address.bfClaimBoxEventRewardDiamond, abi: bfClaimBox.abi }
export const bftClaimBoxEventRewardGold = { address: address.bfClaimBoxEventRewardGold, abi: bfClaimBox.abi }
export const bftClaimFitterPassEventRefund = { address: address.bfClaimFitterPassEventRefund, abi: bfClaimFitterPass.abi }
export const beFITTERFlexible2 = { address: address.beFITTERFlexible2, abi: bfFlexible2.abi }
