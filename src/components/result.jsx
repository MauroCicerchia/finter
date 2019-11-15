import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import _ from "lodash";
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
        <p className="mt-3">
          <strong>Entrada</strong>
        </p>
        <p>
          [{_.map(this.props.steps.input, p => `(${p.x}, ${p.y})`).join(", ")}]
        </p>
        {this.props.steps.ls && (
          <p className="mt-3">
            <strong>Bases polinómicas de Lagrange</strong>
          </p>
        )}
        {this.props.steps.ls && _.map(this.props.steps.ls, l => <p>{l}</p>)}
        {this.props.steps.ds && (
          <p className="mt-3">
            <strong>Deltas de Newton Gregory</strong>
          </p>
        )}
        {this.props.steps.ds &&
          _.map(this.props.steps.ds, d => <p>[{d.join(", ")}]</p>)}
        <p className="mt-3">
          <strong>Equiespaciados: </strong>
          {this.equiespaciados(this.props.points) ? "Si" : "No"}
        </p>
      </MDBContainer>
    );
  }

  updateValue = event => this.setState({ value: event.target.value });

  evaluate = () =>
    this.setState({
      result: math.parse(this.props.pol).evaluate({ x: this.state.value })
    });

  equiespaciados = points => {
    let xs = _.sortBy(points, p => p.x).map(p => _.parseInt(p.x));
    let dist = xs[1] - xs[0];
    for (let i = 1; i < xs.length - 1; i++) {
      let newDist = xs[i + 1] - xs[i];
      if (newDist != dist) return false;
    }
    return true;
  };
}
