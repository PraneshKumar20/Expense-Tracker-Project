const express = require("express");
const router  = express.Router();

const {createExpense, getExpenses, getExpenseById, updateExpense, deleteExpense} = require("../controllers/expenseController");

//POST - to create new expense
router.post("/",createExpense);

//GET - get all expenses
router.get("/",getExpenses);

//GET - get expense by ID
router.get("/:id",getExpenseById);

//PUT - update expense by ID
router.put("/:id",updateExpense);

// DELETE - delete expense by ID
router.delete("/:id",deleteExpense);

module.exports = router;