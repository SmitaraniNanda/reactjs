// src/Welcome.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
      return;
    }

    axios.post('http://localhost:3000/api/auth/welcome', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      setMessage(res.data.message); // Should be "Welcome to username"
    })
    .catch(err => {
      console.error('Token invalid or expired', err);
      localStorage.removeItem('token');
      navigate('/login');
    });
  }, [navigate]);

  return (
    <div className='container'>
      <h2>{message}</h2>
    </div>
  );
};

export default Welcome;
