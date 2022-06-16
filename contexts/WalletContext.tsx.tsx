import { ethers } from "ethers"
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"
import detectEthereumProvider from '@metamask/detect-provider';

interface wallerContextType {
  activePopup: boolean,
  setToggleActivePopup: (status: boolean) => void,
  provider: any,
  walletAccount: any,
  setWalletAccount: (account: any) => void
  metaMaskIsInstalled: boolean,
  chainIdIsSupported: boolean,
} 

interface IProps {
  children: ReactNode
}

const WalletContext = createContext<wallerContextType>({
  activePopup: false,
  setToggleActivePopup: () => {},
  provider: null,
  walletAccount: null,
  setWalletAccount: () => {},
  metaMaskIsInstalled: false,
  chainIdIsSupported: false,
})

export const useWalletContext = () => useContext(WalletContext);

export const WalletProvider: React.FC<IProps> = ({children}) => {
  const [provider, setProvider] = useState<any>();
  const [activePopup, setActivePopup] = useState<boolean>(false);
  const [walletAccount, setWalletAccount] = useState<any>();
  const [metaMaskIsInstalled, setMetaMaskIsInstalled] = useState<boolean>(false); 
  const [chainIdIsSupported, setChainIdIsSupported] = useState<boolean>(false);

  useEffect(() => {
    const handleCheckIsMetamark = async () => {
      let ethereumProvider: any = await detectEthereumProvider({ silent: true });
      if(ethereumProvider.isMetaMask === true) {
        setProvider(new ethers.providers.Web3Provider((window as any).ethereum))
        setMetaMaskIsInstalled(true)
      }
    }
    handleCheckIsMetamark()
  }, [])

  const value = {
    activePopup,
    setToggleActivePopup: setActivePopup,
    provider,
    walletAccount,
    setWalletAccount,
    metaMaskIsInstalled,
    chainIdIsSupported
  }
  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}