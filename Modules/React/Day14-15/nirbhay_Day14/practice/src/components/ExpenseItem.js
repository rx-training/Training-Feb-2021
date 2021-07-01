import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

export default function ExpenseItem({ expense, handleDelete, handleEdit }) {
  return (
    <>
      <li className="list-group-item list-group-item-action">
        <div className="row">
          <div className="col-8 d-flex justify-content-between align-items-center">
            {expense.charge}
            <span class="badge bg-info p-2 fs-6 justify-content-center">
              ${expense.amount}
            </span>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <button
              className="btn text-success fw-bold"
              type="button"
              onClick={() => handleEdit(expense.id)}
            >
              <MdEdit />
            </button>
            <button
              className="btn text-danger fw-bold"
              type="button"
              onClick={() => handleDelete(expense.id)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
