const SeasonFilter = (props) => {
  return (
    <div className="SeasonFilter">
      <label>SUMMER</label>
      <label className="toggle-switch">
        <input type="checkbox" onChange={props.onFilterToggle} value="summer" />
        <span className="summer slider round"></span>
      </label>

      <label>WINTER</label>
      <label className="toggle-switch">
        <input type="checkbox" onChange={props.onFilterToggle} value="winter" />
        <span className="winter slider round"></span>
      </label>
    </div>
  );
};

export default SeasonFilter;
