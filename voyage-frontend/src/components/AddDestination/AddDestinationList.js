import { React, useState, useEffect } from 'react';

const AddDestinationList = (props) => {
  const [destinationData, setDestinationData] = useState([]);


  useEffect(() => {
    setDestinationData((prevState) => {
  
      return [...prevState, props.destinationData]
    });
  }, [props.destinationData]);


  return (
    <div className="Add-Destination-List">
      <h2>Destinations</h2>

      {destinationData.map((destination, index) => 
        Object.keys(destination).length > 0 && <p key={index}>{destination.city}, {destination.country}</p>
      )}
    </div>
  );
};

export default AddDestinationList;
