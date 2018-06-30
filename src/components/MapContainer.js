import GoogleMapReact from "google-map-react";
import React from "react";

const reacCom = ({ text }) => <div>{text}</div>;

export default class MapContainer extends React.Component {
  state = {
    center: { lat: 30, lng: 50 }
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success, this.failure);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  success = pos => {
    console.log(pos.coords);
    this.setState(
      {
        center: { lat: pos.coords.latitude, lng: pos.coords.longitude }
      },
      () => console.log(this.state)
    );
  };

  failure = error => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied permission.");
        break;
      case error.TIMEOUT:
        console.log("Request timed out");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Could not access position.");
        break;
      default:
        console.log("Another error");
    }
  };

  // static defaultProps = {
  //    center: {lat: 59.95, lng: 30.33},
  //    zoom: 11
  //  };

  render() {
    // this.getLocation();
    console.log("in render", this.state.center);
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY
          }}
          center={this.state.center}
          defaultZoom={18}
        >
          <reacCom lat={30} lng={50} text={"Zali"} />
        </GoogleMapReact>
      </div>
    );
  }
}
