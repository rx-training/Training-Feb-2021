import React, { Component } from "react";
import axios from "axios";
import StudentList from './../studentList'
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.scss";
import students from "../../studentData";

export default class Form extends Component {

  render() {
    const{handleChange,handleSubmit,info}=this.props
    console.log(info);
    return (
      <React.Fragment>
        <div className="container mx-auto p-2  ">
          <h2 className="text-center">Student Details</h2>
          <form method="POST">
            <div class="form-group w-50 mx-auto mt-5">
              <input
                type="number"
                className="form-control "
                placeholder="Enter ID"
                name="ID"
                // value={this.state.ID}
                onChange={handleChange}
              />
            </div>
            <div class="form-group w-50 mx-auto mt-3">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Fname"
                name="fname"
                // value={this.state.fname}
                onChange={handleChange}
              />
            </div>
            <div class="form-group w-50 mx-auto m-3">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Lname"
                name="lname"
                // value={this.state.lname}
                onChange={handleChange}
              />
            </div>
            <div class="form-group w-50 mx-auto m-3">
              <input
                type="file"
                className="form-control "
                placeholder="Select Profile Picture"
                id="image"
                onChange={handleChange}
               name="studentImage"
              />
            </div>
            <div class="form-group w-50 mx-auto m-3">
              <input
                type="text"
                className="form-control "
                placeholder="Enter College Name"
                name="collegeName"
                // value={this.state.collegeName}
                onChange={handleChange}
              />
            </div>
            <div class="form-group w-50 mx-auto m-3">
              <input
                type="file"
                className="form-control "
                placeholder="Select College Logo"
                name="collegeLogo"
                onChange={handleChange}
              />
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
