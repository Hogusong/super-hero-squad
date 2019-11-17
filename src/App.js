import React, { Component } from "react";

import './app.css';
import { getSquad } from "./utilities/heroUtility";
import NavBar from "./components/navbar";
import AddCustomer from "./containers/addCustomer";
import HeroService from "./containers/heroService";
import SmallBox from "./components/smallBox";
import Customer from "./models/customer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activateForm: true, //  handle openning pages(customer or hero)
      customer: new Customer(),
      squad: null,
      heroes: 0, // keep all quantities of the selected heroes
      powers: 0 // keep the total powers of the selected heroes
    }
  }

  componentDidMount() {
    // get a squad using a utility and save it to the state.
    getSquad().then(res => this.setState({ squad: res }));
  }

  updateCustomer(customer) {
    this.setState({ customer });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar />
        {this.state.activateForm ? (
          <AddCustomer
            customer={this.state.customer}
            updateCustomer={e => this.updateCustomer(e)}
            handleActivation={() =>
              this.setState({ activateForm: !this.state.activateForm })
            }
          />
        ) :  (
          <HeroService
            squad={this.state.squad}
            heroes={this.state.heroes}
            powers={this.state.powers}
            updateSquad={data => this.updateSquad(data)}
            confirmAll={() => this.handleConfirm()}
            handleActivation={() =>
              this.setState({ activateForm: !this.state.activateForm })
            }
          />
        )}
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