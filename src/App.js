import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MDBNavbar, Button } from "mdbreact";
import { Line } from "react-chartjs-2";
import data from "./procesador/run";

function App() {
  const datasets = { data };
  return (
    <div className="App">
      <MDBNavbar color="blue">
        <Button>boton</Button>
      </MDBNavbar>

      <Line data={datasets} width={80} height={60}></Line>
      <p>{datasets}</p>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
