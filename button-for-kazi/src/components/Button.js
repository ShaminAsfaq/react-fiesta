import React from 'react';
import { connect } from 'react-redux';
import { updateTime } from '../actions';


class Button extends React.Component {
    renderButton() {
        
        if(this.props.timeLoggedReducer.signedIn) {
            var obj = this.props.timeLoggedReducer;
            var newObj = {
                signedIn: false
            }


            return (
                <div className="ui vertical labeled icon buttons">
                    <button 
                        className="ui basic button"
                        onClick={() => { this.props.updateTime({ ...obj, ...newObj }) }}
                    >
                        <i className='pause icon'></i>
                            Signed In successfully!
                    </button>
                </div>
            );
        } else {
            obj = this.props.timeLoggedReducer;
            newObj = {
                signedIn: true
            }

            return (
                <div className="ui vertical labeled icon buttons">
                    <button 
                        className="ui basic button"
                        onClick={() => { this.props.updateTime({ ...obj, ...newObj }) }}
                    >
                        <i className='play icon'></i>
                            Click to Sign In!
                    </button>
                </div>
            );
        }
    }

    componentDidMount() {
        this.props.updateTime({ signedIn: false })
    }


    render() {
        // console.log(this.props)
        return <div>{this.renderButton()}</div>
    }
};

const mapStateToProps = (state) => {
    // console.log(state)
    return state;
}

export default connect(mapStateToProps, {
    updateTime: updateTime
})(Button);




