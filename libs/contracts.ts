//prod
import bfBox from '../abi/BeFitterBox.json';
import bfClaimBox from '../abi/BeFitterClaim.json';
import bfHeeToken from '../abi/BFHeeToken.json';
import bfFiuToken from '../abi/BeFITTERTokenStaking.json';
import bfShoeItem from '../abi/BFShoeItem.json';
import bfBusdToken from '../abi/BeFitterBusd.json';
import bfShop from '../abi/BeFitterShop.json';
import bfWallet from '../abi/BeFitterWallet.json'
import beFITTERTokenStaking from '../abi/BeFITTERTokenStaking.json';
import beFitterPass from '../abi/BeFitterPass.json';
import beFitterStake from '../abi/BeFitterStaking.json';
import bfClaimToken from '../abi/BeFitterClaimFiu.json';

//dev
import bfBoxDev from '../abiDev/BeFitterBox.json';
import bfClaimBoxDev from '../abiDev/BeFitterClaim.json';
import bfHeeTokenDev from '../abiDev/BFHeeToken.json';
import bfFiuTokenDev from '../abiDev/BFFiuToken.json';
import bfShoeItemDev from '../abiDev/BFShoeItem.json';
import bfWalletDev from '../abiDev/BeFitterWallet.json'

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

export const bftBox = { address: address.bFBox, abi: (ENVIRONMENT_SWITCH === 'prod' ? bfBox : bfBoxDev).abi }
export const bftClaimGamefi = { address: address.bFclaimBoxGamefi, abi: (ENVIRONMENT_SWITCH === 'prod' ? bfClaimBox : bfClaimBoxDev).abi }
export const bftHeetoken = { address: address.bFheeToken, abi: (ENVIRONMENT_SWITCH === 'prod' ? bfHeeToken : bfHeeTokenDev).abi }
export const bftFiuToken = { address: address.bFfiuToken, abi: (ENVIRONMENT_SWITCH === 'prod' ? bfFiuToken : bfFiuTokenDev).abi }
export const bftShoeItem = { address: address.bFshoeItem, abi: (ENVIRONMENT_SWITCH === 'prod' ? bfShoeItem : bfShoeItemDev).abi }
export const bftClaimEnjin = { address: address.bFclaimEnjin, abi: (ENVIRONMENT_SWITCH === 'prod' ? bfClaimBox : bfClaimBoxDev).abi }
export const bftBusdToken = { address: address.bFBusdToken, abi: bfBusdToken.abi }
export const bftShop = { address: address.bFShop, abi: bfShop.abi }
export const bftClaimAlphaBeta = { address: address.bFclaimAlphaBeta, abi: (ENVIRONMENT_SWITCH === 'prod' ? bfClaimBox : bfClaimBoxDev).abi }
export const bftClaimAlphaBeta2 = { address: address.bFclaimAlphaBeta2, abi: (ENVIRONMENT_SWITCH === 'prod' ? bfClaimBox : bfClaimBoxDev).abi }
export const bftClaimOther = { address: address.bFclaimOther, abi: (ENVIRONMENT_SWITCH === 'prod' ? bfClaimBox : bfClaimBoxDev).abi }
export const bftFiuTokenStaking = { address: address.beFITTERTokenStaking, abi: beFITTERTokenStaking.abi }
export const beFITTERPassStaking = { address: address.beFITTERPassStaking, abi: beFitterPass.abi }
export const beFITTERStakeStaking = { address: address.beFITTERStakeStaking, abi: beFitterStake.abi }
export const bftClaimToken = { address: address.bFclaimToken, abi: bfClaimToken.abi }
export const bftWallet = {address: address.bFWallet, abi: (ENVIRONMENT_SWITCH === 'prod' ? bfWallet : bfWalletDev).abi}
export const bftClaimTokenAirdrop = { address: address.bFclaimTokenAirdrop, abi: bfClaimToken.abi }
