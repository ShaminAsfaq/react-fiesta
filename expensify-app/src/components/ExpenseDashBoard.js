import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoard = () => {
    return (
        <div>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>
    );
}

export {
    ExpenseDashBoard as default
}
