interface currentProps {
  walletAddress: string
}

export const UserService = {
  getCurrentUser: () => {
    const userInfo = localStorage.getItem('user');
    if(userInfo) return JSON.parse(userInfo);
  },
  setCurrentUser: (userInfo: string) => {
    return localStorage.setItem('user', JSON.stringify(userInfo));
  },
  removeCurrentUser: () => {
    return localStorage.removeItem('user');
  }
}

export const MarketplaceService = {
  getStatusPopupInfo: () => {
    const ISSERVER = typeof window === "undefined";
    if(!ISSERVER){
      const status = localStorage.getItem('statusPopupInfo');
      if(status) return status;
    }
  },
  setStatusPopupInfo: (status: boolean) => {
    return localStorage.setItem('statusPopupInfo', JSON.stringify(status));
  }
}