import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modules from '../components/Modules';
import '../design/PatientDashboard.css';
import logo from '../assets/LOGOOOOO.png';

function PatientDashboard() {
    const [isOpen, setIsOpen] = useState(false);    
    const [view, setView] = useState('home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                            <li><button onClick={() => setView('home')}><b>Home</b></button></li>
                            <li><button onClick={() => setView('profile')}><b>Profile</b></button></li>
                            <li><button onClick={() => setView('services')}><b>Services</b></button></li>
                        </ul>
                    </div>
                </div>
            )}
            
            {/* Main Content Area */}
            <div className={`pcontent ${isOpen ? 'open' : ''}`}>
                {view === 'home' && <div>Welcome to the Patient Dashboard</div>}
                {view === 'profile' && <div>Profile Content</div>}
                {view === 'services' && <div></div>}
            </div>
        </>
    );
}

export default PatientDashboard;
