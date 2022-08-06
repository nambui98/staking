import bfBox from '../abi/BeFitterBox.json';
import bfClaimBox from '../abi/BeFitterClaim.json';
import bfHeeToken from '../abi/BFHeeToken.json';
import bfFiuToken from '../abi/BeFITTERToken_testnet.json';
import bfShoeItem from '../abi/BFShoeItem.json';
import bfBusdToken from '../abi/BeFitterBusd.json';
import bfShop from '../abi/BeFitterShop.json';
import bfWallet from '../abi/BeFitterWallet.json'
import beFITTERTokenStaking from '../abi/BeFITTERToken.json';
import beFitterPass from '../abi/BeFitterPass_testnet.json';
import beFitterStake from '../abi/BeFitterStaking_testnet.json';
import bfClaimToken from '../abi/BeFitterClaimFiu.json';
//dev
import bflockedPool from '../abi/FitterPassLockedPool_testnet.json';
import bfBurningEvent from '../abi/FitterPassBurningEvent_testnet.json';

//dev
import bfBoxDev from '../abiDev/BeFitterBox.json';
import bfClaimBoxDev from '../abiDev/BeFitterClaim.json';
import bfHeeTokenDev from '../abiDev/BFHeeToken.json';
import bfFiuTokenDev from '../abiDev/BFFiuToken.json';
import bfShoeItemDev from '../abiDev/BFShoeItem.json';
import bfBusdTokenDev from '../abiDev/BeFitterBusd.json';
import bfShopDev from '../abiDev/BeFitterShop.json';
import bfWalletDev from '../abiDev/BeFitterWallet.json'

interface Map {
	[key: string]: any;
}

const addresses: Map = {
	['prod']: { // bscTestnet
		bFBox: '0x62ae395292dC3B55654419F237438bcB4656E57d',
		bFclaimBoxGamefi: '0x7f7f5971D45cA5EFAc225DA64299Fccb386a84B6',
		bFclaimEnjin: '0x49509ac5266B51c686D4B75AF7fed9B4E21210Ee',
		bFheeToken: '0xb47e21328B4f1c6D685C213D707fab3EdB234fA0',
		bFfiuToken: '0xEF7d50069406A2F5A53806f7250A6c0f17AD9dCD',
		bFshoeItem: '0x365B79e59080632E693D98e2A0A0e63625E51495',
		bFBusdToken: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
		bFShop: '0xc4bcE7f9dF1126c352809eD422d0766a3C3ce18a',
		bFWallet: '0x1338651e065C0f823BD3068348CA50e62DDE614e',
		bFclaimAlphaBeta: '0xcd229a4e1140cf045bA9f3c1287B62cAe4aFA549',
		bFclaimOther: '0xb01F92dd643B366686AAa856b9634E3F6799Fe2A',
		beFITTERTokenStaking: '0xEF7d50069406A2F5A53806f7250A6c0f17AD9dCD',
		beFITTERPassStaking: '0x67A022f85F792414E6c51f3E175385F5bDEd7E4C',
		beFITTERStakeStaking: '0xF7d21298B4499F582725F50053F7b4C1cc510f56',
		bFclaimAlphaBeta2: '0x80F2086a0De59eF239D6F97ac2138496AE1181e2',
		bFclaimToken: '0xA1eDA0aBA0175050E0c123fc8E531B4b7526e0de',
		beFITTERlockedPool: '0x201D5542386B3fC5fC90c51dd43e44B4638FF15c',
		beFITTERBurningEvent: '0xB8a7874946355E4012fA04381dC51Fe85FC01d7a',
		bFclaimTokenAirdrop: '0xb77b00AEEF5631362aC3cA8dE6bD70Cc412452Dd'
	},
	['dev']: {
		bFBox: '0xb92faF9fE22225C82aFc3968425cca17996ae4eA',
		bFclaimBoxGamefi: '0x7f7f5971D45cA5EFAc225DA64299Fccb386a84B6',
		bFclaimEnjin: '0x49509ac5266B51c686D4B75AF7fed9B4E21210Ee',
		bFheeToken: '0xeDd5274551acE773E52114Bc3283C6F617235D42',
		bFfiuToken: '0x1E8Ac4d341419eD887063B5baF62b772616D96Bf',
		bFshoeItem: '0x452bC7c0BF5F03b343cb4CC87ABe2cBd095097F6',
		bFBusdToken: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
		bFShop: '0xc4bcE7f9dF1126c352809eD422d0766a3C3ce18a',
		bFWallet: '0x25BE285953B8B35f7D002eF23937bBeD65DbBDf6',
		bFclaimAlphaBeta: '0xcd229a4e1140cf045bA9f3c1287B62cAe4aFA549',
		bFclaimOther: '0xb01F92dd643B366686AAa856b9634E3F6799Fe2A',
		beFITTERTokenStaking: '0x1E8Ac4d341419eD887063B5baF62b772616D96Bf',
		beFITTERPassStaking: '0x67b3B7c43E9Cb58B68151b3D5498176061C11A88',
		beFITTERStakeStaking: '0x43832e1a628e91CaFAE75ff1EB70BbF3478e27B3',
		bFclaimAlphaBeta2: '0x80F2086a0De59eF239D6F97ac2138496AE1181e2',
		bFclaimToken: '0xA1eDA0aBA0175050E0c123fc8E531B4b7526e0de',
		beFITTERlockedPool: '0x965BB192F76fa788044BCBb54E8015A587dDe366',
		beFITTERBurningEvent: '0x42Da8c061b473c5C8E865C3a54e7127eA27C3587',

	},
	['deployment']: { // bscTestnet
		bFBox: '0x62ae395292dC3B55654419F237438bcB4656E57d',
		bFclaimBoxGamefi: '0x7f7f5971D45cA5EFAc225DA64299Fccb386a84B6',
		bFclaimEnjin: '0x49509ac5266B51c686D4B75AF7fed9B4E21210Ee',
		bFheeToken: '0x05031f56DAD9EDa2Ff7e0d0b675787cC72Dc4675',
		bFfiuToken: '0xEF7d50069406A2F5A53806f7250A6c0f17AD9dCD',
		bFshoeItem: '0x365B79e59080632E693D98e2A0A0e63625E51495',
		bFBusdToken: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
		bFShop: '0xc4bcE7f9dF1126c352809eD422d0766a3C3ce18a',
		bFclaimAlphaBeta: '0xcd229a4e1140cf045bA9f3c1287B62cAe4aFA549',
		bFclaimOther: '0xb01F92dd643B366686AAa856b9634E3F6799Fe2A',
		beFITTERTokenStaking: '0xEF7d50069406A2F5A53806f7250A6c0f17AD9dCD',
		beFITTERPassStaking: '0x92C1ef30e445fea3aD03E6ca4775D44F08925c82',
		beFITTERStakeStaking: '0xF7d21298B4499F582725F50053F7b4C1cc510f56',
		bFclaimAlphaBeta2: '0x80F2086a0De59eF239D6F97ac2138496AE1181e2',
		bFclaimToken: '0xA1eDA0aBA0175050E0c123fc8E531B4b7526e0de',
		bFWallet: '0xCC6dE73b90310D5a9360341924a23a8cFC07f613'
	},
	['localhost']: {

	},
}
const addressKey = process.env.NEXT_PUBLIC_ADDRESS || 'deployment';
const address = addresses['dev'];

// export const bftBox = { address: address.bFBox, abi: bfBox.abi}
// export const bftClaimGamefi = { address: address.bFclaimBoxGamefi, abi: bfClaimBox.abi }
// export const bftHeetoken = {address: address.bFheeToken, abi: bfHeeToken.abi}
// export const bftFiuToken = {address: address.bFfiuToken, abi: bfFiuToken.abi}
// export const bftShoeItem = {address: address.bFshoeItem, abi: (bfShoeItem as any).abi}
// export const bftClaimEnjin = { address: address.bFclaimEnjin, abi: (bfClaimBox as any).abi }
// export const bftBusdToken = {address: address.bFBusdToken, abi: bfBusdToken.abi}
// export const bftShop = {address: address.bFShop, abi: bfShop.abi}
// export const bftWallet = {address: address.bFWallet, abi: bfWallet.abi}


export const bftBox = { address: address.bFBox, abi: bfBox.abi }
export const bftClaimGamefi = { address: address.bFclaimBoxGamefi, abi: bfClaimBox.abi }
export const bftHeetoken = { address: address.bFheeToken, abi: bfHeeToken.abi }
export const bftFiuToken = { address: address.bFfiuToken, abi: bfFiuToken.abi }
export const bftShoeItem = { address: address.bFshoeItem, abi: (bfShoeItem as any).abi }
export const bftClaimEnjin = { address: address.bFclaimEnjin, abi: (bfClaimBox as any).abi }
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