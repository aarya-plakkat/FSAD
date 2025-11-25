import React from "react";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {}
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    const errors = {};

    if (!this.state.name) {
      errors.name = "Name is required";
    } else if (this.state.name.length < 3) {
      errors.name = "Name must be at least 3 letters";
    }

    if (!this.state.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      errors.email = "Email is invalid";
    }

    if (!this.state.password) {
      errors.password = "Password is required";
    } else if (this.state.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      alert("Form submitted!");
      this.setState({
        name: "",
        email: "",
        password: "",
        errors: {}
      });
    }
  };

  render() {
    const { name, email, password, errors } = this.state;

    return (
      <div>
        <h1>Registration Form for User Input:</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
          {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}

          <input
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
