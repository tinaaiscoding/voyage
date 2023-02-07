import { useState } from 'react'

import AddDestinationForm from "./AddDestinationForm/AddDestinationForm"
import AddDestinationList from "./AddDestinationList"

const AddDestination = () => {
  const [destinationData, setDestinationData] = useState({})
  const destinationDataHandler = (enteredDestinationData) => {
    setDestinationData(enteredDestinationData)
  }



  return (
    <div className="Add-Destination">
      <h1>SELECT YOUR DESTINATION</h1>

      <AddDestinationForm onAddDestinationData={destinationDataHandler} />
      <AddDestinationList destinationData={destinationData}/>
    </div>
  )
}

export default AddDestination