import React, { createContext, useState } from 'react'

export const AuthContext=createContext()
function AuthContextProvider({children}) {
    const [Auth,setAuth]=useState({
        token:null,
        isAuth:false
    })

    const Login = (token) => {
        setAuth((prevAuth) => ({
            ...prevAuth,
            token: token,
            isAuth: true
        }));
    };

  return (
    <div>
      <AuthContext.Provider value={{ isAuth: Auth.isAuth, token: Auth.token, setAuth,Login }}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
