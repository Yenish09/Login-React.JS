import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './styles.css'; // Import the styles

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle the redirection to the signup page
  const handleSignupClick = () => {
    navigate('/Signup'); 
  };

  return (
    <div className="flex-container">
      <div className="form-container">
        <form className="form">
          <h2>Login</h2>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <button type="button" onClick={handleSignupClick}>Signup</button> {/* Redirects to Signup */}
        </form>
      </div>
    </div>
  );
};

export default Login;
