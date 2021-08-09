import React, { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios
      .get(encodeURI(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`))
      .then(response => setWeather(response.data))

    return () => {
      setWeather(null)
    }
  }, [capital])

  if (!weather) {
    return null
  }

  return (
    <>
      <h3>Weather in {capital}</h3>
      <p><strong>temperature: </strong>{weather.current.temperature}</p>
      <img src={weather.current.weather_icons[0]} alt="weather icon" />
      <p><strong>wind: </strong>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
    </>
  )
}

export default Weather