import React, { useState } from 'react';
import './RSVP.css';


const RSVP = () => {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    if (!name || !response) {
      return;
    }
    console.log('RSVP submitted:', { name, response });
    setIsSubmitted(true);
  };

  return (
    <section id="rsvp" className="rsvp-section" >
      <div className="rsvp-content">
        <div className="rsvp-form-container">
          <h2 className="rsvp-title">RSVP</h2>
          {!isSubmitted ? (
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
                      onChange={(e) => {
                        if (response === 'accept') {
                          setResponse('');
                        } else {
                          setResponse(e.target.value);
                        }
                      }}
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
                      onChange={(e) => {
                        if (response === 'decline') {
                          setResponse('');
                        } else {
                          setResponse(e.target.value);
                        }
                      }}
                      className="radio-input"
                    />
              
                  </label>
                </div>
              </div>
              <button type="submit" className="submit-button">SUBMIT</button>
            </form>
          ) : (
            <div className="thank-you-message">
              <p className="thank-you-text">Thank you!</p>
            </div>
          )}
        </div>
      </div>
    
    </section>
  );
};

export default RSVP;

