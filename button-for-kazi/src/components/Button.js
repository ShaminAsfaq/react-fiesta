import React from 'react';

class Button extends React.Component {
    state = this.props.buttonState[0].state;

    componentDidMount() {
        this.setState({
            buttonText: 'Click to Sign In!',
            icon: 'play icon'
        });
        const func = this.props.buttonState[1]
    }

    changeStatus = () => {
        const time = new Date();
        const timeStamp = time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()        
        
        console.log(timeStamp)

        const stateObj = this.state;
        if(stateObj.icon==="play icon") {
            console.log('EINE ASI')
            this.setState({
                buttonText: 'Signed In! Click again to Sign Out.',
                icon: 'pause icon',
                signedIn: `${timeStamp}`
            });
        }else {
            console.log('jani na kisui ami -------------')
            this.setState({
                buttonText: 'Click to Sign In!',
                icon: 'play icon',
                signedOut: `${timeStamp}`
            });
        }
    }

    render() {
        const response = this.state.buttonText;
        const icon = this.state.icon;

        return (
            <div className="ui vertical labeled icon buttons">
                <button onClick={this.changeStatus} className="ui basic button">
                    <i className={icon}></i>
                    {response}
                </button>
            </div>
        );
    }
}

export default Button;
