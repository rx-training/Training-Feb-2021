import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import P1_propTypes from "./components/P1_propTypes";
import P2_propRequiredDefault from "./components/P2_propRequiredDefault";
import P3_propObjectShape from "./components/P3_propObjectShape";
import P4_controlledInputs from "./components/P4_controlledInputs";
import P5_uncontrolledInputs from "./components/P5_uncontrolledInputs";
import P6_thisSetstateAsync from "./components/P6_thisSetStateAsync";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuid } from "uuid";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    this.setState(
      {
        items: [...this.state.items, newItem],
        id: uuid(),
        item: "",
        editItem: false,
      },
      () => console.log(this.state)
    );
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: selectedItem.id,
      editItem: true,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-5 mb-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>

        <P1_propTypes />
        <hr />
        <P2_propRequiredDefault />
        <hr />
        <P3_propObjectShape />
        <hr />
        <P4_controlledInputs />
        <hr />
        <P5_uncontrolledInputs />
        <hr />
        <P6_thisSetstateAsync />
      </div>
    );
  }
}
