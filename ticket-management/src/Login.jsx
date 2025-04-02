import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const Login = () => {
    // React Router hook for navigation
    const navigate = useNavigate();

    // State to manage login form inputs
    const [loginData, setLoginData] = useState({ userName: "", pwd: "" });

    /**
     * Handles input field changes and updates state.
     * @param {object} event - The event object from the input field.
     */
    const handleChange = (event) => {
        setLoginData({ ...loginData, [event.target.name]: event.target.value });
    };

    /**
     * Sends login data to backend API for authentication.
     * Navigates to the ticket form page upon successful authentication.
     * Alerts the user if authentication fails.
     * @param {object} event - The event object from form submission.
     */
    const handleLogin = async (event) => {
        event.preventDefault(); // Prevents the page from refreshing on form submission
        try {
            // Sends login credentials to the authentication endpoint
            const response = await axios.post("http://localhost:8080/authenticate", loginData);

            // If authentication is successful, navigate to the ticket form page
            if (response.data) {
                navigate("/ticketForm");  
            } else {
                alert("Invalid Username or Password"); // Show error message if authentication fails
            }
        } catch (error) {
            alert("Login Failed"); // Alert user if API call fails
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            {/* Login Form */}
            <form onSubmit={handleLogin}>
                {/* Username Input Field */}
                <label htmlFor="userName">UserName:</label>
                <input 
                    type="text" 
                    id="userName"
                    name="userName" 
                    value={loginData.userName} 
                    onChange={handleChange} 
                    required 
                />

                {/* Password Input Field */}
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    name="pwd" 
                    value={loginData.pwd} 
                    onChange={handleChange} 
                    required 
                />

                {/* Submit Button */}
                <button type="submit">Login</button>
            </form>

            {/* Sign-up Link */}
            <p>
                Don't have an account? <a href="/signup">Sign Up</a>
            </p>
        </div>
    );
};

export default Login;
