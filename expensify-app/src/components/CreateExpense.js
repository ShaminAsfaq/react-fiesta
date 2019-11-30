import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

class CreateExpense extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense))
        this.props.onSubmit(expense)
        this.props.history.push('/')
    };

    render() {
        return (
            <div>
                <h1>Create Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (expense) => {
            return (
                dispatch(addExpense(expense))
            );
        }
    }
}

var ConnectedCreateExpense = connect(undefined, mapDispatchToProps)(CreateExpense)

export { 
    ConnectedCreateExpense as default,
    CreateExpense
}



