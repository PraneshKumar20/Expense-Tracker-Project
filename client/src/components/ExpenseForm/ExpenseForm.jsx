import React, { useEffect } from 'react'
import "./ExpenseForm.css";
import { IoBagAdd } from "react-icons/io5";
import { useState } from 'react';

const ExpenseForm = ({onAddExpense, onUpdateExpense, editingExpense}) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if(editingExpense){
            setTitle(editingExpense.title);
            setAmount(editingExpense.amount);
            setCategory(editingExpense.category);
            setDate(editingExpense.date.split("T")[0]);
        }
    },[editingExpense]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(!title || !amount || !category || !date) {
            setError("All fields are required!");
            return;
        }

        const expenseData = editingExpense ?
        {
            ...editingExpense,
            title,
            amount: +amount,
            category,
            date
        } :
        {
            title,
            amount: +amount,
            category,
            date
        }

        editingExpense ? onUpdateExpense(expenseData) : onAddExpense(expenseData);
        setTitle("");
        setAmount("");
        setCategory("");
        setDate("");
        setError("");
    }

  return (
    <>
    <section className='expense-form-section'>
        <form className='expense-form' onSubmit={submitHandler}>
            <div className='title'>
            <IoBagAdd className='add-icon'/>
            <h2>{editingExpense ? "Edit Expense" : "Add Expense"}</h2>
            </div>
            {error && <p className='error-text'>{error}</p>}
            <div className='form-control'>
                <label>Title</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Amount</label>
                <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>Select</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                </select>
            </div>

            <div className='form-control'>
                <label>Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className='add-expense-btn'>
            <button className='btn-primary'>{editingExpense ? "Update Expense" : "Add Expense"}</button>
            </div>
        </form>
    </section>
    </>
  )
}

export default ExpenseForm
