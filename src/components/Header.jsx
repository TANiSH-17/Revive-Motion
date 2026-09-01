import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../assets/logo_nav.webp';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { getLenis, scrollToTop } from '../lib/lenis';
import { WHATSAPP_PRIMARY } from '../lib/contact';

const NAV_LINKS = [
    { id: 'locations', label: 'Locations' },
    { id: 'services', label: 'Services' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'about', label: 'About' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('');
    const toggleRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Highlight the nav item for whichever section is currently in view.
    useEffect(() => {
        const sections = NAV_LINKS
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean);
        if (!sections.length || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActive(visible.target.id);
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    // Lock background scrolling while the drawer is open. Lenis owns the
    // scroll position, so body overflow alone is not enough.
    useEffect(() => {
        const lenis = getLenis();
        if (menuOpen) {
            lenis?.stop();
            document.body.style.overflow = 'hidden';
        } else {
            lenis?.start();
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    // Escape closes the drawer and returns focus to the toggle.
    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') {
                setMenuOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a
                    href="#main"
                    className="logo-container"
                    aria-label="Revive Motion — back to top"
                    onClick={(e) => {
                        e.preventDefault();
                        closeMenu();
                        scrollToTop();
                    }}
                >
                    <img
                        src={logo}
                        alt="Revive Motion Physiotherapy Clinic"
                        className="logo-img"
                        width="512"
                        height="178"
                        fetchPriority="high"
                    />
                </a>

                <nav
                    id="primary-nav"
                    className={`nav ${menuOpen ? 'active' : ''}`}
                    aria-label="Primary"
                >
                    {NAV_LINKS.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={active === id ? 'is-active' : ''}
                            aria-current={active === id ? 'true' : undefined}
                            onClick={closeMenu}
                        >
                            {label}
                        </a>
                    ))}

                    <a
                        href={WHATSAPP_PRIMARY}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary nav-cta"
                        onClick={closeMenu}
                    >
                        <FaWhatsapp aria-hidden="true" /> Book Now
                    </a>
                </nav>

                <button
                    ref={toggleRef}
                    type="button"
                    className="mobile-toggle"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="primary-nav"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {menuOpen && (
                <div className="menu-overlay" onClick={closeMenu} aria-hidden="true"></div>
            )}
        </header>
    );
};

export default Header;
