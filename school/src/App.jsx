import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const res = await axios.get('http://localhost:3000/students');
      setStudents(res.data);
    } catch (error) {
      console.error('Error fetching students:', error.message);
      navigate('/error'); 
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleStudentAdded = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };

  return (
    <div className="App">
      <h1>Student Manager</h1>
      <StudentForm onStudentAdded={handleStudentAdded} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
