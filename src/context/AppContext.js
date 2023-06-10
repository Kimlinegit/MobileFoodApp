import React, { createContext } from 'react'

const AppContext = createContext({})

export const useAppContext = () => {
  return React.useContext(AppContext)
}

export const AppContextProvider= ({ children }) => {
    const [userInfo, setUserInfo] =React.useState()

  const values = {userInfo, setUserInfo}
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}