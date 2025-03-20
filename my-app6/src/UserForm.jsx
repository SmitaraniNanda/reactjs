import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function UserForm({ onSave }) {
  const navigate = useNavigate();
  const location = useLocation();
  const existingUser = location.state || { id: "", name: "", phone: "", company: "", city: "" };
  const [user, setUser] = useState(existingUser);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>{user.id ? "Edit User" : "New User"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" required />
        <input type="text" name="company" value={user.company} onChange={handleChange} placeholder="Company" required />
        <input type="text" name="city" value={user.city} onChange={handleChange} placeholder="City" required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
