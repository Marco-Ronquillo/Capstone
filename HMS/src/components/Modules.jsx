import '../design/Modules.css';
import lablogo from '../assets/laboratorylogobg.png';
import theralogo from '../assets/therapeuticlogobg.png';
import pharlogo from '../assets/pharmacylogobg.png';
import React, { useState } from 'react';

function Modules() {
    const [expandedCard, setExpandedCard] = useState(null);
  
    const handleCardClick = (card) => {
      setExpandedCard(expandedCard === card ? null : card); // Toggle the card expansion
    };
  
    return (
      <>
        <div className="mod">
          {/* Card 1 */}
          <div
            className={`card ${expandedCard === 'lab' ? 'expanded' : ''}`}
            onClick={() => handleCardClick('lab')}
          >
            <img className="card-image" src={lablogo} alt="photocard"></img>
            <h2 className="cardtext">Laboratory & Diagnostic Services</h2>
            {expandedCard === 'lab' && (
              <div className="details">
                <p>Details about Laboratory & Diagnostic Services.</p>
              </div>
            )}
          </div>
  
          {/* Card 2 */}
          <div
            className={`card ${expandedCard === 'thera' ? 'expanded' : ''}`}
            onClick={() => handleCardClick('thera')}
          >
            <img className="card-image" src={theralogo} alt="photocard"></img>
            <h2 className="cardtext">Therapeutic Services</h2>
            {expandedCard === 'thera' && (
              <div className="details">
                <p>Details about Therapeutic Services.</p>
              </div>
            )}
          </div>
  
          {/* Card 3 */}
          <div
            className={`card ${expandedCard === 'phar' ? 'expanded' : ''}`}
            onClick={() => handleCardClick('phar')}
          >
            <img className="card-image" src={pharlogo} alt="photocard"></img>
            <h2 className="cardtext">Pharmacy and Medication Services</h2>
            {expandedCard === 'phar' && (
              <div className="details">
                <p>Details about Pharmacy and Medication Services.</p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  
  export default Modules;