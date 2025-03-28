import React, { useState, useEffect } from "react";  // Importing React, useState, and useEffect hooks
import axios from "axios";  // Importing axios for making API requests
import { useNavigate } from "react-router-dom";  // Importing useNavigate for programmatic navigation

const Ticket = ({ selectedTicket, setSelectedTicket }) => {
    const navigate = useNavigate();  // Hook for navigation between pages

    // State to store user list, ticket priority, and ticket status options
    const [userName, setUserName] = useState([]);
    const [ticketPriority, setTicketPriority] = useState([]);
    const [ticketStatus, setTicketStatus] = useState([]);

    // State to store ticket form data
    const [ticketData, setTicketData] = useState({
        id: null,
        title: "",
        description: "",
        priority: "",
        status: "",
        createdBy: "",
        assignedTo: "",
        ticketComment: ""
    });

    // Fetch initial data when the component mounts
    useEffect(() => {
        // If an existing ticket is selected, populate the form with its data
        if (selectedTicket) {
            setTicketData(selectedTicket);
        }

        // Fetch user data from backend
        axios.get('http://localhost:8080/users')
            .then((response) => {
                if (response && response.data) {
                    const names = response.data.map((user) => ({
                        id: user.id,
                        name: user.name,
                    }));
                    setUserName(names);
                    console.log(names);  // Logging the user data
                }
            });

        // Fetch ticket priority options from backend
        axios.get('http://localhost:8080/ticketPriority')
            .then((response) => {
                if (response && response.data) {
                    const priorities = response.data.map((ticketPriority) => ({
                        id: ticketPriority.id,
                        description: ticketPriority.description,
                    }));
                    setTicketPriority(priorities);
                    console.log(priorities);  // Logging the priority data
                }
            });

        // Fetch ticket status options from backend
        axios.get('http://localhost:8080/ticketStatus')
            .then((response) => {
                if (response && response.data) {
                    const statuses = response.data.map((ticketStatus) => ({
                        id: ticketStatus.id,
                        description: ticketStatus.description,
                    }));
                    setTicketStatus(statuses);
                    console.log(statuses);  // Logging the status data
                }
            });

    }, [selectedTicket]);  // Runs when selectedTicket changes

    // Handle changes in form input fields
    const handleChange = (event) => {
        console.log(event.target.value);  // Logging the input change
        setTicketData({
            ...ticketData,
            [event.target.name]: event.target.value,
        });
    };

    // Function to handle updating an existing ticket
    const handleUpdate = async (event) => {
        event.preventDefault();  // Prevents default form submission behavior

        const ticketDetails = {
            title: ticketData.title,
            description: ticketData.description,
            priority: ticketData.priority,
            status: ticketData.status,
            createdBy: ticketData.createdBy,
            assignedTo: ticketData.assignedTo,
            ticketComment: ticketData.ticketComment
        };

        try {
            const response = await axios.put(`http://localhost:8080/tickets/update/${ticketData.id}`, ticketDetails);
            console.log(response.data);  // Logging the response from the server
            alert("Ticket Updated Successfully");
            setSelectedTicket(null);  // Reset selected ticket after update
            navigate('/ticketForm');  // Navigate back to ticket list
        } catch (error) {
            console.error("Error: ", error);  // Logging error details
            alert("Ticket Update Failed");
        }
    };

    // Function to handle adding a new ticket
    const handleSubmit = async (event) => {
        event.preventDefault();  // Prevents default form submission behavior

        const ticketDetails = {
            title: ticketData.title,
            description: ticketData.description,
            priority: ticketData.priority,
            status: ticketData.status,
            createdBy: ticketData.createdBy,
            assignedTo: ticketData.assignedTo,
            ticketComment: ticketData.ticketComment
        };

        try {
            const response = await axios.post('http://localhost:8080/tickets/add', ticketDetails);
            console.log(response.data);  // Logging the response from the server
            alert("Ticket Added Successfully");
            navigate('/ticketForm');  // Navigate back to ticket list
        } catch (error) {
            console.error("Error: ", error);  // Logging error details
            alert("Ticket Adding Failed");
        }
    };

    return (
        <>
            {/* Ticket Form for creating or updating a ticket */}
            <form onSubmit={ticketData.id ? handleUpdate : handleSubmit}>
                
                {/* Input field for Ticket Title */}
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" value={ticketData.title} onChange={handleChange} required /><br />

                {/* Input field for Ticket Description */}
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" value={ticketData.description} onChange={handleChange} required /><br />

                {/* Dropdown for selecting ticket priority */}
                <label htmlFor="priority">Priority: </label>
                <select name="priority" value={ticketData.priority} onChange={handleChange} required>
                    <option value="">None</option>
                    {ticketPriority.map((priority) => (
                        <option key={priority.id} value={priority.id}>{priority.description}</option>
                    ))}
                </select>
                <br />

                {/* Dropdown for selecting ticket status */}
                <label htmlFor="status">Status: </label>
                <select name="status" value={ticketData.status} onChange={handleChange} required>
                    <option value="">None</option>
                    {ticketStatus.map((status) => (
                        <option key={status.id} value={status.id}>{status.description}</option>
                    ))}
                </select>
                <br />

                {/* Dropdown for selecting the user who created the ticket */}
                <label htmlFor="createdBy">Created By: </label>
                <select name="createdBy" value={ticketData.createdBy} onChange={handleChange} required>
                    <option value="">None</option>
                    {userName.map((user) => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <br />

                {/* Dropdown for selecting the assigned user */}
                <label htmlFor="assignedTo">Assigned To: </label>
                <select name="assignedTo" value={ticketData.assignedTo} onChange={handleChange} required>
                    <option value="">None</option>
                    {userName.map((user) => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <br />

                {/* Input field for adding ticket comments */}
                <label htmlFor="ticketComment">Ticket Comment: </label>
                <input type="text" name="ticketComment" value={ticketData.ticketComment} onChange={handleChange} /><br />

                {/* Submit button (updates if editing, adds if creating new ticket) */}
                <button type="submit">{ticketData.id ? "Update Ticket" : "Create Ticket"}</button>
            </form>
        </>
    );
};

export default Ticket;
