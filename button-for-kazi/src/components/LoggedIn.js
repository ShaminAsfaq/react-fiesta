import React from 'react'
import { connect } from 'react-redux';

class LoggedIn extends React.Component {

    renderTime() {
            var signedInTime = this.props.signedInLogged
            var hour, minute, second, status

            if(signedInTime===undefined) {
                hour = '00'
                minute = '00'
                second = '00'
                status = ''
            }else {
                hour = signedInTime.getHours()
                if(String(hour).length===1) {
                    hour = '0' + hour
                }

                minute = signedInTime.getMinutes()
                if(String(minute).length===1){
                    minute = '0' + minute
                }

                second = signedInTime.getSeconds()                
                if(String(second).length===1){
                    second = '0' + second
                }

                status = 'Signed In!'
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
        console.log(this.props)

        return (
            this.renderTime()
        );        
    }
}

const mapStateToProps = (state) => {
    return state.timeLoggedReducer;
}

export default connect(mapStateToProps)(LoggedIn);

