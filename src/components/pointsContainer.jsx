import React, { Component } from "react";
import Point from "./point";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default class PointsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: []
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
        <Point add={this.addPoint}></Point>
      </MDBContainer>
    );
  }

  addPoint = point => {
    this.setState({
      points: [...this.state.points, point.getPoint()]
    });
    console.log(point.getPoint());
  };
}
