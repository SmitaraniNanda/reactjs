import React, { useEffect, useState } from "react";  // Importing React and necessary hooks
import axios from "axios";  // Importing axios for API calls
import { useNavigate } from "react-router-dom";  // Importing useNavigate for navigation
import { Link } from "react-router-dom";  // Importing Link for navigation between pages
import './App';  // Importing CSS file 

const Login = () => {
    const navigate = useNavigate();  // Hook for programmatic navigation

    // State to store users fetched from the backend
    const [users, setUsers] = useState([]);

    // State to handle error messages
    const [error, setError] = useState("");

    // State to store user input for login
    const [loginData, setLoginData] = useState({
        userName: "",
        password: ""
    });

    // Fetch users from the backend when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8080/users')
        .then((response) => {
            setUsers(response.data);  // Store users in state and Updates the users state with fetched data
        })
        .catch((error) => {
            console.error("Error fetching data: ", error); //Logs any API call failures
        });
    }, []);

    // Handle input field changes and update loginData state
    const handleChange = (event) => {
        console.log(event.target.value);  // Log user input for debugging
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value,  //Updates specific field values (userName or password)
        });
    };

    // Handle login form submission
    const handleLogin = (event) => {
        event.preventDefault();

        // Check if entered credentials match any user in the database
        const user = users.find((employee) => 
            employee.userName === loginData.userName && employee.password === loginData.password
        );

        if (user) {
            navigate('/ticketForm');  // Navigate to ticketForm page if login is successful
        } else {
            alert("Invalid Username or Password");  // Show alert for invalid credentials
        }
    };

    return (
        <>
            <h2>Login</h2>
            {/* Login Form */}
            <form onSubmit={handleLogin}>
                <label htmlFor="userName">UserName:</label>
                <input type="text" name="userName" value={loginData.userName} onChange={handleChange} required /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={loginData.password} onChange={handleChange} required /><br />

                <button type="submit">Login</button>
            </form>

            {/* Navigation to SignUp page */}
            <h5>Don't have an account? <Link to="./SignUp">Sign Up</Link></h5>
        </>
    );
}

export default Login;
