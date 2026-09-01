import React from 'react';
import './Hero.css';
import { FaWhatsapp } from 'react-icons/fa';
import heroLogo from '../assets/logo_hero_final.webp';
import { WHATSAPP_PRIMARY } from '../lib/contact';

const stats = [
    { number: '1000+', label: 'Patients Treated' },
    { number: '5+', label: 'Years Experience' },
    { number: '4.9', label: 'Google Rating' },
    { number: '2', label: 'Delhi Clinics' },
];

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background" aria-hidden="true">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="container hero-container-inner">
                <div className="hero-content">
                    <img
                        src={heroLogo}
                        alt="Revive Motion Physiotherapy Clinic"
                        className="hero-logo fade-in-up"
                        width="1024"
                        height="165"
                        fetchPriority="high"
                    />

                    <h1 className="hero-title fade-in-up">
                        Reviving Movement. <span className="text-gradient">Restoring Life.</span>
                    </h1>

                    <p className="hero-subtitle fade-in-up delay-1">
                        Evidence-based physiotherapy from
                        <span className="hero-subtitle-name">
                            <strong>Dr. Mukul Tanwar</strong> (M.P.T. Orthopaedics)
                        </span>
                        <em className="hero-subtitle-note">
                            for lasting pain relief and restored mobility.
                        </em>
                    </p>

                    <div className="hero-actions fade-in-up delay-2">
                        <a
                            href={WHATSAPP_PRIMARY}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <FaWhatsapp aria-hidden="true" /> Book an Appointment
                        </a>
                        <a href="#services" className="btn btn-outline">
                            Explore Treatments
                        </a>
                    </div>

                    <dl className="hero-stats fade-in-up delay-3">
                        {stats.map(({ number, label }, i) => (
                            <React.Fragment key={label}>
                                {i > 0 && <div className="stat-divider" aria-hidden="true"></div>}
                                <div className="stat-item">
                                    <dt className="stat-number">{number}</dt>
                                    <dd className="stat-label">{label}</dd>
                                </div>
                            </React.Fragment>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Hero;
