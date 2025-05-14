import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get('http://localhost:3000/students');
        setStudents(res.data.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch students.');
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      {error && <p className="error">{error}</p>}
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> - {student.email} - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
