import React from 'react';
import './Hero.css';

import heroLogo from '../assets/logo_hero_final.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="container hero-container-inner">
                <div className="hero-content">

                    <img src={heroLogo} alt="Revive Motion Logo" className="hero-logo fade-in-up" />

                    <h1 className="hero-title fade-in-up">
                        Reviving Movement. <span className="text-gradient">Restoring Life.</span>
                    </h1>
                    <p className="hero-subtitle fade-in-up delay-1">
                        Experience world-class physiotherapy designed for pain relief,
                        mobility restoration, and your long-term wellness.
                    </p>
                    <div className="hero-actions fade-in-up delay-2">
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-glow">
                            Enquire Now
                        </a>
                    </div>

                    <div className="hero-stats fade-in-up delay-3">
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Happy Patients</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">4.9</span>
                            <span className="stat-label">Google Rating</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">100+</span>
                            <span className="stat-label">Surgeries Avoided</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
