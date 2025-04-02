import React, { useState, useEffect } from "react"; // Import React and hooks
import axios from "axios"; // Import Axios for HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import './App.css'; // Import CSS file for styling

const Ticket = ({ selectedTicket, setSelectedTicket }) => {
    const navigate = useNavigate(); // Hook to navigate between pages

    // State for storing users, priorities, and statuses fetched from the backend
    const [userName, setUserName] = useState([]);
    const [ticketPriority, setTicketPriority] = useState([]);
    const [ticketStatus, setTicketStatus] = useState([]);

    // State to store ticket details
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

    // Fetch data when the component mounts or when selectedTicket changes
    useEffect(() => {
        if (selectedTicket) {
            setTicketData(selectedTicket); // If a ticket is selected, populate the form
        }

        // Fetch user list from API
        axios.get('http://localhost:8080/users')
            .then((response) => setUserName(response.data));

        // Fetch ticket priority options from API
        axios.get('http://localhost:8080/ticketPriority')
            .then((response) => setTicketPriority(response.data));

        // Fetch ticket status options from API
        axios.get('http://localhost:8080/ticketStatus')
            .then((response) => setTicketStatus(response.data));

    }, [selectedTicket]); // Dependency array ensures the effect runs when selectedTicket changes

    // Function to handle input field changes
    const handleChange = (event) => {
        setTicketData({
            ...ticketData, // Copy previous state
            [event.target.name]: event.target.value, // Update the changed field
        });
    };

    // Function to handle ticket creation form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload

        // Constructing ticket details object with proper format
        const ticketDetails = {
            title: ticketData.title,
            description: ticketData.description,
            priority: { id: parseInt(ticketData.priority) }, // Convert to object
            status: { id: parseInt(ticketData.status) }, // Convert to object
            createdBy: { id: parseInt(ticketData.createdBy) }, // Convert to object
            assignedTo: { id: parseInt(ticketData.assignedTo) }, // Convert to object
            ticketComment: ticketData.ticketComment
        };

        console.log("Submitting Ticket Data:", ticketDetails); // Debugging log

        try {
            // Send a POST request to create a new ticket
            const response = await axios.post('http://localhost:8080/tickets/add', ticketDetails);
            console.log("Response:", response.data);
            alert("Ticket Added Successfully"); // Show success alert
            navigate('/ticketForm'); // Navigate to ticket form page
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            alert("Ticket Adding Failed"); // Show error alert
        }
    };

    // Function to handle ticket update form submission
    const handleUpdate = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Constructing ticket details object with proper format
        const ticketDetails = {
            title: ticketData.title,
            description: ticketData.description,
            priority: { id: parseInt(ticketData.priority) },
            status: { id: parseInt(ticketData.status) },
            createdBy: { id: parseInt(ticketData.createdBy) },
            assignedTo: { id: parseInt(ticketData.assignedTo) },
            ticketComment: ticketData.ticketComment
        };

        console.log("Updating Ticket Data:", ticketDetails); // Debugging log

        try {
            // Send a PUT request to update the ticket
            const response = await axios.put(`http://localhost:8080/tickets/update/${ticketData.id}`, ticketDetails);
            console.log("Update Response:", response.data);
            alert("Ticket Updated Successfully"); // Show success alert
            setSelectedTicket(null); // Reset selected ticket
            navigate('/ticketForm'); // Navigate to ticket form page
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            alert("Ticket Update Failed"); // Show error alert
        }
    };

    return (
        <>
            {/* Form for creating or updating tickets */}
            <form onSubmit={ticketData.id ? handleUpdate : handleSubmit}>

                {/* Title Input */}
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" value={ticketData.title} onChange={handleChange} required /><br />

                {/* Description Input */}
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" value={ticketData.description} onChange={handleChange} required /><br />

                {/* Priority Selection Dropdown */}
                <label htmlFor="priority">Priority: </label>
                <select name="priority" value={ticketData.priority} onChange={handleChange} required>
                    <option value="">Select Priority</option>
                    {ticketPriority.map(priority => (
                        <option key={priority.id} value={priority.id}>{priority.description}</option>
                    ))}
                </select>
                <br />

                {/* Status Selection Dropdown */}
                <label htmlFor="status">Status: </label>
                <select name="status" value={ticketData.status} onChange={handleChange} required>
                    <option value="">Select Status</option>
                    {ticketStatus.map(status => (
                        <option key={status.id} value={status.id}>{status.description}</option>
                    ))}
                </select>
                <br />

                {/* Created By Selection Dropdown */}
                <label htmlFor="createdBy">Created By: </label>
                <select name="createdBy" value={ticketData.createdBy} onChange={handleChange} required>
                    <option value="">Select Creator</option>
                    {userName.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <br />

                {/* Assigned To Selection Dropdown */}
                <label htmlFor="assignedTo">Assigned To: </label>
                <select name="assignedTo" value={ticketData.assignedTo} onChange={handleChange} required>
                    <option value="">Select Assignee</option>
                    {userName.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <br />

                {/* Ticket Comment Input */}
                <label htmlFor="ticketComment">Ticket Comment: </label>
                <input type="text" name="ticketComment" value={ticketData.ticketComment} onChange={handleChange} /><br />

                {/* Submit Button (Changes based on whether a ticket is being updated or created) */}
                <button type="submit">{ticketData.id ? "Update Ticket" : "Create Ticket"}</button>
            </form>
        </>
    );
};

export default Ticket;
