import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import * as math from "mathjs";
import Function from "./function";

export default class Result extends Component {
  state = {
    value: ""
  };

  render() {
    return (
      <MDBContainer className="mt-3">
        <p>
          <strong>Polinomio interpolate</strong>
        </p>
        <p>{this.props.pol}</p>
        <p>
          <strong>Polinomio interpolate simplificado</strong>
        </p>
        <p>{math.simplify(this.props.pol).toString()}</p>
        <MDBRow>
          <MDBCol md="9">
            <MDBInput
              type="number"
              label="Evaluar"
              onChange={this.updateValue}
            ></MDBInput>
          </MDBCol>
          <MDBCol md="3">
            <MDBBtn color="primary" size="sm" onClick={this.evaluate}>
              Evaluar
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        {this.state.result && (
          <p>
            <strong>Resultado: </strong>
            {this.state.result}
          </p>
        )}
        <Function pol={this.props.pol} points={this.props.points}></Function>
      </MDBContainer>
    );
  }

  updateValue = event => this.setState({ value: event.target.value });

  evaluate = () =>
    this.setState({
      result: math.parse(this.props.pol).evaluate({ x: this.state.value })
    });
}
