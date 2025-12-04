import React from 'react';
import './Header.css';
import coupleNamesImage from '../assets/Adam & Stephanie.png';



const Header = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Height of navigation bar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
    };
  return (
    <>
     <div className="header-container">
       <nav className="navigation">
      <div className="nav-links">
        <button onClick={() => scrollToSection('rsvp')} className="nav-link">RSVP</button>
        <button onClick={() => scrollToSection('travel')} className="nav-link">TRAVEL</button>
        <button onClick={() => scrollToSection('stay')} className="nav-link">STAY</button>
        <button onClick={() => scrollToSection('day2')} className="nav-link">DAY 2</button>
      </div>
    </nav>
     
        <div className="couple-names-container">
          <img src={coupleNamesImage} alt="Adam & Stephanie" className="couple-names-image" />
        </div>
        <div className="header-section">
          <div className="header-content">
            <div className="event-details">
              <p className="date-time">12 SEPTEMBER 2026 AT 3PM</p>
              <p className="venue">ASHLEY PARK HOUSE, TIPPERARY</p>
            </div>
          </div>
          <div className="wave-divider"></div>
        </div>
      </div>
    </>
  );
};

export default Header;

