import React, { Component } from "react";

import './app.css';
import NavBar from "./components/navbar";
import AddCustomer from "./containers/addCustomer";
import SmallBox from "./components/smallBox";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activateForm: true //  handle openning pages(customer or hero)
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <AddCustomer />
        {!this.state.activateForm ? (
          <SmallBox
            title="Customer"
            handleActivation={() =>
              this.setState({ activateForm: !this.state.activateForm })
            }
          /> 
        ) : (
          <SmallBox
            title="Hero Service"
            handleActivation={() =>
              this.setState({ activateForm: !this.state.activateForm })
            }
          />
        )}
      </div>
    );
  }
}