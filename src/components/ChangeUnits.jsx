import React from 'react'

export const ChangeUnits = ({units , changeUnits}) => {
  return (
    <p className='units'>
    <span 
      className={`celcius ${units === 'metric' ? 'active-units' : ''}`}
      onClick={changeUnits}
    >          
        Celcius
    </span> / 
    <span 
      className={`celcius ${units === 'imperial' ? 'active-units' : ''}`}
      onClick={changeUnits}
    >
         Farenheit
    </span>
  </p>
  )
}
