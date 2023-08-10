import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext=createContext();

function AuthContext({children}){
    const [isAuth,setisAuth]=useState(false);
    // const navigate=useNavigate();
    // const loginfun=async(email,password)=>{
    //     fetch(`https://reqres.in/api/login`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({email,password}),
    //     })
    //         .then((res) => {
    //             if (res.ok) {
    //                 setisAuth(true);
    //                 navigate("/");
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
    return (
        <div>
            <MyContext.Provider value={{isAuth,setisAuth}}>{children}</MyContext.Provider>
        </div>
    )
    
}
export {AuthContext}