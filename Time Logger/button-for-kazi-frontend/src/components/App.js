import React from 'react';
import Button from './Button';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import Duration from './Duration';

class App extends React.Component {

    timeStyleLeft = {
        paddingLeft: "30px",
        paddingTop: "30px"
    };

    timeStyleRight = {
        paddingTop: "40px"
    }

    durationStyleMiddle = {
        paddingTop: "30px",
        paddingLeft: "30px",
        textAlign: "center"
    }

    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Button />
                </div>
                <div className="ui statistics">
                    <div style={this.timeStyleLeft}>
                        <LoggedIn/>
                    </div>
                    <div className="ui statistics">
                        <div className="statistic" style={this.durationStyleMiddle}>
                            <Duration/>
                        </div>
                    </div>
                    <div style={this.timeStyleLeft}>
                        <LoggedOut/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

