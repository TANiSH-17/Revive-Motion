import React from 'react';
import './Locations.css';
import Reveal from './Reveal';
import { FaWhatsapp, FaPhoneAlt, FaDirections, FaRegStar, FaHome, FaRegClock } from 'react-icons/fa';
import narainaImg from '../assets/naraina-clinic.webp';
import rameshNagarImg from '../assets/ramesh-nagar-clinic.webp';
import {
    PHONE_RAMESH_NAGAR,
    PHONE_NARAINA,
    WHATSAPP_RAMESH_NAGAR,
    WHATSAPP_NARAINA,
    REVIEW_URL_RAMESH_NAGAR,
    REVIEW_URL_NARAINA,
    MAPS_RAMESH_NAGAR,
    MAPS_NARAINA,
    OPENING_HOURS,
} from '../lib/contact';

const clinics = [
    {
        name: 'Ramesh Nagar',
        image: rameshNagarImg,
        alt: 'Revive Motion Physiotherapy Clinic storefront in Ramesh Nagar, New Delhi',
        street: '7/151, Ramesh Nagar',
        note: 'Inside Shanti Specialist Doctor Services',
        city: 'New Delhi – 110015',
        phoneDisplay: '+91 84475 47440',
        phone: PHONE_RAMESH_NAGAR,
        whatsapp: WHATSAPP_RAMESH_NAGAR,
        maps: MAPS_RAMESH_NAGAR,
        reviews: REVIEW_URL_RAMESH_NAGAR,
    },
    {
        name: 'Naraina',
        image: narainaImg,
        alt: 'Revive Motion Physiotherapy Clinic storefront in Naraina, New Delhi',
        street: 'WZ-167, Naraina',
        note: 'Ground floor, street-level entrance',
        city: 'New Delhi – 110028',
        phoneDisplay: '+91 84478 60086',
        phone: PHONE_NARAINA,
        whatsapp: WHATSAPP_NARAINA,
        maps: MAPS_NARAINA,
        reviews: REVIEW_URL_NARAINA,
    },
];

const Locations = () => {
    return (
        <section id="locations" className="section">
            <div className="container">
                <Reveal className="section-head">
                    <span className="eyebrow">Visit Us</span>
                    <h2>Two clinics across West Delhi</h2>
                    <p>
                        Walk in or book ahead — both clinics offer the full range of treatments,
                        with home visits available on request.
                    </p>
                </Reveal>

                <div className="locations-grid">
                    {clinics.map((clinic, i) => (
                        <Reveal key={clinic.name} delay={i * 120} className="location-card">
                            <div className="location-media">
                                <img
                                    src={clinic.image}
                                    alt={clinic.alt}
                                    className="location-img"
                                    width="1140"
                                    height="855"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <span className="location-badge">
                                    <FaHome aria-hidden="true" /> Home visits available
                                </span>
                            </div>

                            <div className="location-info">
                                <h3>Revive Motion — {clinic.name}</h3>

                                <address className="location-address">
                                    {clinic.street}<br />
                                    <span className="address-note">{clinic.note}</span><br />
                                    {clinic.city}
                                </address>

                                <div className="location-hours">
                                    <FaRegClock className="hours-icon" aria-hidden="true" />
                                    <div className="hours-body">
                                        <span className="hours-days">{OPENING_HOURS.days}</span>
                                        {OPENING_HOURS.slots.map((slot) => (
                                            <span key={slot} className="hours-slot">{slot}</span>
                                        ))}
                                        <span className="hours-closed">{OPENING_HOURS.closedNote}</span>
                                    </div>
                                </div>

                                <a href={`tel:+${clinic.phone}`} className="phone-link">
                                    <FaPhoneAlt aria-hidden="true" />
                                    {clinic.phoneDisplay}
                                </a>

                                <a
                                    href={clinic.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-full"
                                >
                                    <FaWhatsapp aria-hidden="true" /> Book on WhatsApp
                                </a>

                                <div className="location-actions">
                                    <a
                                        href={clinic.maps}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline action-btn"
                                    >
                                        <FaDirections aria-hidden="true" /> Directions
                                    </a>
                                    <a
                                        href={clinic.reviews}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline action-btn"
                                    >
                                        <FaRegStar aria-hidden="true" /> Review us
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locations;
