    import React from "react";
    import '../design/LandingPage.css';
    import Header from '../components/Header.jsx';

    function LandingPage (){
        return (
        <>
            <Header/>
            <header class="lphero">
                <div class="lphero-overlay">
                    <h1>Welcome to Nodado General Hospital</h1>
                    <p>Exquisite Healthcare with Unparalleled Excellence</p>
                    <a href="/service" class="lpbtn">Discover Our Services</a>
                </div>
            </header>
            
            <section class="lpabout">
                <div class="lpcontainer">
                    <h2>About Nodado General Hospital</h2>
                    <div class="lpabout-content">
                        <p>Nodado Health Systems represents the pinnacle of medical excellence, combining cutting-edge technology with personalized concierge care. As the crown jewel of the EU Group of Companies, we redefine healthcare through our uncompromising standards and bespoke service approach.</p>
                        <a href="/home" class="lpbtn">Explore Our Legacy →</a>
                    </div>
                </div>
            </section>
            
            <section id="services" class="lpservices">
                <div class="lpcontainer">
                    <h2>Our Signature Services</h2>
                    <div class="lpservice-grid">
                        <div class="lpservice-card">
                            <div class="lpservice-icon">P</div>
                            <h3>Boutique Pharmacy</h3>
                            <p>Experience our white-glove pharmaceutical service with AI-enhanced precision and VIP medication management, delivered with uncompromising discretion.</p>
                        </div>
                        <div class="lpservice-card">
                            <div class="lpservice-icon">L</div>
                            <h3>Executive Laboratory</h3>
                            <p>Our platinum-certified diagnostic facilities deliver unparalleled accuracy with concierge result interpretation and bespoke health analytics.</p>
                        </div>
                        <div class="lpservice-card">
                            <div class="lpservice-icon">T</div>
                            <h3>Elite Therapeutics</h3>
                            <p>Rejuvenate in our sanctuary of healing with curated treatment regimens crafted by world-renowned specialists in our exclusive therapy suites.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section class="lpadvisory">
                <div class="lpcontainer">
                    <h2>Nodado Health System</h2>
                    <div class="lpadvisory-box">
                        <h3>IMPORTANT NOTICE</h3>
                        <p>Our premium concierge hotline is currently experiencing high demand. For immediate assistance, please contact our dedicated representatives:</p>
                        <div class="lpcontact-numbers">
                            <p><strong>GLOBE:</strong> 0917 816 5053</p>
                            <p><strong>SMART:</strong> 0998 957 6963</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <footer>
                <div class="lpcontainer">
                    <p>&copy; 2025 Nodado General Hospital Management System. All rights reserved.</p>
                    <p>The Pinnacle of Medical Excellence</p>
                </div>
            </footer>
        </>
    )}

    export default LandingPage