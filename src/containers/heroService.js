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
  }

  componentDidMount() {
    this.setState({
      squadName: this.props.squad.squadName,
      homeTown: this.props.squad.homeTown,
      secretBase: this.props.squad.secretBase,
      members: this.props.squad.members
    });
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
            <div>Display all heroes here...</div>
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
