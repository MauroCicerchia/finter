import React, { Component } from "react";
import "./App.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBContainer,
  MDBCol,
  MDBRow
} from "mdbreact";
// import Function from "./components/function";
import PointsContainer from "./components/pointsContainer";
import Options from "./components/options";

export default class App extends Component {
  state = {
    points: []
  };

  render() {
    return (
      <div className="App">
        <MDBNavbar color="blue">
          <MDBNavbarBrand>
            <strong className="white-text">Finter</strong>
          </MDBNavbarBrand>
        </MDBNavbar>

        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol md="6">
              <PointsContainer
                onPointsChanged={this.updatePoints}
              ></PointsContainer>
            </MDBCol>
            <MDBCol md="6">
              <Options interpolate={this.interpolate}></Options>
              {/* <Function></Function> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }

  updatePoints = points => {
    this.setState({
      points
    });
    console.log(points);
  };
}
