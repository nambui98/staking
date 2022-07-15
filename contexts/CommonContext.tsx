import { createContext, ReactNode, useContext, useState } from "react"

interface commonContextType {
  popupNoti: {
    title: string
    message?: any
    status: boolean
    handleToggleStatus: (status?: any) => void
    handleHidePopup: (status?: any) => any
    handleClickButton: any
    titleCustomColor?: any
    titleButton?: string
    popupType: any
    sx?: any
  },
  spinner: {
    status: boolean
    handleChangeStatus: (status?: boolean) => void
  }
} 

const CommonContext = createContext<commonContextType>({
  popupNoti: {
    title: '',
    message: null,
    status: false,
    handleToggleStatus: () => {},
    handleHidePopup: () => {},
    handleClickButton: () => {},
    titleCustomColor: null,
    titleButton: '',
    popupType: null,
    sx: null
  },
  spinner: {
    status: false,
    handleChangeStatus: () => {}
  }
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
    handleHidePopup: () => setPopupNoti({...popupNoti, status: false}),
    handleClickButton: null,
    titleCustomColor: '',
    titleButton: '',
    popupType: '',
    sx: ''
  })
  const [spinner, setSpinner] = useState<any>({
    status: false,
    handleChangeStatus: (status: boolean) => setSpinner({...spinner, status})
  })
  const value = {
    popupNoti,
    spinner
  }

  return <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
}