import React from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';
function App() {
  return (
    <div className="App">
      <StudentForm />
      <StudentList />
    </div>
  );
}

export default App;
