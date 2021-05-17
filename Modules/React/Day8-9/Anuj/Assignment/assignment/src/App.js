import Form from "./components/Form/Form";

import React, { Component } from "react";
import students from "./studentData";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      fname: "",
      lname: "",
      collegeName: "",
      studentImage: null,
      collegeLogo: null,
      student: {},
      students: students,
    };

    this.studentImage = React.createRef();
    this.collegeLogo = React.createRef();
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "studentImage") {
      this.setState({
        studentImage: e.target.files[0].name,
      });
    } else if (name === "collegeLogo") {
      this.setState({
        collegeLogo: e.target.files[0].name,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.students.push(this.state);
    
  };

  render() {
    return (
      <div>
        <Form
          info={this.state.students}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></Form>
      </div>
    );
  }
}
