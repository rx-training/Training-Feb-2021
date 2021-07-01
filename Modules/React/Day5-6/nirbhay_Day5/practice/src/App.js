import React, { Component } from "react";
import BookList from "./components/BookList";
import Calculator from "./components/Calculator";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <hr />
        <Calculator />
      </div>
    );
  }
}
