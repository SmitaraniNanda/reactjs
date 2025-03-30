import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignUp from "./SignUp";
import Ticket from "./Ticket";
import UserForm from "./UserForm";
import TicketForm from "./TicketForm";
import Login from "./Login";

/**
 * AppRouter Component
 *  Manages application routing using React Router.
 *  Defines different routes for navigation between components.
 *  Uses state to manage selected ticket data for editing.
 */
const AppRouter = () => {
    // State to store the selected ticket for editing
    const [selectedTicket, setSelectedTicket] = useState(null);

    return (
        <>
            <Router>
                <Routes>
                    {/* Default Route: Login Page */}
                    <Route path="/" element={<Login />} />

                    {/* Route for Sign Up Page */}
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    {/* Route for Adding and Editing Tickets */}
                    <Route path="/addTicket" element={<Ticket selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} />} />

                    {/* Route for User Form */}
                    <Route path="/userForm" element={<UserForm />} />

                    {/* Route for Ticket Form, with ability to edit tickets */}
                    <Route path="/ticketForm" element={<TicketForm onEdit={setSelectedTicket} />} />
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;
