import { createContext, ReactNode } from "react"

interface commonContextType {
  popupNoti: {
    status: boolean,
    type: ''
  }
} 

const CommonContext = createContext<commonContextType>({
  popupNoti: {
    status: false,
    type: ''
  }
})

interface IProps {
  children: ReactNode
}
export const CommonProvider: React.FC<IProps> = ({children}) => {

  const value = {
    popupNoti: {
      status: false,
      type: ''
    }
  }

  return <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
}