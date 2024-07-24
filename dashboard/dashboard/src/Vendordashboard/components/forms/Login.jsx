import React, { useState } from 'react';
import { API_URL } from '../../helpers/ApiPath';

const Login = ({showwelcomehandler}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginhandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/vendor/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Login failed: ${errorData.error}`);
        return;
      }

      const data = await response.json();
      alert('Login Successful');
      setEmail("");
      setPassword("");
      localStorage.setItem('login token', data.token);
      showwelcomehandler()
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className="loginsection">
      <form action="" className="authform" onSubmit={loginhandler}>
        <h3>Vendor Login</h3>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        /><br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        /><br />
        <button type="submit" className="btnsubmit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
