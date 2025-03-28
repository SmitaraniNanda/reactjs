import React, { useState, useEffect } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Ticket from "./Ticket";

const TicketForm = ({ onEdit }) => {
    // State to store the list of tickets
    const [data, setData] = useState([]);
    
    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Fetch ticket data from backend when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8080/tickets')
            .then((response) => {
                console.log('Fetched Data: ', response.data);
                setData(response.data); // Store the retrieved data in state
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, []); // Runs only once when the component mounts

    // Function to handle editing a ticket
    const handleEdit = (ticket) => {
        onEdit(ticket); // Pass the selected ticket data to the parent component
        navigate('/addTicket'); // Navigate to the Add Ticket form
    };

    // Function to navigate to the Add Ticket page
    const handleNewTicket = () => {
        navigate('/addTicket');
    };

    // Function to navigate to the Users Data page
    const handleUsers = () => {
        navigate('/userForm');
    };

    // Function to handle ticket deletion
    const handleDelete = (ticketId) => {
        // Ask for confirmation before deleting
        const confirm = window.confirm("Are you sure you want to delete this ticket?");
        if (!confirm) return;

        // Send a delete request to the backend
        axios.delete(`http://localhost:8080/tickets/delete/${ticketId}`)
            .then((response) => {
                // Remove the deleted ticket from the state to update the UI
                setData((prevData) => prevData.filter((ticket) => ticket.id !== ticketId));
            })
            .catch((error) => {
                console.error("Error deleting ticket: ", error);
            });
    };

    return (
        <>
            {/* Buttons for navigating to Users Data and Adding a New Ticket */}
            <button onClick={handleUsers}>Users Data</button>
            <button onClick={handleNewTicket}> New Ticket</button>

            {/* Table displaying the list of tickets */}
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Created By</th>
                        <th>Assigned To</th>
                        <th>Ticket Comment</th>
                        <th>Created Date</th>
                        <th>Modified Date</th>
                        <th>Delete Date</th>
                        <th>Deleted</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapping over the ticket data and displaying each ticket */}
                    {data.map((item) => {
                        return (                             
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.priority.description}</td>
                                <td>{item.status.description}</td>
                                <td>{item.createdBy.name}</td>
                                <td>{item.assignedTo.name}</td>
                                <td>{item.ticketComment}</td>
                                <td>{item.createdDate}</td>
                                <td>{item.modifiedDate}</td>
                                <td>{item.deleteDate}</td>
                                <td>{item.deleted}</td>
                                <td>
                                    {/* Buttons for editing and deleting tickets */}
                                    <button onClick={() => handleEdit(item)}>Edit</button>
                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                </td>
                            </tr>               
                        );       
                    })}
                </tbody>
            </table>
        </>
    );
};

export default TicketForm;
