import { useState } from 'react';

import Home from './components/Home';
import AddDestination from './components/AddDestination/AddDestination';
import Itinerary from './components/Itinerary';

import { Routes, Route, Link } from 'react-router-dom';

import './App.scss';

function App() {
  const [destinationData, setDestinationData] = useState({
    country: '',
    city: '',
    dateFrom: '',
    dateTo: '',
    season: [],
  });
  const [destinationList, setDestinationList] = useState([]);

  const getDestionationList = (destinationList) => {
    setDestinationList([...destinationList, destinationList]);
  };

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-destination">Add Destination</Link>
        <Link to="/itinerary">Itinerary</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-destination"
          element={
            <AddDestination
              onGetDestionationList={getDestionationList}
              destinationData={destinationData}
              setDestinationData={setDestinationData}
              destinationList={destinationList}
              setDestinationList={setDestinationList}
            />
          }
        />
        <Route
          path="/itinerary"
          element={
            <Itinerary
              destinationData={destinationData}
              setDestinationData={setDestinationData}
              destinationList={destinationList}
              setDestinationList={setDestinationList}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
