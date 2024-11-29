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
                <p>Laboratory and diagnostic services are a critical component of modern healthcare, providing essential tools for the diagnosis, monitoring, and treatment of diseases. These services involve a wide range of tests and procedures that analyze bodily fluids, tissues, and cells to identify abnormalities and assess overall health.</p>
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
                <p>Therapeutic services are a broad range of treatments provided by licensed healthcare professionals to promote healing, rehabilitation, and overall well-being. These services often involve hands-on therapies, counseling, and other interventions to address physical, emotional, and cognitive challenges.</p>
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
                <p>This is the science and practice of discovering, producing, preparing, dispensing, reviewing and monitoring medications, aiming to ensure the safe, effective, and affordable use of medicines. It is a miscellaneous science as it links health sciences with pharmaceutical sciences and natural sciences.</p>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  
  export default Modules;