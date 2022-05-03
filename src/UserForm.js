import React, { Component } from "react";
import axios from "axios";
import "./UserForm.css";

class UserForm extends Component {
  constructor() {
    super();

    this.state = {
      fields: {},
      errors: {},
    };
  }

  changeFields(event) {
    let fields = this.state.fields; //for mobile number event , this.state.field will have userName Property
    fields[event.target.name] = event.target.value; //fields[userName="value whatever entered"]
    this.setState(
      {
        fields,
      },
      () => {
        console.log(this.state.fields);
      }
    );
  }

  submitUserForm(event) {
    event.preventDefault();
    if (this.validateForm()) {
      axios
        .post("http://localhost:9000/posts", this.state.fields)
        .then((data) => {
          let fields = {};
          fields["id"] = " ";
          fields["userName"] = " ";
          fields["mobile"] = " ";
          fields["email"] = " ";
          fields["password"] = " ";
          this.setState({
            fields: fields,
          });
          //   this.changeFields  = this.changeFields.bind(this);

          alert("Form submitted");
        })
        .catch((error) => {
          alert("Data save Fail");
        });
    }
  }

  validateForm() {
    let field = this.state.fields;
    let error = {};
    let formIsValid = true;

    if (!field["userName"]) {
      formIsValid = false;
      error["userName"] = "Kindly enter userName";
    }
    if (typeof field["userName"] != "undefined") {
      if (!field["userName"].match(/^[a-zA-z]*$/)) {
        formIsValid = false;
        error["userName"] = "Kindly enter userName field only with characters";
      }
    }

    if (!field["mobile"]) {
      formIsValid = false;
      error["mobile"] = "Kindly enter mobile Number";
    }
    if (typeof field["mobile"] != "undefined") {
      if (!field["mobile"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        error["userName"] = "Kindly enter mobile number with 10 digits";
      }
    }
    if (!field["email"]) {
      formIsValid = false;
      error["email"] = "Kindly enter your email address";
    }
    if (typeof field["email"] != "undefined") {
      if (!field["email"].match(/^[a-zA-z@.0-9]*$/)) {
        formIsValid = false;
        error["userName"] = "Kindly enter your valid email address";
      }
    }
    if (!field["password"]) {
      formIsValid = false;
      error["password"] = "Kindly enter your password";
    }
    if (typeof field["password"] != "undefined") {
      if (!field["password"].match(/^[a-zA-z0-9$]*$/)) {
        formIsValid = false;
        error["userName"] =
          "Kindly enter your password along with diffrent keys";
      }
    }
    this.setState({
      errors: error,
    });

    return formIsValid;
  }

  render() {
    return (
      <>
        <div>
          <h4>User Form</h4>
          <form
            method="post"
            actiion="#"
            name="userRegistrationForm"
            onSubmit={(e) => this.submitUserForm(e)}
          >
            <div>
              <label>id:</label>
              <input
                type="text"
                name="id"
                value={this.state.fields.id}
                onChange={(e) => this.changeFields(e)}
              />
            </div>
            <div>
              <label>UserName:</label>
              <input
                type="text"
                name="userName"
                value={this.state.fields.userName}
                onChange={(e) => this.changeFields(e)}
              />
              <div className="error">{this.state.errors.userName}</div>
            </div>
            <div>
              <label>Mobile No:</label>
              <input
                type="tel"
                name="mobile"
                value={this.state.fields.mobile}
                onChange={(e) => this.changeFields(e)}
              />
              <div className="error">{this.state.errors.mobile}</div>
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.fields.email}
                onChange={(e) => this.changeFields(e)}
              />
              <div className="error">{this.state.errors.email}</div>
            </div>
            <div>
              <label>password:</label>
              <input
                type="password"
                name="password"
                value={this.state.fields.password}
                onChange={(e) => this.changeFields(e)}
              />
              <div className="error">{this.state.errors.password}</div>
            </div>
            <input type="submit" value="proceed" />
          </form>
        </div>
      </>
    );
  }
}

export default UserForm;
