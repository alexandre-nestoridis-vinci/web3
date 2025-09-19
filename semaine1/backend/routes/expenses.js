const express = require("express");
const { getAllExpenses, addExpense } = require("../services/expenses");

const router = express.Router();

// GET /api/expenses -> liste complète
router.get("/expenses", async (req, res, next) => {
  try {
    const data = await getAllExpenses();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// POST /api/expenses -> ajoute une dépense
router.post("/expenses", async (req, res, next) => {
  try {
    const created = await addExpense(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
