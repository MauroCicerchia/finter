import _ from "lodash";
import React, { Component } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

export default class Point extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      id: this.props.id,
      x: this.props.x,
      y: this.props.y
    };
  }

  render() {
    return (
      <MDBRow>
        <MDBCol md="4">
          <form>
            <MDBInput
              type="number"
              label="X"
              value={this.state.x}
              onChange={this.updateX}
              disabled={this.state.added}
            ></MDBInput>
          </form>
        </MDBCol>
        <MDBCol md="4">
          <form>
            <MDBInput
              type="number"
              label="Y"
              value={this.state.y}
              onChange={this.updateY}
              disabled={this.state.added}
            ></MDBInput>
          </form>
        </MDBCol>
        <MDBCol md="4">
          <form>
            {(!this.state.added && (
              <MDBBtn rounded size="sm" color="primary" onClick={this.agregar}>
                Agregar
              </MDBBtn>
            )) || (
              <MDBBtn rounded size="sm" color="danger" onClick={this.eliminar}>
                Eliminar
              </MDBBtn>
            )}
          </form>
        </MDBCol>
      </MDBRow>
    );
  }

  agregar = () => {
    if (_.isEmpty(this.state.x) || _.isEmpty(this.state.y)) {
    } else {
      this.setState({ added: true });
      this.props.add(this);
    }
  };

  eliminar = () => {
    this.props.remove(this.state.id);
  };

  updateX = event => this.setState({ x: event.target.value });

  updateY = event => this.setState({ y: event.target.value });

  getPoint = () => ({ id: this.state.id, x: this.state.x, y: this.state.y });
}
