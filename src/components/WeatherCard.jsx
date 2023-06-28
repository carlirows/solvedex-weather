import React from 'react'

export const WeatherCard = ({weather, units}) => {
  return (
    <>
    {
        Object.keys(weather).length === 0
        ? <h2>Search for a city to begin</h2> 
        : (
            <div className='weather-card'>
                <img src={`./src/assets/images/${weather.icon}.png`} alt="Image" className="weather-icon"/>
                <h2>{weather.city} <span className='weather-text'>{Math.floor(parseFloat(weather.temp))} {units === 'metric' ? '°C' : '°F'}</span></h2>
                <p>Feels Like: <span className='weather-text'>{Math.floor(parseFloat(weather.feeling))} {units === 'metric' ? '°C' : '°F'}</span> </p>
                <p>Max Temp: <span className='weather-text'>{Math.floor(parseFloat(weather.maxTemp))} {units === 'metric' ? '°C' : '°F'}</span> </p>
                <p>Min Temp: <span className='weather-text'>{Math.floor(parseFloat(weather.minTemp))} {units === 'metric' ? '°C' : '°F'}</span> </p>
                <p>Wind: <span className='weather-text'>{Math.floor(parseFloat(weather.wind))} {units === 'metric' ? 'm/s' : 'mph'}</span> </p>
                <p>{weather.day}: <span className='weather-text'>{weather.time}</span> </p>
                <p>{weather.desc}</p>
            </div>
        ) 
            
    }
    
    </>
  )
}
