import { useState } from 'react';

import Countries from './Countries.js';
import Cities from './Cities.js';
import DateSelector from './DateSelector.js';
import SeasonFilter from './SeasonFilter.js';


import './AddDestinationForm.scss';

const AddDestinationForm = (event) => {
  const [userInput, setUserInput] = useState({
    enteredCountry: '',
    enteredCity: '',
    enteredDateFrom: '',
    enteredDateTo: '',
    selectedSeason: [],
  });

  const countryChangeHandler = (country) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredCountry: country,
      };
    });
  };

  const cityChangeHandler = (city) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredCity: city,
      };
    });
  };

  const dateFromChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDateFrom: event.target.value,
      };
    });
  };

  const dateToChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDateTo: event.target.value,
      };
    });
  };

  const seasonChangeHandler = (event) => {
    setUserInput((prevState) => {
      if (event.target.checked) {
        return {
          ...prevState,
          selectedSeason: [...userInput.selectedSeason, event.target.value],
        };
      } else {
        const selectedSeason = userInput.selectedSeason.filter(season => {
          return season !== event.target.value
        })
        return {
          ...prevState,
          selectedSeason: selectedSeason
        };
      }
    });
  };

  const submitHandler = () => {
    event.preventDefault();

    const destinationData = {};
  };

  return (
    <div className="Add-Destination-Form">
      <form className="Add-Destination-Form" onSubmit={submitHandler}>
      
      <Countries onSelectedCountry={countryChangeHandler}/>
      <Cities onSelectCity={cityChangeHandler}/>
      <DateSelector onDateFromChange={dateFromChangeHandler} onDateToChange={dateToChangeHandler} dateFrom={userInput.enteredDateFrom} />
      <SeasonFilter onFilterToggle={seasonChangeHandler} />

        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddDestinationForm;
