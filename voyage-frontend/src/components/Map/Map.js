import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from 'react-simple-maps';
import markers from './markerData';

import './Map.scss';

const Map = () => (
  <div className="Map">
    <ComposableMap>
      <ZoomableGroup center={[0, 0]} zoom={1}>
        <Geographies geography="./features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>

        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle className="marker-circle" r={3} />
            <text textAnchor="middle" y={markerOffset} className="marker-text">
              {name}
            </text>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  </div>
);

export default Map;
