import React, { useContext } from 'react'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import { AuthContext } from './Context/AuthContextProvider'

export default function App() {
  const {isAuth}=useContext(AuthContext);

  return (
    <div>
      {isAuth?<Dashboard/>:<Login />}
       
        
    </div>
  )
}
