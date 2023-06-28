import React from 'react'


export const Icons = ({iconCode}) => {
    console.log(iconCode);
  return (

    <img src={`https://openweathermap.org/img/wn/${iconCode}.png`} alt="Image" />

  )
}
