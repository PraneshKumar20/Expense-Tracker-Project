import React from 'react'
import "./ExpenseSummary.css"

const ExpenseSummary = ({expenses}) => {
  const totalAmount = expenses.reduce(
    (sum,expenses) => sum + expenses.amount, 0
  );

  const currentMonth = new Date().getMonth();
  const monthlyTotal = expenses.filter((expense) => new Date(expense.date).getMonth()===currentMonth).reduce((sum,expense) => sum + expense.amount,0);
  return (
    <>
    <section className='expense-summary-section'>
        <div className='summary-card'>
            <h3>Total Expenses</h3>
            <p className='summary-amount'>₹{totalAmount}</p>
        </div>

        <div className='summary-card'>
            <h3>This Month</h3>
            <p className='summary-amount'>₹{monthlyTotal}</p>
        </div>
    </section>
    </>
  )
}

export default ExpenseSummary
