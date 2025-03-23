import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getExpenses, saveExpenses } from "./ExpensesData";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setExpenses(getExpenses());
  }, []);

  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    saveExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Expense Tracker</h1>
      <button onClick={() => navigate("/add")}>New Expense</button>
      <input
        type="text"
        placeholder="Search by category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Category</th>
            <th>Amount ($)</th>
            <th>Payment Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.date}</td>
              <td>{entry.category}</td>
              <td>${entry.amount}</td>
              <td>{entry.paymentMethod}</td>
              <td>
                <button onClick={() => navigate(`/edit/${entry.id}`)}>Edit</button>
                <button onClick={() => handleDelete(entry.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;