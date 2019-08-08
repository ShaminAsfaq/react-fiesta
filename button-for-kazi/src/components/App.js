import React from 'react';
import Button from './Button';
import Clock from './Clock';
import RecordTime from './RecordedTime';

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
                        <RecordTime />
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

