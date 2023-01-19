import React, { useState } from "react";
import "../../css/Login.css";

import { useNavigate  } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('john');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = e => {
        e.preventDefault();
        /*console.log(username);*/
        navigate('/dashboard');
        props.loginStatus.setIsLoggedIn(true);
        console.log(props.loginStatus.isLoggedIn);
    }
    return (
        <div className="container">
              {/* {username} */}
            <form onSubmit={login}>
                <h3>Sign In</h3>
                <div>
                    <label>Username</label>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"></input>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password"></input>
                </div>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}
export default Login;

