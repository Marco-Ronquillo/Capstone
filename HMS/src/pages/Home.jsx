import React from "react";
import Header from '../components/Header.jsx';
import nodadopic1 from '../assets/homee.jpg';
import nodadopic2 from '../assets/accred1.jpg';
import nodadopic3 from '../assets/accred2.jpg';
import '../design/Home.css';

function Home(){
    return(
        <> 
            <Header/>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@500;600;700&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>

            <div class="hcontainer">
        <div class="hheader">Our Story of Excellence</div>
        <div class="hheader-subtext">Redefining Luxury Healthcare Since 2010</div>
        
        <div class="habout-section">
            <h2>About NODADO</h2>
            <p>Founded in the heart of Zurich in 2010, <span class="hhighlight">NODADO Luxury Hospital</span> emerged from a visionary concept: to create a healthcare experience that blends world-class medical expertise with the refined elegance of a five-star retreat. What began as a single boutique medical center has flourished into a global network of elite healthcare facilities, each embodying our unwavering commitment to excellence, discretion, and personalized care.</p>
            
            <p>Our name, <span class="hhighlight">NODADO</span>, derives from the Latin "Nodus Aureus" meaning "Golden Knot," symbolizing our philosophy of seamlessly integrating the finest medical expertise, cutting-edge technology, and uncompromising service into a cohesive healthcare experience. This emblem represents our pledge to tie together all aspects of wellness into a perfectly tailored journey for each client.</p>
            
            <div class="hdivider">
                <div class="hdivider-line"></div>
                <div class="hdivider-icon"><i class="fas fa-heart"></i></div>
                <div class="hdivider-line"></div>
            </div>
            
            <div class="hmission-cards">
                <div class="hmission-card">
                    <div class="hdivider-icon"><i class="fas fa-bullseye"></i></div>
                    <h3>Our Mission</h3>
                    <p>To revolutionize healthcare by providing bespoke medical services that prioritize individual needs above all else. We combine the latest medical advancements with the comfort, discretion, and personalized attention of a private luxury retreat, ensuring every aspect of your care is tailored to your unique requirements and preferences.</p>
                </div>
                <div class="hmission-card">
                    <div class="hdivider-icon"><i class="fas fa-eye"></i></div>
                    <h3>Our Vision</h3>
                    <p>To pioneer a new paradigm where healthcare transcends mere treatment of illness, focusing instead on comprehensive wellness optimization through preventive care, advanced diagnostics, and personalized treatment plans—all delivered within an environment of absolute comfort, privacy, and unparalleled service excellence.</p>
                </div>
            </div>
        </div>
        
        <div class="habout-section">
            <h2>Why Choose NODADO</h2>
            <p>At <span class="hhighlight">NODADO</span>, we've meticulously reimagined every facet of the healthcare experience. Our platinum-certified facilities feature private suites with dedicated concierge service, gourmet nutrition plans crafted by Michelin-starred chefs, and spa-like recovery environments designed to promote healing through all five senses.</p>
            
            <p>What truly distinguishes us is our unprecedented <span class="hhighlight">physician-to-patient ratio of 1:4</span>, ensuring each client receives the undivided attention they deserve. Our medical team comprises over 200 world-renowned specialists across 40 disciplines, all carefully selected not just for their medical expertise but for their commitment to compassionate, personalized care.</p>
            
            <p>From our 24/7 on-call specialists to our white-glove medication delivery service, every detail is thoughtfully designed to provide peace of mind and exceptional outcomes. Our proprietary <span class="highlight">Golden Standard Protocol</span> ensures no aspect of your care is left to chance, with multiple layers of review and quality control at every stage.</p>
            
            <div class="hvalues-container">
                <div class="hvalue-item">
                    <div class="hvalue-icon"><i class="fas fa-user-md"></i></div>
                    <h4>Exceptional Expertise</h4>
                    <p>World-renowned specialists in every field, continuously advancing their knowledge through our exclusive NODADO Academy</p>
                </div>
                <div class="hvalue-item">
                    <div class="hvalue-icon"><i class="fas fa-heartbeat"></i></div>
                    <h4>Holistic Approach</h4>
                    <p>Treating the whole person, not just symptoms, with integrated wellness programs</p>
                </div>
                <div class="hvalue-item">
                    <div class="hvalue-icon"><i class="fas fa-shield-alt"></i></div>
                    <h4>Absolute Privacy</h4>
                    <p>Discretion guaranteed with our military-grade security and confidentiality protocols</p>
                </div>
                <div class="hvalue-item">
                    <div class="hvalue-icon"><i class="fas fa-gem"></i></div>
                    <h4>Luxury Environment</h4>
                    <p>Spaces designed by award-winning architects to promote healing and comfort</p>
                </div>
                <div class="hvalue-item">
                    <div class="hvalue-icon"><i class="fas fa-flask"></i></div>
                    <h4>Cutting-Edge Innovation</h4>
                    <p>Early access to breakthrough treatments through our global research network</p>
                </div>
                <div class="hvalue-item">
                    <div class="hvalue-icon"><i class="fas fa-hands-helping"></i></div>
                    <h4>Concierge Care</h4>
                    <p>Dedicated care coordinators managing every detail of your health journey</p>
                </div>
            </div>
        </div>
        
        <div class="hstats-section">
            <h2>By The Numbers</h2>
            <div class="hstats-container">
                <div class="hstat-item">
                    <div class="hstat-number">13</div>
                    <div class="hstat-label">Global Locations</div>
                </div>
                <div class="hstat-item">
                    <div class="hstat-number">98%</div>
                    <div class="hstat-label">Patient Satisfaction</div>
                </div>
                <div class="hstat-item">
                    <div class="hstat-number">200+</div>
                    <div class="hstat-label">Specialists</div>
                </div>
                <div class="hstat-item">
                    <div class="hstat-number">24/7</div>
                    <div class="hstat-label">Care Availability</div>
                </div>
            </div>
        </div>
        
        <div class="habout-section">
            <h2>Our Leadership</h2>
            <p>The <span class="hhighlight">NODADO difference</span> begins with our distinguished executive team, whose combined expertise spans clinical medicine, luxury hospitality, and innovative healthcare solutions. Each leader brings decades of experience and a shared commitment to redefining excellence in healthcare.</p>
            
            <div class="hteam">
                <div class="hteam-member">
                    <div class="hteam-member-image">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Dr. Sophia Laurent"></img>
                    </div>
                    <div class="hteam-member-info">
                        <h3>Dr. Sophia Laurent</h3>
                        <div class="hposition">Founder & Chief Medical Officer</div>
                        <div class="hbio">Harvard-trained surgeon with 25 years in executive medicine, Dr. Laurent pioneered the concept of luxury integrated healthcare during her tenure at leading European medical institutions.</div>
                    </div>
                </div>
                <div class="hteam-member">
                    <div class="hteam-member-image">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="James Vanderbilt"></img>
                    </div>
                    <div class="hteam-member-info">
                        <h3>James Vanderbilt</h3>
                        <div class="hposition">Chief Executive Officer</div>
                        <div class="hbio">Former managing director of a leading luxury hotel group, Vanderbilt brings transformative hospitality expertise to healthcare, redefining patient experience standards worldwide.</div>
                    </div>
                </div>
                <div class="hteam-member">
                    <div class="hteam-member-image">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Dr. Raj Patel"></img>
                    </div>
                    <div class="hteam-member-info">
                        <h3>Dr. Raj Patel</h3>
                        <div class="hposition">Director of Medical Innovation</div>
                        <div class="hbio">Pioneer in personalized medicine and genomic therapies, Dr. Patel leads our research initiatives, ensuring NODADO remains at the forefront of medical advancement.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default Home