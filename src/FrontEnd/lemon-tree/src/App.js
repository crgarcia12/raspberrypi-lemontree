import React from 'react';
import './App.css';
import NumericGauge from './NumericGauge.js';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <NumericGauge value="Temp: 18º"/>
        <NumericGauge value="Hum: 70%"/>
        <NumericGauge value="Sun: 40"/>
        <img src={process.env.PUBLIC_URL + '/lemontree.png'} className="LemonTree-logo" alt="logo" />
      </header>
    </div>
    
    </>
  );
}

export default App;
