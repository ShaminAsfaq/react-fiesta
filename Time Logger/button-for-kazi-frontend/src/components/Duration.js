import React from 'react';
import { connect } from 'react-redux';

class Duration extends React.Component {
<<<<<<< HEAD
=======

>>>>>>> 39d56f66782aa896d273ca2572d6c64a8f1537da
	constructor(props) {
        super(props)
		this.state = {
			hour: '00',
			minute: '00',
			second: '00'
		}
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	componentDidMount() {
		this.setState({
			hour: '00',
			minute: '00',
			second: '00'
		})
		// console.log(this.props)
		this.timerID = setInterval(() => {
			if(this.props.signedIn){

				var signedIn = this.props.signedInLogged;
				var currentTime = new Date().getTime();
				var difference = currentTime - signedIn;

				var hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				var minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
				var second = Math.floor((difference % (1000 * 60)) / 1000) + 1;

				if(String(hour).length===1){
					hour ='0' + hour
				}
				
				if(String(minute).length===1){
					minute = '0' + minute
				}
				
				if(String(second).length===1){
					second = '0' + second
				}

				this.setState({
					hour, minute, second
				})

				// console.log(this.props.signedInLogged)
			}
		}, 1000)
	}

	render() {
		return (
			<div>
				{ this.state.hour + ':' + this.state.minute + ':' + this.state.second }
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return state.timeLoggedReducer;
}

export default connect(mapStateToProps)(Duration);