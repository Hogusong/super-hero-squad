import React, { Component } from "react";

import './app.css';
import NavBar from "./components/navbar";
import AddCustomer from "./containers/addCustomer";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <AddCustomer />
      </div>
    );
  }
}