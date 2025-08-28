import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    var navigate = useNavigate();

    const handleSubmit =  async (event) => {
        event.preventDefault();
        // Handle login logic here
        if(!username || !password){
            return;
        }
        var res = await fetch("http://localhost:3800/login",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({username,password}),
        });
        console.log(res);
        var data = await res.json();
        console.log(data);
        if (data.msg=="Success"){
            alert("Login Success");
            window.localStorage.setItem("token",data.token)
            navigate("/");
        }
        else{
            if(data.msg == "Server Error"){
                alert("Server is Busy.Try after sometime...")
            }else{
            alert("Not Correct") ;
            }
        }
        if(onLogin) {
            onLogin({username,password})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div><br/>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div><br/>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;