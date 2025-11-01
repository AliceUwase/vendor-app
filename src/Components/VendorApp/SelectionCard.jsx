import React from "react";
import { Link } from "react-router-dom";
import "./SelectionCard.css";
import { MdStorefront } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


export  const SelectionCard = () => {
    return (
        <div className="selection-container">
            <h2>Choose your Path to Success</h2>
            <p>Select your role to access tailored features and services.</p>
            <div className="card-row">
                <div className="role-card">
                    <div className="icon vendor-icon">
                        <MdStorefront size={32} color="#fff" />
                    </div>
                    <h3>I'm a Vendor</h3>
                    <p>Manage products, orders, and customers interaction effectively.</p>
                    <div className="card-actions">
                        <Link to="/login" className="card-btn login-btn">Log In</Link>
                        <Link to="/vendor-registration" className="card-btn signup-btn">Sign Up</Link>
                    </div>
                </div>
                <div className="role-card">
                    <div className="icon vendor-icon">
                    <FaRegUser size={32} color="#fff" />
                    </div>
                    <h3>I'm a Customer</h3>
                    <p>Explore products, track orders, and enjoy a seamless shopping experience.</p>
                    <div className="card-actions">
                        <Link to="/login" className="card-btn login-btn">Log In</Link>
                        <Link to="/signup" className="card-btn signup-btn">Sign Up</Link>
                    </div>
                </div>

            </div>

        </div>
    );
}