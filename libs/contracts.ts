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
import bfBusdTokenDev from '../abiDev/BeFitterBusd.json';
import bfShopDev from '../abiDev/BeFitterShop.json';
import bfWalletDev from '../abiDev/BeFitterWallet.json'

interface Map {
	[key: string]: any;
}

const addresses: Map = {
  ['prod']: { // bscTestnet
    bFBox: '0x0C737Fd55156ebd583c6473AD2B7f5d287cD9c6e',
    bFclaimBoxGamefi: '0x7f7f5971D45cA5EFAc225DA64299Fccb386a84B6',
    bFclaimEnjin: '0x49509ac5266B51c686D4B75AF7fed9B4E21210Ee',
    bFheeToken: '0x4f47f265D78e4f02cd12e096a8bB6d570D527054',
    bFfiuToken: '0xdA961C55b21C31aA43e798c634F45Ac14f51e607',
    bFshoeItem: '0x365B79e59080632E693D98e2A0A0e63625E51495',
    bFBusdToken: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    bFShop: '0xc4bcE7f9dF1126c352809eD422d0766a3C3ce18a',
    bFWallet: '0xCC6dE73b90310D5a9360341924a23a8cFC07f613',
    bFclaimAlphaBeta: '0xcd229a4e1140cf045bA9f3c1287B62cAe4aFA549',
		bFclaimOther: '0xb01F92dd643B366686AAa856b9634E3F6799Fe2A',
		beFITTERTokenStaking: '0xEF7d50069406A2F5A53806f7250A6c0f17AD9dCD',
		beFITTERPassStaking: '0x67A022f85F792414E6c51f3E175385F5bDEd7E4C',
		beFITTERStakeStaking: '0xF7d21298B4499F582725F50053F7b4C1cc510f56',
		bFclaimAlphaBeta2: '0x80F2086a0De59eF239D6F97ac2138496AE1181e2',
		bFclaimToken: '0xA1eDA0aBA0175050E0c123fc8E531B4b7526e0de',
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
    bFWallet: '0x25BE285953B8B35f7D002eF23937bBeD65DbBDf6'
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
		beFITTERPassStaking: '0x67A022f85F792414E6c51f3E175385F5bDEd7E4C',
		beFITTERStakeStaking: '0xF7d21298B4499F582725F50053F7b4C1cc510f56',
		bFclaimAlphaBeta2: '0x80F2086a0De59eF239D6F97ac2138496AE1181e2',
		bFclaimToken: '0xA1eDA0aBA0175050E0c123fc8E531B4b7526e0de',
    bFWallet: '0xCC6dE73b90310D5a9360341924a23a8cFC07f613'
	},
	['localhost']: {

	},
}
const addressKey = process.env.NEXT_PUBLIC_ADDRESS || 'deployment';
const address = addresses['prod'];

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
export const bftWallet = {address: address.bFWallet, abi: bfWallet.abi}
