import './AddDestinationForm.scss';

const AddDestinationForm = () => {
  return (
    <div className="Add-Destination-Form">
      <form className="Add-Destination-Form">
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
        <input type="date" />
        <label>TO</label>
        <input type="date" />
<br />
<br />
        <label>SUMMER</label>
        <label className="toggle-switch">
          <input type="checkbox" />
          <span className="summer slider round"></span>
        </label>
<br />
        <label>WINTER</label>
        <label className="toggle-switch">
          <input type="checkbox" />
          <span className="winter slider round"></span>
        </label>
<br />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default AddDestinationForm;
