import React from 'react';
import './App.css';
import Header from './components/Header';
import RunningOrder from './components/RunningOrder';
import RSVP from './components/RSVP';
import Travel from './components/Travel';
import Stay from './components/Stay';
import Day2 from './components/Day2';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
     
      <Header />
      <RunningOrder />
      <RSVP />
      <Travel />
      <Stay />
      <Day2 />
      <Footer />
    </div>
  );
}

export default App;

