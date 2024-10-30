import React from 'react';


function time(milliseconds) {
  let hours = Math.floor(milliseconds / 3600000);
  let minutes = Math.floor((milliseconds % 3600000) / 60000);
  let seconds = Math.floor((milliseconds % 60000) / 1000);
  let ms = milliseconds % 1000;

  hours = String(hours).padStart(2,'0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');
  ms = String(ms).padStart(3, '0');

  return `${hours}:${minutes}:${seconds}.${ms}`;
}

function FormattedTime({ milliseconds }) {
  return (
    <div className="timer-display">
      {time(milliseconds)}
    </div>
  );
}

export default FormattedTime;