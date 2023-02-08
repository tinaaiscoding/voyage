import { useState, useEffect } from 'react';

import fetchCountries from '../../../db/countries';

const Countries = (props) => {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetchCountries().then((res) => {
      setCountryList(res);
    });
  }, []);

  const storeCountryHandler = (event) => {
    const countrySelected = event.target.value;

    props.onSelectedCountry(countrySelected);
  };

  return (
    <div className="Countries">
      <select
        name="countries"
        form="Add-Destination-Form"
        onChange={storeCountryHandler}
        value={props.selectedCountry}
      >
        {countryList.map((country, index) => {
          return (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          );
        })}

        {/* <option>COUNTRY</option>
        <option value="Australia">Australia</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States of America">
          United States of America
        </option>
        <option value="Brazil">Brazil</option> */}
      </select>
    </div>
  );
};

export default Countries;
