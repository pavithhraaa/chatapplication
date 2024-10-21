import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css'; // Common CSS for login/signup forms

const SignUpPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    // Basic form validation
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors.push(key);
    });

    if (newErrors.length === 0) {
      // On successful signup
      console.log('Form submitted:', formData);
      navigate("/login");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-signup-page">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Sign Up</button>
          {errors.length > 0 && (
            <div className="error-message">
              Please fill in the following fields:
              <ul>
                {errors.map((error, index) => <li key={index}>{error}</li>)}
              </ul>
            </div>
          )}
        </form>
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default SignUpPage;
