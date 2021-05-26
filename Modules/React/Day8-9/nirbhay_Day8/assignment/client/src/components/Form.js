import React, { Component } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
// State: ID,FirstName,LastName,CollegeName
// Ref: Logo and image

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid: "",
      fname: "",
      lname: "",
      cname: "",
      sfilepath: "",
      cfilepath: "",
      students: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeSimg = async () => {
    const formData = new FormData();
    formData.append("foo", this.simg.files[0]);
    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { filepath } = res.data;
      this.setState({
        sfilepath: filepath,
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  handleChangeCimg = async () => {
    const formData = new FormData();
    formData.append("foo", this.cimg.files[0]);
    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { filepath } = res.data;
      this.setState({
        cfilepath: filepath,
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      sid: this.state.sid,
      fname: this.state.fname,
      lname: this.state.lname,
      cname: this.state.cname,
      simg: this.state.sfilepath,
      cimg: this.state.cfilepath,
    };
    this.setState({
      students: [...this.state.students, newStudent],
      sid: "",
      fname: "",
      lname: "",
      cname: "",
      sfilepath: "",
      cfilepath: "",
    });
    this.simg.value = "";
    this.cimg.value = "";
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 mx-auto">
          <h2 className="h2 text-center py-2 mt-2">Student Form</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="sid" className="form-label">
                Student Id
              </label>
              <input
                type="text"
                name="sid"
                id="sid"
                value={this.state.sid}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                First name
              </label>
              <input
                type="text"
                name="fname"
                id="fname"
                value={this.state.fname}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lname" className="form-label">
                Last name
              </label>
              <input
                type="text"
                name="lname"
                id="lname"
                value={this.state.lname}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="simg" className="form-label">
                Image
              </label>
              <input
                type="file"
                id="simg"
                ref={(ref) => (this.simg = ref)}
                onChange={this.handleChangeSimg}
                className="form-control"
              />
              {this.state.sfilepath ? (
                <div className="alert alert-success py-2 my-3">
                  Image Uploaded
                </div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="cname" className="form-label">
                College name
              </label>
              <input
                type="text"
                name="cname"
                id="cname"
                value={this.state.cname}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="clogo" className="form-label">
                College logo
              </label>
              <input
                type="file"
                id="clogo"
                ref={(ref) => (this.cimg = ref)}
                onChange={this.handleChangeCimg}
                className="form-control"
              />
              {this.state.cfilepath ? (
                <div className="alert alert-success py-2 my-3">
                  Logo Uploaded
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              disabled={
                this.state.sfilepath && this.state.cfilepath ? false : true
              }
              className="btn btn-primary w-100 my-4 text-capitalize"
            >
              submit
            </button>
          </form>
        </div>
        <div className="col-12 col-md-7 p-4">
          {this.state.students.map((student) => (
            <StudentCard key={student.sid} student={student} />
          ))}
        </div>
      </div>
    );
  }
}
