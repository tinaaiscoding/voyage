import { useState, useEffect } from 'react';

import fetchStates from '../../../db/fetchStates';

const States = (props) => {
  const [editStateList, setEditStateList] = useState(props.stateList);
console.log(editStateList)
  console.log(props.countryCode);
  useEffect(() => {
    fetchStates(props.countryCode).then((res) => {
      console.log(res);
      setEditStateList(res);
    });
  }, [props.countryCode]);

  const storeStateHandler = (event) => {
    const stateSelected = event.target.value;

    props.onSelectState(stateSelected);
  };

  console.log(editStateList);

  return (
    <div className="States">
      <select
        name="states"
        form="Add-Destination-Form"
        onChange={storeStateHandler}
        value={props.selectedState}
      >
        {(editStateList.length > 0) &&
          editStateList.map((state, index) => {
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
