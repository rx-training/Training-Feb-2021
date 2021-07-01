import React from "react";
import Form from "./components/Form";
import StudentList from "./components/StudentList";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route
            key="add-student"
            exact
            path={["/", "/edit-student/"]}
            component={Form}
          />
          <Route
            key="view-student"
            exact
            path="/view-students/"
            component={StudentList}
          />
        </Switch>
      </div>
    </>
  );
}
