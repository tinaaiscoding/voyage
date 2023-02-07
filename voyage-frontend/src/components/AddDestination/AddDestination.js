import AddDestinationForm from './AddDestinationForm/AddDestinationForm';
import AddDestinationList from './AddDestinationList';

const AddDestination = (props) => {
  return (
    <div className="Add-Destination">
      <h1>SELECT YOUR DESTINATION</h1>

      <AddDestinationForm
        destinationData={props.destinationData}
        setDestinationData={props.setDestinationData}
        destinationList={props.destinationList}
        setDestinationList={props.setDestinationList}
      />
      <AddDestinationList
        destinationData={props.destinationData}
        setDestinationData={props.setDestinationData}
        destinationList={props.destinationList}
        setDestinationList={props.setDestinationList}
      />
    </div>
  );
};

export default AddDestination;
