// client/src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../design/DSidebar.css'; // Optional: for styling

const DSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className={`sidebar ${isOpen ? 'open' : 'closed'}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {isOpen && (
                <>
                    <h2>
                        <img src=""></img>
                    </h2>
                    <p>Profile</p>
                    <div className="">
                    <ul>
                        <li><Link to="/">Profile</Link></li>
                        <li><Link to="/about">Services</Link></li>
                        <li><Link to="/contact">Appointment</Link></li>
                        {/* Add more links as needed */}
                    </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default DSidebar;
