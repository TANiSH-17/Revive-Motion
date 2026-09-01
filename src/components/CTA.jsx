import React from 'react';
import './CTA.css';
import Reveal from './Reveal';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { WHATSAPP_PRIMARY, PHONE_RAMESH_NAGAR } from '../lib/contact';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-glow" aria-hidden="true"></div>

            <div className="container">
                <Reveal className="cta-inner">
                    <h2 className="cta-title">Start your recovery today</h2>
                    <p className="cta-sub">
                        Message us with what hurts. We'll tell you whether physiotherapy can help —
                        honestly, and before you book anything.
                    </p>

                    <div className="cta-actions">
                        <a
                            href={WHATSAPP_PRIMARY}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-white btn-lg"
                        >
                            <FaWhatsapp aria-hidden="true" /> Book on WhatsApp
                        </a>
                        <a href={`tel:+${PHONE_RAMESH_NAGAR}`} className="btn btn-ghost-light btn-lg">
                            <FaPhoneAlt aria-hidden="true" /> Call the clinic
                        </a>
                    </div>

                    <ul className="cta-points">
                        <li>Professional care</li>
                        <li>Personalised treatment</li>
                        <li>Proven results</li>
                    </ul>
                </Reveal>
            </div>
        </section>
    );
};

export default CTA;
