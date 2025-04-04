import React from 'react';
import Header from '../components/Header.jsx';
import '../design/Pharmacy.css';

function Pharmacy(){
    return (
        <>
            <Header/>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&family=Cormorant+Garamond:wght@500;600;700&display=swap" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>


            <div class="pharmacy-container">
            <div class="pharmacy-header">Nodado Pharmacy</div>
            <div class="pharmacy-header-subtext">Luxury Pharmaceutical Care & Wellness Solutions</div>
            
            <div class="pharmacy-section">
                <h2>Our Pharmaceutical Excellence</h2>
                <p>The <span class="highlight">Nodado Pharmacy</span> redefines pharmaceutical care with our white-glove service, offering the most exclusive medications, bespoke compounding services, and personalized wellness solutions in an environment of uncompromising luxury. Our apothecary blends centuries-old traditions with cutting-edge pharmaceutical science to deliver truly exceptional care.</p>
                
                <p>Each of our pharmacists undergoes rigorous training at our <span class="highlight">Nodado Pharmaceutical Institute</span>, ensuring they meet our exacting standards for knowledge, discretion, and patient care. We maintain the industry's most stringent quality control protocols, with each prescription undergoing 12-point verification before reaching your hands.</p>
                
                <div class="pharmacy-services-grid">
                    <div class="pharmacy-service-card">
                        <div class="pharmacy-service-image">
                            <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Bespoke Compounding"></img>
                        </div>
                        <div class="pharmacy-service-content">
                            <div class="pharmacy-service-icon"><i class="fas fa-mortar-pestle"></i></div>
                            <h3>Bespoke Compounding</h3>
                            <p>Custom-formulated medications tailored to your unique physiology and preferences, prepared in our state-of-the-art cleanroom facility.</p>
                        </div>
                    </div>
                    
                    <div class="pharmacy-service-card">
                        <div class="pharmacy-service-image">
                            <img src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Concierge Delivery"></img>
                        </div>
                        <div class="pharmacy-service-content">
                            <div class="pharmacy-service-icon"><i class="fas fa-truck"></i></div>
                            <h3>Concierge Delivery</h3>
                            <p>Discreet, temperature-controlled worldwide delivery with real-time tracking and signature-required security protocols.</p>
                        </div>
                    </div>
                    
                    <div class="pharmacy-service-card">
                        <div class="pharmacy-service-image">
                            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Wellness Consultations"></img>
                        </div>
                        <div class="pharmacy-service-content">
                            <div class="pharmacy-service-icon"><i class="fas fa-user-md"></i></div>
                            <h3>Wellness Consultations</h3>
                            <p>Private consultations with our pharmacogenomics specialists to optimize your medication regimen based on your DNA profile.</p>
                        </div>
                    </div>
                    
                    <div class="pharmacy-service-card">
                        <div class="pharmacy-service-image">
                            <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Luxury Nutraceuticals"></img>
                        </div>
                        <div class="pharmacy-service-content">
                            <div class="pharmacy-service-icon"><i class="fas fa-spa"></i></div>
                            <h3>Luxury Nutraceuticals</h3>
                            <p>Exclusive supplements crafted with rare botanicals and the purest ingredients, available only through Nodado.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="pharmacy-section">
                <h2>Submit Your Prescription</h2>
                <p>Our discreet prescription service ensures your medications are prepared with the utmost care and attention. Simply complete the form below and one of our pharmaceutical care coordinators will contact you within 30 minutes to confirm details and arrange delivery or collection.</p>
                
                <div class="pharmacy-prescription-form">
                    <div class="pharmacy-form-row">
                        <div class="pharmacy-form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" placeholder="Enter your full name"></input>
                        </div>
                        <div class="pharmacy-form-group">
                            <label for="dob">Date of Birth</label>
                            <input type="date" id="dob"></input>
                        </div>
                    </div>
                    
                    <div class="pharmacy-form-row">
                        <div class="pharmacy-form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" placeholder="Enter your email"></input>
                        </div>
                        <div class="pharmacy-form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" placeholder="Enter your phone number"></input>
                        </div>
                    </div>
                    
                    <div class="pharmacy-form-group">
                        <label for="prescription">Upload Prescription</label>
                        <input type="file" id="prescription"></input>
                    </div>
                    
                    <div class="pharmacy-form-group">
                        <label for="notes">Special Instructions</label>
                        <textarea id="notes" rows="4" placeholder="Any allergies, preferences, or special requirements"></textarea>
                    </div>
                    
                    <div class="pharmacy-form-group">
                        <label for="delivery">Delivery Preference</label>
                        <select id="delivery">
                            <option value="">Select delivery option</option>
                            <option value="pickup">In-Person Collection</option>
                            <option value="standard">Standard Delivery (2-3 business days)</option>
                            <option value="express">Express Same-Day Delivery</option>
                            <option value="international">International Courier</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="pharmacy-submit-btn">Submit Prescription</button>
                </div>
            </div>
            
            <div class="pharmacy-section">
                <h2>Curated Wellness Products</h2>
                <p>Discover our exclusive collection of pharmaceutical-grade wellness products, personally curated by our medical team. Each product meets our rigorous <span class="highlight">Nodado Gold Standard</span> for purity, potency, and efficacy.</p>
                
                <div class="pharmacy-products-grid">
                    <div class="pharmacy-product-card">
                        <div class="pharmacy-product-badge">Bestseller</div>
                        <div class="pharmacy-product-image">
                            <img src="https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Golden Immunity Elixir"></img>
                        </div>
                        <div class="pharmacy-product-content">
                            <div class="pharmacy-product-category">Nutraceuticals</div>
                            <h3 class="pharmacy-product-title">Golden Immunity Elixir</h3>
                            <p class="pharmacy-product-description">Our signature antioxidant blend with 24k gold nanoparticles and rare Amazonian botanicals.</p>
                            <div class="pharmacy-product-footer">
                                <div class="pharmacy-product-price">$295</div>
                                <button class="pharmacy-add-to-cart"><i class="fas fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pharmacy-product-card">
                        <div class="pharmacy-product-image">
                            <img src="https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Platinum Recovery Serum"></img>
                        </div>
                        <div class="pharmacy-product-content">
                            <div class="pharmacy-product-category">Topicals</div>
                            <h3 class="pharmacy-product-title">Platinum Recovery Serum</h3>
                            <p class="pharmacy-product-description">Post-procedure cellular renewal complex with platinum peptides and stem cell technology.</p>
                            <div class="pharmacy-product-footer">
                                <div class="pharmacy-product-price">$450</div>
                                <button class="pharmacy-add-to-cart"><i class="fas fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pharmacy-product-card">
                        <div class="pharmacy-product-badge">New</div>
                        <div class="pharmacy-product-image">
                            <img src="https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="NeuroClarity Capsules"></img>
                        </div>
                        <div class="pharmacy-product-content">
                            <div class="pharmacy-product-category">Cognitive</div>
                            <h3 class="pharmacy-product-title">NeuroClarity Capsules</h3>
                            <p class="pharmacy-product-description">Nootropic formulation with rare Tibetan mushroom extract and lion's mane.</p>
                            <div class="pharmacy-product-footer">
                                <div class="pharmacy-product-price">$375</div>
                                <button class="pharmacy-add-to-cart"><i class="fas fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pharmacy-product-card">
                        <div class="pharmacy-product-image">
                            <img src="https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Sleep Sanctuary"></img>
                        </div>
                        <div class="pharmacy-product-content">
                            <div class="pharmacy-product-category">Restorative</div>
                            <h3 class="pharmacy-product-title">Sleep Sanctuary</h3>
                            <p class="pharmacy-product-description">Ultra-luxury sleep aid with diamond-dust infused time-release technology.</p>
                            <div class="pharmacy-product-footer">
                                <div class="pharmacy-product-price">$520</div>
                                <button class="pharmacy-add-to-cart"><i class="fas fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Pharmacy