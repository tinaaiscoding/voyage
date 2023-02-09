import { useState, useEffect } from 'react';

import fetchStates from '../../../db/fetchStates';

const States = (props) => {
  useEffect(() => {
    fetchStates(props.countryCode).then((res) => {
      props.setEditStateList(res);
    });
  }, [props.countryCode]);

  const storeStateHandler = (event) => {
    const stateSelected = event.target.value;

    props.onSelectState(stateSelected);
  };

  return (
    <div className="States">
      <select
        name="states"
        form="Add-Destination-Form"
        onChange={storeStateHandler}
        value={props.selectedState}
      >
        {props.editStateList.length > 0 &&
          props.editStateList.map((state, index) => {
            return (
              <option key={index} value={state.name}>
                {state.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default States;
