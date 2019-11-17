import React, { Component } from "react";
import "../css/addCustomer.css";
import Customer from "../models/customer";

export default class AddCustomer extends Component {

  render() {
    return (
      <div className="customer">
        <div className="title">
          <h2>Customer</h2>
        </div>
        <div className="input-form">
          <div className="input-item">
            <p className="input-label">
              Name<span>*</span>
            </p>
            <input
              type="text"
              value={"name"}
              placeholder="Enter customer's name..."
            />
          </div>
          <div className="errMessage">{}</div>

          <div className="input-item">
            <p className="input-label">
              Phone #<span>*</span>
            </p>
            <input
              type="text"
              value={"phone"}
              placeholder="Enter phone number..."
            />
          </div>
          <div className="errMessage">{}</div>

          <div className="input-item">
            <p className="input-label">
              Email<span>*</span>
            </p>
            <input
              type="text"
              value={"email"}
              placeholder="Enter email..."
            />
          </div>
          <div className="errMessage">{}</div>

          <div className="input-item">
            <p className="input-label">
              Zip Code<span>*</span>
            </p>
            <input
              type="text"
              value={"ZipCode"}
              placeholder="Enter zip code..."
            />
          </div>
          <div className="errMessage">{}</div>
          <input
            disabled={true}
            type="submit"
            value="Continue"
          />
        </div>
      </div>
    );
  }
}
