import React from 'react';

// Stateless Functional Component
const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1
                    className="header__title"
                >
                    {props.title}
                </h1>
                {
                    props.subtitle &&
                    <h2
                        className="header__subtitle"
                    >
                        {props.subtitle
                    }</h2>
                }
            </div>
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

