import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
import { signup } from '../../services/authService'
import { useToast } from '../../contexts/ToastContext'

import logo_icon from '../../Assets/Vendor.svg'
import food_image from '../../Assets/food2.png'


export const SignUp = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    if (!acceptTerms) {
      const errorMsg = 'Please accept the terms to continue.'
      setError(errorMsg)
      toast.warning(errorMsg)
      return
    }
    setIsSubmitting(true)
    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        password: formData.password,
        userType: 'customer'
      }
      const response = await signup(payload)

      if (response?.success) {
        toast.success('Account created successfully! Welcome!')
        setTimeout(() => {
          navigate('/browsePage')
        }, 500)
        return
      }
      const errorMsg = response?.message || 'Unable to sign up. Please try again.'
      setError(errorMsg)
      toast.error(errorMsg)
    } catch (submitError) {
      const errorMsg = submitError?.message || 'Unable to sign up. Please try again.'
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
          <h2>Register Now!</h2>
          <p>Create your account to unlock full features..</p>
          <form onSubmit={handleSubmit}>
            <div className="name-fields">
              <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            <div className="checkbox-row">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(event) => setAcceptTerms(event.target.checked)}
                required
              />
              <label htmlFor="terms">
              I agree to the <a href="/terms-and-privacy">Terms and Privacy Policy</a>
              </label>
            </div>
            {error && <p className="error-text">{error}</p>}
            <button type="submit" className="signup-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          <div className="divider">Or</div>
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
