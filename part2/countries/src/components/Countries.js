import React from 'react'

const Countries = ({ countries, setInfo }) => {

  const getCountries = () => {
    if (countries.length === 1) {
      return null
    } else if (countries.length <= 10) {
      return countries.map((country) => (
        <div key={country.name}>
          {country.name}
          <button onClick={() => setInfo(country)}>show</button>
        </div>
      ))
    } else {
      return <p>Too many matches, specify another filter</p>
    }
  }

  return (
    <div>
      {getCountries()}
    </div>
  )
}

export default Countries