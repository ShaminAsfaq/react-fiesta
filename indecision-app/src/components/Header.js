import React from 'react';

// Stateless Functional Component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {
                props.subtitle &&
                <h2>{props.subtitle}</h2>
            }
        </div>
    );
};

//  Default Props for Header
Header.defaultProps = {
    title: 'Indecision App (Default Title)'
};

export {
    Header as default
};

