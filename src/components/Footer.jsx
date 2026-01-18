import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer id="contact-us" className="footer">
            <div className="container footer-container">
                {/* Column 1: Brand & Description */}
                <div className="footer-col brand-col">
                    <h3 className="brand-title">
                        Revive Motion
                    </h3>
                    <p className="brand-desc">
                        Your trusted healthcare partner, providing compassionate and professional physiotherapy and rehabilitation care.
                    </p>
                </div>

                {/* Column 2: Quick Links & Contact */}
                <div className="footer-col contact-col">
                    <h4>Contact & Links</h4>
                    <div className="contact-list">
                        <a href="mailto:Revive.Motion.Clinics@gmail.com" className="contact-item">
                            <FiMail className="contact-icon" />
                            <span>Revive.Motion.Clinics@gmail.com</span>
                        </a>
                        <a href="tel:+918447547440" className="contact-item">
                            <FiPhone className="contact-icon" />
                            <span>+91 84475 47440</span>
                        </a>
                        <a href="tel:+918447860086" className="contact-item">
                            <FiPhone className="contact-icon" />
                            <span>+91 84478 60086</span>
                        </a>
                        <a href="#locations" onClick={(e) => handleScroll(e, 'locations')} className="contact-item">
                            <FiMapPin className="contact-icon" />
                            <span>Two convenient locations in New Delhi</span>
                        </a>
                    </div>
                </div>

                {/* Column 3: Social Media */}
                <div className="footer-col social-col">
                    <h4>Connect With Us</h4>
                    <div className="social-icons">
                        <a
                            href="https://www.instagram.com/revive_motion/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-wrapper instagram-bg"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="social-icon" />
                        </a>
                        <a
                            href="https://wa.me/918447547440"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-wrapper whatsapp-bg"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="social-icon" />
                        </a>
                        <a
                            href="https://www.facebook.com/revivemotionofficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-wrapper facebook-bg"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; {currentYear} Revive Motion. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
