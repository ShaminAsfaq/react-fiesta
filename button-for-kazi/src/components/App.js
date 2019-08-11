import React from 'react';
import Button from './Button';
import Clock from './Clock';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

class App extends React.Component {

    timeStyleLeft = {
        paddingLeft: "30px",
        paddingTop: "30px"
    };

    timeStyleRight = {
        paddingTop: "30px"
    }

    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Button />
                </div>
                <div className="ui statistics">
                    <div className="statistic" style={this.timeStyleLeft}>
                        <LoggedIn/>
                    </div>
                    <div className="statistic" style={this.timeStyleLeft}>
                        <LoggedOut/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

