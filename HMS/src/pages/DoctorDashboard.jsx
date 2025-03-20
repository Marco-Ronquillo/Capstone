import React, { useState, useRef } from 'react';
import '../design/DoctorDashboard.css';
import logo from '../assets/LOGOOOOO.png';
import lablogo from '../assets/laboratorylogobg.png';
import theralogo from '../assets/therapeuticlogobg.png';
import pharlogo from '../assets/pharmacylogobg.png';
import styled from 'styled-components';

function DoctorDashboard() {
    const [isOpen, setIsOpen] = useState(false);    
    const [view, setView] = useState('patients');
    const [expandedCard, setExpandedCard] = useState(null);

    const fileInputRef = useRef(null);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    const handleCardClick = (dcard) => {
      setExpandedCard(expandedCard === dcard ? null : dcard); // Toggle the card expansion
    };
    
    const handleUploadClick = () => {
        // Trigger the hidden file input click
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Process the selected file
            console.log("Selected file:", file.name);
            alert(`You selected: ${file.name}`);
        }
    };

    const StyledWrapper = styled.div`
  .book {
    position: relative;
    border-radius: 10px;
    width: 480px;
    height: 557px;
    margin-left: 100px;
    flex-direction: column;
    background-color: #7cc882;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
  }

  .cover {
    top: 0;
    position: absolute;
    background-color: #8FBC8B;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 1px #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    flex-direction: column;
  }
    .cover .docname {
    font-size: 30px;
    margin-bottom: 100px;
    }
    
    .cover img {
    margin-bottom: 60px;
    }

  .book:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-80deg);
  }
    .doctor-avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-right: 20px;
    border: 2px solid #4CAF50;
    justify-content: center;
}

  p {
    font-size: 15px;
  }
  
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: linear-gradient(45deg, #ffc75d, #ffc708);
    box-shadow: 0 0 24px #ffb20861;
    border: 2px solid #ffe825;
    border-radius: 100px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease,
      text-shadow 0.3s ease;
    padding: 10px 20px;
    color: #09090b;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Text drop shadow */
  }

  .button:hover {
    background-color: #ffc75d !important;
    box-shadow: 0 0 34px #ffb20861 !important;
    text-shadow: 0 0 4px #ffe825; /* Hover text shadow */
    border-color: #ffe825 !important;
  }

  .icon {
    margin-right: 5px;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3)); /* Icon drop shadow */
  
  `;

    return (
        <>
            <div className="dashboard-container">
                {/* Navigation Bar (Header) */}
                <header className={`dheader ${isOpen ? 'open' : ''}`}>            
                    <nav className="dnavbar">
                        <div className="dburger" onClick={toggleMenu}>
                            ☰
                        </div>
                    </nav>
                    <nav className="dlogout">
                        <ul className="dlogout-list">
                            <li className="logout-item"><a href="/home">Logout</a></li>
                        </ul>
                    </nav>
                </header>

                {/* Sidebar */}
                {isOpen && (
                    <div className={`dsidebar ${isOpen ? 'open' : 'closed'}`}>
                        <div className="dimgcontainer">
                            <h1>
                                <img src={logo} alt="Logo" />
                            </h1>
                        </div>
                        <div className="dsidenav-links">
                            <ul>
                                <li><button onClick={() => setView('patients')}><b>Patients</b></button></li>
                                <li><button onClick={() => setView('profile')}>Profile</button></li>
                                <li><button onClick={() => setView('services')}>Results</button></li>
                            </ul>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className={`dcontent ${isOpen ? 'open' : ''}`}>
                    {view === 'patients' && 
                        <div className="dpatienttable">
                        <h2>Patients Information</h2>
                        <div className="dpatient-table-container">
                            <table className="dpatient-table">
                                <thead>
                                    <tr>
                                        <th>Patient Name</th>
                                        <th>Age</th>
                                        <th>Number</th>
                                        <th>Guardian Number</th>
                                        <th>History</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {/* Mock Data for Medicines */}
                                    {[
                                        { name: "Lebron James", age: "39 years old", number: "09612389321", guardian: "1241234", history: "Left Groin Injury" },
                                        { name: "Giannis Antetokounmpo", age: "29 years old", number: "09126789563", guardian: "1421241", history: "Knee Discomfort" },
                                        { name: "Jimmy Alapag", age: "46 years old", number: "09365768909", guardian: "1421241", history: "Hand Injury" },
                                        { name: "LA Tenorio", age: "40 years old", number: "09095732174", guardian: "52355134", history: "Colon Cancer" },
                                        { name: "Manny Pacquiao", age: "45 years old", number: "09246785431", guardian: "141241", history: "Right Shoulder Injury" }
                                    ].map((medicine, index) => (
                                        <tr key={index}>
                                            <td>{medicine.name}</td>
                                            <td>{medicine.age}</td>
                                            <td>{medicine.number}</td>
                                            <td>{medicine.guardian}</td>
                                            <td>{medicine.history}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    }
                    {view === 'profile' && 
                        <div>
                            <>
                                <StyledWrapper>
                                    <div className="book">
                                    <p><strong>Specialization:</strong> Therapist</p>
                                    <p><strong>Corporate Experience</strong> 3 years</p>
                                    <p><strong>Contact:</strong> 09123175148</p>
                                    <p><strong>Email:</strong> gino@gmail.com</p>
                                    <p><strong>Address:</strong> Sauyo, Quezon City</p>
                                            <div className="cover">
                                                <img
                                                className="doctor-avatar"
                                                src="https://via.placeholder.com/150"
                                                alt="Patient Avatar"
                                                />
                                                <p className="docname"><strong>Gino Abarro</strong></p>
                                            </div>  
                                    </div>
                                </StyledWrapper>
                            </>
                        </div>
                    }
                    {view === 'services' && 
                        <div className="dservices">
                            <div className="dmod">
                                {!expandedCard && (
                                    <>
                                        {/* Card 1 */}
                                        <div
                                            className="dcard"
                                            onClick={() => handleCardClick('lab')}
                                        >
                                            <img className="dcard-image" src={lablogo} alt="photocard"></img>
                                            <h2 className="dcardtext">Laboratory & Diagnostic Services</h2>
                                        </div>
                                
                                        {/* Card 2 */}
                                        <div
                                            className="dcard"
                                            onClick={() => handleCardClick('thera')}
                                        >
                                            <img className="dcard-image" src={theralogo} alt="photocard"></img>
                                            <h2 className="dcardtext">Therapeutic Services</h2>
                                        </div>
                                
                                        {/* Card 3 */}
                                        <div
                                            className="dcard"
                                            onClick={() => handleCardClick('phar')}
                                        >
                                            <img className="dcard-image" src={pharlogo} alt="photocard"></img>
                                            <h2 className="dcardtext">Pharmacy and Medication Services</h2>
                                        </div>
                                    </>
                                )}

                                {expandedCard && (
                                    <div className="dexpanded-card">
                                        {/* Add Button */}
                                        <StyledWrapper>
                                            <button className="button" onClick={handleUploadClick}>
                                                <svg id="UploadToCloud" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" className="icon">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path className="color000000 svgShape" fill="#000000" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z" />
                                                </svg>
                                                Upload File
                                            </button>

                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                style={{ display: 'none' }}
                                                onChange={handleFileChange}
                                            />
                                            
                                        </StyledWrapper>
                                        <h2>{expandedCard === 'lab' ? 'Laboratory & Diagnostic Services' :
                                            expandedCard === 'thera' ? 'Therapeutic Services' :
                                                'Pharmacy and Medication Services'} Results</h2>
                                        <button className="dclose-button" onClick={() => setExpandedCard(null)}><strong>X</strong></button>
                                    </div>  
                                )}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default DoctorDashboard;