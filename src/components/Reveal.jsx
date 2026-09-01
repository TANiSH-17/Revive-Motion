import React, { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fades + lifts its children into view the first time they are scrolled to.
 * Renders visible straight away when IntersectionObserver is unavailable or
 * the visitor has asked for reduced motion.
 */
const Reveal = ({ children, delay = 0, className = '', ...rest }) => {
    const ref = useRef(null);
    // Resolved during the initial render so the no-animation path never
    // triggers a second render pass.
    const [visible, setVisible] = useState(
        () => typeof IntersectionObserver === 'undefined' || prefersReducedMotion()
    );

    useEffect(() => {
        if (visible) return;

        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [visible]);

    return (
        <div
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
            style={{ '--reveal-delay': `${delay}ms` }}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Reveal;
