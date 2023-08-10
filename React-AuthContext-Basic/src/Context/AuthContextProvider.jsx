import { createContext, useState } from "react";

  export const AuthContext=createContext();
  function AuthContextProvider({children}){
    const [isAuth,setisAuth]=useState(false);
    const [token,settoken]=useState("")

    const login=async(email,password)=>{
        try {
          let res=await fetch(`https://reqres.in/api/login`,{
            method:"POST",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password})
          })
          let data=await res.json()
          console.log(data);
          
          if(res.ok){
            setisAuth(true);
            settoken(data.token)
          }
        } catch (error) {
          console.log(error);
        }
    }
    const logout=()=>{
      setisAuth(false);
    }
    return (
      <div>
        <AuthContext.Provider value={{isAuth,token,login,logout}}>{children}</AuthContext.Provider>
      </div>
    )
  }
  export default AuthContextProvider