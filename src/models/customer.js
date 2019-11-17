export default class Customer {
  constructor(name = "", phone = "", email = "", zipCode = "") {
    this._name = name;
    this._phone = phone;
    this._email = email;
    this._zipCode = zipCode;
  }

  getName() {
    return this._name;
  }

  getPhone() {
    return this._phone;
  }

  getEmail() {
    return this._email;
  }

  getZipCode() {
    return this._zipCode;
  }

  // reset customer's infomations but this is not necessary now
  setCustomer(name, phone, email, zipCode) {
    this._name = name;
    this._phone = phone;
    this._email = email;
    this._zipCode = zipCode;
  }
}
