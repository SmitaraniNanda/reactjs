// Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '',password: '',  phone: '' });
  const navigate = useNavigate();

  const handleRegister = async () => {
    const res = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Registered successfully. Please login.');
      navigate('/login'); // Go to login after successful registration
    } else {
      alert(data.message || 'Registration failed');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} /><br />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} /><br />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} /><br />
      <input placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} /><br />
      <button onClick={handleRegister}>Register</button>

      <p>Already have an account?</p>
      <button onClick={() => navigate('/login')}>Go to Login</button>
    </div>
  );
};

export default Register;
