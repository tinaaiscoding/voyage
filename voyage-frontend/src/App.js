import { useState } from 'react';

import Home from './components/Home/Home';
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
    coordinates: [0, 0],
  });
  const [markerList, setMarkerList] = useState([]);

  return (
    <div className="App">
      <nav className="nav-bar">
        <Link to="/">HOME</Link>
        <Link to="/add-destination">ADD DESTINATION</Link>
        <Link to="/itinerary">ITINERARY</Link>
        <Link to="/map">MAP</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-destination"
          element={
            <AddDestination
              destinationData={destinationData}
              setDestinationData={setDestinationData}
              destinationList={destinationList}
              setDestinationList={setDestinationList}
              markerInfo={markerInfo}
              setMarkerInfo={setMarkerInfo}
              markerList={markerList}
              setMarkerList={setMarkerList}
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
              markerInfo={markerInfo}
              setMarkerInfo={setMarkerInfo}
            />
          }
        />
        <Route
          path="/map"
          element={
            <Map markerInfo={markerInfo} setMarkerInfo={setMarkerInfo}  markerList={markerList}
            setMarkerList={setMarkerList} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
