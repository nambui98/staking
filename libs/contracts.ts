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
    bFBox: '0x375bf3d08B76f22C9827D19c548BA97e5d2Cfcfd',
    bFclaimBoxGamefi: '0x33c4d0220e11Ed8c763036b554E4cD77387e9E2C',
    bFclaimEnjin: '0x33c4d0220e11Ed8c763036b554E4cD77387e9E2C',
    bFheeToken: '0x05031f56DAD9EDa2Ff7e0d0b675787cC72Dc4675',
    bFfiuToken: '0x25FE4e58B463f0511f1dF848e3Afc3e97b8aB59f',
    bFshoeItem: '0x365B79e59080632E693D98e2A0A0e63625E51495',
    bFBusdToken: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    bFShop: '0x6D134E5C82a8df4D2481748d70b028dDAD1292F5'
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
