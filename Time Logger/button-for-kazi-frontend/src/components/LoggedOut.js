import React from 'react'
import { connect } from 'react-redux';

class LoggedOut extends React.Component {

    renderTime() {
            var signedOutTime = this.props.signedOutLogged
            var hour, minute, second, status

            if (signedOutTime===undefined) {
                hour = '00'
                minute = '00'
                second = '00'
                status = ''
            }else {
                hour = signedOutTime.getHours()
                if(String(hour).length===1) {
                    hour = '0' + hour
                }

                minute = signedOutTime.getMinutes()
                if(String(minute).length===1){
                    minute = '0' + minute
                }

                second = signedOutTime.getSeconds()                
                if(String(second).length===1){
                    second = '0' + second
                }

                status = 'Signed Out!' 
<<<<<<< HEAD
                console.log(hour,minute,second)
=======
                // console.log(hour,minute,second)
>>>>>>> 39d56f66782aa896d273ca2572d6c64a8f1537da

                if(signedOutTime < this.props.signedInLogged) {
                    hour = '00'
                    minute = '00'
                    second = '00'
                    status = ''
                }
            }

            return (
                <div className="ui statistic">
                    <div className="value">
                        { hour + ':' + minute + ':' + second }
                    </div>
                    <div className="label">
                        { status }
                    </div>
                </div>
                );
    }

    render() {
        return (
            this.renderTime()
        );        
    }
}

const mapStateToProps = (state) => {
    return state.timeLoggedReducer;
}

export default connect(mapStateToProps)(LoggedOut);

