import React, { Component } from "react";
import "./App.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    collegeName:"",
    people: [],
  };

  handleChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value)

    //   if(event.target.name ===  "firstName"){
    //   const textValue = event.target.value

    //   this.setState({
    //     firstName:textValue
    //   });
    // }
    this.setState({
      [event.target.name]: event.target.value.toUpperCase(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const collegeName=this.state.collegeName
    if (firstName.length > 0 && lastName.length > 0) {
      const person = ` ${firstName + " " + lastName} `;
      const collegename=`${collegeName}`;
      this.setState({
        people: [...this.state.people, person,collegename],
        firstName: "",
        lastName: "",
        });
      
    }
    console.log(firstName, lastName,collegeName);
  };

  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            LastName:{" "}
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              Placeholder="Enter Last Name"
            />
            <br />
            <span>
              FirstName:
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="Enter First Name"
              />
            </span>
            <br />
            LastName:{" "}
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              Placeholder="Enter Last Name"
            />
            <br />
            <span>
              CollegeName:
              <input
                type="text"
                name="collegeName"
                value={this.state.collegeName}
                onChange={this.handleChange}
                placeholder="Enter College Name"
              />
            </span>
            <br />
            <button type="submit">submit</button>
          </form>
        </article>
        <h1>People</h1>
        <div>{this.state.people}</div>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return <Form />;
  }
}
export default App;
