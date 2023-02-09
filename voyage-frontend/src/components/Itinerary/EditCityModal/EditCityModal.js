import { React, useState } from 'react';
import Modal from '../../UI/Modal';
import Countries from './Countries';
import States from './IStates';
import Cities from './Cities';
import DateSelector from './DateSelector';

import './EditCityModal.scss';

const EditCityModal = (props) => {
  let initialCountryCode = ''
  props.countryList.forEach((countryItem) => {
    if (countryItem.name === props.destinationList[props.index].country) {
      initialCountryCode = countryItem.iso2
    }
  });

  const [editData, setEditData] = useState(props.destinationList[props.index]);
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [stateCode, setStateCode] = useState('');

  const countryChangeHandler = (country) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        country: country,
      };
    });

    props.countryList.forEach((countryItem) => {
      if (countryItem.name === country) {
        setCountryCode(countryItem.iso2);
      }
    });
  };

  const stateChangeHandler = (state) => {
    setEditData((prevState) => {
      return {
        ...prevState,
        state: state,
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
        <States
          onSelectState={stateChangeHandler}
          selectedState={editData.state}
          stateList={props.stateList}
          countryCode={countryCode}
        />
        <Cities
          onSelectCity={cityChangeHandler}
          selectedCity={editData.city}
          cityList={props.cityList}
          setCityList={props.setCityList}
          countryCode={countryCode}
          stateCode={stateCode}
        />
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
