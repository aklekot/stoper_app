import './App.css';
import FormattedTime from './components/FormattedTime/FormattedTime';
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0); 
  const [intervalId, setIntervalId] = useState(null); 

  useEffect(() => {
    return () => clearInterval(intervalId); 
  }, [intervalId]);

  const startTimer = () => {
    if (!intervalId) {
      const newIntervalId = setInterval(() => setTime(time => time + 1), 1);
      setIntervalId(newIntervalId);
    }
   
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className="App">
      <FormattedTime milliseconds={time} />
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default App;
