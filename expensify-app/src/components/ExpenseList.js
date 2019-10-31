import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Easy to IDENTIFY</h1>
            {props.expenses.map((item) => {
                return (
                    <ExpenseListItem key={item.id} {...item}/>
                );
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export {
    ConnectedExpenseList as default
}

