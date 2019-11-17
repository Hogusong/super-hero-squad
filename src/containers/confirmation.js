import React, { Component } from "react";
import "../css/confirmation.css";

export default class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [...this.props.squad.members],
      searchKey: "",
      jsonFile: ""
    };
    this.renderPowers = this.renderPowers.bind(this);
  }

  // search dynamically with each key input
  searchPowers(searchKey) {
    searchKey = searchKey.trim().toLowerCase();
    this.setState({ searchKey });
    // create a empty members array to push the search result.
    const members = [];
    this.props.squad.members.forEach(hero => {
      for (let p of hero.powers) {
        // if any power contains the search key, push this hero to the members
        if (p.toLowerCase().includes(searchKey)) {
          members.push(hero);
          break;
        }
      }
    });
    // reset members with the search result
    this.setState({ members: [...members] });
  }

  onSubmit() {
    // clear the jsonFile if it's not empty, otherwise generate and display it.
    if (this.state.jsonFile) this.setState({ jsonFile: "" });
    else {
      const customer = {
        name: this.props.customer.getName(),
        phone: this.props.customer.getPhone(),
        email: this.props.customer.getEmail(),
        zipCode: this.props.customer.getZipCode()
      };
      // generate a json file
      const jsonFile = JSON.stringify({ customer, squad: this.props.squad });
      // set the json file in to the state to display.
      this.setState({ jsonFile });
    }
  }

  // render a hero's all powers
  renderPowers(powers) {
    return powers.map((power, j) => (
      <div className="powers" key={"power-" + j}>
        <div className="power">{power}</div>
      </div>
    ));
  }

  // render all heroes wiht their powers
  renderHeroes() {
    if (!this.state.members) return null;
    let markup = this.state.members.map((hero, i) => (
      <div className="confirm-hero" key={"hero-" + i}>
        <div>
          {hero.name}/{hero.secretIdentity}
        </div>
        {this.renderPowers(hero.powers)}
        <div>
          <label>
            quantity : &nbsp;<span>{hero.quantity}</span>
          </label>
        </div>
      </div>
    ));
    return markup;
  }

  render() {
    return (
      <div className="confirm">
        <div className="confirm-top">
          <div className="top-customer">
            <h3>Customer's Info</h3>
            <p>Name : {this.props.customer.getName()}</p>
            <p>Phone: {this.props.customer.getPhone()}</p>
            <p>Email: {this.props.customer.getEmail()}</p>
            <p>Zip Code : {this.props.customer.getZipCode()}</p>
          </div>
          <div className="confirm-header">
            <h1>Squad Name : {this.props.squad.squadName}</h1>
            <h2>Hometown: {this.props.squad.homeTown}</h2>
            <p>Secret Base : {this.props.squad.secretBase}</p>
            <label>Search Powers</label>
            <input
              type="text"
              value={this.state.searchKey}
              onChange={e => this.searchPowers(e.target.value)}
            />
            <span onClick={() => this.searchPowers("")}>X</span>
          </div>
        </div>
        <hr />
        <div className="confirm-bottom">
          <div className="all-heroes">
            <h1>HEROES</h1>
            <div className="all-heroes-list">
              {this.renderHeroes()}
              <div className="summary">
                <p>
                  Heroes : <span>{this.props.heroes}</span>
                </p>
                <p>
                  Powers : <span>{this.props.powers}</span>
                </p>
                <button type="button" onClick={() => this.onSubmit()}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="json-file">{this.state.jsonFile}</div>
      </div>
    );
  }
}
