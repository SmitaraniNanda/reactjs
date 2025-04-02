import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeletePopup from "./DeletePopup";
import "./App.css";

const TicketForm = ({ onEdit }) => {
    // State to store the list of tickets
    const [data, setData] = useState([]);
    
    // State to control delete confirmation popup
    const [showPopup, setShowPopup] = useState(false);
    
    // State to store the ticket ID that is about to be deleted
    const [deleteTicketId, setDeleteTicketId] = useState(null);
    
    // Hook to handle navigation
    const navigate = useNavigate();

    // Fetch user ID from localStorage; default to 1 if not found
    const userId = localStorage.getItem("userId") || 1;

    // Fetch non-deleted tickets when the component mounts
    useEffect(() => {
        axios.get(`http://localhost:8080/tickets/${userId}`)
            .then((response) => {
                // Filter out deleted tickets and update state
                setData(response.data.filter(ticket => !ticket.deleted));
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, [userId]); // Dependency array ensures this runs when userId changes

    /**
     * Handles editing a ticket.
     * The ticket to be edited.
     */
    const handleEdit = (ticket) => {
        onEdit(ticket);  // Pass ticket data to the parent component for editing
        navigate("/addTicket");  // Navigate to the ticket creation/edit page
    };

    /**
     * Navigates to the new ticket creation page.
     */
    const handleNewTicket = () => {
        navigate("/addTicket");
    };

    /**
     * Navigates to the user management page.
     */
    const handleUsers = () => {
        navigate("/userForm");
    };

    /**
     * Opens the delete confirmation popup and stores the ticket ID.
     * The ID of the ticket to be deleted.
     */
    const confirmDelete = (ticketId) => {
        setDeleteTicketId(ticketId);
        setShowPopup(true);
    };

    /**
     * ticket as deleted by updating its "deleted" flag.
     */
    const handleDelete = () => {
        axios.delete(`http://localhost:8080/tickets/delete/${deleteTicketId}`)
            .then(() => {
                // Instead of removing the ticket, mark it as deleted in the UI
                setData((prevData) => 
                    prevData.map(ticket => 
                        ticket.id === deleteTicketId ? { ...ticket, deleted: true } : ticket
                    )
                );
                setShowPopup(false);  // Close the popup after deletion
            })
            .catch((error) => console.error("Error deleting ticket: ", error));
    };

    return (
        <>
            {/* Button to navigate to the Users page */}
            <button onClick={handleUsers}>Users Data</button>

            {/* Button to navigate to the Add Ticket page */}
            <button onClick={handleNewTicket}>New Ticket</button>

            <div className="table-container">
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
                        {/* Render ticket list if data exists */}
                        {data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item.id} className={item.deleted ? "deleted-row" : ""}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.priority?.description}</td>
                                    <td>{item.status?.description}</td>
                                    <td>{item.createdBy?.name}</td>
                                    <td>{item.assignedTo?.name}</td>
                                    <td>{item.ticketComment}</td>
                                    <td>{item.createdDate}</td>
                                    <td>{item.modifiedDate}</td>
                                    <td>{item.deleteDate || "N/A"}</td>
                                    <td>{item.deleted ? "Yes" : "No"}</td>
                                    <td className="action-buttons">
                                        {/* Show edit and delete buttons only if ticket is not deleted */}
                                        {!item.deleted && (
                                            <>
                                                <button className="edit-btn" onClick={() => handleEdit(item)}>Edit</button>
                                                <button className="delete-btn" onClick={() => confirmDelete(item.id)}>Delete</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            // Show message if no tickets are found
                            <tr>
                                <td colSpan="13" style={{ textAlign: "center" }}>No tickets found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Delete confirmation popup */}
            <DeletePopup 
                isOpen={showPopup} 
                onClose={() => setShowPopup(false)} 
                onConfirm={handleDelete} 
            />
        </>
    );
};

export default TicketForm;
