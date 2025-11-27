import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LogIn.css'
import { login } from '../../services/authService'
import { useToast } from '../../contexts/ToastContext'

import logo_icon from '../../Assets/Vendor.svg'
import food_image from '../../Assets/food1.png'


export const Login = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)
    try {
      const response = await login(formData)
      if (response?.success) {
        toast.success('Login successful! Welcome back.')
        setTimeout(() => {
          navigate('/browsePage')
        }, 500)
        return
      }
      const errorMsg = response?.message || 'Unable to login. Please try again.'
      setError(errorMsg)
      toast.error(errorMsg)
    } catch (submitError) {
      const errorMsg = submitError?.message || 'Unable to login. Please try again.'
      setError(errorMsg)
      toast.error(errorMsg)
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="form-options">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
              <a href="/#">Forgot Password?</a>
            </div>
            {error && <p className="error-text">{error}</p>}
            <button type="submit" className="login-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Logging In...' : 'Log In'}
            </button>
          </form>
          <div className="signup-link">
            <p>
             Don't have an account? <Link to="/signup">Sign Up</Link> 
            </p>
          </div>
          <div className="divider">OR CONTINUE WITH</div>
          <button className="google-btn">Log in with Google</button>
        </div>
      </div>
    </div>
  )
}
