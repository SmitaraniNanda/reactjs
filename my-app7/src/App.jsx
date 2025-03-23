import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ExpenseForm from "./ExpenseForm";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<ExpenseForm />} />
        <Route path="/edit/:id" element={<ExpenseForm />} />
      </Routes>
    </Router>
  );
}

export default App;
