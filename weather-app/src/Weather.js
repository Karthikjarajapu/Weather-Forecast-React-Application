import React from 'react';
import './App.css'; 

const Weather = ({ city, days,temp_day, temperatures, conditions, images }) => {
  return (
    <div className='weather-container'>
      <h1>5-Days Forecast - {city}</h1> {/* Updated heading to include the city */}
      <h2>{city}</h2>
      <div className="cards-container">
        {days.map((day, index) => (
          <div key={index} className="weather-card">
            <img src={images[index]} alt={day} />
            <h4>{temp_day[index]}</h4>
            <h3>{day}</h3>
            <p className="temperature">{temperatures[index]}°F</p>
            <p>Conditions: {conditions[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
