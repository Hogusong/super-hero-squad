import React, { Component } from "react";

import './app.css';
import NavBar from "./components/navbar";
import AddCustomer from "./containers/addCustomer";
import SmallBox from "./components/smallBox";
import Customer from "./models/customer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activateForm: true, //  handle openning pages(customer or hero)
      customer: new Customer()
    }
  }

  updateCustomer(customer) {
    this.setState({ customer });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar />
        <AddCustomer
          customer={this.state.customer}
          updateCustomer={e => this.updateCustomer(e)}
          handleActivation={() =>
            this.setState({ activateForm: !this.state.activateForm })
          }
        />
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