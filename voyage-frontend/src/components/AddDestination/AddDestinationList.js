import React from 'react';

const AddDestinationList = (props) => {
  return (
    <div className="Add-Destination-List add-destination-card">
      <h2>Destinations</h2>

      {props.destinationList.map(
        (destination, index) =>
          Object.keys(destination).length > 0 && (
            <p key={index}>
              {destination.city}, {destination.state}, {destination.country}
            </p>
          )
      )}
    </div>
  );
};

export default AddDestinationList;
