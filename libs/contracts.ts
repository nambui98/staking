import bfBox from '../abi/BeFitterBox.json';
import bfClaimBoxGamefi from '../abi/BeFitterClaim.json';
import bfClaimEnjin from '../abi/merkle-claim-enjin.json';
import bfHeeToken from '../abi/BFHeeToken.json';
import bfFiuToken from '../abi/BFFiuToken.json';
import bfShoeItem from '../abi/BFShoeItem.json';
import bfBusdToken from '../abi/BeFitterBusd.json';
import bfShop from '../abi/BeFitterShop.json';
interface Map {
  [key: string]: any;
}

const addresses: Map = {
  ['deployment']: { // bscTestnet
    bFBox: '0x62ae395292dC3B55654419F237438bcB4656E57d',
    bFclaimBoxGamefi: '0x7f7f5971D45cA5EFAc225DA64299Fccb386a84B6',
    bFclaimEnjin: '0x49509ac5266B51c686D4B75AF7fed9B4E21210Ee',
    bFheeToken: '0x05031f56DAD9EDa2Ff7e0d0b675787cC72Dc4675',
    bFfiuToken: '0x25FE4e58B463f0511f1dF848e3Afc3e97b8aB59f',
    bFshoeItem: '0x365B79e59080632E693D98e2A0A0e63625E51495',
    bFBusdToken: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    bFShop: '0xc4bcE7f9dF1126c352809eD422d0766a3C3ce18a'
  },
  ['localhost']: {

  },
}
const addressKey = process.env.NEXT_PUBLIC_ADDRESS || 'deployment';
const address = addresses[addressKey] || addresses['deployment'];

export const bftBox = { address: address.bFBox, abi: bfBox.abi}
export const bftClaimGamefi = { address: address.bFclaimBoxGamefi, abi: bfClaimBoxGamefi.abi }
export const bftHeetoken = {address: address.bFheeToken, abi: bfHeeToken.abi}
export const bftFiuToken = {address: address.bFfiuToken, abi: bfFiuToken.abi}
export const bftShoeItem = {address: address.bFshoeItem, abi: (bfShoeItem as any).abi}
export const bftClaimEnjin = { address: address.bFclaimEnjin, abi: (bfClaimBoxGamefi as any).abi }
export const bftBusdToken = {address: address.bFBusdToken, abi: bfBusdToken.abi}
export const bftShop = {address: address.bFShop, abi: bfShop.abi}
