import React from 'react';

const PortfolioItem = (props) => {
    return (
        <div>
            <h1>A thing of beauty is a joy forever.</h1>
            <p>Item ID: {props.match.params.id}</p>
        </div>
    );
}

export {
    PortfolioItem as default
}

