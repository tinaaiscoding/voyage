import { useState } from 'react';

import SeasonFilter from './SeasonFilter.js';
import { today, next365Days } from '../../../date.js';

import './AddDestinationForm.scss';

const AddDestinationForm = (event) => {
  const [userInput, setUserInput] = useState({
    enteredCountry: '',
    enteredCity: '',
    enteredDateFrom: '',
    enteredDateTo: '',
    selectedSeason: [],
  });

  const countryChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredCountry: event.target.value,
      };
    });
  };

  const cityChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredCity: event.target.value,
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
        <select name="countries" form="Add-Destination-Form">
          <option>COUNTRY</option>
          <option value="australia">Australia</option>
          <option value="united-kingdom">United Kingdom</option>
          <option value="united-states-america">
            United States of America
          </option>
          <option value="brazil">Brazil</option>
        </select>

        <select name="cities" form="Add-Destination-Form">
          <option>CITY</option>
          <option value="melbourne">Melbourne</option>
          <option value="london">London</option>
          <option value="seattle">Seattle</option>
          <option value="rio-de-janeiro">Rio De Janeiro</option>
        </select>

        <p>DATES (optional):</p>
        <label>FROM</label>
        <input type="date" min={today} onChange={dateFromChangeHandler} />
        <label>TO</label>
        <input type="date" max={next365Days} onChange={dateFromChangeHandler} />

        <SeasonFilter onFilterToggle={seasonChangeHandler} />

        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddDestinationForm;
