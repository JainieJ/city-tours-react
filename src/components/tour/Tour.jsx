import React, { Component } from "react";
import "./tour.scss";

class Tour extends Component {
  state = {
    showInfo: false
  };
  toggleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { city, img, info, name } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="city" />
          <span className="close-btn">
            <i className="fas fa-window-close" onClick={removeTour} />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            Info
            <span>
              <i
                onClick={this.toggleInfo}
                className="fas fa-caret-square-down"
              />
            </span>
          </h5>
          {this.state.showInfo ? <p>{info}</p> : null}
        </div>
      </article>
    );
  }
}

export default Tour;
