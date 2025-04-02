import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const SignUp = () => {
    // Hook for navigation after successful signup
    const navigate = useNavigate();

    // State to store form data
    const [formData, setFormData] = useState({
        userName: "",       // Stores the username
        password: "",       // Stores the password
        name: "",           // Stores the full name
        email: "",          // Stores the email address
        phoneNumber: "",    // Stores the phone number
        department: "",     // Stores the department name
        roles: []           // Stores selected roles as an array
    });

    /**
     * Handles input field changes and updates the state dynamically.
     * @param {Event} event - The input change event.
     */
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    /**
     * Handles role selection via checkboxes.
     * @param {Event} event - The checkbox change event.
     */
    const handleRoleChange = (event) => {
        const { value, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            roles: checked
                ? [...prevData.roles, value]  // Add role if checked
                : prevData.roles.filter((role) => role !== value) // Remove role if unchecked
        }));
    };

    /**
     * Handles form submission by sending data to the backend.
     * @param {Event} event - The form submission event.
     */
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        try {
            await axios.post("http://localhost:8080/users/add", formData); // Send data to backend API
            alert("Registration Successful"); // Show success message
            navigate("/login"); // Redirect to login page
        } catch (error) {
            alert("Registration Failed"); // Show failure message
        }
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                {/* Username input */}
                <label>Username:</label>
                <input type="text" name="userName" value={formData.userName} onChange={handleChange} required />

                {/* Full Name input */}
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                {/* Password input */}
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                {/* Email input */}
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                {/* Phone Number input */}
                <label>Phone Number:</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

                {/* Department input */}
                <label>Department:</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange} required />

                {/* Roles selection using checkboxes */}
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

                {/* Submit button */}
                <button type="submit">Sign Up</button>
            </form>

            {/* Link to login page for existing users */}
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default SignUp;
