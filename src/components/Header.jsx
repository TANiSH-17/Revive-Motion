import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div
                    className="logo-container"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ cursor: 'pointer' }}
                >
                    <img src={logo} alt="Revive Motion" className="logo-img" />
                </div>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#locations">Locations</a>
                    <a href="#reviews">Reviews</a>
                    <a
                        href="https://wa.me/918447547440"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                    >
                        Book Now
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
