import bfBox from '../abi/BeFitterBox.json';
import bfClaimBox from '../abi/BeFitterClaim.json';
import bfHeeToken from '../abi/BFHeeToken.json';
import bfFiuToken from '../abi/BFFiuToken.json';
import bfShoeItem from '../abi/BFShoeItem.json';
interface Map {
  [key: string]: any;
}

const addresses: Map = {
  ['deployment']: { // bscTestnet
    bFBox: '0xc383606B2bfF784a7a90CA76A3cE6d86eAC15167',
    bFclaimBox: '0x33c4d0220e11Ed8c763036b554E4cD77387e9E2C',
    bFheeToken: '0x05031f56DAD9EDa2Ff7e0d0b675787cC72Dc4675',
    bFfiuToken: '0x25FE4e58B463f0511f1dF848e3Afc3e97b8aB59f',
    bFshoeItem: '0x365B79e59080632E693D98e2A0A0e63625E51495',
  },
  ['localhost']: {

  },
}
const addressKey = process.env.NEXT_PUBLIC_ADDRESS || 'deployment';
const address = addresses[addressKey] || addresses['deployment'];

export const bftBox = { address: address.bFBox, abi: bfBox.abi}
export const bftClaimBox = { address: address.bFclaimBox, abi: bfClaimBox.abi }
export const bftHeetoken = {address: address.bFheeToken, abi: bfHeeToken.abi}
export const bftFiuToken = {address: address.bFfiuToken, abi: bfFiuToken.abi}
export const bftShoeItem = {address: address.bFshoeItem, abi: (bfShoeItem as any).abi}
