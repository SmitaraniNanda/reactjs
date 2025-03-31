import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './App.css';

const Ticket = ({ selectedTicket, setSelectedTicket }) => {
    const navigate = useNavigate();

    const [userName, setUserName] = useState([]);
    const [ticketPriority, setTicketPriority] = useState([]);
    const [ticketStatus, setTicketStatus] = useState([]);

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

    useEffect(() => {
        if (selectedTicket) {
            setTicketData(selectedTicket);
        }

        axios.get('http://localhost:8080/users')
            .then((response) => setUserName(response.data));

        axios.get('http://localhost:8080/ticketPriority')
            .then((response) => setTicketPriority(response.data));

        axios.get('http://localhost:8080/ticketStatus')
            .then((response) => setTicketStatus(response.data));

    }, [selectedTicket]);

    const handleChange = (event) => {
        setTicketData({
            ...ticketData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        //  Fix: Convert `priority`, `status`, `createdBy`, `assignedTo` to objects
        const ticketDetails = {
            title: ticketData.title,
            description: ticketData.description,
            priority: { id: parseInt(ticketData.priority) }, //  Correct format
            status: { id: parseInt(ticketData.status) }, //  Correct format
            createdBy: { id: parseInt(ticketData.createdBy) }, // Correct format
            assignedTo: { id: parseInt(ticketData.assignedTo) }, // Correct format
            ticketComment: ticketData.ticketComment
        };

        console.log("Submitting Ticket Data:", ticketDetails); 

        try {
            const response = await axios.post('http://localhost:8080/tickets/add', ticketDetails);
            console.log("Response:", response.data);
            alert("Ticket Added Successfully");
            navigate('/ticketForm');
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            alert("Ticket Adding Failed");
        }
    };

    const handleUpdate = async (event) => {
        event.preventDefault();

        const ticketDetails = {
            title: ticketData.title,
            description: ticketData.description,
            priority: { id: parseInt(ticketData.priority) },
            status: { id: parseInt(ticketData.status) },
            createdBy: { id: parseInt(ticketData.createdBy) },
            assignedTo: { id: parseInt(ticketData.assignedTo) },
            ticketComment: ticketData.ticketComment
        };

        console.log("Updating Ticket Data:", ticketDetails);

        try {
            const response = await axios.put(`http://localhost:8080/tickets/update/${ticketData.id}`, ticketDetails);
            console.log("Update Response:", response.data);
            alert("Ticket Updated Successfully");
            setSelectedTicket(null);
            navigate('/ticketForm');
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            alert("Ticket Update Failed");
        }
    };

    return (
        <>
            <form onSubmit={ticketData.id ? handleUpdate : handleSubmit}>

                <label htmlFor="title">Title: </label>
                <input type="text" name="title" value={ticketData.title} onChange={handleChange} required /><br />

                <label htmlFor="description">Description: </label>
                <input type="text" name="description" value={ticketData.description} onChange={handleChange} required /><br />

                <label htmlFor="priority">Priority: </label>
                <select name="priority" value={ticketData.priority} onChange={handleChange} required>
                    <option value="">Select Priority</option>
                    {ticketPriority.map(priority => (
                        <option key={priority.id} value={priority.id}>{priority.description}</option>
                    ))}
                </select>
                <br />

                <label htmlFor="status">Status: </label>
                <select name="status" value={ticketData.status} onChange={handleChange} required>
                    <option value="">Select Status</option>
                    {ticketStatus.map(status => (
                        <option key={status.id} value={status.id}>{status.description}</option>
                    ))}
                </select>
                <br />

                <label htmlFor="createdBy">Created By: </label>
                <select name="createdBy" value={ticketData.createdBy} onChange={handleChange} required>
                    <option value="">Select Creator</option>
                    {userName.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <br />

                <label htmlFor="assignedTo">Assigned To: </label>
                <select name="assignedTo" value={ticketData.assignedTo} onChange={handleChange} required>
                    <option value="">Select Assignee</option>
                    {userName.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <br />

                <label htmlFor="ticketComment">Ticket Comment: </label>
                <input type="text" name="ticketComment" value={ticketData.ticketComment} onChange={handleChange} /><br />

                <button type="submit">{ticketData.id ? "Update Ticket" : "Create Ticket"}</button>
            </form>
        </>
    );
};

export default Ticket;
