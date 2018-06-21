import GoogleMapReact from "google-map-react";
import React from "react";

const reacCom = ({ text }) => <div>{text}</div>;

export default class MapContainer extends React.Component {
  state = {
    center: { lat: 30, lng: 50 }
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
    this.setState(
      {
        center: { lat: pos.coords.latitude, lng: pos.coords.longitude }
      },
      () => console.log(this.state)
    );
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
