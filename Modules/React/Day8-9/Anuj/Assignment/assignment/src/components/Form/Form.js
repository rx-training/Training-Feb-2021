import React, { Component } from "react";
import axios from "axios";
import StudentList from "./../studentList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.scss";
import students from "../../studentData";
import { reset } from "chalk";

export default class Form extends Component {
  reset = (e) => {
    e.preventDefault();
    document.getElementById("form").reset();
  };
  render() {
    const info = this.props.info.students;

    const { handleChange, handleSubmit, formValidation } = this.props;
    const {
      ID,
      fname,
      lname,
      studentImage,
      collegeName,
      idError,
      nameError,
      dateError,
      emailError,
      collegeNameError,
      show,
    } = this.props.info;
    return (
      <React.Fragment>
        <div className="container mx-auto p-2  ">
          <h2 className="text-center">Student Details</h2>
          <form id="form">
            <div class="form-group w-50 mx-auto mt-5 row">
              <label className="h5">Select ID</label>
              <div class="form-group w-50 mx-auto col">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Enter ID"
                  name="ID"
                  value={ID}
                  onChange={handleChange}
                />
                <div className="text-danger"> {show ? idError : null}</div>
              </div>
            </div>
            <div class="form-group w-50 mx-auto mt-3 row">
              <label className="h5">Student Name</label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter first name"
                  name="fname"
                  // value={this.state.fname}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter middle name"
                  name="mname"
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter last name"
                  name="lname"
                  onChange={handleChange}
                />
              </div>
              <div className="text-danger"> {show ? nameError : null}</div>
            </div>

            <div className="form-group w-50 mx-auto mt-3 row">
              <label className="h5">DOB </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter date of birth"
                  name="DOB"
                  onChange={handleChange}
                />
              </div>
              <div className="text-danger"> {show ? dateError : null}</div>
            </div>
            <div className="form-group w-50 mx-auto mt-3 row">
              <label className="h5">Enter E-mail </label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter date of birth"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="text-danger"> {show ? emailError : null}</div>
            </div>
            <div class="form-group w-50 mx-auto mt-3 row">
              <label className="h5">Father Name</label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter first name"
                  name="ffname"
                  // value={this.state.fname}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter middle name"
                  name="fmname"
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter last name"
                  name="flname"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group w-50 mx-auto mt-3 mb-3 row">
              <div className="col">
                <label className="h5">Select City Name</label>
                <select className="w-100 h-75">
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Surat">Surat</option>
                  <option selected value="Gandhinagar">
                    Gandhinagar
                  </option>
                  <option value="Bharuch">Bharuch</option>
                </select>
              </div>
            </div>

            <div class="form-group w-50 mx-auto mt-3 row">
              <div className="col">
                <label className="h5 mt-4 mb-3">Select Profile Pic</label>
                <input
                  type="file"
                  className="form-control "
                  placeholder="Select Profile Picture"
                  id="image"
                  onChange={handleChange}
                  name="studentImage"
                />
              </div>
            </div>
            <div class="form-group w-50 mx-auto m-3 row">
              <label className="h5">Student College</label>
              <div className="col">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter College Name"
                  name="collegeName"
                  // value={this.state.collegeName}
                  onChange={handleChange}
                />
              </div>
              <div className="text-danger"> {show ? collegeNameError : null}</div>
            </div>
            <div class="form-group w-50 mx-auto m-3 row">
              <label className="h5 mt-4 mb-3">Select College Logo</label>
              <div className="col">
                <input
                  type="file"
                  className="form-control "
                  placeholder="Select College Logo"
                  name="collegeLogo"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-group w-50 mx-auto m-3">
              <button
                className="btn w-100 btn-success mt-4"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <h1 className="text-center mt-3 mb-3">Student List</h1>
        <StudentList info={info}></StudentList>
      </React.Fragment>
    );
  }
}
