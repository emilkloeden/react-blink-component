import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Blink from "./Blink/Blink";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>Not blinking</li>
          <li>
            <Blink>Blinking</Blink>
          </li>
          <li>
            <Blink interval={2000}>Blinking slower</Blink>
          </li>
          <li>
            <Blink style={{ color: "red" }}>With user styles</Blink>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
