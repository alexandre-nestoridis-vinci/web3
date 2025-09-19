const express = require("express");
const cors = require("cors");
const expensesRouter = require("./routes/expenses");

const app = express();

// Autorise le front en dev (Vite par défaut sur 5173)
app.use(cors({ origin: "http://localhost:5173" }));

// Pour lire le JSON du body
app.use(express.json());

// Routes
app.use("/api", expensesRouter);

// Petit middleware d’erreurs simple
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
