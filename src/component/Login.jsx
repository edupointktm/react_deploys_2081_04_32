import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    let usenaviage = useNavigate()
    const [user_data, setUser_Data]=useState([])
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    let getLogin=(e)=>{
        e.preventDefault()
        axios.get('http://localhost:3000/user')
        .then((res)=>setUser_Data(res.data))
    
       
       let getValue = user_data.find((ud)=> ud.email==email && ud.password==password)
       if(Object.keys(getValue).length>0){
        usenaviage('/userdetails')
       }
    }
    return (
        <>
    
            <div className="form-box">
                <form className="form" onSubmit={getLogin}>
                    <span className="title">Sign up</span>
                    <span className="subtitle">Create a free account with your email.</span>
                    <div className="form-container">
                        <input type="text" className="input" placeholder="user name" onChange={(e)=>setEmail(e.target.value)} />
                        <input type="password" className="input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <input type='submit' to = "/userdetails" className="btn btn-primary" LogIn/>
                </form>
                <div className="form-section">
                    <p>Have an account? <a href>Log in</a> </p>
                </div>
            </div>

        </>
    )
}

export default Login