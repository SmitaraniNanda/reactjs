import React, { useState } from 'react';
import axios from 'axios';


const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, course } = formData;

    if (!validateEmail(email)) {
      setMessage('Invalid email format. Sending to backend...');
    }

    try {
      const res = await axios.post('http://localhost:3000/students', {
        name,
        email,
        course,
      });

      setMessage(`Student added! ID: ${res.data.data.id}`);
      setFormData({ name: '', email: '', course: '' });
    } catch (err) {
      console.error(err);
      setMessage(`Server Error: ${err.response?.data?.error || 'Something went wrong'}`);
    }
  };

  return (
    <div className="student-form-container">
      <h2>Add New Student</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Enter course"
          value={formData.course}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default StudentForm;
