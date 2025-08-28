import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [user, setUser] = useState({ username:"",password:""});
    // const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        var res = await fetch("http://localhost:3800/registerUser",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user),
        });
        console.log(res);
        var data = await res.json();
        console.log(data);
        if (data.msg=="Success"){
            alert("Sigup Success");
            navigate("/login");
        }
        else{
            alert("Not Correct") ;
        }
        // setSubmitted(true)
    }
    
    return (
        <div style={{ maxWidth: 400,margin: "2rem auto", padding:24, border:"1px solid #ccc",borderRadius: 8}}>
            <h2>Sign Up</h2>
            {/* {submitted ? (
                <div>SignUp Successful..!!</div>
            ) : ( */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        required
                        style={{ width:"100%", padding: 0, marginTop: 4}}
                    />
                  </label>
                </div><br/>
                <div style={{marginBottom: 16}}>
                    <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                        style={{ width:"100%", padding: 0, marginTop: 4}}
                    />
                 </label>
                </div>
                <button type="submit" style={{ padding:"8px 16px"}}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;