"use client"

import { createContext, useContext, useState, useEffect } from "react"
import getTokenAndUser from "@/utils/getTokenAndUser"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [isUserLoaded, setIsUserLoaded] = useState(false)

  const fetchUser = async () => {
    setIsUserLoaded(false)
    const [Token, User] = (await getTokenAndUser()) || []
    setToken(Token)
    setUser(User)
    setIsUserLoaded(true)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
        isUserLoaded,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
