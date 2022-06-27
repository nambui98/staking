import BftBox from '../abi/BeFitterBox.json';
import ClaimBox from '../abi/BeFitterClaim.json';
import BeFitterShop from '../abi/BeFitterShop.json';
import BeFitterBusd from '../abi/BeFitterBusd.json'
interface Map {
  [key: string]: any;
}

const addresses: Map = {
  ['deployment']: { // bscTestnet
    beFitterBox: '0x545d2339c40fb53F326037311C7d99bDB7668401',
    claimBox: '0xBF4db77cbD1497BAcb7e5A8785E3a97713e0DD69',
    beFitterShop: '0xAa0d7a4696751b532aeedEA16262DD0D4513b789',
    beFitterBusd: '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee'
  },
  ['localhost']: {

  },
}
const addressKey = process.env.NEXT_PUBLIC_ADDRESS || 'deployment';
const address = addresses[addressKey] || addresses['deployment'];

export const beFitterBox = { address: address.beFitterBox, abi: BftBox.abi}
export const claimBox = { address: address.claimBox, abi: ClaimBox.abi }
export const beFitterShop = {address: address.beFitterShop, abi: BeFitterShop.abi }
export const beFitterBusd = {address: address.beFitterBusd, abi: BeFitterBusd.abi }