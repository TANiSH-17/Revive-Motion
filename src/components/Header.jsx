import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div
                    className="logo-container"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        closeMenu();
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    <img src={logo} alt="Revive Motion" className="logo-img" />
                </div>

                <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#locations" onClick={closeMenu}>Locations</a>
                    <a href="#reviews" onClick={closeMenu}>Reviews</a>
                    <a
                        href="https://wa.me/918447547440"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        onClick={closeMenu}
                    >
                        Book Now
                    </a>
                </nav>
            </div>
            {/* Overlay for mobile menu */}
            {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
        </header>
    );
};

export default Header;
