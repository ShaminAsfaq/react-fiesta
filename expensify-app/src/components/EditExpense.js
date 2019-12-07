import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

class EditExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/')
    };
    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <ExpenseForm 
                    expense = {this.props.expense}
                    onSubmit = {this.onSubmit}
                />
                <button 
                    onClick={this.onRemove}
                >
                    Remove
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id, expense) => {
            return (
                dispatch(editExpense(id, expense))
            )
        },
        removeExpense: (data) => {
            return (
                dispatch(removeExpense(data))
            )
        }
    }
}

const ConnectedEditExpense = connect(mapStateToProps, mapDispatchToProps)(EditExpense);

export {
    ConnectedEditExpense as default,
    EditExpense
}
