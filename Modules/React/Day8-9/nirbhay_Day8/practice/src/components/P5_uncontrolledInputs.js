import React, { Component } from "react";

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const msg = this.msg;
    msg.style.color = "red";
    console.log(this.myname.value, this.email.value, this.msg.textContent);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="p-4 mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              ref={(ref) => (this.myname = ref)}
              id="name"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="name"
              ref={(ref) => (this.email = ref)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <h4 className="p-4" ref={(ref) => (this.msg = ref)}>
          Hello World
        </h4>
      </>
    );
  }
}

export default class P5_uncontrolledInputs extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
