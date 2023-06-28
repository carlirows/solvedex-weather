import { useState, useEffect } from 'react'
import { SearchWeather } from './components/SearchWeather.jsx'
import { ChangeUnits } from './components/ChangeUnits.jsx'
import { WeatherCard } from './components/WeatherCard.jsx'
import { getCurrentDayAndTime } from './helpers/utils.js'
import './WeatherApp.css'

function WeatherApp() {
  
    const api = {
      key: 'd2b2f277b5a00b09764aff98d7522781',
      base: 'https://api.openweathermap.org/data/2.5/'
    }

  const [ inputValue, setInputValue ] = useState('')
  const [ units, setUnits ] = useState('metric')
  const [ weather, setWeather ] = useState({})
  const [ error, setError ] = useState(null)

  useEffect(() => {
    if (inputValue === '') return
    searchWeather(inputValue, units)
  }, [units])


  const onInputChange = ({ target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if ( inputValue.trim().length <= 1) return
    searchWeather(inputValue, units)
    
  }


  const searchWeather = async() => {

      const resp = await fetch(`${api.base}weather?q=${inputValue}&units=${units}&APPID=${api.key}`)
      const data = await resp.json()
      console.log(data);
      const { day, time } = getCurrentDayAndTime();
      if (data.cod === '404') {
        console.log('error', data.message);
        setError(data.message)
        return
      } else {
        const currentWeather = {
          city: data.name,
          temp: data.main.temp,
          feeling: data.main.feels_like,
          maxTemp: data.main.temp_max,
          minTemp: data.main.temp_min,
          wind: data.wind.speed,
          icon: data.weather[0].icon,
          desc: data.weather[0].description,
          day: day,
          time: time
        }
        setWeather(currentWeather);
        setError(null);
      }
  }



  

  const changeUnits = () => {
    setUnits(prevUnits => (prevUnits === 'metric' ? 'imperial' : 'metric'));
  }

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
