import React, { Component } from "react";
import "../css/confirmation.css";

export default class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [...this.props.squad.members],
    };
    this.renderPowers = this.renderPowers.bind(this);
  }

  onSubmit() {
    console.log('Submitted...');
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
      </div>
    );
  }
}
