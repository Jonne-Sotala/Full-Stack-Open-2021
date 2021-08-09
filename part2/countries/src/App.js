import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Info from './components/Info'

const App = () => {

  const [countries, setCountries] = useState([])
  const [showCountries, setShowCountries] = useState([])
  const [info, setInfo] = useState(null)

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries(response.data)
        setShowCountries(response.data)
      })
  }, [])

  useEffect(() => {
    if (showCountries.length === 1) {
      setInfo(showCountries[0])
    }
  }, [showCountries])

  const handleFilterChange = (event) => {
    setShowCountries(countries.filter((country) => (
      country.name.toLowerCase().includes(event.target.value.toLowerCase())
    )))
    setInfo(null)
  }

  return (
    <>
      find countries <input onChange={handleFilterChange} />
      <Countries countries={showCountries} setInfo={setInfo} />
      <Info country={info} />
    </>
  )
}


export default App;
