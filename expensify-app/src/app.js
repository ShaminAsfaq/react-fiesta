import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

import './firebase/firebase';

const foundStore = configureStore();

// foundStore.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
// foundStore.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
// foundStore.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = foundStore.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={foundStore}>
        <AppRouter/>
    </Provider>
);

// console.log(foundStore.getState());

ReactDOM.render(jsx, document.getElementById('app'));

