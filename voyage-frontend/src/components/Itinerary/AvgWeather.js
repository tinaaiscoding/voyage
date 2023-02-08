import React from 'react'

const AvgWeather = (props) => {
  return (
    <div className='Avg-Weather'>
        {Object.keys(props.cityPrevWeatherData).length > 0 ? (
          <div>
            <h3>
              {props.citySelected.city}, {props.citySelected.country}
            </h3>
            <h2>Average Weather Last Year</h2>
            <p className="last-year-avg-temp">
              {props.cityPrevWeatherData.reduce((a, b) => a + b, 0) /
                props.cityPrevWeatherData.length}
            </p>
            <h4>AVERAGE</h4>
            <h4>
              {props.citySelected.dateFrom} - {props.citySelected.dateTo}
            </h4>
          </div>
        ) : (
          <h2>Average Weather Last Year</h2>
        )}
    </div>
  )
}

export default AvgWeather