import React from "react";
import "../styles/MyAccount.scss";

function MyAccount() {
  return (
    <div className="account">
      <div className="account-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form-account">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <p type="text" id="name" className="value">
              Camila Yokoo
            </p>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <p type="email" id="email" className="value">
              camilayokoo@gmail.com
            </p>
            <label htmlFor="password" className="label">
              Password
            </label>
            <p type="password" id="password" className="value">
              ***********
            </p>    <input
            type="submit"
            value="Edit"
            className="secondary-button account-button"
          />
          </div>
      
        </form>
      </div>
    </div>
  );
}

export default MyAccount;
