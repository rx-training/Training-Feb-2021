import React, { Component } from "react";
import Form from "./components/Form";
import StudentList from "./components/StudentList";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/view-students/" component={StudentList} />
          </Switch>
        </div>
      </>
    );
  }
}
