import React from "react";
import useFormValues from "../../../hooks/use-form-values";
import "./Login.css";

const Login = () => {
  const { formValues, formErrors, handleChange, handleSubmit } =
    useFormValues();

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Login Form</h1>
        <div className="login-details">
          <div className="user-details">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="enter the username"
              required
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <div className="user-details">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="enter the email"
              required
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className="error-msg">{formErrors.email}</p>
          <div className="user-details">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="enter the password"
              required
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className="error-msg">{formErrors.password}</p>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
