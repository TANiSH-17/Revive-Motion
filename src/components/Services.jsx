import React from 'react';
import './Services.css';
import Reveal from './Reveal';
import {
    FaBone, FaRunning, FaCrutch, FaWalking, FaHandHoldingMedical, FaUserInjured,
} from 'react-icons/fa';
import { WHATSAPP_PRIMARY } from '../lib/contact';

const services = [
    {
        title: 'Orthopedic Physiotherapy',
        desc: 'Targeted care for bone, joint and muscle conditions — arthritis, frozen shoulder, post-fracture stiffness and ligament injuries.',
        icon: <FaBone />,
    },
    {
        title: 'Sports Injury Rehab',
        desc: 'Structured return-to-play programmes for gym and field injuries, so you come back stronger and less likely to re-injure.',
        icon: <FaRunning />,
    },
    {
        title: 'Post-Surgery Rehab',
        desc: 'Guided recovery after orthopaedic surgery — rebuilding range of motion, strength and confidence at a safe pace.',
        icon: <FaCrutch />,
    },
    {
        title: 'Back & Neck Pain',
        desc: 'Relief for slip disc, sciatica and cervical pain using manual therapy, dry needling and corrective exercise.',
        icon: <FaUserInjured />,
    },
    {
        title: 'Joint & Muscle Pain',
        desc: 'Hands-on manual therapy, myofascial release and cupping to settle pain at the source rather than mask it.',
        icon: <FaHandHoldingMedical />,
    },
    {
        title: 'Mobility & Posture',
        desc: 'Correcting desk-work posture, gait and movement patterns — including neurological and paralysis rehabilitation.',
        icon: <FaWalking />,
    },
];

const Services = () => {
    return (
        <section id="services" className="section bg-light">
            <div className="container">
                <Reveal className="section-head">
                    <span className="eyebrow">What We Treat</span>
                    <h2>Specialised physiotherapy, tailored to you</h2>
                    <p>
                        Every plan starts with a full assessment — so treatment addresses the cause
                        of your pain, not just the symptom.
                    </p>
                </Reveal>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <Reveal
                            key={service.title}
                            delay={(index % 3) * 100}
                            className="service-card"
                        >
                            <div className="service-icon" aria-hidden="true">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="services-footnote">
                    <p>
                        Not sure which applies to you? Send us your symptoms and we'll advise.
                    </p>
                    <a
                        href={WHATSAPP_PRIMARY}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Ask a Physiotherapist
                    </a>
                </Reveal>
            </div>
        </section>
    );
};

export default Services;
