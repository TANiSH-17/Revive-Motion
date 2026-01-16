import React from 'react';

const CTA = () => {
    return (
        <section className="section bg-light text-center" style={{ padding: '6rem 1rem' }}>
            <div className="container">
                <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Start Your Recovery Journey Today</h2>
                <p className="text-gray mb-8" style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
                    Professional care • Personalized treatment • Proven results
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="https://wa.me/1234567890" className="btn btn-primary">Book on WhatsApp</a>
                    <a href="#reviews" className="btn btn-outline">Visit Google Reviews</a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
