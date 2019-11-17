import React, { Component } from "react";

import './app.css';
import NavBar from "./components/navbar";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}