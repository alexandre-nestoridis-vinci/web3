const fs = require("fs/promises");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "expenses.json");

async function readJSON() {
  const content = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(content);
}

async function writeJSON(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

async function getAllExpenses() {
  return readJSON();
}

async function addExpense(expense) {
  if (!expense || !expense.date || !expense.description || !expense.payer || typeof expense.amount !== "number") {
    const err = new Error("Invalid expense payload");
    err.status = 400;
    throw err;
  }

  const all = await readJSON();

  // Si pas d'id fourni, on en génère un simple
  const id = expense.id ?? String(Date.now());
  const newItem = { id, ...expense };

  all.push(newItem);
  await writeJSON(all);
  return newItem;
}

module.exports = {
  getAllExpenses,
  addExpense,
};
