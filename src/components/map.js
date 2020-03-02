import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

export default class Map extends Component {
  render() {
    const GoogleMapZA = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultCenter={{ lat: 44.772907, lng: 20.457743 }}
          defaultZoom={17}
        >
          <Marker position={{ lat: 44.772907, lng: 20.457743 }} />
        </GoogleMap>
      ))
    );
    return (
      <GoogleMapZA
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `700px`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
