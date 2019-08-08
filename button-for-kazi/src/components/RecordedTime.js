import React from 'react'
import { connect } from 'react-redux';

const RecordTime = ({ loggedTime }) => {
    if(!loggedTime) {
        return (
            <div className="ui statistic">
                <div className="value">
                    { loggedTime }
                </div>
                <div className="label">
                    Signed In!
                </div>
            </div>
        );
    } else {
        return (
            <div className="ui statistic">
                <div className="value">
                    { loggedTime }
                </div>
                <div className="label">
                    Signed Out!
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedTime: state.loggedTime
    };
}

export default connect(mapStateToProps)(RecordTime);

