import { createContext, ReactNode, useContext, useState } from "react"

interface commonContextType {
  popupNoti: {
    title: string
    message?: any
    status: boolean
    handleToggleStatus: () => any
    handleClickButton: () => any
    titleCustomColor?: any
    titleButton?: string
    popupType: any
    sx?: any
  }
  handleClickButtonPopupNoti: () => void
} 

const CommonContext = createContext<commonContextType>({
  popupNoti: {
    title: '',
    message: null,
    status: false,
    handleToggleStatus: () => {},
    handleClickButton: () => {},
    titleCustomColor: null,
    titleButton: '',
    popupType: null,
    sx: null
  },
  handleClickButtonPopupNoti: () => {}
})
export const useCommonContext = () => useContext(CommonContext);
interface IProps {
  children: ReactNode
}
export const CommonProvider: React.FC<IProps> = ({children}) => {
  const [popupNoti, setPopupNoti] = useState<any>({
    title: '',
    message: '',
    status: false,
    handleToggleStatus: (status: any) => setPopupNoti({...popupNoti, ...status}),
    handleClickButton: () => {},
    titleCustomColor: '',
    titleButton: '',
    popupType: '',
    sx: ''
  })

  const value = {
    popupNoti,
    handleClickButtonPopupNoti: () => null
  }

  return <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
}