import Navbar from "./components/Navbar/Navbar";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import ExpenseSummary from "./components/ExpenseSummary/ExpenseSummary";
import { useEffect, useState } from "react";
import axios from "./api/axios"
import "./App.css"

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  //load
useEffect(()=>{
  const fetchExpenses = async() => {
    try{
      const response = await axios.get("/expenses");
      setExpenses(response.data);

    } catch(error){
      console.error("Failed to fetch expenses:", error.message);
    }
  }
  fetchExpenses();
},[]);

  //add
  const addExpenseHandler = async(expense) => {
    try{
      const response = await axios.post("/expenses",{
        title : expense.title,
        amount: expense.amount,
        category: expense.category,
        date: expense.date
      });
      setExpenses((prev) => [response.data, ...prev]);

    } catch(error){
      console.error("Add expense failed:", error.message);
    }
  }

  //delete
    const deleteExpenseHandler = async(id) => {
      try{
        await axios.delete(`/expenses/${id}`);
        setExpenses((prev) => prev.filter((expense) => expense._id !== id));

      } catch(error){
        console.error("Delete expense failed:", error.message);
      }
    }

  //start edit
  const startEditHandler = (expense) =>{
    setEditingExpense(expense);
  }

  //update
  const updateExpenseHandler = async(updatedExpense) => {
    try{
      const response = await axios.put(`/expenses/${updatedExpense._id}`,{
        title: updatedExpense.title,
        amount: updatedExpense.amount,
        category: updatedExpense.category,
        date: updatedExpense.date
      });

      setExpenses((prev) => prev.map((e) => e._id === response.data._id ? response.data : e));
      setEditingExpense(null);

    } catch(error){
      console.error("Update Expense Failed:", error.message);
    }
  }

  return(
    <>
    <Navbar/>
    <ExpenseForm onAddExpense = {addExpenseHandler} onUpdateExpense = {updateExpenseHandler} editingExpense = {editingExpense}/>
     <ExpenseSummary expenses={expenses} />
    <ExpenseList expenses={expenses}/>
    {expenses.map((expense) => (
          <ExpenseItem key={expense._id} expense={expense} onDeleteExpense = {deleteExpenseHandler} onEditExpense = {startEditHandler}/>
    ))}

    </>
  )
}

export default App;