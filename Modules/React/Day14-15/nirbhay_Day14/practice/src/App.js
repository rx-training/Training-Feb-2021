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

// const initialExpenses = localStorage.getItem('expenses')
//   ? JSON.parse(localStorage.getItem('expenses'))
//   : [];

console.log(initialExpenses);

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState({ isEdit: false, id: "" });

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(Number(e.target.value));
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit.isEdit) {
        const tmpExpenses = expenses.map((item) => {
          return item.id === edit.id ? { ...item, charge, amount } : item;
        });
        setExpenses(tmpExpenses);
        setEdit({ isEdit: false, id: "" });
        handleAlert({ type: "success", text: "Item edited successfully" });
      } else {
        const singleCharge = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleCharge]);
        handleAlert({
          type: "success",
          text: "Item added successfully",
        });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "Charge can't be empty value and amount should be bigger than zero",
      });
    }
  };

  const handleClearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All Items Deleted" });
  };
  const handleDelete = (id) => {
    const tmpExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tmpExpenses);
    handleAlert({ type: "danger", text: "Item Deleted" });
  };

  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit({ isEdit: true, id });
  };

  return (
    <>
      <main className="container">
        {alert.show && <Alert type={alert.type} text={alert.text} />}
        <h2 className="text-center text-capitalize">budget calculator</h2>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleClearItems={handleClearItems}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <hr />
        <h2 className="text-center">
          Total spending :
          <span className="bg-info text-white px-2 mx-2">
            $
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}
          </span>
        </h2>
      </main>
    </>
  );
}

export default App;
