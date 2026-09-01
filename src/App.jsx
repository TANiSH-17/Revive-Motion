import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Locations from './components/Locations';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { setLenis, scrollToId } from './lib/lenis';

function App() {
  useEffect(() => {
    // Respect the OS "reduce motion" setting — smooth scroll hijacking is a
    // common trigger for motion sensitivity.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    setLenis(lenis);

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  // Delegated so it also covers anchors rendered after mount, and so every
  // in-page link lands below the fixed header instead of behind it.
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest?.('a[href^="#"]');
      if (!anchor) return;

      const id = anchor.getAttribute('href').slice(1);
      if (!id || !document.getElementById(id)) return;

      e.preventDefault();
      scrollToId(id);
      history.replaceState(null, '', `#${id}`);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="App">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Locations />
        <Services />
        <Reviews />
        <CTA />
        <About />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
