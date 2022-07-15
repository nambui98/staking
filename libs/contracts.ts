import bfBox from '../abi/BeFitterBox.json';
import bfClaimBox from '../abi/BeFitterClaim.json';
import bfHeeToken from '../abi/BFHeeToken.json';
import bfFiuToken from '../abi/BFFiuToken.json';
import bfShoeItem from '../abi/BFShoeItem.json';
import bfBusdToken from '../abi/BeFitterBusd.json';
import bfShop from '../abi/BeFitterShop.json';

//dev
import bfBoxDev from '../abiDev/BeFitterBox.json';
import bfClaimBoxDev from '../abiDev/BeFitterClaim.json';
import bfHeeTokenDev from '../abiDev/BFHeeToken.json';
import bfFiuTokenDev from '../abiDev/BFFiuToken.json';
import bfShoeItemDev from '../abiDev/BFShoeItem.json';
import bfBusdTokenDev from '../abiDev/BeFitterBusd.json';
import bfShopDev from '../abiDev/BeFitterShop.json';
import bfWallet from '../abiDev/BeFitterWallet.json'
interface Map {
  [key: string]: any;
}

const addresses: Map = {
  ['prod']: { // bscTestnet
    bFBox: '0x62ae395292dC3B55654419F237438bcB4656E57d',
    bFclaimBoxGamefi: '0x7f7f5971D45cA5EFAc225DA64299Fccb386a84B6',
    bFclaimEnjin: '0x49509ac5266B51c686D4B75AF7fed9B4E21210Ee',
    bFheeToken: '0x05031f56DAD9EDa2Ff7e0d0b675787cC72Dc4675',
    bFfiuToken: '0x25FE4e58B463f0511f1dF848e3Afc3e97b8aB59f',
    bFshoeItem: '0x365B79e59080632E693D98e2A0A0e63625E51495',
    bFBusdToken: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    bFShop: '0xc4bcE7f9dF1126c352809eD422d0766a3C3ce18a'
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
}
const addressKey = process.env.NEXT_PUBLIC_ADDRESS || 'deployment';
const address = addresses['dev'];

export const bftBox = { address: address.bFBox, abi: bfBoxDev.abi}
export const bftClaimGamefi = { address: address.bFclaimBoxGamefi, abi: bfClaimBox.abi }
export const bftHeetoken = {address: address.bFheeToken, abi: bfHeeTokenDev.abi}
export const bftFiuToken = {address: address.bFfiuToken, abi: bfFiuTokenDev.abi}
export const bftShoeItem = {address: address.bFshoeItem, abi: (bfShoeItem as any).abi}
export const bftClaimEnjin = { address: address.bFclaimEnjin, abi: (bfClaimBox as any).abi }
export const bftBusdToken = {address: address.bFBusdToken, abi: bfBusdToken.abi}
export const bftShop = {address: address.bFShop, abi: bfShop.abi}
export const bftWallet = {address: address.bFWallet, abi: bfWallet.abi}
