import React from 'react';
import { Link } from 'react-router-dom';

const _404 = () => {
    return (
        <div>
            You are in the 404! - <Link to="/">Go Home!</Link>
        </div>
    );
}

export {
    _404 as default
}

