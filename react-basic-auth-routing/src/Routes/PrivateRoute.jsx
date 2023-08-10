import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { MyContext } from "../Context/AuthContextProvider";

function PrivateRoute({children}){
    const navigate=useNavigate();
    const {isAuth,setisAuth}=useContext(MyContext);

    useEffect(()=>{
        if(!isAuth)
        navigate("/login")
    },[isAuth])

    return (
        <div>
            {isAuth?children:null}
        </div>
    )
}
export {PrivateRoute}