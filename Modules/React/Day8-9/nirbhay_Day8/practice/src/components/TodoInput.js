import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span
              className="input-group-text bg-primary text-white"
              id="basic-addon1"
            >
              <i className="fas fa-book"></i>
            </span>
            <input
              type="text"
              value={item}
              className="form-control text-capitalize"
              placeholder="add todo item"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled={item ? false : true}
            className={
              editItem
                ? "btn w-100 btn-success mt-3 text-capitalize"
                : "btn w-100 btn-primary mt-3 text-capitalize"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
