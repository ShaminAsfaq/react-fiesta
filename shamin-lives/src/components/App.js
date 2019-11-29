import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Clock from './Clock';

import Chronicle from './Chronicle';
import Home from './Home';

const Menu = () => {
    return(
        <div className="ui top fixed secondary pointing menu" style={{ backgroundColor: 'white' }}>
            <NavLink to="/" exact={true} className="item">
                Home
            </NavLink>
            <NavLink to="/new" className="item">
                Create
            </NavLink>
            <div className="right menu">
                <div className="ui item">
                <Clock />
                </div>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Menu />
                <Switch>
                    <Route path='/' component={Home} exact={true}/>
                    <Route path='/create' component={Chronicle}/>
                    <Route component={() => (<div>404 - <Link to="/">Go Home</Link></div>)}/>
                </Switch>
             </div>
        </BrowserRouter>
    );
}

export {
    App as default
}
