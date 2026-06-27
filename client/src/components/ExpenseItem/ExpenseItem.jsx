import React from 'react'
import "./ExpenseItem.css"
import { useState } from 'react'
import { useEffect } from 'react';

const ExpenseItem = ({expense, onDeleteExpense, onEditExpense}) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const DateHandler = () => {
      const updatedDate = expense.date.split("T")[0];
      setDate(updatedDate);
    }
    DateHandler();
  },[date]);
  
  return (
    <>
    <li className='expense-item'>
        <div className='expense-left'>
            <h3 className='expense-title'>{expense.title}</h3>
            <p className='expense-meta'>{expense.category} • {date}</p>
        </div>

        <div className='expense-right'>
            <span className='expense-amount'>₹{expense.amount}</span>
            <button className='edit-btn' onClick={() => onEditExpense(expense)}>Edit</button>
            <button className='delete-btn' onClick={() => onDeleteExpense(expense._id)}>Delete</button>
        </div>
    </li>
    </>
  )
}

export default ExpenseItem
