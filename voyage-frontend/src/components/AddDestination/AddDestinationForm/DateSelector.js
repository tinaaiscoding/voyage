import { today, next365Days } from '../../../date.js';

const DateSelector = (props) => {
  return (
    <div className="Date-Selector">
      <p>DATES (optional):</p>
      <label>FROM</label>
      <input type="date" min={today} onChange={props.onDateFromChange} />
      <label>TO</label>
      <input type="date" min={props.dateFrom} max={next365Days} onChange={props.onDateToChange} />
    </div>
  );
};

export default DateSelector