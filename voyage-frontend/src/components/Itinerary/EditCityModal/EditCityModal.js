import { React, useState } from 'react';
import Modal from '../../UI/Modal';
import Countries from './Countries';
import Cities from './Cities';
import DateSelector from './DateSelector';

import './EditCityModal.scss';

const EditCityModal = (props) => {
  const [editData, setEditData] = useState(props.destinationList[props.index]);

  const countryChangeHandler = (country) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        country: country,
      };
    });
  };

  const cityChangeHandler = (city) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        city: city,
      };
    });
  };

  const dateFromChangeHandler = (event) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        dateFrom: event.target.value,
      };
    });
  };

  const dateToChangeHandler = (event) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        dateTo: event.target.value,
      };
    });
  };

  const editHandler = (event) => {
    event.preventDefault();

    props.destinationList.splice(props.index, 1, editData);

    props.setDestinationList(props.destinationList);
    props.onModalClose();
  };

  return (
    <Modal id="Edit-City-Modal">
      <span className="material-symbols-outlined" onClick={props.onModalClose}>
        close
      </span>
      <form className="Edit-Destination-Form" onSubmit={editHandler}>
        <h2>Edit City</h2>
        <Countries
          onSelectedCountry={countryChangeHandler}
          selectedCountry={editData.country}
          countryList={props.countryList}
          setCountryList={props.setCountryList}
        />
        <Cities onSelectCity={cityChangeHandler} selectedCity={editData.city} />
        <DateSelector
          onDateFromChange={dateFromChangeHandler}
          onDateToChange={dateToChangeHandler}
          destinationData={props.destinationData}
          setDestinationData={props.setDestinationData}
          selectedDateFrom={editData.dateFrom}
          selectedDateTo={editData.dateTo}
        />

        <button type="submit">EDIT</button>
      </form>
    </Modal>
  );
};

export default EditCityModal;
