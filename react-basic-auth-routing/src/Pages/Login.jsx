import React, { useContext, useState } from 'react';
import { MyContext } from '../Context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { setisAuth,loginfun } = useContext(MyContext);
    const navigate = useNavigate();
    const [logindetails, setlogindetails] = useState({
        email: "",
        password: ""
    });

    const submitfun = (e) => {
        e.preventDefault();
        fetch(`https://reqres.in/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(logindetails),
        })
            .then((res) => {
                if (res.ok) {
                    setisAuth(true);
                    navigate("/");
                }
            })
            .catch((error) => {
                console.log(error);
            });
        // loginfun(logindetails.email,logindetails.password);
    };

    return (
        <div>
            <form className="auth_form" onSubmit={submitfun}>
                <input
                    style={{ padding: "5px", margin: "10px", width: 200 }}
                    type="email"
                    className="email"
                    placeholder="Enter Email"
                    name='email'
                    onChange={(e) => { setlogindetails({ ...logindetails, [e.target.name]: e.target.value }) }}
                />
                <br />
                <input
                    style={{ padding: "5px", margin: "10px", width: 200 }}
                    type="password"
                    className="password"
                    placeholder="Enter password"
                    name='password'
                    onChange={(e) => { setlogindetails({ ...logindetails, [e.target.name]: e.target.value }) }}
                />
                <br />
                <input className="submit" type="submit" />
            </form>
        </div>
    );
}
