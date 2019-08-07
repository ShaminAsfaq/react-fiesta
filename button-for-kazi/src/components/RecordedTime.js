import React from 'react'

class RecordTime extends React.Component {
    state = this.props.signedIn
    
    componentDidMount() {
    }


    render() {
        console.log(this.state)
        return (
            <div className="ui statistic">
                <div className="value">
                    08:53 AM
                </div>
                <div className="label">
                    Signed In!
                </div>
            </div>
        );
    }
}

export default RecordTime;

