import React from 'react';
import './Travel.css';

const Travel = () => {
  const taxiNumbers = [
    { name: 'SENAN MULQUEEN', number: '+353 87 671 8884' },
    { name: 'PREMIER CABS', number: '+353 86 810 9247' },
    { name: 'RAY BRADY', number: '+353 87 051 8500' },
    { name: 'CLIFFORD CABS', number: '+353 87 122 4008' },
    { name: 'JOHN MAHER', number: '+353 87 640 5086' }
  ];

  return (
    <section id="travel" className="travel-section">
      <div className="travel-content">
        <h2 className="section-title4">TRAVEL</h2>
        <div className="travel-grid">
          <div className="travel-column">
            <strong className="travel-subtitle">GETTING THERE</strong>
            <div className="travel-text">
                <div className="travel-text1">
               
              <p>THE CLOSEST TOWN IS NENAGH, A 10-MINUTE DRIVE TO ASHLEY PARK HOUSE.
              THE NEAREST AIRPORT IS SHANNON, 50-60 MINUTES DRIVE.
              FROM DUBLIN AIRPORT,THE DRIVE TAKES ABOUT 2 HOURS.
              IF YOU'RE TRAVELLING BY BUS, J.J. KAVANAGH & SONS (ROUTE 735) RUNS FROM DUBLIN AIRPORT TO NENAGH. JOURNEY TIME IS ABOUT 3 HOURS.</p>
            </div>
            </div>
          </div>
          <div className="travel-column">
            <strong className="travel-subtitle">GETTING BACK</strong>
            <div className="travel-text">
              <p>WE WILL RUN A BUS ON THE WEDDING NIGHT TO LOCAL ACCOMMODATION.</p>
            </div>
            <h3 className="travel-subtitle">LOCAL TAXI NUMBERS</h3>
            <div className="taxi-list">
              {taxiNumbers.map((taxi, index) => (
                <div key={index} className="taxi-item">
                  <span className="taxi-name">{taxi.name}</span>
                  <span className="taxi-number">{taxi.number}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;

