import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashBoard from '../components/ExpenseDashBoard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import HelpExpense from '../components/HelpExpense';
import _404 from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={ExpenseDashBoard} exact={true}/>
                    <Route path="/create" component={CreateExpense}/>
                    <Route path="/edit/:id" component={EditExpense}/>
                    <Route path="/help" component={HelpExpense}/>
                    <Route component={_404}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export {
    AppRouter as default
}



