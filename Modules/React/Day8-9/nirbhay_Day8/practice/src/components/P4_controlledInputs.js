import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      people: [],
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const fname = this.state.firstname;
    const lname = this.state.lastname;
    if (fname.length > 0 && lname.length > 0) {
      const newPerson = ` ${fname} ${lname} `;
      this.setState({
        people: [...this.state.people, newPerson],
        firstname: "",
        lastname: "",
      });
    }
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              id="fname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              id="lname"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </form>
        <h2 className="h2 pt-4">Peoples</h2>
        {this.state.people.map((p) => (
          <h4 className="h4" style={{ textTransform: "capitalize" }}>
            {p}
          </h4>
        ))}
      </>
    );
  }
}

export default class P4_controlledInputs extends Component {
  render() {
    return (
      <div className="p-4">
        <Form />
      </div>
    );
  }
}
