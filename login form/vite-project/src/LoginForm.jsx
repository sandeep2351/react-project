import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-input"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="login-button">Sign In</button>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
