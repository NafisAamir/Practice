import React, { useContext, useState } from 'react'
import AuthContextProvider,{AuthContext} from '../Context/AuthContextProvider';

export default function Login() {
        const [email,setemail]=useState([]);
        const [password,setpassword]=useState([]);
        const {login}=useContext(AuthContext);
        async function handleSubmit(event){
            event.preventDefault();
            login(email,password);
        }
    return (
        <div>
            <form data-testid = "auth_form" onSubmit={handleSubmit} >
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={(event)=>{setemail(event.target.value)}}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    onChange={(event)=>{setpassword(event.target.value)}}
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}