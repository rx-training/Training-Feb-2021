import React, { Component } from "react";
import TemperatureInput from "./TempratureInput";
import BoilingVerdict from "./BoilingVerdict";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      scale: "c",
    };
  }
  handleCelsiusChange = (temp) => {
    this.setState({
      scale: "c",
      temp: temp,
    });
  };
  handleFahrenheitChange = (temp) => {
    this.setState({
      scale: "f",
      temp: temp,
    });
  };
  render() {
    const celsius =
      this.state.scale === "f"
        ? tryConvert(this.state.temp, toCelsius)
        : this.state.temp;
    const fahrenheit =
      this.state.scale === "c"
        ? tryConvert(this.state.temp, toFahrenheit)
        : this.state.temp;
    return (
      <div className="calc">
        <h1>Lifting Stateup</h1>
        <TemperatureInput
          scale={this.state.scale}
          temp={celsius}
          onTempChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale={this.state.scale}
          temp={fahrenheit}
          onTempChange={this.handleFahrenheitChange}
        />
        <br />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
