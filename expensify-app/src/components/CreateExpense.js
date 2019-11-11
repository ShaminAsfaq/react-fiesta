import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const CreateExpense = (props) => {
    return (
        <div>
            <h1>Create Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense))
                    props.history.push('/')
                }}
            />
        </div>
    );
}

var ConnectedCreateExpense = connect()(CreateExpense)

export { 
    ConnectedCreateExpense as default
}



