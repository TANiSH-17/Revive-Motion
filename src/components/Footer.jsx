import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import {
    PHONE_RAMESH_NAGAR,
    PHONE_NARAINA,
    WHATSAPP_PRIMARY,
    MAPS_RAMESH_NAGAR,
    MAPS_NARAINA,
    OPENING_HOURS,
} from '../lib/contact';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Identical at both clinics, so it is built once and rendered in each column.
    const hours = (
        <p className="footer-hours">
            <FiClock className="contact-icon" aria-hidden="true" />
            <span className="footer-hours-body">
                <span className="footer-hours-days">{OPENING_HOURS.days}</span>
                {OPENING_HOURS.slots.map((slot) => (
                    <span key={slot} className="footer-hours-slot">{slot}</span>
                ))}
            </span>
        </p>
    );

    return (
        <footer id="contact-us" className="footer">
            <div className="container footer-container">
                <div className="footer-col brand-col">
                    <h3 className="brand-title">Revive Motion</h3>
                    <p className="brand-desc">
                        Physiotherapy and rehabilitation in West Delhi, led by Dr. Mukul Tanwar
                        (M.P.T. Orthopaedics). Reviving movement, restoring life.
                    </p>
                    <a href="mailto:Revive.Motion.Clinics@gmail.com" className="contact-item footer-email">
                        <FiMail className="contact-icon" aria-hidden="true" />
                        <span>Revive.Motion.Clinics@gmail.com</span>
                    </a>
                    <div className="social-icons">
                        <a
                            href="https://www.instagram.com/revive_motion/"
                            target="_blank" rel="noopener noreferrer"
                            className="social-icon-wrapper instagram-bg" aria-label="Revive Motion on Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href={WHATSAPP_PRIMARY}
                            target="_blank" rel="noopener noreferrer"
                            className="social-icon-wrapper whatsapp-bg" aria-label="Message Revive Motion on WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href="https://www.facebook.com/revivemotionofficial/"
                            target="_blank" rel="noopener noreferrer"
                            className="social-icon-wrapper facebook-bg" aria-label="Revive Motion on Facebook"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Ramesh Nagar</h4>
                    <address className="footer-address">
                        7/151, Ramesh Nagar<br />
                        Shanti Specialist Doctor Services<br />
                        New Delhi – 110015
                    </address>
                    {hours}
                    <a href={`tel:+${PHONE_RAMESH_NAGAR}`} className="contact-item">
                        <FiPhone className="contact-icon" aria-hidden="true" />
                        <span>+91 84475 47440</span>
                    </a>
                    <a href={MAPS_RAMESH_NAGAR} target="_blank" rel="noopener noreferrer" className="contact-item">
                        <FiMapPin className="contact-icon" aria-hidden="true" />
                        <span>Get directions</span>
                    </a>
                </div>

                <div className="footer-col">
                    <h4>Naraina</h4>
                    <address className="footer-address">
                        WZ-167, Naraina<br />
                        Ground floor<br />
                        New Delhi – 110028
                    </address>
                    {hours}
                    <a href={`tel:+${PHONE_NARAINA}`} className="contact-item">
                        <FiPhone className="contact-icon" aria-hidden="true" />
                        <span>+91 84478 60086</span>
                    </a>
                    <a href={MAPS_NARAINA} target="_blank" rel="noopener noreferrer" className="contact-item">
                        <FiMapPin className="contact-icon" aria-hidden="true" />
                        <span>Get directions</span>
                    </a>
                </div>

                <div className="footer-col">
                    <h4>Explore</h4>
                    <nav className="footer-links" aria-label="Footer">
                        <a href="#locations">Locations</a>
                        <a href="#services">Services</a>
                        <a href="#reviews">Reviews</a>
                        <a href="#faq">FAQ</a>
                        <a href="#about">About</a>
                    </nav>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} Revive Motion Physiotherapy Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
