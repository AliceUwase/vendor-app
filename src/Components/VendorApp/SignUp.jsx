import { Link } from 'react-router-dom'
import React from 'react'
import './SignUp.css'

import logo_icon from '../../Assets/Vendor.svg'
import food_image from '../../Assets/food2.png'


export const SignUp = () => {
  return (
    <div className="split-container">
      <div className="left-image">
        <img src={food_image} alt="Food" />
      </div>
      <div className="right-form">
        <div className='form-card'>
          <img src={logo_icon} alt="VendorApp Logo" className="logo" />
          <h2>Register Now!</h2>
          <p>Create your account to unlock full features..</p>
          <form>
            <div className="name-fields">
              <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="Jane" />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Doe" />
              </div>
              </div>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            <div className="checkbox-row">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <a href="#">Terms and Privacy Policy</a>
              </label>
            </div>
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
          <div className="divider">Or continue with</div>
          <button className="google-btn">Sign up with Google</button>
          <div className="login-link">
            <p>
              Already have an account? <Link to="/login">Log In</Link>

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
