import React from 'react'
import { connect } from 'react-redux';

// class RecordTime extends React.Component {
//     state = this.props.signedIn
    
//     componentDidMount() {
//     }


//     render() {
//         console.log(this.state)
//         return (
//             <div className="ui statistic">
//                 <div className="value">
//                     08:53 AM
//                 </div>
//                 <div className="label">
//                     Signed In!
//                 </div>
//             </div>
//         );
//     }
// }

// export default RecordTime;

const RecordTime = ({ pressingTime }) => {
    if(!pressingTime) {
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
    } else {
        return (
            <div className="ui statistic">
                <div className="value">
                    { pressingTime }
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
        pressingTime: state.pressingTime
    };
}

export default connect(mapStateToProps)(RecordTime);

