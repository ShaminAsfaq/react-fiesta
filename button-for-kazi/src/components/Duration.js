import React from 'react';
import { connect } from 'react-redux';

class Duration extends React.Component {

	renderDuration() {
		var signedIn = this.props.signedInLogged;
		// var signedOut = this.props.signedOutLogged;
		var func
		var hour = '00'
		var minute = '00'
		var second = '00'


		var myFunc = () => {

			var currentTime = new Date().getTime();
			var difference = currentTime - signedIn;

			hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
			second = Math.floor((difference % (1000 * 60)) / 1000);

			if(String(hour).length===1) {
				hour = '0' + hour
			}
			if(String(minute).length===1) {
				minute = '0' + minute
			}
			if(String(second).length===1) {
				second = '0' + second
			}

			console.log(hour+':'+minute+':'+second)
			if(this.props.signedIn===false) {
				console.log('STOP !!')
				clearInterval(func)
			}
		}

		if(this.props.signedIn===true) {
			func = setInterval(myFunc, 1000);
		}

		return (
			<div className="ui statistics">
				<div className="value">
					{ hour + ':' + minute + ':' + second }
				</div>
			</div>
		);
	}

	render() {
		// console.log(this.props)
		return (
			this.renderDuration()
		);
	}
}

const mapStateToProps = (state) => {
	// console.log(state);
	return state.timeLoggedReducer;
}

export default connect(mapStateToProps)(Duration);