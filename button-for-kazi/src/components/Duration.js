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
		var currentTime
		var difference
		var durationFontColor = 'darkgrey'


		var myFunc = () => {

			if(this.props.signedIn===false) {
				console.log('STOP !!')
				// console.log(hour+':'+minute+':'+second)
				clearInterval(func)
				durationFontColor = 'red'
			}

			currentTime = new Date().getTime();
			difference = currentTime - signedIn;

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
		}

		if(this.props.signedIn===true) {
			console.log('STARTED !!')
			func = setInterval(myFunc, 1000);
		}

		myFunc()

		return (
			<div style={{ color: durationFontColor }}>
				{ (hour || '00') + ':' + (minute || '00') + ':' + (second || '00') }
				<br/>
				<label style={{ color: 'darkgrey', fontSize: '11px' }}>
					Error: Up to 1 second
				</label>
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