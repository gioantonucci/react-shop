import React from "react";
import '@styles/SendEmail.scss'
import email from '@icons/email.svg'


const SendEmail = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src={email} alt="email" />
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

export default SendEmail;