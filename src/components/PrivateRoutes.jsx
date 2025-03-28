import React, { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import { Navigate } from 'react-router-dom'

function PrivateRoutes({children}) {
    const {isAuth}=useContext(AuthContext)
  return (
    isAuth ? children : <Navigate to='/login' />
  )
}

export default PrivateRoutes
