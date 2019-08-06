import React from 'react';

class Button extends React.Component {

    printHello = () => {
        console.log('Hello there!');
        this.iconString = 'play icon';        
    }

    render() {
        return (
            <div className="ui vertical labeled icon buttons">
                  <button onClick={this.printHello} className="ui button">
                    <i className='pause icon'></i>
                    Pause
                </button>
            </div>
        );
    }
}

export default Button;
