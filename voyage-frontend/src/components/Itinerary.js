import { useState, useEffect } from 'react';
// import fetchWeather from '../fetch/weather';

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

    async function getGeoLocation() {
      const res = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=a33a12b5491642ba990f1d8907ae6f5e`
      );
      const data = await res.json();
      const geoLocation = data.results[0].geometry;

      return geoLocation;
    }

    async function getWeather(latitude, longitude) {
      const res = await fetch(
        `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${dateFrom}&end_date=${dateTo}&daily=temperature_2m_mean,apparent_temperature_mean&timezone=Australia%2FSydney`
      );
      const data = await res.json();

      return data;
    }

    getGeoLocation()
      .then((geoLocation) => getWeather(geoLocation.lat, geoLocation.lng))
      .then((weatherData) => setCityPrevWeatherData(weatherData.daily.temperature_2m_mean
        ));

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
        <h2>WEATHER LAST YEAR</h2>
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
