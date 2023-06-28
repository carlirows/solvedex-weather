import React from 'react'

export const SearchWeather = ({onSubmit, inputValue, onInputChange}) => {
  return (
    <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder='Search Here'
          value={inputValue}
          onChange={onInputChange}

        />
      </form>
  )
}
