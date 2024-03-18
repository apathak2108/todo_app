import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="card">
        <h3>Login / Signin</h3>
        <form className="login-form">
          <input
            type="email"
            required
            placeholder="abc@xyz.com"
            className="email-input"
          />{" "}
          <br />
          <br />
          <input
            type="password"
            required
            placeholder="xxxxxxxx"
            className="pass-input"
          />{" "}
          <br />
          <br />
          <button type="submit" className="login-submit-btn">
            Sign In
          </button>{" "}
          <br />
        </form>
      </div>
    </div>
  );
}

export default Login;
