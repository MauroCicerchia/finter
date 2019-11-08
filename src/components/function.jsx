import React, { Component } from "react";
import { interpolator, input } from "../procesador/run";
window.d3 = require("d3");
const functionPlot = require("function-plot");

export default class Function extends Component {
  render() {
    return (
      <div>
        <div id="function"></div>
        <div>{interpolator}</div>
      </div>
    );
  }

  componentDidMount() {
    let points = input.map(({ x, y }) => [x, y]);
    functionPlot({
      target: "#function",
      data: [
        {
          fn: interpolator
        },
        {
          points,
          fnType: "points",
          graphType: "scatter"
        }
      ]
    });
  }
}
