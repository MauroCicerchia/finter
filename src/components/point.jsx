import React, { Component } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

export default class Point extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      x: "",
      y: ""
    };
  }

  render() {
    return (
      <MDBRow>
        <MDBCol md="3">
          <form>
            <MDBInput
              label="X"
              value={this.state.x}
              onChange={this.updateX}
            ></MDBInput>
          </form>
        </MDBCol>
        <MDBCol md="3">
          <form>
            <MDBInput
              label="Y"
              value={this.state.y}
              onChange={this.updateY}
            ></MDBInput>
          </form>
        </MDBCol>
        <MDBCol md="3">
          <form>
            {(!this.state.added && (
              <MDBBtn rounded size="sm" color="primary" onClick={this.agregar}>
                Agregar
              </MDBBtn>
            )) || (
              <MDBBtn rounded size="sm" color="danger">
                Eliminar
              </MDBBtn>
            )}
          </form>
        </MDBCol>
      </MDBRow>
    );
  }

  agregar = () => {
    this.setState({ added: true });
    this.props.add(this);
  };

  updateX = event => this.setState({ x: event.target.value });

  updateY = event => this.setState({ y: event.target.value });

  getPoint = () => ({ x: this.state.x, y: this.state.y });
}
