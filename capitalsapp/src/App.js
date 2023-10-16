import React from 'react'
import { useState } from 'react'
import './App.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]




export default function App() {
  const[activeCapitalId,setCapital]=useState(countryAndCapitalsList[0].id)


   
  const setCapitalFunc=(searchCapital)=>{
    setCapital(searchCapital)

  }
  const getCountry=()=>{
    const activeCountryAndCapital = countryAndCapitalsList.find(eachCapital=>eachCapital.id===activeCapitalId,
      )
    return activeCountryAndCapital.country  
}

  const country = getCountry();

  return (
    <div className='main-container'>
    <div className='capitals-container'>
      <h1 className='heading'>Countries And Capitals</h1>
      <div className='question-container'>
        <select className='capital-select' 
        onChange={(e)=>setCapitalFunc(e.target.value)}
        value={activeCapitalId}>
{ countryAndCapitalsList.map(eachCapital=>(
  <option 
  key={eachCapital.id}
  value={eachCapital.id}
  className='option'>
    {eachCapital.capitalDisplayText}
  </option>
))}
        </select>
        <p className='question'>Is a Captial city of which Country?</p>
      </div>
      <p className='country'>{country}</p>
    </div>  
    </div>
  )
}
