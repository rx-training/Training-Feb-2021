import React, { Component } from "react";
import Tour from "../tour";
import { tourData } from "../../tourData";
import "./tourList.scss";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: tourData,
    };
  }
  removeTour = (id) => {
    const sortedTourData = this.state.tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTourData,
    });
  };
  render() {
    return (
      <section className="tourlist">
        {this.state.tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
