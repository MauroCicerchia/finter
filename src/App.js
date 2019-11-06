import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MDBNavbar, Button } from "mdbreact";

function App() {
  return (
    <div className="App">
      <MDBNavbar color="blue">
        <Button>boton</Button>
      </MDBNavbar>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
