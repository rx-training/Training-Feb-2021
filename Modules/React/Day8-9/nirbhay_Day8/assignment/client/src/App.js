import React, { Component } from "react";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Form />
      </div>
    );
  }
}
