import { useState } from 'react';
import { getGeoLocation, getWeather } from '../../fetch/weather';
import EditCityModal from './EditCityModal';

import './Itinerary.scss';

const Itinerary = (props) => {
  const [citySelected, setCitySelected] = useState({});
  const [cityPrevWeatherData, setCityPrevWeatherData] = useState([]);
  const [displayEditModal, setDisplayEditModal] = useState(false);

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
        city: city.split(', ')[0],
      };
    });

    setCitySelected((prevState) => {
      return {
        ...prevState,
        country: city.split(', ')[1],
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

  const deleteCityHandler = (indexOfCity) => {
    const remainingCities = props.destinationList.filter(
      (city, i) => i !== indexOfCity
    );
    props.setDestinationList(remainingCities);
  };

  const renderEditModalHandler = () => {
    setDisplayEditModal(true);
  };

  const closeEditModalHandler = () => {
    setDisplayEditModal(false);
  };

  return (
    <div className="Itinerary itinerary-grid">
      <div className="itinerary-header">
        <h1>ITINERARY</h1>
      </div>
      <div className="itinerary-destination-list itinerary-card">
        <h2>DESTINATION</h2>
        <span>SORT BY DATE</span>

        {props.destinationList.map(
          (destination, index) =>
            Object.keys(destination).length > 0 && (
              <div key={index} className="destination-list-item">
                <p onClick={fetchWeatherDataHandler}>
                  {destination.city}, {destination.country}
                </p>
                <div>
                  <p>{destination.dateFrom}</p>
                  <p>{destination.dateTo}</p>
                </div>

                <div className="destination-controls">
                  <span
                    className="material-symbols-outlined"
                    onClick={renderEditModalHandler}
                  >
                    edit
                  </span>
                  <span
                    className="material-symbols-outlined"
                    onClick={() => deleteCityHandler(index)}
                  >
                    delete
                  </span>
                </div>
              </div>
            )
        )}
      </div>

      <div className="weather-info itinerary-card">
        {Object.keys(cityPrevWeatherData).length > 0 ? (
          <div>
            <h3>{citySelected.city}, {citySelected.country}</h3>
            <h2>Average Weather Last Year</h2>
            <p className="last-year-avg-temp">
              {cityPrevWeatherData.reduce((a, b) => a + b, 0) /
                cityPrevWeatherData.length}
            </p>
            <h4>AVERAGE</h4>
            <h4>
              {citySelected.dateFrom} - {citySelected.dateTo}
            </h4>
          </div>
        ) : (
          <h2>Average Weather Last Year</h2>
        )}
      </div>

      <div className="clothes-to-pack-list itinerary-card">
        <h2>CLOTHES TO PACK</h2>
      </div>

      {displayEditModal && (
        <EditCityModal
          onModalClose={closeEditModalHandler}
          destinationData={props.destinationData}
          setDestinationData={props.setDestinationData}
          destinationList={props.destinationList}
          setDestinationList={props.setDestinationList}
          citySelected={citySelected}
        />
      )}
    </div>
  );
};

export default Itinerary;
