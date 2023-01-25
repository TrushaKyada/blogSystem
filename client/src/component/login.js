import axios from "axios";

import React, { useState } from "react";
// import "./style.css"
const Login = () => {
    const [data, setData] = useState([{
        email: "",
        password: ""
    }])
    const handle = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/user/login", {
            email: data.email,
            password: data.password
        }).then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("id",res.data._id)
            window.location = "/"
        }).catch((e) => {   
            alert(e.response.data.message);
            window.location = "/registration"
        })


    }
    return (

        <>
            <div className="container py-5 my-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-3 p-5 mt-auto bg-light">

                        <h3 className="text-center border-bottom pb-3">log in</h3>
                        <div className="my-3"><h6>email</h6><input type="text" className="w-100" name="email" value={data.email} onChange={(e) => handle(e)}></input></div>
                    <div><h6>password</h6><input type="password" className="w-100" name="password" value={data.password} onChange={(e) => handle(e)}></input></div>
                    <div className="mt-3"><button className="px-3 py-2 bg-success border-0 text-white" onClick={(e) => submit(e)}>log in</button></div>
                    <div className="mt-3 text-center"><a href="/registration" className="text-center text-success mt-5">create your Account</a></div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}
export default Login;