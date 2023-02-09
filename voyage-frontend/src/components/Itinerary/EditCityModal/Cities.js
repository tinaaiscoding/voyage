import React from 'react';

const Cities = (props) => {
  const storeCityHandler = (event) => {
    const citySelected = event.target.value
    
    props.onSelectCity(citySelected)
  }

  return (
    <div className="Cities">
      <select
        name="cities"
        form="Add-Destination-Form"
        onChange={storeCityHandler}
        value={props.selectedCity}
      >
        {props.cityList.map((city, index) => {
          return (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Cities;
