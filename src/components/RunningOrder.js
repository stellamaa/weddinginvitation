import React from 'react';
import './RunningOrder.css';

const RunningOrder = () => {
  return (
    <section className="running-order-section">
      <div className="running-order-content">
        <div className="running-order-list">
          <div className="running-order-item running-order-title-item">
            <span className="time"></span>
            <span className="running-order-title">Running order of the day</span>
          </div>
          <div className="running-order-item">
            <span className="time">3PM</span>
            <span className="event">CEREMONY</span>
          </div>
          <div className="running-order-item">
            <span className="time">3:30PM</span>
            <span className="event">DRINKS RECEPTION</span>
          </div>
          <div className="running-order-item">
            <span className="time">6PM</span>
            <span className="event">DINNER & SPEECHES</span>
          </div>
          <div className="running-order-item">
            <span className="time">9PM</span>
            <span className="event">DANCING</span>
          </div>
          <div className="running-order-item">
            <span className="time">3AM</span>
            <span className="event">CARRIAGES</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningOrder;