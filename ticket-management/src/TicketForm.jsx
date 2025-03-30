import React, { useState, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeletePopup from "./DeletePopup";

const TicketForm = ({ onEdit }) => {
    const [data, setData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [deleteTicketId, setDeleteTicketId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/tickets")
            .then((response) => setData(response.data))
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    const handleEdit = (ticket) => {
        onEdit(ticket);
        navigate("/addTicket");
    };

    const handleNewTicket = () => {
        navigate("/addTicket");
    };

    const handleUsers = () => {
        navigate("/userForm");
    };

    const confirmDelete = (ticketId) => {
        setDeleteTicketId(ticketId);
        setShowPopup(true);
    };

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/tickets/delete/${deleteTicketId}`)
            .then(() => {
                setData((prevData) => prevData.filter((ticket) => ticket.id !== deleteTicketId));
                setShowPopup(false);
            })
            .catch((error) => console.error("Error deleting ticket: ", error));
    };

    return (
        <>
            <button onClick={handleUsers}>Users Data</button>
            <button onClick={handleNewTicket}>New Ticket</button>

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
                    {data.map((item) => (
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
                                <button onClick={() => handleEdit(item)}>Edit</button>
                                <button onClick={() => confirmDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <DeletePopup isOpen={showPopup} onClose={() => setShowPopup(false)} onConfirm={handleDelete} />
        </>
    );
};

export default TicketForm;
