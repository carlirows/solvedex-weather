// import { render, screen, fireEvent } from '@testing-library/react'
// import { WeatherApp } from '../src/WeatherApp'
// import '@testing-library/jest-dom'

// describe('integration test in <WeatherApp/>', () => { 
//     test('should render search results in <WeatherCard /> component'), () => {
//         render(<WeatherApp />)
//         const input = screen.getByRole('textbox')
//         fireEvent.change(input, { target: { value: 'London' } })
//         fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
//         expect(screen.getByTestId('weather-card')).toBeInTheDocument()
//     }
//  })