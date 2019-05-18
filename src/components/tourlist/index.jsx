import React, { Component } from "react";
import Tour from "../tour";
import "./tourlist.scss";
import { tourData } from "./../../tourData";

class TourList extends Component {
  state = { tours: tourData };
  removeTour = id => {
    const { tours } = this.state;
    const removed = tours.filter(tour => tour.id !== id);
    this.setState({ tours: removed });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tour-list">
        {tours.map(tour => (
          <Tour
            key={tour.id}
            tour={tour}
            removeTour={() => this.removeTour(tour.id)}
          />
        ))}
      </section>
    );
  }
}

export default TourList;
