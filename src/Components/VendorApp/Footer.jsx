import React from "react";
import "./Footer.css";
import Logo_icon from '../../Assets/logo.svg';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src={Logo_icon} alt="VendorApp logo" className="footer-logo" />
                        <p className="footer-description">
                            We connect local businesses with community members who want to discover
                            and support the places that make their neighborhood unique
                        </p>
                    </div>
                    <div className="footer-help">
                        <div className="help-icon" aria-hidden>🎧</div>
                        <div className="help-text">
                            <div className="help-label">Need Help?</div>
                            <a className="help-phone" href="tel:+2507888888">Call Us : +250 7888888</a>
                        </div>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="link-column">
                        <h4>Quick Links</h4>
                        <a href="#">Home</a>
                        <a href="#">Categories</a>
                        <a href="#">All Vendors</a>
                        <a href="#">Help Center</a>
                    </div>
                    <div className="link-column">
                        <h4>Legal</h4>
                        <a href="#">Vendor Requirements</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Food Safety Guidelines</a>
                        <a href="#">User Policy</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="link-column">
                        <h4>Vendors</h4>
                        <a href="#">Vendor Login</a>
                        <a href="#">Add New Vendor</a>
                        <a href="#">Business Policy</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">©2025 Vendor App. All rights reserved.</div>
                    <div className="socials">
                        <a aria-label="Instagram" href="#" className="social instagram"><FaInstagram size={28} /></a>
                        <a aria-label="Facebook" href="#" className="social facebook"><FaFacebook size={28} /></a>
                        <a aria-label="LinkedIn" href="#" className="social linkedin"><FaLinkedin size={28} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


