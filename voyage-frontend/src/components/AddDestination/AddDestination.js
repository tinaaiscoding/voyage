import AddDestinationForm from "./AddDestinationForm"
import AddDestinationList from "./AddDestinationList"

const AddDestination = () => {
  return (
    <div className="Add-Destination">
      <h1>SELECT YOUR DESTINATION</h1>

      <AddDestinationForm />
      <AddDestinationList />
    </div>
  )
}

export default AddDestination