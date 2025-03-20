import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import "./App.css";

function UserList({ users, setUsers }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Delete user
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container">
      <h2>User List</h2>
      <input type="text" placeholder="Search Name" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => navigate("/new-user")}>New User</button>

      <table>
        <thead>
          <tr>
            <th>ID</th> <th>Name</th> <th>Phone</th> <th>Company</th> <th>City</th> <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
            .map(user => (
              <tr key={user.id}>
                <td>{user.id}</td> <td>{user.name}</td> <td>{user.phone}</td>
                <td>{user.company}</td> <td>{user.city}</td>
                <td>
                  <button onClick={() => navigate(`/edit-user/${user.id}`, { state: user })}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const formattedUsers = response.data.map(user => ({
          id: user.id,
          name: user.name,
          phone: user.phone,
          company: user.company.name,
          city: user.address.city
        }));
        setUsers(formattedUsers);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSave = (user) => {
    if (user.id) {
      // Update existing user
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      // Add new user
      const newUser = { ...user, id: users.length + 1 };
      setUsers([...users, newUser]);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList users={users} setUsers={setUsers} />} />
        <Route path="/new-user" element={<UserForm onSave={handleSave} />} />
        <Route path="/edit-user/:id" element={<UserForm onSave={handleSave} />} />
      </Routes>
    </Router>
  );
}
