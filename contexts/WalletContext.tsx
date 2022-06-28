import { ethers, utils } from "ethers"
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"
import detectEthereumProvider from '@metamask/detect-provider';
import { UserService } from "../services/user.service";
import { bftBox, bftClaimBox, bftFiuToken, bftHeetoken, bftShoeItem } from "../libs/contracts";

interface Map {
	[key: string]: any;
}

const networks: Map = {
	['bscTestnet']: {
		chainId: `0x${Number(97).toString(16)}`,
		chainName: 'Binance Smart Chain Testnet',
		nativeCurrency: {
			name: "Binance Chain Native Token",
			symbol: "tBNB",
			decimals: 18
		},
		rpcUrls: [
			"https://data-seed-prebsc-1-s1.binance.org:8545",
			"https://data-seed-prebsc-2-s1.binance.org:8545",
			"https://data-seed-prebsc-1-s2.binance.org:8545",
			"https://data-seed-prebsc-2-s2.binance.org:8545",
			"https://data-seed-prebsc-1-s3.binance.org:8545",
			"https://data-seed-prebsc-2-s3.binance.org:8545"
		],
		blockExplorerUrls: ["https://testnet.bscscan.com"],
	},
  ['localhost8545']: {
    chainId: `0x${Number(1337).toString(16)}`,
		chainName: 'Localhost 8545',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals:18 },
    rpcUrls: ['http://127.0.0.1:8545'],
    blockExplorerUrls: ['']
  }
};
const networkKey = process.env.NEXT_PUBLIC_NETWORK || 'bscTestnet';
const network = networks[networkKey] || networks['bscTestnet'];
const supportedChainIds = [network.chainId];

interface wallerContextType {
  activePopup: boolean,
  setToggleActivePopup: (status: boolean) => void,
  provider: any,
  ethersProvider: any,
  ethersSigner: any,
  walletAccount: any,
  setWalletAccount: (account: any) => void
  metaMaskIsInstalled: boolean,
  chainIdIsSupported: boolean,
  bnbBalance: string,
  heeBalance: string,
  fiuBalance: string,
  shoeBalance: string,
  boxBalance: string,
  updateBnbBalance: () => void
  claimBoxContract: any
} 

interface IProps {
  children: ReactNode
}

const WalletContext = createContext<wallerContextType>({
  activePopup: false,
  setToggleActivePopup: () => {},
  provider: null,
  ethersProvider: null,
  ethersSigner: null,
  walletAccount: null,
  setWalletAccount: () => {},
  metaMaskIsInstalled: false,
  chainIdIsSupported: false,
  bnbBalance: '',
  heeBalance: '',
  fiuBalance: '',
  shoeBalance: '',
  boxBalance: '',
  updateBnbBalance: () => null,
  claimBoxContract: null
})

export const useWalletContext = () => useContext(WalletContext);

export async function changeNetwork(provider: any) {
  try {
    await provider.request({
      method: "wallet_addEthereumChain",
      params: [{ ...network }]
    });
  } catch (addError: any) {
    // console.error('wallet_addEthereumChain', addError);
  }
}

export const WalletProvider: React.FC<IProps> = ({children}) => {
  const [provider, setProvider] = useState<any>();
  const [ethersProvider, setEthersProvider] = useState<any>();
  const [ethersSigner, setEthersSigner] = useState<any>();
  const [activePopup, setActivePopup] = useState<boolean>(false);
  const [walletAccount, setWalletAccount] = useState<any>();
  const [metaMaskIsInstalled, setMetaMaskIsInstalled] = useState<boolean>(false); 
  const [chainIdIsSupported, setChainIdIsSupported] = useState<boolean>(false);
  const [claimBoxContract, setClaimBoxContract] = useState<any>();
  const [bnbBalance, setBnbBalance] = useState<string>('');
  const [heeBalance, setHeebalance] = useState<string>('');
  const [fiuBalance, setFiuBalance] = useState<string>('');
  const [shoeBalance, setShoeBalance] = useState<string>('');
  const [boxBalance, setBoxBalance] = useState<string>('');

  const handleDisconnectWallet = () => {
    UserService.removeCurrentUser();
  }

  const handleWalletAccountsChanged = async (accounts: any) => {
    if (accounts.length > 0) {
      setWalletAccount(utils.getAddress(accounts[0]))
      UserService.setCurrentUser(utils.getAddress(accounts[0]))
    } else {
      handleDisconnectWallet();
      window.location.reload();
    }
  }

  const updateBalance = async () => {
    if (walletAccount && ethersSigner) {
      const _claim = new ethers.Contract(bftClaimBox.address, bftClaimBox.abi, ethersSigner);
      const _heeContract = new ethers.Contract(bftHeetoken.address, bftHeetoken.abi, ethersSigner);
      const _fiuContract = new ethers.Contract(bftFiuToken.address, bftFiuToken.abi, ethersSigner);
      const _shoeContract = new ethers.Contract(bftShoeItem.address, bftShoeItem.abi, ethersSigner);
      const _boxContract = new ethers.Contract(bftBox.address, bftBox.abi, ethersSigner);
     setClaimBoxContract(_claim)

      //GET balance
      const balance = await ethersProvider.getBalance(walletAccount);
      const [hee, fiu, shoe, box] = await Promise.all([
        _heeContract.balanceOf(walletAccount),
        _fiuContract.balanceOf(walletAccount),
        _shoeContract.balanceOf(walletAccount),
        _boxContract.balanceOf(walletAccount)
      ])
      setBnbBalance(ethers.utils.formatEther(balance))
      setHeebalance(ethers.utils.formatEther(hee))
      setFiuBalance(ethers.utils.formatEther(fiu))
      setShoeBalance(ethers.utils.formatUnits(shoe, 'wei'))
      setBoxBalance(ethers.utils.formatUnits(box, 'wei'))
      try {
      } catch (error) {
        console.error('claim', error);
      }
    }
  }

  const handleChainChanged = async (chainId: any) => {
    if (supportedChainIds.indexOf(chainId) >= 0) {
      setChainIdIsSupported(true);
    } else {
      setChainIdIsSupported(false);
    }
    window.location.reload();
  }

  useEffect(() => {
    const startApp = async (_ethereumProvider: any) => {
      //The provider detected by detectEthereumProvider() must be the same as window.ethereum
      if (_ethereumProvider !== window.ethereum) {
        alert('Do you have multiple wallets installed?');
        return;
      }
      if (_ethereumProvider.isMetaMask === true) {
        setMetaMaskIsInstalled(true);
      }
      // Check if a MetaMask account has permission to connect to app
      const accounts = await _ethereumProvider.request({ method: 'eth_accounts' });
      if (accounts.length > 0 && UserService.getCurrentUser()) {
        setWalletAccount(utils.getAddress(accounts[0]));
      };
      const _ethersProvider = await new ethers.providers.Web3Provider(_ethereumProvider);
      setEthersProvider(_ethersProvider);
      const _ethersSigner = await _ethersProvider.getSigner();
      setEthersSigner(_ethersSigner);
      const chainId = await _ethereumProvider.request({ method: 'eth_chainId' });
      if (supportedChainIds.indexOf(chainId) >= 0) {
        setChainIdIsSupported(true);
      }
      _ethereumProvider.on('accountsChanged', handleWalletAccountsChanged);
      _ethereumProvider.on('chainChanged', handleChainChanged);
    };

    const init = async () => {
      //detect whether the browser is connected to a provider
      let ethereumProvider = await detectEthereumProvider({ silent: true });
      if (ethereumProvider) {
        setProvider(ethereumProvider);
        await startApp(ethereumProvider);
      }

    };
    init();
    return () => {
      if (provider) {
        provider.removeListener('accountsChanged', handleWalletAccountsChanged);
        provider.removeListener('chainChanged', handleChainChanged);
      }
    }
  }, []);

  useEffect(() => {
    walletAccount === null && handleDisconnectWallet()
  }, [walletAccount])

  useEffect(() => {
    updateBalance()
  }, [walletAccount, ethersSigner])

  const value = {
    activePopup,
    setToggleActivePopup: setActivePopup,
    provider,
    ethersProvider,
    ethersSigner,
    walletAccount,
    setWalletAccount,
    metaMaskIsInstalled,
    chainIdIsSupported,
    bnbBalance: bnbBalance,
    heeBalance: heeBalance,
    fiuBalance: fiuBalance,
    shoeBalance: shoeBalance,
    boxBalance: boxBalance,
    updateBnbBalance: updateBalance,
    claimBoxContract
  }
  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}