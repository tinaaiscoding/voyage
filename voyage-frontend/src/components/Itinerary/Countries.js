import React from 'react';

const Countries = (props) => {
  const storeCountryHandler = (event) => {
    const countrySelected = event.target.value
    
    props.onSelectedCountry(countrySelected)
  }

  return (
    <div className="Countries">
      <select
        name="countries"
        form="Add-Destination-Form"
        onChange={storeCountryHandler}
        value={props.selectedCountry}
      >
        <option>COUNTRY</option>
        <option value="Australia">Australia</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States of America">United States of America</option>
        <option value="Brazil">Brazil</option>
      </select>
    </div>
  );
};

export default Countries;
