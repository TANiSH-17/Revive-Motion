import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3>Revive Motion</h3>
                    <p className="text-light">
                        Restoring movement, enhancing life through expert physiotherapy care.
                    </p>
                </div>
                <div className="footer-col">
                    <h4>Connect</h4>
                    <a href="https://whatsapp.com/channel/0029VbBrZ15KLaHmNCNfTj1P" target="_blank" rel="noopener noreferrer">WhatsApp Channel</a>
                    <a href="https://www.instagram.com/revive_motion/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com/revivemotionofficial/" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <p className="text-light">Ramesh Nagar: <a href="tel:+918447547440" className="footer-link">+91 84475 47440</a></p>
                    <p className="text-light">Naraina Vihar: <a href="tel:+918447860086" className="footer-link">+91 84478 60086</a></p>
                    <p className="text-light" style={{ marginTop: '0.5rem' }}>
                        <a href="mailto:Revive.Motion.Clinics@gmail.com" className="footer-link">Revive.Motion.Clinics@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Revive Motion. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
