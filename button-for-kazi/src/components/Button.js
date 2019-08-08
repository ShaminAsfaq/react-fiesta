import React from 'react';
import { connect } from 'react-redux';
import { getTime } from '../actions';


class Button extends React.Component {
    renderButton() {
        console.log(this.props)
        return (
            <div className="ui vertical labeled icon buttons">
                <button 
                    className="ui basic button"
                    onClick={() => { this.props.getTime({buttonText: this.props.buttonText, icon: this.props.icon, time: new Date()}) }}
                >
                    <i className={ this.props.icon }></i>
                    {/* { this.props.buttonText } */}
                    Click to Sign In
                </button>
            </div>
        );
    }


    render() {
        console.log(this.props)
        return <div>{this.renderButton()}</div>
    }
};

const mapStateToProps = (state) => {
    return {
        buttonText: state.buttonText,
        icon: state.icon
    };
}

export default connect(mapStateToProps, {
    getTime: getTime
})(Button);




