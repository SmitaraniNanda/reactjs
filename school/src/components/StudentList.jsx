import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({ name: '', email: '', course: '' });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get('http://localhost:3000/students');
      setStudents(res.data.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch students.');
    }
  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setEditedData({ name: student.name, email: student.email, course: student.course });
  };

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/students/${editingId}`, editedData);
      setEditingId(null);
      fetchStudents();
    } catch (err) {
      console.error(err);
      setError('Update failed.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/students/${id}`);
      fetchStudents();
    } catch (err) {
      console.error(err);
      setError('Delete failed.');
    }
  };

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {editingId === student.id ? (
              <div className="edit-container">
                <input
                  name="name"
                  value={editedData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <input
                  name="email"
                  value={editedData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  name="course"
                  value={editedData.course}
                  onChange={handleChange}
                  placeholder="Course"
                />
                <div className="edit-buttons">
                  <button onClick={handleUpdate}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <strong>{student.name}</strong> - {student.email} - {student.course}
                <button onClick={() => handleEdit(student)} style={{ marginLeft: '10px' }}>Edit</button>
                <button onClick={() => handleDelete(student.id)} style={{ marginLeft: '5px' }}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
