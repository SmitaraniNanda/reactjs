import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    // State to store user data fetched from the backend
    const [data, setData] = useState([]);

    // Hook for handling programmatic navigation between pages
    const navigate = useNavigate();

    // useEffect to fetch user data from the backend API when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8080/users')
            .then((response) => {
                console.log('Fetched User Data: ', response.data);
                setData(response.data); // Store the retrieved user data in state
            })
            .catch((error) => {
                console.error('Error fetching user data: ', error);
            });
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    // Function to navigate to the TicketForm page
    const handleTickets = () => {
        navigate('/ticketForm');
    };

    return (
        <>
            {/* Button to navigate to the Tickets Table */}
            <button onClick={handleTickets}>Tickets Table</button>

            {/* Table displaying user data */}
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Phone Number</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapping over the user data to create table rows */}
                    {data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.userName}</td>
                                <td>{item.email}</td>
                                <td>{item.department}</td>
                                <td>{item.phoneNumber}</td>
                                {/* Displaying multiple roles using optional chaining to avoid errors */}
                                <td>{item.roles?.map(role => role.role).join(", ")}</td>
                            </tr> 
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default UserForm;
