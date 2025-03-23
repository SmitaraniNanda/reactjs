import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { getExpenses, saveExpenses } from "./ExpensesData";

function ExpenseForm() {
    const { id } = useParams();

    const existingExpenses = getExpenses(); // Get all stored expenses
  
    const [expense, setExpense] = useState({
      id: id
        ? id
        : existingExpenses.length > 0
        ? existingExpenses[existingExpenses.length - 1].id + 1 // Assign last ID + 1
        : 1, // Start from 1 if no expenses exist
      date: "",
      category: "",
      amount: "",
      paymentMethod: "",
      description: "",
    });
  
  useEffect(() => {
    if (id) {
      const existingExpenses = getExpenses();
      const existingExpense = existingExpenses.find((exp) => exp.id === Number(id));
      if (existingExpense) setExpense(existingExpense);
    }
  }, [id]);

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedExpenses = getExpenses();
    if (id) {
      updatedExpenses = updatedExpenses.map((exp) =>
        exp.id === Number(id) ? expense : exp
      );
    } else {
      updatedExpenses.push(expense);
    }
    saveExpenses(updatedExpenses);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={expense.date} onChange={handleChange} required />
      <select name="category" value={expense.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
      </select>
      <input type="number" name="amount" value={expense.amount} onChange={handleChange} required />
      <select name="paymentMethod" value={expense.paymentMethod} onChange={handleChange} required>
        <option value="">Select Payment Method</option>
        <option value="Cash">Cash</option>
        <option value="Card">Card</option>
        <option value="UPI">UPI</option>
      </select>
      <textarea name="description" value={expense.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Save</button>
    </form>
  );
}

export default ExpenseForm;
