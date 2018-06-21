import React from "react";
import { MapContainer } from "./MapContainer";

export default class CurrentLoc extends React.Component {
  state = {
    lat: "40",
    lng: "40"
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  success = pos => {
    console.log(pos.coords);
    this.setState({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    });
  };

  render() {
    this.getLocation();
    return (
      <div className="currentloc">
        <MapContainer lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}
