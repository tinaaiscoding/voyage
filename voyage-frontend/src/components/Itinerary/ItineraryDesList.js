import React from 'react'
import EditCityModal from './EditCityModal/EditCityModal';

const ItineraryDesList = (props) => {
  return (
    <div className='Itinerary-Des-List'>
        <h2>DESTINATION</h2>
        <span>SORT BY DATE</span>

        {props.destinationList.map(
          (destination, index) =>
            Object.keys(destination).length > 0 && (
              <div key={index} className="destination-list-item">
                <p onClick={props.fetchWeatherDataHandler}>
                  {destination.city}, {destination.country}
                </p>
                <div>
                  <p>{destination.dateFrom}</p>
                  <p>{destination.dateTo}</p>
                </div>

                <div className="destination-controls">
                  <span
                    className="material-symbols-outlined"
                    onClick={() => props.renderEditModalHandler(index)}
                  >
                    edit
                  </span>
                  <span
                    className="material-symbols-outlined"
                    onClick={() => props.deleteCityHandler(index)}
                  >
                    delete
                  </span>
                </div>
              </div>
            )
        )}
        {props.displayEditModal && (
          <EditCityModal
            onModalClose={props.closeEditModalHandler}
            destinationData={props.destinationData}
            setDestinationData={props.setDestinationData}
            destinationList={props.destinationList}
            setDestinationList={props.setDestinationList}
            index={props.citySelected.index}
          />
        )}
    </div>
  )
}

export default ItineraryDesList