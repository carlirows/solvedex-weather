import { render, screen, fireEvent } from '@testing-library/react'
import { ChangeUnits } from '../../src/components/ChangeUnits.jsx'
import '@testing-library/jest-dom'

describe('tests in <ChangeUnits/> component', () => { 
    test('should display units on screen', () => { 
        render(<ChangeUnits units='metric' changeUnits={()=>{ }} />)
        const celcius = screen.getByText('Celcius')
        const farenheit = screen.getByText('Farenheit')
        expect(celcius).toBeInTheDocument()
        expect(farenheit).toBeInTheDocument()
     })
     test('should change units', () => { 
        const changeUnits = jest.fn()
        render(<ChangeUnits units='metric' changeUnits={changeUnits} />)
        const celcius = screen.getByText('Celcius')
        const farenheit = screen.getByText('Farenheit')
        expect(celcius).toBeInTheDocument()
        expect(farenheit).toBeInTheDocument()
        fireEvent.click(farenheit)
        expect(changeUnits).toHaveBeenCalled()
      })
})