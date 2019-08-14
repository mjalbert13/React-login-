import React, { Component } from "react";
import logo from "./logo.svg";
import Signup from './Components/Sign-up';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Signup />
      </div>
    );
  }
}

export default App;
