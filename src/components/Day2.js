import React from 'react';
import './Day2.css';
import blueBackground from '../assets/bluecurverotate.png';
import flowerImage from '../assets/flower.png';

const Day2 = () => {
  return (
    <>
      <section id="day2" className="day2-section" style={{ backgroundImage: `url(${blueBackground})` }}>
        <div className="day2-content">
          <strong className="section-title2">DAY 2</strong>
          <div className="day2-details">
            <p className="day2-venue">
              <a href="https://www.google.com/search?sca_esv=007402fd66a8c958&kgmid=/g/1tslj3rp&q=Larkins&shndl=30&shem=damc,dimg2,lcuae,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=59988f993a41489a&utm_source=damc,dimg2,lcuae,uaasie,shrtsdl,sh/x/loc/uni/m1/1" target="_blank" rel="noopener noreferrer" className="larkins-link">LARKINS PUB</a> GARRYKENNEDY, TIPPERARY
            </p>
            <p className="day2-time">3PM-11.30PM, SUNDAY 13TH SEPTEMBER</p>
            <p className="day2-rsvp">PLEASE LET US KNOW IF YOU CAN JOIN.</p>
          </div>
          <div className="children-section">
            <strong className="children-title">CHILDREN</strong>
            <p className="children-text">UNFORTUNATELY WE CANNOT ACCOMMODATE</p>
            <p className="children-text">CHILDREN ON OUR WEDDING DAY.</p>
            <img src={flowerImage} alt="Flower" className="flower-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Day2;

