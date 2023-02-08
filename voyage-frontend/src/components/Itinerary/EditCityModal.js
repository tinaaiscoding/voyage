import React from 'react';
import Modal from '../UI/Modal';
import Countries from '../AddDestination/AddDestinationForm/Countries';
import Cities from '../AddDestination/AddDestinationForm/Cities';
import DateSelector from '../AddDestination/AddDestinationForm/DateSelector';

import './EditCityModal.scss'

const EditCityModal = (props) => {
  const countryChangeHandler = (country) => {
    props.setDestinationData((prevState) => {
      return {
        ...prevState,
        country: country,
      };
    });
  };

  const cityChangeHandler = (city) => {
    props.setDestinationData((prevState) => {
      return {
        ...prevState,
        city: city,
      };
    });
  };

  const dateFromChangeHandler = (event) => {
    props.setDestinationData((prevState) => {
      return {
        ...prevState,
        dateFrom: event.target.value,
      };
    });
  };

  const dateToChangeHandler = (event) => {
    props.setDestinationData((prevState) => {
      return {
        ...prevState,
        dateTo: event.target.value,
      };
    });
  };

  return (
    <Modal id="Edit-City-Modal">
         <span
          className="material-symbols-outlined"
          onClick={props.onModalClose}
        >
          close
        </span>
      <h2>Edit City</h2>
      <Countries
        onSelectedCountry={countryChangeHandler}
        selectedCountry={props.country}
      />
      <Cities onSelectCity={cityChangeHandler} selectedCity={props.city} />
      <DateSelector
        onDateFromChange={dateFromChangeHandler}
        onDateToChange={dateToChangeHandler}
        destinationData={props.destinationData}
        setDestinationData={props.setDestinationData}
      />

      <button type="submit">EDIT</button>
    </Modal>
  );
};

export default EditCityModal;
