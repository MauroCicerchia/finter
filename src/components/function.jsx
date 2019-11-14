import React, { Component } from "react";
window.d3 = require("d3");
const functionPlot = require("function-plot");

export default class Function extends Component {
  render() {
    return (
      <div>
        <div id="function"></div>
      </div>
    );
  }

  componentDidMount() {
    this.createFunction();
  }

  componentWillReceiveProps() {
    this.createFunction();
  }

  createFunction = () => {
    let points = this.props.points.map(({ x, y }) => [x, y]);
    functionPlot({
      target: "#function",
      data: [
        {
          fn: this.props.pol
        },
        {
          points,
          fnType: "points",
          graphType: "scatter",
          radius: 3
        }
      ]
    });
  };
}
