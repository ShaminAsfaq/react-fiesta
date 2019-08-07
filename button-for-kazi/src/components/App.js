import React from 'react';
import Button from './Button';
import Clock from './Clock';
import RecordTime from './RecordedTime';

class App extends React.Component {
    state = {
        buttonText: '',
        icon: '',
        signedIn: '',
        signedOut: '',
    }

    updateState = (state) => {
        this.setState(state)
    }

    timeStyleLeft = {
        paddingLeft: "30px",
        paddingTop: "30px"
    };

    timeStyleRight = {
        paddingTop: "30px"
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Button buttonState={[{state: this.state}, this.updateState]}/>
                </div>
                <div className="ui statistics">
                    <div className="statistic" style={this.timeStyleLeft}>
                        <RecordTime signedIn={this.state.signedIn}/>
                    </div>
                    <div className="statistic">
                        <Clock/>
                    </div>
                    <div className="statistic" style={this.timeStyleRight}>
                        <RecordTime/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

