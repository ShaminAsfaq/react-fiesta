import React from 'react';
import Button from './Button';
import Clock from './Clock';

class App extends React.Component {

    render() {
        return (
            <div className="ui statistics">
                <div className="statistic">
                    <div className="">
                        <Button/>
                    </div>
                </div>,
                <div className="statistic">
                    <div className="">
                        <Clock/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

