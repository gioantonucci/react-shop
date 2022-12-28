import React from "react";
import "../styles/NotFound.scss";

function NotFound() {
  return (
    <div className="container">
      <div className="error-container">
      <div className="code">
        <p>404</p>
      </div>
      <p className="title">Not Found</p>
      <p className="subtitle">It seems like we couldn't find the page you were looking for.</p>
       <button className="primary-button login-button">Back to Home</button>
      </div>
    </div>
  );
}

export default NotFound;
