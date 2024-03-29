import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <h1>
                EXPENSIFY
            </h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br/>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink><br/>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink><br/>
        </header>
    );
}

export {
    Header as default
}

