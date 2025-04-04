import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../design/PatientDashboard.css';
import logo from '../assets/LOGOOOOO.png';
import lablogo from '../assets/laboratorylogobg.png';
import theralogo from '../assets/therapeuticlogobg.png';
import pharlogo from '../assets/pharmacylogobg.png';

function PatientDashboard() {
    const [isOpen, setIsOpen] = useState(false);    
    const [view, setView] = useState('home');
    const [patientData, setPatientData] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const patientId = localStorage.getItem('patientId'); // Get logged-in patient ID
        if (patientId) {
            axios
                .get(`http://localhost:3001/patient/${patientId}`)
                .then(response => {
                    setPatientData(response.data);
                })
                .catch(error => {
                    console.error("Error fetching patient data:", error);
                });
        }
    }, []);

    const [expandedCard, setExpandedCard] = useState(null);
  
    const handleCardClick = (pcard) => {
      setExpandedCard(expandedCard === pcard ? null : pcard); // Toggle the card expansion
    };

    return (
        <>
            <header className={`pheader ${isOpen ? 'open' : ''}`}>            
                <nav className="pnavbar">
                    <div className="pburger" onClick={toggleMenu}>
                        ☰
                    </div>
                    <div className="plogout">
                        <ul className="plogout-list">
                            <li className="plogout-item"><Link to="/home">Logout</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Sidebar */}
            {isOpen && (
                <div className={`psidebar ${isOpen ? 'open' : 'closed'}`}>
                    <div className="imgcontainer">
                        <h1>
                            <img src={logo} alt="Logo" />
                        </h1>
                    </div>
                    <div className="psidenav-links">
                        <ul>
                            <li><button onClick={() => setView('history')}><b>Home</b></button></li>
                            <li><button onClick={() => setView('profile')}><b>Profile</b></button></li>
                            <li><button onClick={() => setView('services')}><b>Services</b></button></li>
                            <li><button onClick={() => setView('home')}><b>Pharmacy</b></button></li>
                            
                        </ul>
                    </div>
                </div>
            )}
            
            {/* Main Content Area */}
            <div className={`pcontent ${isOpen ? 'open' : ''}`}>
                {view === 'home' && 
                        <div className="phartable">
                            <h2>Pharmacy Medicines Overview</h2>    
                            <div className="medicine-table-container">
                                <table className="medicine-table">
                                    <thead>
                                        <tr>
                                            <th>Medicine Name</th>
                                            <th>Type</th>
                                            <th>Stock</th>
                                            <th>Availability</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Mock Data for Medicines */}
                                        {[
                                            { name: "Paracetamol", type: "Tablet", stock: 50, available: "Yes" },
                                            { name: "Ibuprofen", type: "Tablet", stock: 20, available: "Yes" },
                                            { name: "Cough Syrup", type: "Liquid", stock: 15, available: "Yes" },
                                            { name: "Antibiotic Cream", type: "Topical", stock: 0, available: "No" },
                                            { name: "Insulin", type: "Injection", stock: 10, available: "Yes" }
                                        ].map((medicine, index) => (
                                            <tr key={index}>
                                                <td>{medicine.name}</td>
                                                <td>{medicine.type}</td>
                                                <td>{medicine.stock}</td>
                                                <td>{medicine.available}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                }
                {view === 'profile' && patientData && (
                    <div>
                        <>
                        <div className="pprofile-container">
                            <div className="pprofile-card">
                                <img
                                    className="pprofile-avatar"
                                    src="https://via.placeholder.com/150"
                                />
                                <div className="pprofile-details">
                                    <h2>Name: {patientData.username}</h2>
                                    <p><strong>Age:</strong> {patientData.age}</p>
                                    <p><strong>Gender:</strong> {patientData.gender}</p>
                                    <p><strong>Contact:</strong> {patientData.contact}</p>
                                    <p><strong>Email:</strong> {patientData.email}</p>
                                    <p><strong>Address:</strong> {patientData.address}</p>
                                    <p><strong>Guardian:</strong> {patientData.guardian}</p>
                                </div>
                            </div>
                        </div>
                        </>
                    </div>
                )}
                {view === 'services' && 
                    <div>
                        {expandedCard === null ? (
                            <div className="pmod">
                                <div
                                    className="pcard"
                                    onClick={() => setExpandedCard('Laboratory & Diagnostic Services')}
                                >
                                    <img className="pcard-image" src={lablogo} alt="Laboratory Services"></img>
                                    <h2 className="pcardtext">Laboratory & Diagnostic Services</h2>
                                </div>

                                <div
                                    className="pcard"
                                    onClick={() => setExpandedCard('Therapeutic Services')}
                                >
                                    <img className="pcard-image" src={theralogo} alt="Therapeutic Services"></img>
                                    <h2 className="pcardtext">Therapeutic Services</h2>
                                </div>

                                <div
                                    className="pcard"
                                    onClick={() => setExpandedCard('Pharmacy and Medication Services')}
                                >
                                    <img className="pcard-image" src={pharlogo} alt="Pharmacy Services"></img>
                                    <h2 className="pcardtext">Pharmacy and Medication Services</h2>
                                </div>
                            </div>
                        ) : (
                            <div className="form-container">
                                <h2>Fill-Up Form for {expandedCard}</h2>
                                <form className="patient-form">
                                    <label>
                                        <strong>Name:</strong>
                                        <input type="text" placeholder="Enter patient name" />
                                    </label>
                                    <label>
                                        <strong>Age:</strong>
                                        <input type="text" placeholder="Enter patient age" />
                                    </label>
                                    <label>
                                        <strong>Contact:</strong>
                                        <input type="text" placeholder="Enter patient contact number" />
                                    </label>
                                    <label>
                                        <strong>Email:</strong>
                                        <input type="email" placeholder="Enter patient email" />
                                    </label>
                                    <label>
                                        <strong>Select Service:</strong>
                                        <select>
                                            <option value="" disabled selected>
                                                Choose a service
                                            </option>
                                            {expandedCard === 'Laboratory & Diagnostic Services' && (
                                                <>
                                                    <option value="Blood Test">Blood Test</option>
                                                    <option value="Urinalysis">Urinalysis</option>
                                                    <option value="X-Ray">X-Ray</option>
                                                    <option value="MRI Scan">MRI Scan</option>
                                                    <option value="CT Scan">CT Scan</option>
                                                </>
                                            )}
                                            {expandedCard === 'Therapeutic Services' && (
                                                <>
                                                    <option value="Physical Therapy">Physical Therapy</option>
                                                    <option value="Occupational Therapy">Occupational Therapy</option>
                                                    <option value="Speech Therapy">Speech Therapy</option>
                                                    <option value="Mental Health Counseling">Mental Health Counseling</option>
                                                </>
                                            )}
                                            {expandedCard === 'Pharmacy and Medication Services' && (
                                                <>
                                                    <option value="Prescription Refill">Prescription Refill</option>
                                                    <option value="Medication Counseling">Medication Counseling</option>
                                                    <option value="Vaccinations">Vaccinations</option>
                                                    <option value="Chronic Care Medications">Chronic Care Medications</option>
                                                </>
                                            )}
                                        </select>
                                    </label>
                                    <label>
                                        <strong>Service Notes: (Optional)</strong>
                                        <textarea placeholder={`Additional notes `} />
                                    </label>
                                        <div className="form-actions">
                                            <button type="button" onClick={() => setExpandedCard(null)}>
                                                Back
                                            </button>
                                            <button type="submit">Submit</button>
                                        </div>
                                </form>
                            </div>
                        )}
                    </div>
                }
                {view === 'history' && (
                    <div className="phistory">
                        <h2> Services Record History </h2>
                        <div className="dpatient-table-container">
                            <table className="dpatient-table">
                                <thead>
                                    <tr>
                                        <th>Services</th>
                                        <th>Date Submitted</th>
                                        <th>Appointment Date</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {/* Mock Data for Medicines */}
                                    {[
                                        { name: "Laboratory Services", age: "3/18/2024", number: "3/29/2024" },
                                        { name: "Laboratory Services", age: "3/18/2024", number: "3/29/2024" },
                                        { name: "Therapeutic Services", age: "3/19/2024", number: "3/30/2024" },
                                    ].map((medicine, index) => (
                                        <tr key={index}>
                                            <td>{medicine.name}</td>
                                            <td>{medicine.age}</td>
                                            <td>{medicine.number}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
                }
            </div>
        </>
    );
}

export default PatientDashboard;
