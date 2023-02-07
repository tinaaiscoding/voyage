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
      >
        <option>CITY</option>
        <option value="Melbourne">Melbourne</option>
        <option value="London">London</option>
        <option value="Seattle">Seattle</option>
        <option value="Rio De Janeiro">Rio De Janeiro</option>
      </select>
    </div>
  );
};

export default Cities;
