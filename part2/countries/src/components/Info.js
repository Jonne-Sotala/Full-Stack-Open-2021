import React from 'react'
import Weather from './Weather'

const Info = ({ country }) => {
  const imgStyle = {
    height: '100px'
  }

  if (!country) {
    return null
  }

  return (
    <>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map((lang) => <li key={country.name + "_" + lang.name}>{lang.name}</li>)}
      </ul>
      <img src={country.flag} alt="flag" style={imgStyle} />
      <Weather capital={country.capital} />
    </>
  )
}

export default Info