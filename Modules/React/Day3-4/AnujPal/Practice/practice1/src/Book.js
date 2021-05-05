import React, { Component } from "react";

export default class Book extends Component {
  render() {
      console.log(this.props)
    return (
      <article>
        <h3>Book:</h3>
        <h3>Author:</h3>
      </article>
    );
  }
}
