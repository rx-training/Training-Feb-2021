import React from "react";
import { MdSend } from "react-icons/md";

export default function ExpenseForm({
  handleCharge,
  handleAmount,
  handleSubmit,
  charge,
  amount,
  edit,
}) {
  return (
    <div className="row pb-3">
      <div className="col-md-8 mx-auto">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-6">
            <label htmlFor="charge" className="form-label">
              Charge
            </label>
            <input
              type="text"
              id="charge"
              name="charge"
              className="form-control border-top-0 border-start-0 border-end-0"
              onChange={handleCharge}
              value={charge}
            />
          </div>
          <div className="col-6">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              className="form-control border-top-0 border-start-0 border-end-0"
              onChange={handleAmount}
              value={amount}
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-info text-white">
              {edit.isEdit ? "Edit" : "Submit"} <MdSend className="mb-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
