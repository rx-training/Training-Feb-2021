import Form from "./components/Form/Form";

import React, { Component } from "react";
import students from "./studentData";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      fname: "",
      mname: "",
      lname: "",
      ffname: "",
      fmname: "",
      flname: "",
      DOB: "",
      email: "",
      collegeName: "",
      studentImage: null,
      collegeLogo: null,
      student: {},
      students: students,
      idError: "",
      nameError: "",
      dateError: "",
      emailError:"",
      collegeNameError:"",
      show: false,
    };

    this.studentImage = React.createRef();
    this.collegeLogo = React.createRef();
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "studentImage") {
      this.setState({
        studentImage: URL.createObjectURL(e.target.files[0]),
      });
    } else if (name === "collegeLogo") {
      this.setState({
        collegeLogo: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
    this.formValidation(e);
  };

  formValidation = (e) => {
    const input = e.target.name;
    const val = e.target.value;
    switch (input) {
      case "ID":
        if (val < 0) {
          this.setState({
            idError: "number can not be negative",
            show: true,
          });
        } else if (val.length <= 0) {
          this.setState({
            idError: "ID can not be blank",
            show: true,
          });
        } else {
          this.setState({
            show: false,
          });
        }

        break;

      case ("fname", "mname", "lname"):
        if (val.length <= 0) {
          this.setState({
            nameError: "first name,niddlename or lastname cannot be blank",
            show: true,
          });
        } else {
          this.setState({
            show: false,
          });
        }
        break;

      case "DOB":
        const regex = new RegExp(
          "^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$"
        );
        console.log(regex.test(val));
        if (!regex.test(val)) {
          this.setState({
            dateError: "Enter Valid date Format",
            show: true,
          });
        } else {
          this.setState({
            show: false,
          });
        }
        break
        
        case'email':
        const regex1=new RegExp("/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/");
        if (!regex1.test(val)) {
          this.setState({
            emailError: "Enter Valid email Format",
            show: true,
          });
        } else {
          this.setState({
            show: false,
          });
        }
        break

        case 'collegeName':
          if (val.length <= 0) {
            this.setState({
              collegeNameError : "CollegeName cannot be blank",
              show: true,
            });
          } else {
            this.setState({
              show: false,
            });
          }
          break;


    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target.value;
    this.state.students.push(this.state);
    this.setState({
      ID: "",
      fname: "",
      lname: "",
      collegeName: "",
      studentImage: null,
    });
  };

  render() {
    return (
      <div>
        <Form
          info={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          formValidation={this.formValidation}
        ></Form>
      </div>
    );
  }
}
