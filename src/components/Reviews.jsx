import React from 'react';
import './Reviews.css';

const reviewsData = [
    {
        name: "Amit Sharma",
        text: "Excellent experience at Revive Motion. Dr. Mukul is very knowledgeable and helped me recover from my back pain quickly.",
        rating: 5,
        clinic: "Ramesh Nagar"
    },
    {
        name: "Priya Singh",
        text: "Best physiotherapy clinic in Delhi. The staff is very professional and the equipment is top-notch. Highly recommended!",
        rating: 5,
        clinic: "Naraina Vihar"
    },
    {
        name: "Rahul Verma",
        text: "I visited for sports injury rehab. The personalized care plan worked wonders. Back to gym in no time.",
        rating: 5,
        clinic: "Ramesh Nagar"
    },
    {
        name: "Sonia Gupta",
        text: "Very hygienic and well-maintained clinic. Dr. Mukul gives proper time to every patient. 5 stars!",
        rating: 5,
        clinic: "Naraina Vihar"
    },
    {
        name: "Vikas Malhotra",
        text: "Suffering from frozen shoulder for months, got relief in just a few sessions here. Thank you Revive Motion!",
        rating: 5,
        clinic: "Ramesh Nagar"
    },
    {
        name: "Neha Kapoor",
        text: "Great facility and supportive doctors. My post-surgery rehab went very smoothly.",
        rating: 5,
        clinic: "Naraina Vihar"
    }
];

const Reviews = () => {
    return (
        <section id="reviews" className="section bg-light overflow-hidden">
            <div className="container text-center mb-8">
                <h2 className="mb-2 section-title">Patient Success Stories</h2>
                <p className="text-gray section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    We are dedicated to providing exceptional care. Read authentic feedback from those we have helped regain mobility and quality of life.
                </p>
            </div>

            <div className="marquee-container">
                <div className="marquee-content">
                    {/* Duplicate map for seamless scrolling */}
                    {[...reviewsData, ...reviewsData].map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-header">
                                <span className="reviewer-name">{review.name}</span>
                                <span className="review-clinic">{review.clinic}</span>
                            </div>
                            <div className="review-stars">{'★'.repeat(review.rating)}</div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="google-icon">G</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-8">
                <a href="https://g.page/r/CfpaNRIhNbtwEAE/review" target="_blank" rel="noopener noreferrer" className="btn btn-outline mr-4">View All Reviews (Ramesh Nagar)</a>
                <a href="https://g.page/r/CWlisPozal3KEAE/review" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View All Reviews (Naraina)</a>
            </div>
        </section>
    );
};

export default Reviews;
