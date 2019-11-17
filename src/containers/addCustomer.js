import React, { Component } from "react";
import "../css/addCustomer.css";
import Customer from "../models/customer";

export default class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      zipCode: "",
      nameError: "",
      phoneError: "",
      emailError: "",
      zipCodeError: "",
      btnDisabled: true // control 'Continue' button's disabled option
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeZipCode = this.handleChangeZipCode.bind(this);
    this.nameValidation = this.nameValidation.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.props.customer.getName(),
      phone: this.props.customer.getPhone(),
      email: this.props.customer.getEmail(),
      zipCode: this.props.customer.getZipCode(),
      btnDisabled: !this.props.customer.getName()
    });
  }

  handleChangeName(name) {
    // clear the error message when the value is valid
    if (name.length > 0) this.setState({ nameError: "" });
    // reset the name with coming value.
    this.setState({ name });
  }

  handleChangePhone(phone) {
    if (+phone >= 0) {
      // reset the phone number if the value contains only digits.
      this.setState({ phone });
      // clear the error message when the value is valid
      if (phone.length > 6) this.setState({ phoneError: "" });
    }
  }

  handleChangeEmail(email) {
    // reset the email with coming value after turn it to lower case.
    this.setState({ email: email.toLowerCase() });
    // clear the error message. Validation check will be happened later.
    this.setState({ emailError: "" });
  }

  handleChangeZipCode(zipCode) {
    if (+zipCode >= 0) {
      // reset the zip code if the value contains only digits.
      this.setState({ zipCode });
      // clear the error message when the value is valid
      if (zipCode.length > 4) this.setState({ zipCodeError: "" });
    }
    // check all other entries.
    // if no error, reset the 'Continue' button be abled.
    if (
      !this.state.nameError &&
      !this.state.phoneError &&
      !this.state.emailError
    )
      // if no error, reset the 'Continue' button be abled.
      this.setState({ btnDisabled: false });
  }

  handleSubmit() {
    if (this.state.zipCode.length > 4) {
      const customer = new Customer(
        this.state.name,
        this.state.phone,
        this.state.email,
        this.state.zipCode
      );
      // update the customer's infomation if valid zip code was entered.
      this.props.updateCustomer(customer);
      // allow to move the 'HERO' page
      this.props.handleActivation();
    }
    // reset error message for the invalid entry of zip code.
    else
      this.setState({ zipCodeError: "Zip Code must have 5 digits at least." });
  }

  nameValidation() {
    const nameError = this.state.name.length < 1 ? "Name can't be empty" : "";
    this.setState({ nameError });
    // make the 'Continue' button disable if name is invalid.
    if (nameError) this.setState({ btnDisabled: true });
  }

  phoneValidation() {
    const phoneError =
      this.state.phone.length < 7
        ? "Phone# must have 7 digits at least."
        : "";
    this.setState({ phoneError });
    // make the 'Continue' button disable if phone # is invalid.
    if (phoneError) this.setState({ btnDisabled: true });
  }

  emailValidation() {
    let emailError = "";
    const pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g;
    if (!pattern.test(this.state.email)) {
      emailError = "Email is not valid";
    } else {
      // the pattern gives a wrong result when two '@' are contained
      const indexAt = this.state.email.indexOf("@");
      // check index for the '@' after pass the first one.
      if (this.state.email.indexOf("@", indexAt + 1) > -1) {
        emailError = "Email is not valid";
      } else if (this.state.email.length < 5) {
        emailError = "Email is not valid. Try another.";
      }
    }
    // reset the error message depends on the checking result.
    this.setState({ emailError });
    // make the 'Continue' button disable if email is invalid.
    if (emailError) this.setState({ btnDisabled: true });
  }

  zipCodeValidation() {
    const zipCodeError =
      this.state.zipCode.length < 5
        ? "Zip Code must have 5 digits at least."
        : "";
    this.setState({ zipCodeError });
  }

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
              value={this.state.name}
              maxLength="20"
              placeholder="Enter customer's name..."
              onChange={e => this.handleChangeName(e.target.value)}
              onBlur={() => this.nameValidation()}
            />
          </div>
          <div className="errMessage">{this.state.nameError}</div>

          <div className="input-item">
            <p className="input-label">
              Phone #<span>*</span>
            </p>
            <input
              type="text"
              value={this.state.phone}
              maxLength="20"
              placeholder="Enter phone number..."
              onChange={e => this.handleChangePhone(e.target.value)}
              onBlur={() => this.phoneValidation()}
            />
          </div>
          <div className="errMessage">{this.state.phoneError}</div>

          <div className="input-item">
            <p className="input-label">
              Email<span>*</span>
            </p>
            <input
              type="text"
              value={this.state.email}
              maxLength="40"
              placeholder="Enter email..."
              onChange={e => this.handleChangeEmail(e.target.value)}
              onBlur={() => this.emailValidation()}
            />
          </div>
          <div className="errMessage">{this.state.emailError}</div>

          <div className="input-item">
            <p className="input-label">
              Zip Code<span>*</span>
            </p>
            <input
              type="text"
              value={this.state.zipCode}
              maxLength="10"
              placeholder="Enter zip code..."
              onChange={e => this.handleChangeZipCode(e.target.value)}
              onBlur={() => this.zipCodeValidation()}
            />
          </div>
          <div className="errMessage">{this.state.zipCodeError}</div>
          <input
            disabled={this.state.btnDisabled}
            type="submit"
            value="Continue"
            onClick={() => this.handleSubmit()}
          />
        </div>
      </div>
    );
  }
}
