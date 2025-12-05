import React from 'react';
import './RunningOrder.css';
import runningOrderSvg from '../assets/runningorder.svg';

const RunningOrder = () => {
  return (
    <section className="running-order-section">
      <div className="running-order-content">
        <img
          src={runningOrderSvg}
          alt="Running order of the day"
          className="running-order-image"
        />
      </div>
    </section>
  );
};

export default RunningOrder;