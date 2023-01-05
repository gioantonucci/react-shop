import React, { useRef } from "react";
import "@styles/Login.scss";
import { parseSrc } from "html-loader/dist/utils";

function Login() {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className="login">
      <div className="login-container">
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="giovanna@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="***********"
            className="input input-password"
          />
          <button
            type="submit"
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a className="forgot" href="/">
            Forgot my password
          </a>
        </form>
        <button className="secondary-button-signup signup-button">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Login;
