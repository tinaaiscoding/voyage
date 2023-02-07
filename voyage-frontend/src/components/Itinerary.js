import { useState, useEffect } from 'react';

const Itinerary = (props) => {
  const [destinationList, setDestinationList] = useState([]);

  useEffect(() => {
    setDestinationList(props.destinationList);
  }, [props.destinationList]);

  return (
    <div className="Itinerary">
      <h1>ITINERARY</h1>
      <div className="destination-list">
        <h2>DESTINATION</h2>
        {destinationList.map(
          (destination, index) =>
            Object.keys(destination).length > 0 && (
              <p key={index}>
                {destination.city}, {destination.country}
              </p>
            )
        )}
      </div>

      <div className="weather-info">
        <h2>WEATHER</h2>
        <h4>DAY MONTH YEAR</h4>
        <p>20°C</p>
      </div>

      <div className="clothes-to-pack-list">
        <h2>CLOTHES TO PACK</h2>
      </div>
    </div>
  );
};

export default Itinerary;
