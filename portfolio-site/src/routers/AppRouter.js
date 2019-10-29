import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import _404 from '../components/NotFound';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Contact from '../components/Contact';
import PortfolioItem from '../components/PortfolioItem';
import Portfolio from '../components/Portfolio';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={HomePage} exact={true}/>
                    <Route path="/contact" component={Contact} />
                    <Route path="/portfolio" component={Portfolio} exact={true}/>
                    <Route path="/portfolio/:id" component={PortfolioItem}/>
                    <Route component={_404}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export {
    AppRouter as default
}



