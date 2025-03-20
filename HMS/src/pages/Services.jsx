import '../design/Services.css';
import lablogo from '../assets/laboratorylogobg.png';
import theralogo from '../assets/therapeuticlogobg.png';
import pharlogo from '../assets/pharmacylogobg.png';
import bloodlogo from '../assets/bloodtest.png';
import geneticslogo from '../assets/genetics.png';
import imaginglogo from '../assets/imaging.png';
import urinalysislogo from '../assets/urinalysis.png';
import otclogo from '../assets/otc.png'
import prescriptionlogo from '../assets/prescription.png'
import consultationlogo from '../assets/consultation.png'
import physicallogo from '../assets/physical.png'
import occupationallogo from '../assets/occupational.png'
import speechlogo from '../assets/speech.png'
import psychotherapylogo from '../assets/psychotherapy.png'
import React, { useState } from 'react';
import Header from '../components/Header.jsx';

function Services() {
    const [activeCategory, setActiveCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);

    const handleBack = () => {
        if (subCategory) {
            setSubCategory(null); // Go back to Pharmacy Subcategories
        } else {
            setActiveCategory(null); // Go back to Main Categories
        }
    };

    const renderCards = () => {
        if (activeCategory === "laboratory") {
            return (
                <>
                    <div className="card">
                        <h3>Blood Tests</h3>
                        <img className="bloodtestlogo" src={bloodlogo} alt="photocard" />
                        <p>Comprehensive blood work analysis.</p>
                        <div className="order-button">
                            <button className="add-to-cart-button">
                                Add to cart
                            </button>
                            <button className="book-button">
                                Book now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Imaging Services</h3>
                        <img className="imaginglogo" src={imaginglogo} alt="photocard" />
                        <p>X-rays, MRIs, and CT scans.</p>
                        <div className="order-button">
                            <button className="add-to-cart-button">
                                Add to cart
                            </button>
                            <button className="book-button">
                                Book now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Genetic Testing</h3>
                        <img className="geneticslogo" src={geneticslogo} alt="photocard" />
                        <p>Accurate lab-based diagnostics.</p>
                        <div className="order-button">
                            <button className="add-to-cart-button">
                                Add to cart
                            </button>
                            <button className="book-button">
                                Book now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Urinalysis</h3>
                        <img className="urinalysislogo" src={urinalysislogo} alt="photocard" />
                        <p>Provides counseling and emotional support.</p>
                        <div className="order-button">
                            <button className="add-to-cart-button">
                                Add to cart
                            </button>
                            <button className="book-button">
                                Book now
                            </button>
                        </div>
                    </div>
                </>
            );
        } 

        else if (activeCategory === "therapeutic") {
            return (
                <>
                    <div className="card">
                        <h3>Physical Therapy</h3>
                        <img className="physicallogo" src={physicallogo} alt="photocard" />
                        <p>Rehabilitation and movement recovery.</p>
                        <div className="order-button">
                            <button className="add-to-cart-button">
                                Add to cart
                            </button>
                            <button className="book-button">
                                Book now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Occupational Therapy</h3>
                        <img className="occupationallogo" src={occupationallogo} alt="photocard" />
                        <p>Improve daily life skills.</p>
                        <div className="order-button">
                            <button className="add-to-cart-button">
                                Add to cart
                            </button>
                            <button className="book-button">
                                Book now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Speech Therapy</h3>
                        <img className="speechlogo" src={speechlogo} alt="photocard" />
                        <p>Helping patients regain communication.</p>
                        <div className="order-button">
                            <button className="add-to-cart-button">
                                Add to cart
                            </button>
                            <button className="book-button">
                                Book now
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Psychotherapy</h3>
                        <img className="psychotherapylogo" src={psychotherapylogo} alt="photocard" />
                        <p>Provides counseling and emotional support.</p>
                        <div className="order-button">
                            <button className="add-to-cart-button">
                                Add to cart
                            </button>
                            <button className="book-button">
                                Book now
                            </button>
                        </div>
                    </div>
                </>
            );
        } 

        else if (activeCategory === "pharmacy") {
            if (subCategory === "prescription") {
                return (
                    <>
                        <div className="card">
                            <h3>Amoxicillin</h3>
                            <p>Antibiotic used to treat bacterial infections.</p>
                            <div className="order-button">
                                <button className="add-to-cart-button">
                                    Add to cart
                                </button>
                                <button className="book-button">
                                    Buy now
                                </button>
                            </div>
                        </div>

                        <div className="card">
                            <h3>Metformin</h3>
                            <p>Used to control high blood sugar in diabetes.</p>
                            <div className="order-button">
                                <button className="add-to-cart-button">
                                    Add to cart
                                </button>
                                <button className="book-button">
                                    Buy now
                                </button>
                            </div>
                        </div>

                        <div className="card">
                            <h3>Lisinopril</h3>
                            <p>Treats high blood pressure and heart conditions.</p>
                            <div className="order-button">
                                <button className="add-to-cart-button">
                                    Add to cart
                                </button>
                                <button className="book-button">
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </>
                );
            }

        else if (subCategory === "otc") {
            return (
                <>
                    <div className="card">
                        <h3>Paracetamol</h3>
                        <p>Relieves pain and reduces fever.</p>
                        <div className="order-button">
                                <button className="add-to-cart-button">
                                    Add to cart
                                </button>
                                <button className="book-button">
                                    Buy now
                                </button>
                            </div>
                    </div>

                    <div className="card">
                        <h3>Ibuprofen</h3>
                        <p>Used for pain relief and inflammation.</p>
                        <div className="order-button">
                                <button className="add-to-cart-button">
                                    Add to cart
                                </button>
                                <button className="book-button">
                                    Buy now
                                </button>
                            </div>
                    </div>

                    <div className="card">
                        <h3>Antacids</h3>
                        <p>Neutralizes stomach acid to relieve heartburn.</p>
                        <div className="order-button">
                                <button className="add-to-cart-button">
                                    Add to cart
                                </button>
                                <button className="book-button">
                                    Buy now
                                </button>
                            </div>
                    </div>
                </>
            );
        } 

        else {
             return (
                <>
                    <div className="card" onClick={() => setSubCategory("prescription")}>
                        <h3>Prescription Medications</h3>
                        <img className="prescriptionlogo" src={prescriptionlogo} alt="photocard" />
                        <p>We provide high-quality prescribed medicines.</p>
                    </div>
                    <div className="card" onClick={() => setSubCategory("otc")}>
                        <h3>Over-the-Counter Drugs</h3>
                        <img className="otclogo" src={otclogo} alt="photocard" />
                        <p>Find essential non-prescription medicines.</p>
                    </div>
                    <div className="card">
                        <h3>Consultation Services</h3>
                        <img className="consultationlogo" src={consultationlogo} alt="photocard" />
                        <p>Get advice from our professional pharmacists.</p>
                    </div>
                </>
            );
        }
    }
  
        return (
            <>
                <div className="card" onClick={() => setActiveCategory("laboratory")}>
                    <img className="laboratorylogo" src={lablogo} alt="photocard" />
                    <h2 className="cardtext">Laboratory & Diagnostic Services</h2>
                </div>

                <div className="card" onClick={() => setActiveCategory("therapeutic")}>
                    <img className="card-image" src={theralogo} alt="photocard" />
                    <h2 className="cardtext">Therapeutic Services</h2>
                </div>

                <div className="card" onClick={() => { setActiveCategory("pharmacy"); setSubCategory(null); }}>
                    <img className="pharmacylogo" src={pharlogo} alt="photocard" />
                    <h2 className="cardtext">Pharmacy and Medication Services</h2>
                </div>
            </>
        );
    };
  
    return (
        <>
            <Header/>
            {activeCategory && (
                <button className="back-button" onClick={handleBack}>

                    <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    height={24}
                    width={24}
                    fill="#fff"
                    >
                    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                    </svg>
                </button>
            )}

        <div className = "button-container">
            <ul className="track-order">
                <button className="track-order-button">
                    <span className="tooltip">Track Order</span>
                        <svg
                            viewBox="0 0 16 16"
                            className="bi bi-search"
                            height={24}
                            width={24}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                        >
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />

                        </svg>
                </button>
            </ul>

        {/* Cart Button Always Visible */}
            <ul className="cart">
                <button className="Cart-button">
                    <span className="tooltip">Health Cart</span>
                        <svg
                            viewBox="0 0 16 16"
                            className="bi bi-cart-check"
                            height={24}
                            width={24}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                        >
                            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                </button>
            </ul>

        </div>

            <div className="services">{renderCards()}</div>
        </>
    );
  }
  
  export default Services;
