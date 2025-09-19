import ExpenseItem from "../components/ExpenseItem";
import type { Expense } from "../types/Expense";

export default function Home() {
  const expenses: Expense[] = [
    { id: "1", date: "2025-09-10", description: "Courses", payer: "Alexandre", amount: 54.9 },
    { id: "2", date: "2025-09-12", description: "Essence",  payer: "Hafsa",     amount: 32.5 },
    { id: "3", date: "2025-09-15", description: "Pizza",    payer: "Alexandre", amount: 24   },
  ];

  return (
    <main>
      <h1>Mes dépenses</h1>
      <ul>
        {expenses.map(e => <ExpenseItem key={e.id} expense={e} />)}
      </ul>
    </main>
  );
}
