import React from 'react';

class Button extends React.Component {

    printHello = () => {
        console.log('Hello there!');
    }

    render() {
        return (
            // <div className="ui vertical labeled icon buttons">
            //       <button onClick={this.printHello} className="ui toggle button">
            //         <i className='pause icon'></i>
            //         Pause
            //     </button>
            // </div>
            <div>
                <button className="ui button">One</button>
                <button className="ui button">Two</button>
            </div>
        );
    }
}

export default Button;
