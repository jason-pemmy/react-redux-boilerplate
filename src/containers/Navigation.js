import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { togglePreloader } from "../actions/index";
import Preloader from "../components/Preloader";
//import '../css/navigation.min.css';

class Navigation extends Component {
	constructor({props}) {
		super(props);

		this.getDataFromWebservice = this.getDataFromWebservice.bind(this);
	}

	componentDidMount() { this.getDataFromWebservice(1) }

	getDataFromWebservice(id) {
		this.props.togglePreloader(true);
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")		
		.then(response => response.json())
		.then(result => { 
			this.props.togglePreloader(false);
        })
	}

	render() {
		return (
			<div className="main-navigation-container">
				<h1>Sup</h1>
				<Preloader showPreloader={ this.props.handleTogglePreloader } />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { 
		handleTogglePreloader: state.togglePreloader
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ 
		togglePreloader: togglePreloader 
	}, dispatch)
}

export default connect( mapStateToProps, matchDispatchToProps )( Navigation ); 
  