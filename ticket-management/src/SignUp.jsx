import React, { useState } from "react";  // Importing React and the useState hook
import axios from "axios";  // Importing axios for making API requests
import { useNavigate } from "react-router-dom";  // Importing useNavigate for programmatic navigation
import './App.css';  // Importing CSS file for styling

const SignUp = () => {
    const navigate = useNavigate();  // Hook for navigation between pages
    
    // State to manage form input fields
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
        name: "",
        email: "",
        phoneNumber: "",
        department: "",
        role: ""
    });

    // Handles changes in all input fields except role
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    // Handles role selection (Only one role can be selected)
    const handleRoleChange = (event) => {
        setFormData({ ...formData, role: event.target.value });
    };

    // Handles form submission and sends user data to the backend
    const handleSubmit = async (event) => {
        event.preventDefault();  // Prevents default form submission behavior
        
        const userWithRole = { ...formData };  // Creating an object to send to the backend

        try {
            const response = await axios.post("http://localhost:8080/users/add", userWithRole);
            console.log(response.data);  // Logging the response from the server
            alert("Successfully Registered");
            navigate('/login');  // Redirect to login page after successful registration
        } catch (error) {
            console.error("Error: ", error);  // Logging error details
            alert("Registration Failed");  // Showing an alert message in case of failure
        }
    };

    return (
        <>
            {/* Registration Form */}
            <form onSubmit={handleSubmit}>
                {/* Username Input */}
                <label htmlFor="userName">Username:</label>
                <input type="text" name="userName" value={formData.userName} onChange={handleChange} required /><br />

                {/* Password Input */}
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required /><br />

                {/* Name Input */}
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br />

                {/* Email Input (Must be @questk2.com email) */}
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} pattern=".+@questk2\.com$" required />
                <small> (Must be @questk2.com email)</small><br />

                {/* Mobile Number Input (Only 10 digits allowed) */}
                <label htmlFor="phoneNumber">Mobile Number:</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} pattern="[0-9]{10}" required />
                <small> (10 digits only)</small><br />

                {/* Department Input */}
                <label htmlFor="department">Department:</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange} required /><br />

                {/* Role Selection using Radio Buttons (Only one can be selected) */}
                <label>Role:</label><br />
                <input type="radio" name="role" value="Admin" checked={formData.role === "Admin"} onChange={handleRoleChange} />
                <label>Admin</label><br />

                <input type="radio" name="role" value="Frontend Developer" checked={formData.role === "Frontend Developer"} onChange={handleRoleChange} />
                <label>Frontend Developer</label><br />

                <input type="radio" name="role" value="Backend Developer" checked={formData.role === "Backend Developer"} onChange={handleRoleChange} />
                <label>Backend Developer</label><br />

                {/* Submit Button */}
                <button type="submit">Submit</button>
            </form>

            {/* Login Navigation */}
            <h5>Already have an account? <a href="/login">Login</a></h5>
            <button onClick={() => navigate('/login')}>Login</button>
        </>
    );
};

export default SignUp;
