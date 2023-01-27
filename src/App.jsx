import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
        <div className='card_container'>
          <div className='card_item'>
            <img src='/images/icon-sedans.svg' alt=''/>
            <span>sedans</span>
            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <button id='btn'>learn more</button>
          </div>
        <div className='card_item'>
          <img src='/images/icon-suvs.svg' alt='' />
          <span>suvs</span>
          <p>Take an suv for its spacious interior, power, and versatility. Perfect for your next family vacatioin and off-road adventures.</p>
          <button>learn more</button>
        </div>
        <div className='card_item'>
          <img src='/images/icon-luxury.svg' alt='' />
          <span>luxury</span>
          <p>Cruise in the best car brands without the bloated prices. Enjoy the enchanced comfort of a luxury rental and arrive in style.</p>
          <button>learn more</button>
        </div>
        </div>
    </div>
  )
}

export default App
