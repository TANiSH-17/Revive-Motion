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

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Integrate with anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('href'));
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Locations />
      <Services />
      <Reviews />
      <CTA />
      <About />
      <SocialSection />
      <Footer />
    </div>
  );
}

export default App;
