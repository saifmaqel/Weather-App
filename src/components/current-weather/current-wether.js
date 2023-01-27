import './current-weather.css'

const CurrentWeather = ({ data }) => {
  return (
    <>
      <div className='weather'>
        <div className='top'>
          <div className='info'>
            <p className='city'>{data.city}</p>
            <p className='weather-desc'>{data.weather[0].description}</p>
          </div>
          <img
            src={`icons/${data.weather[0].icon}.png`}
            alt=''
            className='weather-icon'
          />
        </div>
        <div className='bottom'>
          <div className='temp'>{`${Math.round(data.main.temp)}°C`} </div>
          <div className='details'>
            <div className='parameter-row'>
              <span className='parameter-label'>Feels:</span>
              <span className='parameter-value'>{`${Math.round(
                data.main.temp
              )}°C`}</span>
            </div>
            <div className='parameter-row'>
              <span className='parameter-label'>Wind:</span>
              <span className='parameter-value'>{`${data.wind.speed} m/s`}</span>
            </div>
            <div className='parameter-row'>
              <span className='parameter-label'>Humidity:</span>
              <span className='parameter-value'>{`${data.main.humidity}%`}</span>
            </div>
            <div className='parameter-row'>
              <span className='parameter-label'>Pressure:</span>
              <span className='parameter-value'>
                {`${data.main.pressure} hPa`}{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CurrentWeather
