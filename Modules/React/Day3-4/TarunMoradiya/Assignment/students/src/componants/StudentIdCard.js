import React, { Component } from "react";

export default class studentIdCard extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    console.log(this.state);
    return (
      <div className="card w-25 m-2 p-2 text-center">
        <Image className="card-img-top" img={this.state.student.img} />
        {this.state.children}
        <Personal
          className="card-text"
          id={this.state.student.personal.id}
          fname={this.state.student.personal.fname}
          lname={this.state.student.personal.lname}
          dob={this.state.student.personal.dob}
        />
        <College
          className="card-text"
          name={this.state.student.college.name}
          addr={this.state.student.college.addr}
          logo={this.state.student.college.logo}
        />
      </div>
    );
  }
}

const Image = ({ img }) => {
  const url = `https://randomuser.me/api/portraits/men/${img}.jpg`;
  return <img src={url} alt="img" className="img" />;
};

const Personal = ({ id, fname, lname, dob }) => {
  return (
    <section>
      <p>ID: {id}</p>
      <p>Name: {fname + " " + lname}</p>
      <p>DOB: {dob}</p>
    </section>
  );
};

const College = ({ name, addr, logo }) => {
  return (
    <section>
      <p>Name: {name}</p>
      <p>Address: {addr}</p>
      <img src={logo} alt="logo" />
    </section>
  );
};
