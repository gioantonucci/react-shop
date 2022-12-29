import React from "react";
import '../styles/CreateAccount.scss'

function CreateAccount() {
  return (
    <div class="create-account">
      <div class="create-account-container">
        <h1 class="create-account-title">My account</h1>
        <form action="/" class="create-account-form">
          <div>
            <label for="name" class="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Giovanna Antonucci"
              class="input input-name"
            />

            <label for="email" class="label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="giovannamantonucci@gmail.com"
              class="input input-email"
            />

            <label for="password" class="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="***********"
              class="input input-password"
            />
          </div>

          <input
            type="submit"
            value="Create account"
            class="primary-button create-account-button"
          />
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
