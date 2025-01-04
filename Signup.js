import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './styles.css'; // Import the styles

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle redirection to the login page
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="flex-container">
      <div className="form-container">
        <form className="form">
          <h2>Signup</h2>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required minLength={8}/>
          <input type="password" placeholder="Confirm Password" required minLength={8}/>
          <input type="number" placeholder="Phone number" required />
          <button type="submit">Signup</button>
          <h3>Already Have an Account?</h3>
          <button type="button" onClick={handleLoginClick}>Login</button> {/* Redirects to Login */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
