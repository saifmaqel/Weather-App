import { useState } from 'react'
import { WEATHER_API_KEY, WEATHER_API_URL } from './api'
import './App.css'
import CurrentWeather from './components/current-weather/current-wether'
import Forecast from './components/forecast/forecast'
import Search from './components/search/search.js'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forcastWeather, setforcastWeather] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
    const forcastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
    Promise.all([currentWeatherFetch, forcastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forcastResponse = await response[1].json()
        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setforcastWeather({ city: searchData.label, ...forcastResponse })
      })
      .catch((e) => {
        console.log(e)
      })
  }
  console.log(currentWeather)
  console.log(forcastWeather)
  return (
    <div className='App container'>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forcastWeather && <Forecast data={forcastWeather} />}
    </div>
  )
}

export default App
