import React from 'react';
import { Link } from 'react-router-dom';


const Portfolio = (props) => {
    return (
        <div>
            <h1>List of Links</h1>
            <p>Are they right?</p>
            <Link to="/portfolio/1">Item One</Link>
            <Link to="/portfolio/2">Item Two</Link>
        </div>
    );
}

export {
    Portfolio as default
}

