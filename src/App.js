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

  // data = { index, value }
  // index : point the hero whose quantity has been changed.
  // value : contain new quantity
  updateSquad(data) {
    const squad = this.state.squad;
    // calculate the change of the quantiries (compare current and new values.)
    const diffQty = data.value - squad.members[data.index].quantity;
    // update the member's quantity with the new value.
    squad.members[data.index].quantity = data.value;

    // update total heroes and powers of all selected.
    let heroes = this.state.heroes;
    let powers = this.state.powers;
    heroes += diffQty;
    powers += squad.members[data.index].powers.length * diffQty;

    // update the state.
    this.setState({ squad, heroes, powers });
  }

  updateCustomer(customer) {
    this.setState({ customer });
  }

  handleConfirm() {
    console.log("confirmed", this.state.squad.members);
  }
  render() {
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