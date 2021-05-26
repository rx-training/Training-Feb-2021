import React, { Component } from "react";
import personData from "./person";
import PropTypes from "prop-types";

const Person = ({ img, name, info, id, age }) => {
  return (
    <article className="card p-0 m-4" style={{ width: "14rem" }}>
      <img src={img} alt="Person Image" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <h6 className="card-text">Age: {age}</h6>
        <p className="card-text">Info: {info}</p>
      </div>
    </article>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
  age: PropTypes.number,
  info: PropTypes.string,
};

class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: personData,
    };
  }
  render() {
    return (
      <section className="row">
        {this.state.persons.map((person) => (
          <Person
            key={person.id}
            img={person.img}
            name={person.name}
            age={person.age}
            info={person.info}
          />
        ))}
      </section>
    );
  }
}

export default class P1_propTypes extends Component {
  render() {
    return (
      <>
        <PersonList />
      </>
    );
  }
}
