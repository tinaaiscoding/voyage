import { React, useState } from 'react';
import Modal from '../UI/Modal';
import Countries from './Countries';
import Cities from './Cities';
import DateSelector from './DateSelector';

import './EditCityModal.scss';

const EditCityModal = (props) => {
  const [editList, setEditList] = useState(props.destinationList);

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
      <span className="material-symbols-outlined" onClick={props.onModalClose}>
        close
      </span>
      <form className="Edit-Destination-Form">
        <h2>Edit City</h2>
        <Countries
          onSelectedCountry={countryChangeHandler}
          selectedCountry={props.destinationList[props.index].country}
        />
        <Cities
          onSelectCity={cityChangeHandler}
          selectedCity={props.destinationList[props.index].city}
        />
        <DateSelector
          onDateFromChange={dateFromChangeHandler}
          onDateToChange={dateToChangeHandler}
          destinationData={props.destinationData}
          setDestinationData={props.setDestinationData}
          selectedDateFrom={props.destinationList[props.index].dateFrom}
          selectedDateTo={props.destinationList[props.index].dateTo}
        />

        <button type="submit">EDIT</button>
      </form>
    </Modal>
  );
};

export default EditCityModal;
