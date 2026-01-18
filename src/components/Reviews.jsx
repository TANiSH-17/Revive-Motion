import React from 'react';
import './Reviews.css';

const reviewsData = [
    {
        name: "Rajiv Kr. Choudhry",
        text: "I have been taking Physiotherapy sessions from Dr. Mukul for my forearm injury. Since I started taking the sessions, my recovery is much faster and pain much more manageable! Highly recommend.",
        rating: 5,
        clinic: "Revive Motion"
    },
    {
        name: "Taranjeet Kaur",
        text: "I came to Dr Mukul clinic with lower back pain. After a week I’m feeling much better. I highly recommend him. He is very sincere and gives good results with his expertise.",
        rating: 5,
        clinic: "Revive Motion"
    },
    {
        name: "Ravinder Formay",
        text: "I had patellar fracture and post surgery Dr Mukul and Revive Motion physiotherapy clinic helped me in the smooth treatment. Highly recommend.",
        rating: 5,
        clinic: "Revive Motion"
    },
    {
        name: "Yash Tanwar",
        text: "I had a great experience at Revive Motion. The staff is friendly, professional, and welcoming, and the clinic is clean and well-equipped. The physiotherapists are knowledgeable.",
        rating: 5,
        clinic: "Revive Motion"
    },
    {
        name: "Jasvinder Singh",
        text: "I had severe back pain. Had some amazing physiotherapy sessions with Dr. Mukul Tanwar and my pain is completely gone now. Best physiotherapist in Delhi.",
        rating: 5,
        clinic: "Revive Motion"
    },
    {
        name: "Aniket Kumar",
        text: "Great experience! The environment is clean and comfortable, and the exercises were tailored to my recovery. Would definitely recommend Revive Motion to anyone needing quality physiotherapy.",
        rating: 5,
        clinic: "Revive Motion"
    },
    {
        name: "Ashutosh Mishra",
        text: "I was facing severe shoulder pain. I got a very effective result within three physiotherapy sessions. Shoulder mobility is improved, and pain is also reduced.",
        rating: 5,
        clinic: "Revive Motion"
    },
    {
        name: "Shimani Raj",
        text: "Very Good experience with Dr. MUKUL. He is really patient with his patients and has very deep knowledge about physiotherapy. I am recovering under his supervision.",
        rating: 5,
        clinic: "Revive Motion"
    },
    {
        name: "Tulsi Mukhi",
        text: "Dr.Mukul is an excellent physiotherapist. Well experienced ,polite and courteous.I was in severe pain due to cervical issues but in just 3 sessions not only I got releif from the pain but also stopped taking painkillers. Highly recommended.",
        rating: 5,
        clinic: "Revive Motion"
    },
    {
        name: "Bhavna Mahajan",
        text: "Dr. Mukul is one of the best physiotherapists I have come across. I have persistently had a weak back after my c-sec which led to a slip disc. His knowledge, continuous analysis of the issue and recommending the latest methods to treat the same is commendable.",
        rating: 5,
        clinic: "Revive Motion"
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

            <div className="reviews-actions mt-8">
                <a href="https://g.page/r/CfpaNRIhNbtwEAE/review" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View All Reviews (Ramesh Nagar)</a>
                <a href="https://g.page/r/CWlisPozal3KEAE/review" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View All Reviews (Naraina)</a>
            </div>
        </section>
    );
};

export default Reviews;
