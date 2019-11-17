import React, { Component } from "react";
import "../css/heroService.css";

export default class HeroService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squadName: "",
      homeTown: "",
      secretBase: "",
      members: []
    };
    this.renderHeroes = this.renderHeroes.bind(this);
    this.renderPowers = this.renderPowers.bind(this);
  }

  componentDidMount() {
    this.setState({
      squadName: this.props.squad.squadName,
      homeTown: this.props.squad.homeTown,
      secretBase: this.props.squad.secretBase,
      members: this.props.squad.members
    });
  }

  updateQuantity({ index, value }) {
    // value can be from 0 to 10
    if (value >= 0 && value <= 10) {
      this.props.updateSquad({ index, value });
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

  // render all heroes with their powers.
  renderHeroes() {
    if (!this.state.members) return null;
    let markup = this.state.members.map((hero, i) => (
      <div className="hero" key={"hero-" + i}>
        <div>
          {hero.name}/{hero.secretIdentity}
        </div>
        {this.renderPowers(hero.powers)}
        <div>
          <label>quantity : &nbsp;</label>
          <input
            type="number"
            value={hero.quantity}
            onChange={e =>
              this.updateQuantity({ index: i, value: e.target.value })
            }
          />
        </div>
      </div>
    ));
    return markup;
  }

  render() {
    return (
      <div className="hero-box">
        <div className="squad-header">
          <h1>Squad Name : {this.state.squadName}</h1>
          <h2>Hometown: {this.state.homeTown}</h2>
          <p>Secret Base : {this.state.secretBase}</p>
        </div>
        <div className="heroes">
          <h1>HEROES</h1>
          <div className="heroes-list">
            {this.renderHeroes()}
            <div className="summary">
              <p>
                Heroes : <span>{this.props.heroes}</span>
              </p>
              <p>
                Powers : <span>{this.props.powers}</span>
              </p>
              {this.props.heroes > 0 ? (
                <button type="button" onClick={this.props.confirmAll}>
                  Continue
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
