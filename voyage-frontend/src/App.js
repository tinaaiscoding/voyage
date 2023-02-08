import { useState } from 'react';

import Home from './components/Home';
import AddDestination from './components/AddDestination/AddDestination';
import Itinerary from './components/Itinerary/Itinerary';
import Map from './components/Map/Map';

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
  const [markerInfo, setMarkerInfo] = useState({
    markerOffset: -8,
    name: '',
    coordinates: [0, 0]
  });

  const getDestionationList = (destinationList) => {
    setDestinationList([...destinationList, destinationList]);
  };

  return (
    <div className="App">
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/add-destination">Add Destination</Link>
        <Link to="/itinerary">Itinerary</Link>
        <Link to="/map">Map</Link>
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
              markerInfo={markerInfo} 
              setMarkerInfo={setMarkerInfo} 
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
        <Route
          path="/map"
          element={
            <Map 
              markerInfo={markerInfo} 
              setMarkerInfo={setMarkerInfo} 
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
