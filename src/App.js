import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    title: "Title",
    id: 1,
    amount: 294.67,
    date: new Date(2021, 2, 18),
  },
  {
    title: "Car",
    amount: 294.67,
    id: 2,
    date: new Date(2021, 2, 18),
  },
  {
    title: "Pet",
    amount: 294.67,
    id: 3,
    date: new Date(2021, 2, 18),
  },
  {
    title: "Iso",
    amount: 294.67,
    id: 4,
    date: new Date(2021, 2, 18),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpnses) => {
      return [expense, ...prevExpnses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
