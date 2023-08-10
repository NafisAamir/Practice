import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

function  Dashboard() {
    const {logout,token}=useContext(AuthContext);
    
    return (
        <div >
            <h3 data-testid = "token" >Token: {token} </h3>
            <button data-testid = "logout" onClick={()=>{logout()}} >LOGOUT</button>
        </div>
    )
}
export default Dashboard