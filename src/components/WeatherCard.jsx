import React from 'react'

export const WeatherCard = ({weather, units}) => {
  return (
    <>
    {
        Object.keys(weather).length === 0
        ? <h2>Search for a city to begin</h2> 
        : (
            <div className='weather-card'>
                <div className="weather-info">
                  <h2>{weather.city} <span className='weather-text'>{Math.floor(parseFloat(weather.temp))} {units === 'metric' ? '°C' : '°F'}</span></h2>
                  <p>Feels Like: <span className='weather-text'>{Math.floor(parseFloat(weather.feeling))} {units === 'metric' ? '°C' : '°F'}</span> </p>
                  <p>Wind Speed: <span className='weather-text'>{Math.floor(parseFloat(weather.wind))} {units === 'metric' ? 'm/s' : 'mph'}</span> </p>
                  <p>{weather.day}: <span className='weather-text'>{weather.time}</span> </p>
                  <p>{weather.desc}</p>
                </div>
            </div>
        ) 
            
    }
    
    </>
  )
}
