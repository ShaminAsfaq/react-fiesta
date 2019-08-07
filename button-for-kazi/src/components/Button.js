import React from 'react';
import { connect } from 'react-redux';

const toggle = (buttonText, icon) => {
    console.log(buttonText, icon)
    // if(buttonText===null) {
    //     buttonText: 'Click to Sign In';
    //     icon: 'play icon';
    // } else {
    //     buttonText: 'Signed In! Click again to Sign Out.';
    //     icon: 'pause icon';
    // }
    // return;
}

const Button = ({ buttonText=null, icon }) => {
    if(!buttonText) {
        return (
            <div className="ui vertical labeled icon buttons">
                <button 
                    className="ui basic button"
                    onClick={() => { toggle(buttonText, icon) }}
                >
                    <i className={ icon }></i>
                    { buttonText }
                    {/* Click to Sign In */}
                </button>
            </div>
        );
    }
    return (
        <div className="ui vertical labeled icon buttons">
            <button 
                className="ui basic button"
                onClick={() => { toggle(buttonText, icon) }}
            >
                <i className={ icon }></i>
                { buttonText }
                {/* Signed In! Click again to Sign Out. */}
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        buttonText: state.buttonText,
        icon: state.icon
        // pressingTime: state.pressingTime
    };
}

export default connect(mapStateToProps, {
    toggle: toggle
})(Button);




