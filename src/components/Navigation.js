import React from 'react';
import './Navigation.css';

const Navigation = () => {
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
    <nav className="navigation">
      <div className="nav-links">
        <button onClick={() => scrollToSection('rsvp')} className="nav-link">RSVP</button>
        <button onClick={() => scrollToSection('travel')} className="nav-link">TRAVEL</button>
        <button onClick={() => scrollToSection('stay')} className="nav-link">STAY</button>
        <button onClick={() => scrollToSection('day2')} className="nav-link">DAY 2</button>
      </div>
    </nav>
  );
};

export default Navigation;

