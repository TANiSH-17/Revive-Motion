import React from 'react';
import './SocialSection.css';
import Reveal from './Reveal';
import { FaInstagram, FaWhatsapp, FaFacebook, FaArrowRight } from 'react-icons/fa';
import { WHATSAPP_PRIMARY } from '../lib/contact';

const channels = [
    {
        key: 'instagram',
        name: 'Instagram',
        desc: 'Exercise demos, recovery tips and clinic updates.',
        cta: 'Follow us',
        href: 'https://www.instagram.com/revive_motion/',
        icon: <FaInstagram />,
    },
    {
        key: 'whatsapp',
        name: 'WhatsApp',
        desc: 'The fastest way to reach us and book a slot.',
        cta: 'Chat with us',
        href: WHATSAPP_PRIMARY,
        icon: <FaWhatsapp />,
    },
    {
        key: 'facebook',
        name: 'Facebook',
        desc: 'Patient stories, health posts and community news.',
        cta: 'Like our page',
        href: 'https://www.facebook.com/revivemotionofficial/',
        icon: <FaFacebook />,
    },
];

const SocialSection = () => {
    return (
        <section className="section social-section">
            <div className="container">
                <Reveal className="section-head">
                    <span className="eyebrow">Stay Connected</span>
                    <h2>Follow along between sessions</h2>
                    <p>Health tips, rehab guidance and clinic updates — wherever you already are.</p>
                </Reveal>

                <div className="social-grid">
                    {channels.map((channel, i) => (
                        <Reveal key={channel.key} delay={i * 100}>
                            <a
                                href={channel.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`bento-card card-${channel.key}`}
                            >
                                <span className={`icon-wrapper icon-${channel.key}`} aria-hidden="true">
                                    {channel.icon}
                                </span>
                                <span className="card-content">
                                    <span className="social-name">{channel.name}</span>
                                    <span className="social-desc">{channel.desc}</span>
                                </span>
                                <span className="social-btn">
                                    {channel.cta}
                                    <FaArrowRight aria-hidden="true" />
                                </span>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
