import ERC20ABI from '../abi/ERC20.abi.json';
import NOXY from '../abi/BNB.json';
import NVER from '../abi/BNB.json';
import NextItem from '../abi/NextItem.json';
import NextShop from '../abi/NextShop.json';
import NextAuction from '../abi/NextAuction.json';
import NextPack from '../abi/NextPack.json';
import BftBox from '../abi/BeFitterBox.json';
import ClaimBox from '../abi/BeFitterClaim.json';

interface Map {
  [key: string]: any;
}

const addresses: Map = {
  ['deployment']: { // bscTestnet
    nextDeployer: '0x21cf4A779fd7B58b4487Ccd192cc591C817a2425',
    noxy: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    nver: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    nextItem: '0x124BFd3773231B27b07b1e8577bF65790444814e',
    nextShop: '0x33797baB6FE81D9e21EC5fF287a6E85e2E7F6d30',
    nextAuction: '0xAB1fcf6b123084d90DCDf3C01cd13590F382D7f0',
    nextMarket: '0x55fB465d1CE088fD483b890794a76F2CfF3a9146',
    nextPack: '0x03dbB95547399d91659f6aF4F5E4B6f8f4aAC2A4',
    beFitterBox: '0x545d2339c40fb53F326037311C7d99bDB7668401',
    claimBox: '0xBF4db77cbD1497BAcb7e5A8785E3a97713e0DD69'
  },
  ['localhost']: {
    nextDeployer: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    noxy: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    nver: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    nextItem: '0xC89Ce4735882C9F0f0FE26686c53074E09B0D550',
    nextShop: '0xD833215cBcc3f914bD1C9ece3EE7BF8B14f841bb',
    nextAuction: '0x9561C133DD8580860B6b7E504bC5Aa500f0f06a7',
    nextMarket: '0xA7f49bDf151A126335b36D346bc834D4a2B77B53',
    beFitterBox: '0xaBe0509CF48473d8CFF4d818d8bc5aF10dc1F2Ce'
  },
}
const addressKey = process.env.NEXT_PUBLIC_ADDRESS || 'deployment';
const address = addresses[addressKey] || addresses['deployment'];

export const nextDeployerAddress = address.nextDeployer

export const noxyContract = { address: address.noxy, abi: NOXY }

export const nverContract = { address: address.nver, abi: NVER }

export const nextItemContract = { address: address.nextItem, abi: NextItem.abi }

export const nextShopContract = { address: address.nextShop, abi: NextShop.abi }

export const nextAuctionContract = { address: address.nextAuction, abi: NextAuction.abi }

export const nextMarketContract = { address: address.nextShop, abi: NextShop.abi }

export const nextPackContract = { address: address.nextPack, abi: NextPack.abi }

export const beFitterBox = { address: address.beFitterBox, abi: BftBox.abi}

export const claimBox = { address: address.claimBox, abi: ClaimBox.abi }
