import React from 'react'
import './LogIn.css'

import logo_icon from '../../Assets/Vendor.svg'
import food_image from '../../Assets/food1.png'


export const VendorApp = () => {
  return (
    <div className="split-container">
      <div className="left-image">
        <img src={food_image} alt="Food" />
      </div>
      <div className="right-form">
        <div className='form-card'>
          <img src={logo_icon} alt="VendorApp Logo" className="logo" />
          <h2>Login Now!</h2>
          <p>Welcome back! Please enter your details.</p>
          <form>
            <label>Email</label>
            <input type="email" placeholder="john.doe@example.com" />
            <label>Password</label>
            <input type="password" placeholder="********" />
            <div className="form-options">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="login-btn">Log In</button>
          </form>
          <div className="signup-link">
            Don't have an account? <a href="#">Sign up</a>
          </div>
          <div className="divider">OR CONTINUE WITH</div>
          <button className="google-btn">Log in with Google</button>
        </div>
      </div>
    </div>
  )
}
