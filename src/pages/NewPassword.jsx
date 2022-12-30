import React from 'react'
import '@styles/NewPassword.scss'

function NewPassword() {
  return (
    <div className="new-password">
    <div className="new-password-container">
      <h1 className="new-password-title">Create a new password</h1>
      <p className="new-password-subtitle">Enter a new password for your account</p>
      <form action="/" className="new-password-form">
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="********"
          className="input input-password"
        />
        <label htmlFor="new-password" className="label">
          Re-enter password
        </label>
        <input
          type="password"
          id="new-password"
          placeholder="********"
          className="input input-password"
        />
        <input
          type="submit"
          value={"Confirm new password"}
          className="primary-button login-button"
        />
      </form>
    </div>
  </div>
  )
}

export default NewPassword