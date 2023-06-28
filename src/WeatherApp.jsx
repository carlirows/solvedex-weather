import { SearchWeather } from './components/SearchWeather.jsx';
import { ChangeUnits } from './components/ChangeUnits.jsx';
import { WeatherCard } from './components/WeatherCard.jsx';
import { useWeatherApp } from './hooks/useWeatherApp.js';
import './WeatherApp.css'

function WeatherApp() {
  
  const {
    inputValue,
    units,
    weather,
    error,
    onInputChange,
    onSubmit,
    changeUnits
  } = useWeatherApp();

  return (
    <main className='main'>
      <h1>Solvedex Weather App</h1>


      <SearchWeather onSubmit={onSubmit} inputValue={inputValue} onInputChange={onInputChange}/>
      <ChangeUnits units={units} changeUnits={changeUnits} />
      {
        error ? <h2>{error}</h2> :<WeatherCard weather={weather} units={units} />
      }

    </main>
  )
}

export default WeatherApp
