import React from 'react';
import Header from '../components/Header.jsx';
import '../design/Service.css';

function Service (){
    return (
        <>
            <Header/>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@500;600;700&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>


            <div className="service-container">
                <div className="service-cards">
                    <div className="service-card">
                        <i className="fas fa-flask"></i>
                        <h3>Laboratory & Diagnostic Services</h3>
                        <p>State-of-the-art testing with rapid, confidential results delivered with the highest standards of precision and care.</p>
                    </div>
                    <div className="service-card">
                        <i className="fas fa-heartbeat"></i>
                        <h3>Therapeutic Services</h3>
                        <p>Personalized treatment plans crafted by our specialists to optimize your health and wellness journey.</p>
                    </div>                
                    <div className="service-card">
                        <i className="fas fa-user-md"></i>
                        <h3>Consultation Services</h3>
                        <p>Get advice from our professional pharmacists to ensure optimal medication management and wellness.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;