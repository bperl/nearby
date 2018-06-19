import React from 'react'
import { NewMapContainer } from "./NewMapContainer";

export default class Searchbar extends React.Component{

	state = {
		searchStr: "",
		typeStr:"",
		// currentLat:0,
		// currentLng:0,
		isSubmitted: false
	}



	// success = (pos) => {
	// 	// console.log(pos.coords)
	//     this.setState({
	//       currentLat: pos.coords.latitude, currentLng: pos.coords.longitude
	//     });
	// }

	handleChange = (event) => {
		console.log(event.target.value)
		this.setState({
			searchStr: event.target.value
		})
	}

	handleSubmit = (event) =>{
		event.preventDefault()
		this.setState({
			isSubmitted:true
		})
		// debugger
		// fetch(`https://maps.googleapis.com/maps/api/place/radarsearch/json?location=${this.state.currentLat},${this.state.currentLng}&radius=50&type=${this.state.searchStr}&key=AIzaSyAF3laRwdxS7LqBHaCP5UbQX-ZKOOTFPwE`)
		// .then(resp => resp.json())
	}

	handleTypeChange = (event) => {
		console.log(event.target.value)
		this.setState({
			typeStr: event.target.value
		})
	}


	renderMap = () => {
		if(this.state.isSubmitted){
			// debugger
			return <NewMapContainer searchStr={this.state.searchStr} typeStr={this.state.typeStr}/>
		}
	}

	 render(){
	 	// this.getLocation()
		  return(
				<div className="search" >
						<form onSubmit={this.handleSubmit} autoComplete='on'>
				        <input type="text" placeholder="search here" onChange={this.handleChange}/>
						<input type="text" placeholder="type" onChange={this.handleTypeChange}/>
				        <input type="submit" value="Submit"/>
				    </form>
					{this.renderMap()}
				</div>

		  )
	 }
}
