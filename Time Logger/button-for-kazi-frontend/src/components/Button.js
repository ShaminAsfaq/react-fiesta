import React from 'react';
import { connect } from 'react-redux';
import { signedInAction, signedOutAction } from '../actions';


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
                        onClick={() => { 
                            this.props.updateTime({ ...obj, ...newObj })
                        }}
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
                        onClick={() => { 
                            this.props.updateTime({ ...obj, ...newObj })
                        }}
                    >
                        <i className='play icon'></i>
                            Click to Sign In!
                    </button>
                </div>
            );
        }
    }

    modifiedRenderButton() {
        if(!this.props.timeLoggedReducer.signedIn) {
            var obj = {
                signedIn: true,
                time: new Date()
            }

            return (
                <div className="ui vertical labeled icon buttons">
                    <button
                        className="ui basic button"
                        onClick={() => {
                            this.props.signedInAction(obj)
                        }}
                    >
                        <i className='play icon'></i>
                            Click to sign in!
                    </button>
                </div>
            );
        } else {
            obj = {
                signedIn: false,
                time: new Date()
            }

            return (
                <div className="ui vertical labeled icon buttons">
                    <button
                        className="ui basic button"
                        onClick={() => {
                            this.props.signedOutAction(obj)
                        }}
                    >
                        <i className='pause icon'></i>
                            Signed In successfully!
                    </button>
                </div>
            );
        }
    }

    componentDidMount() {
        this.props.signedOutAction({ signedIn: false })
    }


    render() {
        // console.log(this.props)
        return <div>{this.modifiedRenderButton()}</div>
    }
};

const mapStateToProps = (state) => {
    // console.log(state)
    return state;
}

export default connect(mapStateToProps, {
    signedInAction,
    signedOutAction
})(Button);




