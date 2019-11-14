import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBFormInline, MDBBtn } from "mdbreact";

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: 1
    };
  }
  render() {
    return (
      <MDBFormInline>
        <MDBInput
          gap
          label="Lagrange"
          onClick={this.onClick(1)}
          checked={this.state.radio === 1 ? true : false}
          type="radio"
          size="sm"
          className="mx-2"
        ></MDBInput>
        <MDBInput
          gap
          label="Newton Gregory-P"
          onClick={this.onClick(2)}
          checked={this.state.radio === 2 ? true : false}
          type="radio"
          size="sm"
          className="mx-2"
        ></MDBInput>
        <MDBInput
          gap
          label="Newton Gregory-R"
          onClick={this.onClick(3)}
          checked={this.state.radio === 3 ? true : false}
          type="radio"
          size="sm"
          className="mx-2"
        ></MDBInput>
        <MDBBtn size="sm" className="mx-2">
          Interpolar
        </MDBBtn>
      </MDBFormInline>
    );
  }

  onClick = id => () => this.setState({ radio: id });
}
