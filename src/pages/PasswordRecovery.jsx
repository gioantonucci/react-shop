import React from "react";
import '../styles/PasswordRecovery.scss'

const PasswordRecovery = () => {
  return (
    <div className="container">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src="./images/icons/email.svg" alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          Didn't receive the email?{" "}
          <span>
            <a href="/">Resend</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default PasswordRecovery;
