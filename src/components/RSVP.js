import React, { useState } from 'react';
import './RSVP.css';


const RSVP = () => {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!name || !response) return;
  
    // Let the browser POST the form to Netlify
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: new FormData(form),
    }).then(() => {
      setIsSubmitted(true);
    }).catch((error) => alert(error));
  };

  return (
    <section id="rsvp" className="rsvp-section" >
      <div className="rsvp-content">
        <div className="rsvp-form-container">
          <h2 className="rsvp-title">RSVP</h2>
          {!isSubmitted ? (
           <form
           name="rsvp"
           method="POST"
           data-netlify="true"
           netlify-honeypot="bot-field"
           onSubmit={handleSubmit}
           className="rsvp-form"
         >
         
           {/* Required hidden input for Netlify */}
           <input type="hidden" name="form-name" value="rsvp" />
         
           {/* Spam trap (must stay hidden) */}
           <input type="hidden" name="bot-field" />
         
           <div className="form-group">
             <label htmlFor="name" className="form-label-name">NAME</label>
             <input
               type="text"
               id="name"
               name="name"
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
                   className="radio-input"
                   required
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
                   className="radio-input"
                   required
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

