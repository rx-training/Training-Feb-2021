import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  handleInc = () => {
    console.log("Called First : ", this.state.counter);
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => console.log("Called Second : ", this.state.counter)
    );
  };

  handleDec = () => {
    console.log("Called First : ", this.state.counter);
    this.setState(
      (state, props) => {
        return { counter: state.counter - 1 };
      },
      () => console.log("Called Second : ", this.state.counter)
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="p-4">
          <button className="btn btn-primary" onClick={this.handleDec}>
            Decrease
          </button>
          <span className="h3 p-3">Count : {this.state.counter}</span>
          <button className="btn btn-primary" onClick={this.handleInc}>
            Increase
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default class P6_thisSetstateAsync extends Component {
  render() {
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    );
  }
}
