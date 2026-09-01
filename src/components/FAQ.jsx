import React from 'react';
import './FAQ.css';
import Reveal from './Reveal';
import { FaChevronDown } from 'react-icons/fa';
import { FAQS } from '../data/faqs';
import { WHATSAPP_PRIMARY } from '../lib/contact';

/**
 * Native <details>/<summary> rather than a custom accordion: it is keyboard
 * operable, announced correctly by screen readers and works before the JS
 * bundle has run, all without any state of our own.
 */
const FAQ = () => (
    <section id="faq" className="section bg-light">
        <div className="container">
            <Reveal className="section-head">
                <span className="eyebrow">Common Questions</span>
                <h2>Answers before you book</h2>
                <p>The things patients ask us most often, answered straight.</p>
            </Reveal>

            <div className="faq-list">
                {FAQS.map(({ q, a }, i) => (
                    <Reveal key={q} delay={Math.min(i, 4) * 70}>
                        <details className="faq-item">
                            <summary className="faq-question">
                                <span>{q}</span>
                                <FaChevronDown className="faq-chevron" aria-hidden="true" />
                            </summary>
                            <div className="faq-answer">
                                <p>{a}</p>
                            </div>
                        </details>
                    </Reveal>
                ))}
            </div>

            <p className="faq-footnote">
                Something we have not covered?{' '}
                <a href={WHATSAPP_PRIMARY} target="_blank" rel="noopener noreferrer">
                    Ask us on WhatsApp
                </a>
                .
            </p>
        </div>
    </section>
);

export default FAQ;
