import React from "react";
import "./App.css";
import { MDBNavbar, Button, MDBNavbarBrand } from "mdbreact";
import Function from "./components/function";
import PointsContainer from "./components/pointsContainer";

function App() {
  return (
    <div className="App">
      <MDBNavbar color="blue">
        <MDBNavbarBrand>
          <strong className="white-text">Finter</strong>
        </MDBNavbarBrand>
      </MDBNavbar>

      <div>
        <PointsContainer></PointsContainer>
      </div>

      {/* <Function></Function> */}

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
