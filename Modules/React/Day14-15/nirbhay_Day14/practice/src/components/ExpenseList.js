import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

export default function ExpenseList({ expenses }) {
  return (
    <div className="row py-1">
      <div className="col-md-8 mx-auto text-center">
        <ul className="list-group">
          {expenses.map((item) => {
            return <ExpenseItem key={item.id} expense={item} />;
          })}
        </ul>
        {expenses.length > 0 && (
          <button type="button" className="btn btn-info text-white fs-5 my-3">
            Clear Expenses <MdDelete />
          </button>
        )}
      </div>
    </div>
  );
}
