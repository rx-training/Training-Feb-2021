import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

export default function ExpenseItem({ expense }) {
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
            <button className="btn fw-bold" type="button">
              <MdEdit />
            </button>
            <button className="btn fw-bold" type="button">
              <MdDelete />
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
