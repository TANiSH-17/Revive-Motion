import React from 'react';
import './Reviews.css';
import Reveal from './Reveal';
import { FaStar, FaGoogle } from 'react-icons/fa';
import { REVIEW_URL_RAMESH_NAGAR, REVIEW_URL_NARAINA } from '../lib/contact';

const reviewsData = [
    { name: 'Rajiv Kr. Choudhry', text: "I have been taking Physiotherapy sessions from Dr. Mukul for my forearm injury. Since I started taking the sessions, my recovery is much faster and pain much more manageable! Highly recommend." },
    { name: 'Taranjeet Kaur', text: "I came to Dr Mukul clinic with lower back pain. After a week I'm feeling much better. I highly recommend him. He is very sincere and gives good results with his expertise." },
    { name: 'Ravinder Formay', text: "I had patellar fracture and post surgery Dr Mukul and Revive Motion physiotherapy clinic helped me in the smooth treatment. Highly recommend." },
    { name: 'Yash Tanwar', text: "I had a great experience at Revive Motion. The staff is friendly, professional, and welcoming, and the clinic is clean and well-equipped. The physiotherapists are knowledgeable." },
    { name: 'Jasvinder Singh', text: "I had severe back pain. Had some amazing physiotherapy sessions with Dr. Mukul Tanwar and my pain is completely gone now. Best physiotherapist in Delhi." },
    { name: 'Aniket Kumar', text: "Great experience! The environment is clean and comfortable, and the exercises were tailored to my recovery. Would definitely recommend Revive Motion to anyone needing quality physiotherapy." },
    { name: 'Ashutosh Mishra', text: "I was facing severe shoulder pain. I got a very effective result within three physiotherapy sessions. Shoulder mobility is improved, and pain is also reduced." },
    { name: 'Shimani Raj', text: "Very Good experience with Dr. MUKUL. He is really patient with his patients and has very deep knowledge about physiotherapy. I am recovering under his supervision." },
    { name: 'Tulsi Mukhi', text: "Dr. Mukul is an excellent physiotherapist. Well experienced, polite and courteous. I was in severe pain due to cervical issues but in just 3 sessions not only I got relief from the pain but also stopped taking painkillers. Highly recommended." },
    { name: 'Bhavna Mahajan', text: "Dr. Mukul is one of the best physiotherapists I have come across. I have persistently had a weak back after my c-sec which led to a slip disc. His knowledge, continuous analysis of the issue and recommending the latest methods to treat the same is commendable." },
];

const ReviewCard = ({ review }) => (
    <figure className="review-card">
        <div className="review-stars" aria-label="Rated 5 out of 5">
            {Array.from({ length: 5 }, (_, i) => <FaStar key={i} aria-hidden="true" />)}
        </div>
        <blockquote className="review-text">{review.text}</blockquote>
        <figcaption className="review-footer">
            <span className="reviewer-avatar" aria-hidden="true">{review.name.charAt(0)}</span>
            <span className="reviewer-meta">
                <span className="reviewer-name">{review.name}</span>
                <span className="reviewer-source">
                    <FaGoogle aria-hidden="true" /> Google Review
                </span>
            </span>
        </figcaption>
    </figure>
);

const Reviews = () => {
    return (
        <section id="reviews" className="section overflow-hidden">
            <div className="container">
                <Reveal className="section-head">
                    <span className="eyebrow">Patient Stories</span>
                    <h2>Rated 4.9 out of 5 by our patients</h2>
                    <p>
                        Real, verified feedback from people who came in with pain and left with
                        their movement back.
                    </p>
                </Reveal>
            </div>

            <div className="marquee-container">
                <div className="marquee-content">
                    {reviewsData.map((review) => (
                        <ReviewCard key={review.name} review={review} />
                    ))}
                    {/* Visual duplicate for the seamless loop — hidden from
                        screen readers so each quote is announced only once. */}
                    <div className="marquee-clone" aria-hidden="true">
                        {reviewsData.map((review) => (
                            <ReviewCard key={`clone-${review.name}`} review={review} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="reviews-actions">
                    <a href={REVIEW_URL_RAMESH_NAGAR} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <FaGoogle aria-hidden="true" /> Reviews — Ramesh Nagar
                    </a>
                    <a href={REVIEW_URL_NARAINA} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <FaGoogle aria-hidden="true" /> Reviews — Naraina
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
