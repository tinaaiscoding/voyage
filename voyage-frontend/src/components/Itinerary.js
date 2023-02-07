import { useState, useEffect } from 'react';
import { getGeoLocation, getWeather } from '../fetch/weather';

const Itinerary = (props) => {
  const [destinationList, setDestinationList] = useState([]);
  const [citySelected, setCitySelected] = useState({});
  const [cityPrevWeatherData, setCityPrevWeatherData] = useState([]);

  useEffect(() => {
    setDestinationList(props.destinationList);
  }, [props.destinationList]);

  const fetchWeatherDataHandler = (event) => {
    const city = event.target.textContent;
    const dateSpan = event.target.nextSibling;

    let dateFrom = dateSpan.children[0].textContent;
    let dateTo = dateSpan.children[1].textContent;

    dateFrom = dateFrom.split('-');
    dateFrom.splice(0, 1, Number(dateFrom[0]) - 1);
    dateFrom = dateFrom.join('-');

    dateTo = dateTo.split('-');
    dateTo.splice(0, 1, Number(dateTo[0]) - 1);
    dateTo = dateTo.join('-');

    getGeoLocation(city)
      .then((geoLocation) =>
        getWeather(geoLocation.lat, geoLocation.lng, dateFrom, dateTo)
      )
      .then((weatherData) =>
        setCityPrevWeatherData(weatherData.daily.temperature_2m_mean)
      );

    setCitySelected((prevState) => {
      return {
        ...prevState,
        city: city,
      };
    });

    setCitySelected((prevState) => {
      return {
        ...prevState,
        dateFrom: dateFrom,
      };
    });

    setCitySelected((prevState) => {
      return {
        ...prevState,
        dateTo: dateTo,
      };
    });
  };

  return (
    <div className="Itinerary">
      <h1>ITINERARY</h1>
      <div className="destination-list">
        <h2>DESTINATION</h2>
        {destinationList.map(
          (destination, index) =>
            Object.keys(destination).length > 0 && (
              <div key={index} className="destination-list-item">
                <p onClick={fetchWeatherDataHandler}>
                  {destination.city} {destination.country}
                </p>
                <span>
                  <span>{destination.dateFrom}</span>
                  <span>{destination.dateTo}</span>
                </span>
              </div>
            )
        )}
      </div>

      <div className="weather-info">
        {Object.keys(cityPrevWeatherData).length > 0 && (
          <div>
            <h3>{citySelected.city}'s </h3>
            <h2>Average Weather Last Year</h2>
            <p className="last-year-avg-temp">
              {cityPrevWeatherData.reduce((a, b) => a + b, 0) /
                cityPrevWeatherData.length}
            </p>
          </div>
        )}
        <h4>AVERAGE</h4>
        <h4>
          {citySelected.dateFrom} - {citySelected.dateTo}
        </h4>
      </div>

      <div className="clothes-to-pack-list">
        <h2>CLOTHES TO PACK</h2>
      </div>
    </div>
  );
};

export default Itinerary;
