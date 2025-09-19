import type { Expense } from "../types/Expense";

type Props = { expense: Expense };

export default function ExpenseItem({ expense }: Props) {
  return (
    <li>
      {expense.description} — {expense.date} — payé par {expense.payer} — {expense.amount}€
    </li>
  );
}
