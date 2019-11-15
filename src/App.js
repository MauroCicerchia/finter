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
import Result from "./components/result";
import { lagrange, ng } from "./procesador";

export default class App extends Component {
  state = {
    points: [],
    result: null,
    algorithm: null
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
              {this.state.result && (
                <Result
                  pol={this.getPol()}
                  points={this.state.points}
                  steps={this.getSteps()}
                ></Result>
              )}
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

  interpolate = algorithm => () => {
    console.log("alg", algorithm);
    if (this.state.points.length >= 2) {
      let result;
      switch (algorithm) {
        case 1:
          result = lagrange.procesar(this.state.points);
          break;
        case 2:
          result = ng.procesar(this.state.points);
          break;
        case 3:
          result = ng.procesar(this.state.points);
          break;
        default:
          throw new Error("Not a valid algorithm");
      }
      if (result) {
        this.setState({ result, algorithm });
      }
    }
  };

  getPol = () => {
    switch (this.state.algorithm) {
      case 1:
        return this.state.result.result;
      case 2:
        return this.state.result.prog;
      case 3:
        return this.state.result.reg;
      default:
        return "";
    }
  };

  getSteps = () => {
    switch (this.state.algorithm) {
      case 1:
        return { input: this.state.points, ls: this.state.result.ls };
      case 2:
        return { input: this.state.points, ds: this.state.result.ds };
      case 3:
        return { input: this.state.points, ds: this.state.result.ds };
      default:
        return "";
    }
  };
}
