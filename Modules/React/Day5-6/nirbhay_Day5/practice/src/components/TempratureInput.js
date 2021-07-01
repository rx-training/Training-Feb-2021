import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default class TempratureInput extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.onTempChange(e.target.value);
  };
  render() {
    return (
      <fieldset>
        <legend>Enter Temprature in {scaleNames[this.props.scale]}: </legend>
        <input value={this.props.temp} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
