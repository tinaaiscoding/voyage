import { useState } from 'react';
import { getGeoLocation, getWeather } from '../../fetch/weather';
import Clothes from './Clothes';
import AvgWeather from './AvgWeather';
import ItineraryDesList from './ItineraryDesList';

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

    console.log(props.markerInfo)
    const remainingCitiesMarker = props.markerInfo.filter(
      (city, i) => i !== indexOfCity
    );

    props.setMarkerInfo(remainingCitiesMarker);
  };

  const renderEditModalHandler = (indexOfCity) => {
    setCitySelected((prevState) => {
      return {
        ...prevState,
        index: indexOfCity,
      };
    });
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
        <ItineraryDesList
          destinationData={props.destinationData}
          destinationList={props.destinationList}
          setDestinationList={props.setDestinationList}
          renderEditModalHandler={renderEditModalHandler}
          deleteCityHandler={deleteCityHandler}
          displayEditModal={displayEditModal}
          citySelected={citySelected}
          closeEditModalHandler={closeEditModalHandler}
          fetchWeatherDataHandler={fetchWeatherDataHandler}
        />
      </div>

      <div className="weather-info itinerary-card">
        <AvgWeather
          cityPrevWeatherData={cityPrevWeatherData}
          citySelected={citySelected}
        />
      </div>

      <div className="clothes-to-pack-list itinerary-card">
        <Clothes />
      </div>
    </div>
  );
};

export default Itinerary;
