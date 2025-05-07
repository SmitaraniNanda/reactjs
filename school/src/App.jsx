import React, { useEffect, useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await fetch('http://localhost:3000/students');
    const data = await res.json();
    setStudents(data);
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
