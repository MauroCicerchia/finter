import _ from "lodash";
import React, { Component } from "react";
import Point from "./point";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default class PointsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [{ id: 0, x: "", y: "" }]
    };
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="1">
            <p>
              <strong>Puntos</strong>
            </p>
          </MDBCol>
        </MDBRow>
        {this.state.points
          .sort((a, b) => a.id > b.id)
          .map((point, i) => (
            <Point
              key={point.id}
              id={point.id}
              x={point.x}
              y={point.y}
              add={this.addPoint}
              remove={this.removePoint}
            ></Point>
          ))}
      </MDBContainer>
    );
  }

  addPoint = point => {
    let oldPoint = _.find(this.state.points, p => p.id === point.getPoint().id);
    _.set(oldPoint, "x", point.getPoint().x);
    _.set(oldPoint, "y", point.getPoint().y);
    let points = [
      ...this.state.points,
      { id: point.getPoint().id + 1, x: "", y: "" }
    ];
    this.setState({
      points
    });
    this.props.onPointsChanged(
      _.uniqBy(points.filter(p => !_.isEmpty(p.x) && !_.isEmpty(p.y)), "x")
    );
  };

  removePoint = id => {
    let points = _.filter(this.state.points, point => point.id !== id);
    this.setState({
      points
    });
    this.props.onPointsChanged(
      _.uniqBy(points.filter(p => !_.isEmpty(p.x) && !_.isEmpty(p.y)), "x")
    );
  };
}
