import React from 'react';
import './SocialSection.css';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const SocialSection = () => {
    return (
        <section className="social-section">
            <div className="container">
                <div className="social-header">
                    <h2 className="social-title">
                        Stay <span className="text-gradient">Connected</span>
                    </h2>
                    <p className="social-subtitle">
                        Follow us on social media for health tips, updates, and community events
                    </p>
                </div>

                <div className="social-grid">
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/revive_motion/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-card-link"
                    >
                        <div className="bento-card">
                            <div className="icon-wrapper icon-instagram">
                                <FaInstagram />
                            </div>
                            <div className="card-content">
                                <h3 className="social-name">Instagram</h3>
                                <p className="social-desc">Follow our latest updates</p>
                            </div>
                            <span className="social-btn btn-instagram">Follow Us</span>
                        </div>
                    </a>

                    {/* WhatsApp Community */}
                    <a
                        href="https://wa.me/918447547440"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-card-link"
                    >
                        <div className="bento-card">
                            <div className="icon-wrapper icon-whatsapp">
                                <FaWhatsapp />
                            </div>
                            <div className="card-content">
                                <h3 className="social-name">WhatsApp</h3>
                                <p className="social-desc">Join our community</p>
                            </div>
                            <span className="social-btn btn-whatsapp">Chat with us</span>
                        </div>
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/revivemotionofficial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-card-link"
                    >
                        <div className="bento-card">
                            <div className="icon-wrapper icon-facebook">
                                <FaFacebook />
                            </div>
                            <div className="card-content">
                                <h3 className="social-name">Facebook</h3>
                                <p className="social-desc">Like our page</p>
                            </div>
                            <span className="social-btn btn-facebook">Follow Us</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
