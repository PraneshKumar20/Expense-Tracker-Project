import React from 'react'
import "./ExpenseList.css"

const ExpenseList = ({expenses,children}) => {
  if(expenses.length===0){
    return <span className='no-expenses'>No expenses found</span>
  }
  return (
    <>
    <section className='expense-list-section'>
        <h2>Your Expenses</h2>
    <ul className='expense-list'>{children}</ul>
    </section>
    </>
  )
}

export default ExpenseList
