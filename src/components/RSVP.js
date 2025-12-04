import React, { useState } from 'react';
import './RSVP.css';


const RSVP = () => {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('RSVP submitted:', { name, response });
    alert('Thank you for your RSVP!');
    setName('');
    setResponse('');
  };

  return (
    <section id="rsvp" className="rsvp-section" >
      <div className="rsvp-content">
        <div className="rsvp-form-container">
          <h2 className="rsvp-title">RSVP</h2>
          <form onSubmit={handleSubmit} className="rsvp-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label-name">NAME</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <div className="radio-group">
                <label className="radio-label">
                <span>JOYFULLY ACCEPT</span>
                  <input
                    type="radio"
                    name="response"
                    value="accept"
                    checked={response === 'accept'}
                    onChange={(e) => setResponse(e.target.value)}
                    required
                    className="radio-input"
                  />
                 
                </label>
                <label className="radio-label">
                <span>REGRETFULLY DECLINE</span>
                  <input
                    type="radio"
                    name="response"
                    value="decline"
                    checked={response === 'decline'}
                    onChange={(e) => setResponse(e.target.value)}
                    required
                    className="radio-input"
                  />
            
                </label>
              </div>
            </div>
            <button type="submit" className="submit-button">SUBMIT</button>
          </form>
        </div>
      </div>
    
    </section>
  );
};

export default RSVP;

