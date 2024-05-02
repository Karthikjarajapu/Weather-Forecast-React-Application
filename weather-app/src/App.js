import React from 'react';
import Weather from './Weather';
import './App.css';

const App = () => {
  const locations = [
    {
      city: "London",
      days: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      day_temp:['March 30th 2:00 PM','March 31st 3:00 PM','April 1st 4:00 PM','April 2nd 5:00 PM','April 3rd 7:00 PM'],
      temperatures: ['22', '28', '27', '29', '24'],
      conditions: ['Partly Cloudy', 'Cloudy', 'Sunny', 'Rainy', 'Clear Sky'],
      images: ['https://cdn-icons-png.flaticon.com/512/3222/3222794.png', 'https://cdn-icons-png.flaticon.com/512/17/17785.png', 'https://cdn-icons-png.flaticon.com/512/3222/3222800.png', 'https://cdn-icons-png.flaticon.com/512/3222/3222794.png', 'https://cdn-icons-png.flaticon.com/512/3222/3222805.png']
    },
  ];

  
  return (
    <div className='app-container'>
      <div className='overlay'></div>
      {locations.map((location, index) => (
        <Weather
          key={index}
          city={location.city}
          days={location.days}  
          temp_day={location.day_temp}
          temperatures={location.temperatures}
          conditions={location.conditions}
          images={location.images}
        />
      ))}
    </div>
  );
};

export default App;
