import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './About.css';
import doctorImg from '../assets/doctor.png';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <div className="about-image">
                    {/* Doctor Image */}
                    <div className="image-wrapper">
                        <img src={doctorImg} alt="Dr. Mukul Tanwar" className="doctor-img" />
                    </div>
                    <div className="doctor-socials">
                        <a href="https://www.instagram.com/dr.mukul.tanwar?igsh=MXQxd2ZyNnd4N29rYQ==" target="_blank" rel="noopener noreferrer" className="doc-social-icon instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/dr-mukul-tanwar-pt-2535621a2?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="doc-social-icon linkedin">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="mb-4 section-title" style={{ textAlign: 'left' }}>Clinical Excellence in Rehabilitation</h2>
                    <p className="mb-4 text-gray lead-text">
                        Revive Motion stands at the forefront of rehabilitative care, combining advanced evidence-based protocols with a deeply personalized approach to healing. Our mission goes beyond symptom relief—we empower you to achieve sustainable recovery and peak physical function through dedicated, expert guidance.
                    </p>
                    <ul className="benefits-list mb-4">
                        <li>
                            <span className="check-icon">✓</span>
                            <span>Board-Certified Specialists</span>
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            <span>Tailored Rehabilitation Protocols</span>
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            <span>Advanced Therapeutic Technology</span>
                        </li>
                        <li>
                            <span className="check-icon">✓</span>
                            <span>Patient-Centric Ethical Care</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
