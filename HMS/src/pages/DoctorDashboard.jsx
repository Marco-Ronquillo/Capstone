import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modules from '../components/Modules';
import '../design/DoctorDashboard.css';
import logo from '../assets/LOGOOOOO.png';

function DoctorDashboard() {
    const [isOpen, setIsOpen] = useState(false);    
    const [view, setView] = useState('home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
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
                    <div className="imgcontainer">
                        <h1>
                            <img src={logo} alt="Logo" />
                        </h1>
                    </div>
                    <div className="dsidenav-links">
                        <ul>
                            <li><button onClick={() => setView('home')}><b>Home</b></button></li>
                            <li><button onClick={() => setView('profile')}>Profile</button></li>
                            <li><button onClick={() => setView('services')}>Results</button></li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className={`dcontent ${isOpen ? 'shifted' : ''}`}>
                {view === 'home' && <div>Home Content</div>}
                {view === 'profile' && <div>Profile Content</div>}
                {view === 'services' && <div>Results Content</div>}
            </div>
        </div>
    );
}

export default DoctorDashboard;