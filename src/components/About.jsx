import React from 'react';
import { FaInstagram, FaLinkedin, FaCheck } from 'react-icons/fa';
import './About.css';
import Reveal from './Reveal';
import doctorImg from '../assets/doctor.webp';

const benefits = [
    'M.P.T. Orthopaedics qualified',
    'Assessment-led treatment plans',
    'Manual therapy & dry needling',
    'Home visits on request',
];

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <Reveal className="about-image">
                    <div className="image-wrapper">
                        <img
                            src={doctorImg}
                            alt="Dr. Mukul Tanwar, physiotherapist at Revive Motion"
                            className="doctor-img"
                            width="426"
                            height="424"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="doctor-card">
                        <p className="doctor-name">Dr. Mukul Tanwar</p>
                        <p className="doctor-quals">B.P.T. · M.P.T. (Orthopaedics) · D.N.H.E.</p>
                        <div className="doctor-socials">
                            <a
                                href="https://www.instagram.com/dr.mukul.tanwar?igsh=MXQxd2ZyNnd4N29rYQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="doc-social-icon instagram"
                                aria-label="Dr. Mukul Tanwar on Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dr-mukul-tanwar-pt-2535621a2?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="doc-social-icon linkedin"
                                aria-label="Dr. Mukul Tanwar on LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </Reveal>

                <Reveal className="about-content" delay={120}>
                    <span className="eyebrow">About the Clinic</span>
                    <h2>Clinical excellence in rehabilitation</h2>

                    <p className="lead-text">
                        Revive Motion was built around a simple idea: treat the cause, not the
                        symptom. Every patient starts with a thorough assessment, and every plan is
                        built for that specific body, injury and goal.
                    </p>
                    <p className="lead-text">
                        Led by <strong>Dr. Mukul Tanwar</strong>, a post-graduate in orthopaedic
                        physiotherapy, our approach combines hands-on manual therapy with
                        progressive exercise — so relief holds up long after your last session.
                    </p>

                    <ul className="benefits-list">
                        {benefits.map((benefit) => (
                            <li key={benefit}>
                                <span className="check-icon" aria-hidden="true"><FaCheck /></span>
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
