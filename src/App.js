import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      title: "Title",
      amount: 294.67,
      date: new Date(2021, 2, 18),
    },
    {
      title: "Car",
      amount: 294.67,
      date: new Date(2021, 2, 18),
    },
    {
      title: "Pet",
      amount: 294.67,
      date: new Date(2021, 2, 18),
    },
    {
      title: "Iso",
      amount: 294.67,
      date: new Date(2021, 2, 18),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("app");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
