import React, { useState } from "react";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit card bill", amount: 1200 },
];

console.log(initialExpenses);

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <>
      <main className="container">
        <Alert />
        <h1 className="text-center text-capitalize">budget calculator</h1>
        <ExpenseForm />
        <hr />
        <ExpenseList expenses={expenses} />
        <hr />
        <h1 className="text-center">
          Total spending :
          <span className="bg-info text-white px-2 mx-2">
            $
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}
          </span>
        </h1>
      </main>
    </>
  );
}

export default App;
