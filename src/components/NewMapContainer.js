import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';
import Sidedock from "./Sidedock";

export class NewMapContainer extends Component {

	state = {
    	lat:0,
    	lng:0,
			markerPostions:[]
			// placesInfo: ""
  }

	placeData = []

  componentWillMount(){
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.success)
      } else {
          console.log("Geolocation is not supported by this browser.")
      }
  }

	success = (pos) => {
      console.log(pos.coords)
      this.setState({
        lat: pos.coords.latitude, lng: pos.coords.longitude
      });
			this.fetchNearby()
  }

	fetchNearby = () => {
		let urlWithTypestr = `https://maps.googleapis.com/maps/api/place/radarsearch/json?location=${this.state.lat},${this.state.lng}&radius=1000&type=${this.props.searchStr}&keyword=${this.props.typeStr}&key=AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE`
		let urlWithoutTypestr = `https://maps.googleapis.com/maps/api/place/radarsearch/json?location=${this.state.lat},${this.state.lng}&radius=1000&type=${this.props.searchStr}&key=AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE`

		console.log('in map urlWithTypest', urlWithTypestr)
		console.log('in map urlWithoutTypestr', urlWithoutTypestr)

		if (this.props.typeStr === "") {
			console.log("urlWithoutTypestr ran")
			fetch(urlWithoutTypestr)
				.then(resp => resp.json())
				.then(data => this.setState({ markerPostions: data.results }))
		} else {
			console.log("urlWithTypestr ran")
			fetch(urlWithTypestr)
				.then(resp => resp.json())
				.then(data => this.setState({ markerPostions: data.results }))
		}
	}

	fetchPlacesInfo = () => {
		// console.log("fethplaces", url)
		this.state.markerPostions.forEach(x =>
			fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${x.place_id}&key=AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE`)
				.then(resp => resp.json())
				.then(data => this.placeData.push(data))
			// .then(data => this.setState({placesInfo: ...placesInfo + data.result}))
			// .then(data => console.log('fetchplaces', data))
		)
		// this.setState({placesInfo: placeData})
		// console.log("placesData: ", this.placeData)

	}

	renderNearby = () => {
		// const places = this.fetchPlacesInfo()
		return (
			<Map google={ this.props.google } zoom={ 14 }
				center={ { lat: this.state.lat, lng: this.state.lng } }
			>
				{ this.state.markerPostions.map(x =>
					<Marker
						name="Current Location"
						position={ { lat: x.geometry.location.lat, lng: x.geometry.location.lng } }
						title="The marker`s title will appear as a tooltip."

					/>
				) }
			</Map>
		)
	}


  render() {
    console.log('in map container', this.state)
		// this.getLocation()
    return (
			<div>
				{this.renderNearby()}
				{this.fetchPlacesInfo()}
				<div>
					<Sidedock placesData={this.placeData} count={this.state.markerPostions.length} searchstr={this.props.searchStr}/>
				</div>

			</div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE"
})(NewMapContainer)
