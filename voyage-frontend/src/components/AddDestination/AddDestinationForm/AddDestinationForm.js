import Countries from './Countries.js';
import Cities from './Cities.js';
import DateSelector from './DateSelector.js';
import SeasonFilter from './SeasonFilter.js';

import './AddDestinationForm.scss';

const AddDestinationForm = (props) => {
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

  const seasonChangeHandler = (event) => {
    props.setDestinationData((prevState) => {
      if (event.target.checked) {
        return {
          ...prevState,
          season: [...props.destinationData.season, event.target.value],
        };
      } else {
        const selectedSeason = props.destinationData.season.filter((season) => {
          return season !== event.target.value;
        });
        return {
          ...prevState,
          season: selectedSeason,
        };
      }
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.setDestinationList([
      ...props.destinationList,
      props.destinationData,
    ]);

    props.setDestinationData({
      country: '',
      city: '',
      dateFrom: '',
      dateTo: '',
      season: [],
    });
  };

  return (
    <div className="Add-Destination-Form add-destination-card">
      <form className="Add-Destination-Form" onSubmit={submitHandler}>
        <Countries
          onSelectedCountry={countryChangeHandler}
          selectedCountry={props.destinationData.country}
        />
        <Cities onSelectCity={cityChangeHandler} selectedCity={props.destinationData.city} />
        <DateSelector
          onDateFromChange={dateFromChangeHandler}
          onDateToChange={dateToChangeHandler}
          destinationData={props.destinationData}
          setDestinationData={props.setDestinationData}
        />
        <SeasonFilter onFilterToggle={seasonChangeHandler} />

        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddDestinationForm;
