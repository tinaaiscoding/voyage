import Home from './components/Home';
import AddDestination from './components/AddDestination/AddDestination';
import Itinerary from './components/Itinerary';

import { Routes, Route, Link } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-destination">Add Destination</Link>
        <Link to="/itinerary">Itinerary</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-destination" element={<AddDestination />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
    </div>
  );
}

export default App;