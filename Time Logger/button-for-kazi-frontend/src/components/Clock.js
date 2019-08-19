import React from 'react';
import AnalogClock from 'analog-clock-react';

class Clock extends React.Component {
    options = {
        "width": "150px",
        "border": false,
        "borderColor": "#18F8DD",
        "baseColor": "#3C3C3C",
        "centerColor": "#DC8DBB",
        "handColors": {
          "second": "#F5F5F5",
          "minute": "#050505",
          "hour": "#696969"
        }
    }

    render() {
        return(
            <div>
                <AnalogClock {...this.options}/>
            </div>
        );
    }
}

export default Clock;