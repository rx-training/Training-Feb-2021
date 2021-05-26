import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./components/Navbar";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}
