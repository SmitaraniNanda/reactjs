import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: "", password: "", name: "", email: "", phoneNumber: "", department: "", roles: []
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRoleChange = (event) => {
        const { value, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            roles: checked
                ? [...prevData.roles, value]
                : prevData.roles.filter((role) => role !== value)
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/users/add", formData);
            alert("Registration Successful");
            navigate("/login");
        } catch (error) {
            alert("Registration Failed");
        }
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />


                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Phone Number:</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

                <label>Department:</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange} required />

                <label>Roles:</label>
                <div className="role-checkbox-group">
                    <label>
                        <input type="checkbox" value="Admin" onChange={handleRoleChange} checked={formData.roles.includes("Admin")} />
                        Admin
                    </label>
                    <label>
                        <input type="checkbox" value="Frontend Developer" onChange={handleRoleChange} checked={formData.roles.includes("Frontend Developer")} />
                        Frontend Developer
                    </label>
                    <label>
                        <input type="checkbox" value="Backend Developer" onChange={handleRoleChange} checked={formData.roles.includes("Backend Developer")} />
                        Backend Developer
                    </label>
                </div>

                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default SignUp;
