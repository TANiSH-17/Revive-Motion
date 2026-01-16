import React from 'react';
import './Locations.css';
import narainaImg from '../assets/naraina-clinic.jpg';
import rameshNagarImg from '../assets/ramesh-nagar-clinic.jpg';

const Locations = () => {
    return (
        <section id="locations" className="section">
            <div className="container">
                <h2 className="text-center mb-8">Visit Our Clinics</h2>

                <div className="locations-grid">
                    {/* Clinic 1: Ramesh Nagar */}
                    <div className="location-card">
                        <div className="map-container">
                            <img src={rameshNagarImg} alt="Ramesh Nagar Clinic" className="location-img" />
                        </div>
                        <div className="location-info">
                            <h3>Revive Motion – Ramesh Nagar</h3>
                            <p className="address text-gray mb-2">
                                <strong>Ramesh Nagar Clinic</strong><br />
                                <a href="tel:+918447547440" className="phone-link">📞 +91 84475 47440</a>
                            </p>

                            <div className="location-actions">
                                <a
                                    href="https://www.google.com/maps/place/Revive+Motion+-+Physiotherapy+Clinic/@28.6485363,77.1307871,18z/data=!3m1!4b1!4m6!3m5!1s0x390d03926d82b5b5:0x70bb352112355afa!8m2!3d28.6485363!4d77.1307871!16s%2Fg%2F11ngpl18tf?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-sm action-btn"
                                >
                                    Get Directions
                                </a>
                                <a
                                    href="https://g.page/r/CfpaNRIhNbtwEAE/review"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-sm action-btn"
                                >
                                    Write a Review
                                </a>
                            </div>
                            <a
                                href="https://wa.me/918447547440"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-full mt-4"
                            >
                                WhatsApp This Clinic
                            </a>
                        </div>
                    </div>

                    {/* Clinic 2: Naraina Village */}
                    <div className="location-card">
                        <div className="map-container">
                            <img src={narainaImg} alt="Naraina Village Clinic" className="location-img" />
                        </div>
                        <div className="location-info">
                            <h3>Revive Motion – Naraina Village</h3>
                            <p className="address text-gray mb-2">
                                <strong>Naraina Village Clinic</strong><br />
                                <a href="tel:+918447860086" className="phone-link">📞 +91 84478 60086</a>
                            </p>

                            <div className="location-actions">
                                <a
                                    href="https://www.google.com/maps/place/Revive+Motion+-+Physiotherapy+Clinic/@28.6201637,77.1354521,17z/data=!3m1!4b1!4m6!3m5!1s0x390d036b2e96e1c1:0xca5d6a33fab06269!8m2!3d28.620159!4d77.138027!16s%2Fg%2F11yb2cz0tk?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-sm action-btn"
                                >
                                    Get Directions
                                </a>
                                <a
                                    href="https://g.page/r/CWlisPozal3KEAE/review"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-sm action-btn"
                                >
                                    Write a Review
                                </a>
                            </div>
                            <a
                                href="https://wa.me/918447860086"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-full mt-4"
                            >
                                WhatsApp This Clinic
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Locations;
