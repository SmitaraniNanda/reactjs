import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({ userName: "", pwd: "" });


    const handleChange = (event) => {
        setLoginData({ ...loginData, [event.target.name]: event.target.value });
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/authenticate", loginData);
            if (response.data) {
                navigate("/ticketForm");  // Redirect to dashboard on success
            } else {
                alert("Invalid Username or Password");
            }
        } catch (error) {
            alert("Login Failed");
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="userName">UserName:</label>
                <input 
                    type="text" 
                    id="userName"
                    name="userName" 
                    value={loginData.userName} 
                    onChange={handleChange} 
                    required 
                />

                <label htmlFor="password">Password:</label>
                <input type="password" name="pwd" value={loginData.pwd} onChange={handleChange} required />


                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <a href="/signup">Sign Up</a>
            </p>
        </div>
    );
};

export default Login;
