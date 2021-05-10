// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

// == Component
const Map = ({list}) => (
  
  <div className="map">
   <MapContainer center={[45.7833, 3.0833]} zoom={5} scrollWheelZoom={false} id="mapid">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       { list.map(elmt => (
        <Marker key={elmt.id} position={[elmt.latitude, elmt.longitude]}>
        <Popup>
        <div className="popup"> 
          <div className="title">{elmt.title}</div> <br/> {elmt.address} <br /> {elmt.description}
        </div>
        </Popup>
      </Marker>
      ))
      }

    </MapContainer> 
  </div>
);

Map.propTypes = {
  list: PropTypes.array.isRequired
}

export default Map;
