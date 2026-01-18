import React from 'react';
import './Services.css';
import { FaBone, FaRunning, FaCrutch, FaWalking, FaHandHoldingMedical, FaUserInjured } from 'react-icons/fa';

const services = [
    {
        title: "Orthopedic Physiotherapy",
        desc: "Specialized care for bone, joint, and muscle conditions.",
        icon: <FaBone />
    },
    {
        title: "Sports Injury Rehab",
        desc: "Recovery programs tailored for athletes to return to sport stronger.",
        icon: <FaRunning />
    },
    {
        title: "Post-Surgery Rehab",
        desc: "Comprehensive rehabilitation following surgical procedures.",
        icon: <FaCrutch />
    },
    {
        title: "Back & Neck Pain",
        desc: "Targeted relief for chronic and acute spinal pain.",
        icon: <FaUserInjured />
    },
    {
        title: "Joint & Muscle Pain",
        desc: "Effective manual therapy for pain management.",
        icon: <FaHandHoldingMedical />
    },
    {
        title: "Mobility & Posture",
        desc: "Corrective exercises to improve movement and alignment.",
        icon: <FaWalking />
    },
];

const Services = () => {
    return (
        <section id="services" className="section bg-light">
            <div className="container">
                <div className="text-center mb-8">
                    <h2 className="mb-2">Our Specialized Services</h2>
                    <p className="text-gray" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        We offer a wide range of treatments designed to meet your specific recovery needs.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
